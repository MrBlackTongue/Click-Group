import React, {Component} from "react";
import {Space, Table, Button} from 'antd';
import {FormOutlined, RetweetOutlined, ArrowUpOutlined, DeleteOutlined, PlusOutlined} from '@ant-design/icons'


import 'antd/dist/antd.css';


const columns = [
    {
        title: '#',
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
                <Button type="primary" size="small" shape="circle" ghost><FormOutlined/></Button>
                <Button type="primary" size="small" shape="circle" ghost><RetweetOutlined/></Button>
                <Button type="primary" size="small" shape="circle" ghost><ArrowUpOutlined/></Button>
                <Button type="primary" size="small" shape="circle" ghost><DeleteOutlined/></Button>
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
    state = {
        bottom: 'bottomCenter',
    }

    render() {
        return (
            <div className='content'>

                <div className='bottoms-add'>
                    <Button type="primary" danger className="button-red" ghost size="large">
                        <PlusOutlined/>
                        &nbsp;Добавить Нарушение
                    </Button>
                    {/*<div className='div-br'/>*/}
                    <Button type="primary" danger className="button-orange" ghost size="large">
                        <PlusOutlined/>
                        &nbsp;Добавить Отклонение
                    </Button>
                </div>

                <Table className='table' bordered columns={columns} dataSource={data}
                       pagination={{position: [this.state.bottom]}}/>
            </div>
        )
    }
}