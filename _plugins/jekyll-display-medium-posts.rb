require 'uri'
require 'net/http'
require 'json'
require 'nokogiri'
require 'feedjira'
require 'liquid'
module Jekyll
  class JekyllDisplayMediumPosts < Generator
    safe true
    priority :high

Feedjira.logger.level = Logger::FATAL
def generate(site)
      jekyll_coll = Jekyll::Collection.new(site, 'medium_posts')
      site.collections['medium_posts'] = jekyll_coll
      uri = URI("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gokulramanaa")
      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(uri)
      response = http.request(request)
      print response
      data = JSON.parse(response.read_body)
      data['items'].each do |item|
        title = item['title']
        path = "./_medium_posts/" + title + ".md"
        path = site.in_source_dir(path)
        doc = Jekyll::Document.new(path, { :site => site, :collection => jekyll_coll })
        doc.data['title'] = title;
        doc.data['image'] = item['thumbnail'];
        doc.data['link'] = item['link'];
        doc.data['date'] = item['pubDate'];
        doc.data['categories'] = item['categories'];
        html_document = Nokogiri::HTML(item['description']);
        doc.data['description'] = html_document.search('p').to_html;
        jekyll_coll.docs << doc
      end
    end
  end
end
