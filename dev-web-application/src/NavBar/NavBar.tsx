import { FacebookFilled, InstagramFilled, WhatsAppOutlined } from '@ant-design/icons';
import { Button, Col, Menu, Row, Space } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './NavBar.css';

type propTypes = {};

type stateTypes = {};


class NavBar extends React.Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {
            abc: 'zyd',
        };
    }


    render(): React.ReactNode {
       return(
        <React.Fragment>
            <Row className='nav-bar-div'>
                <Col span={6}>
                    <Menu
                    theme='dark'
                    mode='horizontal'            
                    >
                        <Menu.Item> <Link to="/">HOME</Link></Menu.Item>
                        <Menu.Item> <Link to="/code">CODING</Link></Menu.Item>
                        <Menu.Item> <Link to="/tech">TECH</Link></Menu.Item>
                        <Menu.Item> <Link to="/blogs">BLOG</Link></Menu.Item>
                        <Menu.Item> <Link to="/about">ABOUT</Link></Menu.Item>
                    </Menu>
                </Col>
                <Col span={14} className="header-title">
                    <Link to="/">ONE HEART <span className="heart">♥️</span> </Link>
                </Col>
                <Col span={4}>
                    <Menu
                    theme='dark'
                    mode='horizontal'
                    >
                        <Menu.Item icon={<FacebookFilled />} /> 
                        <Menu.Item icon={<InstagramFilled />} /> 
                        <Menu.Item icon={<WhatsAppOutlined />} /> 
                    </Menu>
                </Col>
            </Row>
        </React.Fragment>
        //    <div className='nav-bar-div'>
        //        <Row>
        //            <Col span={10}>
        //                <Space className='nav-bar-button'>
        //                    <Link to="/">HOME</Link>
        //                    <Link to="/tech">TECH</Link>
        //                    <Link to="/code">CODING</Link>
        //                    <Link to="/blogs">BLOG</Link>
        //                    <Link to="/about">ABOUT</Link>
        //                </Space>
        //            </Col>
        //            <Col span={8}>
        //                <span className='header-title'>ONE HEART</span>
        //            </Col>
        //            <Col span={6}>
        //                <Space>
        //                    <span>FB</span>
        //                    <span>INSTA</span>
        //                    <span>WHATSAPP</span>
        //                    <span>MAIL</span>
        //                </Space>
        //            </Col>
        //        </Row>
        //        {/* <Outlet /> */}
        //    </div>

       );
    }
}

export default NavBar;
