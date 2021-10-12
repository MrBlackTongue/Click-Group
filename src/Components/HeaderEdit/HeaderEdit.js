import React, {Component} from "react";
import {Tree, Collapse, Button, Space, DatePicker, Avatar} from 'antd';
import {ArrowRightOutlined, CaretDownOutlined, CaretRightOutlined, UserOutlined} from '@ant-design/icons'
// import SearchPanel from "../Components/SearchPanel/SearchPanel";


export default class HeaderEdit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header'>
                <div className="site-page-header">
                    <Button type="primary" className='svg' ghost><ArrowRightOutlined/>Система Ввода</Button>
                    {/*<div className='search-panel'>*/}
                    {/*    <SearchPanel updateData={this.updateData}/>*/}
                    {/*</div>*/}
                    {/*<div className='date'>*/}
                    {/*    <Space direction="horizontal">*/}
                    {/*        <DatePicker onChange={''} placeholder='Выберите месяц' className='data-picker'/>*/}
                    {/*        <DatePicker onChange={''} placeholder='Выберите месяц' className='data-picker'/>*/}
                    {/*    </Space>*/}
                    {/*</div>*/}
                    <Button type="primary" ghost>
                        <Avatar size={20} icon={<UserOutlined/>}/>
                        &nbsp; find
                        <CaretDownOutlined/>
                    </Button>
                </div>
            </div>

        )
    }
}
