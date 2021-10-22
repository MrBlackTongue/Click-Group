import React, {Component} from "react";
import {Button, Avatar, Radio} from 'antd';
import {ArrowLeftOutlined, CaretDownOutlined, FileOutlined, UserOutlined} from '@ant-design/icons'
import {NavLink} from "react-router-dom";
import Logo from "../Logo/Logo";

export default class HeaderEditNpp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            report_id: [],
            page: 'enter',

        }
    }

    componentDidMount() {
        let url = window.location.href
        let id = url.match(/\d+$/)[0]
        this.setState({
            id: id
        })

        fetch(`http://185.246.64.43:8080/input/rest/npp_main/${id}`)

            .then(response => response.json())
            .then(response => {
                this.setState({
                    report_id: response.main.report_id,
                })
            })

        if (url.indexOf('main') !== -1) {
            this.setState({
                page: 'main'
            })

        } else if (url.indexOf('chapters') !== -1) {
            this.setState({
                page: 'chapters'
            })
            // } else if (url.indexOf('fields') !== -1) {
            //     this.setState({
            //         page: 'fields'
            //     })
            // } else if (url.indexOf('anomal') !== -1) {
            //     this.setState({
            //         page: 'fields'
            //     })
            // } else if (url.indexOf('files') !== -1) {
            //     this.setState({
            //         page: 'files'
            //     })
        }
    }


    render() {
        const {page} = this.state

        return (
            <div>
                <div className='header'>
                    <div className="header-nav">
                        <div className='logo'>
                            <a href='/'>
                                <Logo/>
                            </a>
                        </div>
                        <Radio.Group value={page} onChange={this.state.page} size='large'>
                            <Radio.Button value='enter'>
                                <NavLink to='/'>
                                    <ArrowLeftOutlined/> Система
                                    Ввода
                                </NavLink>
                            </Radio.Button>

                            <Radio.Button value='main'>
                                <NavLink to={`/npp/main/${this.state.id}`}>
                                    Описание
                                </NavLink>
                            </Radio.Button>

                            <Radio.Button value='chapters'>
                                <NavLink to={`/npp/chapters/${this.state.id}`}>
                                    Разделы
                                </NavLink>
                            </Radio.Button>

                            <Radio.Button value='fields'>
                                <NavLink to={`/npp/fields/${this.state.id}`}>
                                    Код. Карта
                                </NavLink>
                            </Radio.Button>

                            <Radio.Button value='anomal'>
                                <NavLink to={`/npp/anomal/${this.state.id}`}>
                                    Аномальное событие
                                </NavLink>
                            </Radio.Button>

                            <Radio.Button value='files'>
                                <NavLink to={`/npp/files/${this.state.id}`}>
                                    Файлы
                                </NavLink>
                            </Radio.Button>
                        </Radio.Group>
                    </div>

                    <div className='btn-avatar'>
                        <Avatar size={30} icon={<UserOutlined/>}/>
                        <span className='btn-avatar-name'> find <CaretDownOutlined/></span>
                        {/*<CaretDownOutlined/>*/}
                    </div>
                </div>
                <div className='edit'>
                    <div className='edit-sh'><FileOutlined style={{fontSize: '25px', color: '#08c'}}/> Редактирование
                        отчета
                        о нарушении
                    </div>
                    <div className='edit-sh-name'>Отчет {this.state.report_id}</div>
                </div>
            </div>


        )
    }
}
