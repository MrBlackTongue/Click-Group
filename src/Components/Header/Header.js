import React, {Component} from "react";
import {UserOutlined, CaretDownOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';
import {Button, Avatar, DatePicker, Space} from 'antd';
import SearchPanel from "../SearchPanel/SearchPanel";
import Logo from "../Logo/Logo";
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'moment/locale/ru';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.dataParentToChild,
            pageNum: 1,
            pageSize: 10,
            total: '',
            plantsFilter: '',
        }
    }

    updateData = (value) => {
        this.setState({
            data: value
        })
        this.props.updateData(this.state.data)
    }

    updateTotal = (value) => {
        this.setState({
            total: value,
        })
        this.props.updateTotal(this.state.total)
    }

    updatePageNum = (value) => {
        this.setState({
            pageNum: value,
        })
        this.props.updatePageNum(this.state.pageNum)
    }

    updatePageSize = (value) => {
        this.setState({
            pageSize: value,
        })
        this.props.updatePageSize(this.state.pageSize)
    }

    updateValue = (value) => {
        this.props.updateValue(value)
    }

    render() {
        console.log('props', this.props.updatePlantsFilter)
        return (
            <div className='header'>
                <div className="site-page-header">
                    <Logo/>
                    {/*<Button type="primary" ghost>Система Ввода</Button>*/}
                    <div className='search-panel'>
                        <SearchPanel
                            updateData={this.updateData}
                            updateTotal={this.updateTotal}
                            updatePageNum={this.updatePageNum}
                            updatePageSize={this.updatePageSize}
                            updateValue={this.updateValue}
                            updatePlantsFilter={this.props.updatePlantsFilter}
                            updateTasksFilter={this.props.updateTasksFilter}
                        />
                    </div>
                    {/*<div className='date'>*/}
                    {/*    <Space direction="horizontal">*/}
                    {/*        <DatePicker locale={locale} onChange={''} placeholder='Выберите месяц' className='data-picker'/>*/}
                    {/*        <DatePicker locale={locale} onChange={''} placeholder='Выберите месяц' className='data-picker'/>*/}
                    {/*    </Space>*/}
                    {/*</div>*/}
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