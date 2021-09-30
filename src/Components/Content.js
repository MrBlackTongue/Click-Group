import React, {Component} from "react";
import {Space, Table, Input} from 'antd';
import {FormOutlined, RetweetOutlined, ArrowUpOutlined, DeleteOutlined} from '@ant-design/icons'

import 'antd/dist/antd.css';


const {Search} = Input;
const onSearch = value => console.log(value); //todo: убрать результат поиска из консоли


const columns = [
    {
        title: '',
        // width: 100,
        dataIndex: 'number',
        key: '0',
        fixed: 'left',
        render: () => <a>{3082}</a>,
    },
    {
        title: 'Название',
        width: 600,
        dataIndex: 'name',
        key: '1',
        fixed: 'left',
    },
    {
        title: 'Дата загрузки',
        dataIndex: 'dateAdd',
        key: '2',
        // width: 150,
    },
    {
        title: 'Владелец',
        dataIndex: 'owner',
        key: '3',
        // width: 150,
    },
    {
        title: 'Задание',
        dataIndex: 'address',
        key: '4',
        // width: 150,
    },
    {
        title: 'Управление',
        key: '5',
        fixed: 'right',
        width: 100,
        render: () => (
            <Space>
                <button className='button-edit'><FormOutlined /></button>
                <button className='button-repeat'><RetweetOutlined/></button>
                <button className='button-send'><ArrowUpOutlined/></button>
                <button className='button-delete'><DeleteOutlined/></button>
            </Space>
        )


    },
];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        number: `308${i}`,
        name: `Edrward ${i}`,
        owner: `SvetLana ${i}`,
        dateAdd: `${new Date}`,
        address: `Отклонения (Ввод) ${i}`,
    });
}

export default class Content extends Component {

    render() {
        return (
            <div className='content'>
                <br/>
                <Search onSubmit={this.submitHandler} placeholder="Введите название документа..." allowClear />
                <br/>
                <Table className='table' bordered columns={columns} dataSource={data}/>
            </div>
        )
    }
}