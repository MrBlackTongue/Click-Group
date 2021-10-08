import React, {Component} from "react";
import {Space, Table, Button} from 'antd';
import {FormOutlined, RetweetOutlined, ArrowUpOutlined, DeleteOutlined, PlusOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';
import axios from "axios";


export default class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bottom: 'bottomCenter',
            data: [],
            loading: false,
        }

    }

    async getResponseData() {
        const res = await axios.get('http://185.246.64.43:8080/input/rest/listByFilter?&plant_codes=&tasks=&date1=&date2=&pageNum=1&pageSize=1500')
        // console.log('res.data', res.data)
        this.setState({
            loading: false,
            data: res.data.rows
        })
    }


    componentDidMount() {
        this.getResponseData()
    }


    render() {

        const columns = [
            {
                title: '#',
                dataIndex: 'main_id',
                // width: 100, можно проценты писать
                fixed: 'left',
                // render: () => <a>{3082}</a>,
            },
            {
                title: 'Название',
                width: 600,
                dataIndex: 'name',
                // fixed: 'left',
            },
            {
                title: 'Дата загрузки',
                dataIndex: 'create_date',
                // width: 150,
            },
            {
                title: 'Владелец',
                dataIndex: 'create_user',
                // width: 150,
            },
            {
                title: 'Задание',
                dataIndex: 'filter_tasktype',
                // width: 150,
            },
            {
                title: 'Управление',
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

        const { data, loading} = this.state

        // console.log('response', this.state.data)
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

                <Table className='table' bordered
                       columns={columns}
                       dataSource={data}
                       loading={loading}
                       // onChange={this.handleTableChange}
                       pagination={{position: [this.state.bottom]}}/>
            </div>
        )
    }
}