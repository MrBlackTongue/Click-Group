import React, {Component} from "react";
import {Button, Avatar} from 'antd';
import {ArrowRightOutlined, CaretDownOutlined, UserOutlined} from '@ant-design/icons'
import {NavLink} from "react-router-dom";

export default class HeaderEditNpp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // id: '',
        }
    }



    render() {

        let url = window.location.href
        let id = url.match(/\d+$/)[0]
        // this.setState({
        //     id: id
        // })
        // console.log('idHeader', id)

        return (
            <div className='header'>
                <div className="header-nav">
                    <NavLink to='/'>
                        <Button type="primary" className='navigation' ghost><ArrowRightOutlined/>Система Ввода</Button>
                    </NavLink>
                    <NavLink to={`/npp/main/${id}`}>
                        <Button type="primary" className='navigation' ghost>Описание</Button>
                    </NavLink>
                    <NavLink to={`/npp/chapters/${id}`}>
                        <Button type="primary" className='navigation' ghost>Разделы</Button>
                    </NavLink>
                    <NavLink to={`/npp/fields/${id}`}>
                        <Button type="primary" className='navigation' ghost>Код. Карта</Button>
                    </NavLink>
                    <NavLink to={`/npp/anomal/${id}`}>
                        <Button type="primary" className='navigation' ghost>Аномальное событие</Button>
                    </NavLink>
                    <NavLink to={`/npp/files/${id}`}>
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
