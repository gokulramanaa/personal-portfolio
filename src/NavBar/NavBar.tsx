import { Button, Col, Row, Space } from 'antd';
import * as React from 'react';
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
           <div className='nav-bar-div'>
               <Row>
                   <Col span={10}>
                       <Space className='nav-bar-button'>
                           <Button type='text'>BLOG</Button>
                           <Button type='text'>TECH</Button>
                           <Button type='text'>CODING</Button>
                           <Button type='text'>ABOUT</Button>
                       </Space>
                   </Col>
                   <Col span={8}>
                       <span className='header-title'>ONE HEART</span>
                   </Col>
                   <Col span={6}>
                       <Space>
                           <span>FB</span>
                           <span>INSTA</span>
                           <span>WHATSAPP</span>
                           <span>MAIL</span>
                       </Space>
                   </Col>
               </Row>
           </div>
       );
    }
}

export default NavBar;
