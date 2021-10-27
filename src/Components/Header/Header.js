import React, {Component} from "react";
import {UserOutlined, CaretDownOutlined, BellOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';
import {Button, Avatar, DatePicker, Space, Menu, Dropdown,} from 'antd';
import SearchPanel from "../SearchPanel/SearchPanel";
import Logo from "../Logo/Logo";
import png from '../../image/rosenergoatom_.png'

const violations = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Поиск документов
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Поручения
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Статистика по документам
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Дефекты
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Нарушения
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Отклонения
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                СНУ
            </a>
        </Menu.Item>
    </Menu>
);

const deviations = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Обстановка на АЭС
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Технологическая обстановка
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                WEB ОИС
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Корр. меры: ОКМ
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Кристализация знанний. Поис оборудования
            </a>
        </Menu.Item>
    </Menu>
);

const ObAnal = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Нарушение в работе АЭС
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Отказы и повреждения оборудования АЭС
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Отклонения на АЭС
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                События низкого уровня
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                События низкого уровня (по АЭС)
            </a>
        </Menu.Item>

    </Menu>
);

const Pokaz = (
    <Menu>

    </Menu>
);

const TOiR = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Ремонты - Показатели
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Ремонты - УОЭ
            </a>
        </Menu.Item>
    </Menu>
);

const other = (
    <Menu>

    </Menu>
);

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
        // console.log('props', this.props.updatePlantsFilter)
        return (
            <div>
                <div className='header'>
                    <div className="site-page-header">
                        <div className='logo'>
                            <a href='/'>
                                <Logo/>

                            </a>
                        </div>
                        <div>
                            <h2>УПРАВЛЕНИЕ НЕСООТВЕТСТВИЯМИ НД</h2>
                            {/*<img src={png} className='img-anal'/>*/}
                        </div>


                        {/*<Button type="primary" ghost>Система Ввода</Button>*/}
                        {/*<div className='search-panel'>*/}
                        {/*    <SearchPanel*/}
                        {/*        updateData={this.updateData}*/}
                        {/*        updateTotal={this.updateTotal}*/}
                        {/*        updatePageNum={this.updatePageNum}*/}
                        {/*        updatePageSize={this.updatePageSize}*/}
                        {/*        updateValue={this.updateValue}*/}
                        {/*        updatePlantsFilter={this.props.updatePlantsFilter}*/}
                        {/*        updateTasksFilter={this.props.updateTasksFilter}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        {/*<div className='date'>*/}
                        {/*    <Space direction="horizontal">*/}
                        {/*        <DatePicker locale={locale} onChange={''} placeholder='Выберите месяц' className='data-picker'/>*/}
                        {/*        <DatePicker locale={locale} onChange={''} placeholder='Выберите месяц' className='data-picker'/>*/}
                        {/*    </Space>*/}
                        {/*</div>*/}

                    </div>
                    <div className='btn-avatar'>
                        <BellOutlined style={{ fontSize: '20px' }}/> &nbsp;
                        <Avatar size={30} icon={<UserOutlined/>}/>
                        <span className='btn-avatar-name'> Дмитрий Иванов <CaretDownOutlined/></span>
                        {/*<CaretDownOutlined/>*/}
                    </div>
                </div>
                {/*<div className='menu'>*/}
                {/*    <Space direction="vertical">*/}
                {/*        <Space wrap>*/}
                {/*            <Dropdown overlay={violations} placement="bottomLeft" arrow>*/}
                {/*                <Button className='btn-menu'>Нарушения</Button>*/}
                {/*            </Dropdown>*/}
                {/*            <Dropdown overlay={deviations} placement="bottomCenter" arrow>*/}
                {/*                <Button className='btn-menu'>Отклонения</Button>*/}
                {/*            </Dropdown>*/}
                {/*            <Dropdown overlay={TOiR} placement="bottomRight" arrow>*/}
                {/*                <Button className='btn-menu'>ТОиР</Button>*/}
                {/*            </Dropdown>*/}
                {/*        </Space>*/}
                {/*    </Space>*/}
                {/*</div>*/}
            </div>
        )
    }
}