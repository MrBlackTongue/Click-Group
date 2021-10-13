import React, {Component} from "react";
import {Button, Avatar} from 'antd';
import {ArrowRightOutlined, CaretDownOutlined, UserOutlined} from '@ant-design/icons'
import {NavLink} from "react-router-dom";

export default class HeaderEdit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header'>
                <div className="header-nav">
                    <NavLink to='/'>
                        <Button type="primary" className='navigation' ghost><ArrowRightOutlined/>Система Ввода</Button>
                    </NavLink>
                    <NavLink to='/sh/main'>
                        <Button type="primary" className='navigation' ghost>Описание</Button>
                    </NavLink>
                    <NavLink to='/sh/chapters'>
                        <Button type="primary" className='navigation' ghost>Разделы</Button>
                    </NavLink>
                    <NavLink to='/sh/chapters'>
                        <Button type="primary" className='navigation' ghost>Код. Карта</Button>
                    </NavLink>
                    <NavLink to='/sh/chapters'>
                        <Button type="primary" className='navigation' ghost>Аномальное событие</Button>
                    </NavLink>
                    <NavLink to='/sh/chapters'>
                        <Button type="primary" className='navigation' ghost>Файлы</Button>
                    </NavLink>
                    <Button type="primary" ghost className='btn-avatar'>
                        <Avatar size={20} icon={<UserOutlined/>}/>
                        &nbsp; find
                        <CaretDownOutlined/>
                    </Button>
                </div>
            </div>

        )
    }
}
