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
            report: [],
            index_text: [],
            id: [],
        }

    }

    componentDidMount() {

    }

    onDoubleClick() {

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

        // console.log('dataContent', this.state.data)

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
                       pagination={{position: [this.state.bottom]}}
                       onRow={(record) => {
                           return {
                               onDoubleClick: event => {
                                   let name

                                   if (record.filter_tasktype === 'Отклонения (Ввод)') {
                                       name = 'sh'
                                   } else {
                                       name = 'npp'
                                   }

                                   fetch(`http://185.246.64.43:8080/input/rest/${name}_main/${record.main_id}`)

                                       .then(response => response.json())
                                       .then(response => {
                                           this.setState({
                                               report: response.index,
                                               index_text: response.index.index_text,
                                               id: record.main_id
                                           })

                                           // console.log('record', record)

                                           // console.log('index_text', this.state.index_text)
                                           console.log('id', this.state.id)
                                           // console.log('report', this.state.report)
                                           this.props.updateId(this.state.id)


                                       })


                                   window.location.href = `http://localhost:3000/${name}/main/${record.main_id}`


                               }
                           }
                       }}
                />

            </div>
        )
    }
}