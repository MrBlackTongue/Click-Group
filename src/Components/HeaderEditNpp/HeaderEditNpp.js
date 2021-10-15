import React, {Component} from "react";
import {Button, Avatar} from 'antd';
import {ArrowRightOutlined, CaretDownOutlined, FileOutlined, UserOutlined} from '@ant-design/icons'
import {NavLink} from "react-router-dom";

export default class HeaderEditNpp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            report_id: [],
        }
    }

    async componentDidMount() {
        let url = window.location.href
        let id = url.match(/\d+$/)[0]
        this.setState({
            id: id
        })

        await fetch(`http://185.246.64.43:8080/input/rest/npp_main/${id}`)

            .then(response => response.json())
            .then(response => {
                this.setState({
                    report_id: response.main.report_id,
                })
            })
    }


    render() {

        return (
            <div className='header'>
                <div className="header-nav">
                    <NavLink to='/'>
                        <Button type="primary" className='navigation' ghost><ArrowRightOutlined/>Система Ввода</Button>
                    </NavLink>
                    <NavLink to={`/npp/main/${this.state.id}`}>
                        <Button type="primary" className='navigation' ghost>Описание</Button>
                    </NavLink>
                    <NavLink to={`/npp/chapters/${this.state.id}`}>
                        <Button type="primary" className='navigation' ghost>Разделы</Button>
                    </NavLink>
                    <NavLink to={`/npp/fields/${this.state.id}`}>
                        <Button type="primary" className='navigation' ghost>Код. Карта</Button>
                    </NavLink>
                    <NavLink to={`/npp/anomal/${this.state.id}`}>
                        <Button type="primary" className='navigation' ghost>Аномальное событие</Button>
                    </NavLink>
                    <NavLink to={`/npp/files/${this.state.id}`}>
                        <Button type="primary" className='navigation' ghost>Файлы</Button>
                    </NavLink>
                    <Button type="primary" ghost className='btn-avatar'>
                        <Avatar size={20} icon={<UserOutlined/>}/>
                        &nbsp; find
                        <CaretDownOutlined/>
                    </Button>
                </div>
                <div className='edit-sh'><FileOutlined style={{ fontSize: '25px', color: '#08c' }} /> Редактирование отчета о нарушении</div>
                <div className='edit-sh-name'>Отчет {this.state.report_id}</div>
            </div>

        )
    }
}
