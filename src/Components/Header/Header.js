import React, {Component} from "react";
import {ArrowRightOutlined, UserOutlined, CaretDownOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';
import {Button, Avatar, DatePicker, Space} from 'antd';
import SearchPanel from "../SearchPanel/SearchPanel";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.dataParentToChild,
        }
    }

    updateData = (value) => {
        this.setState({
            data: value
        })
        this.props.updateData(this.state.data)

        // console.log('valueHeader', this.state.data)
    }


    render() {
        return (
            <div className='header'>
                <div className="site-page-header">
                    <Button type="primary" className='svg' ghost><ArrowRightOutlined/>Система Ввода</Button>
                    <div className='search-panel'>
                        <SearchPanel updateData={this.updateData}/>
                    </div>
                    <div className='date'>
                        <Space direction="horizontal">
                            <DatePicker onChange={''} placeholder='Выберите месяц' className='data-picker'/>
                            <DatePicker onChange={''} placeholder='Выберите месяц' className='data-picker'/>
                        </Space>
                    </div>
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