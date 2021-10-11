import React, {Component} from "react";
import {Space, Table, Button} from 'antd';
import {FormOutlined, RetweetOutlined, ArrowUpOutlined, DeleteOutlined, PlusOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';


export default class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bottom: 'bottomCenter',
            data: [],
            loading: false,
        }

    }

    componentDidMount() {

    }


    render() {

        const columns = [
            {
                title: '#',
                dataIndex: 'main_id',
                fixed: 'left',
                // render: () => <a>{3082}</a>,
            },
            {
                title: 'Название',
                width: 700,
                dataIndex: 'name',
            },
            {
                title: 'Дата загрузки',
                dataIndex: 'create_date',
            },
            {
                title: 'Владелец',
                dataIndex: 'create_user',
            },
            {
                title: 'Задание',
                dataIndex: 'filter_tasktype',
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

        const {loading} = this.state


        console.log('dataContent', this.state.data)

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
                       dataSource={this.props.dataParentToChild}
                       loading={loading}
                    // onChange={this.handleTableChange}
                       pagination={{position: [this.state.bottom]}}/>
            </div>
        )
    }
}