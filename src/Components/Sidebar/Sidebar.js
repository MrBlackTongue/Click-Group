import React, {Component} from "react";
import {Button, List, DatePicker, Space, Checkbox} from 'antd';
import {PlusOutlined} from '@ant-design/icons'

import 'antd/dist/antd.css';

const data = ['Билибинская', 'Белоярская', 'Балаковская', 'Кольская', 'Калининская']
const data2 = ['Отклонения (ОИСОЭ)', 'Нарушения (ОИСОЭ)', 'Нарушения (Ввод)', 'Отклонения (Ввод)']

// const dataCounter = [728, 25, 6, 4, 0]

function onChange(date, dateString) { //todo: убрать вывод даты из консоли
    console.log(date, dateString);
}

function onChange2(e) {
    console.log(`checked = ${e.target.checked}`);
}

export default class Sidebar extends Component {

    render() {
        return (
            <div className='sidebar'>
                <List
                    className='list-aside'
                    size="small"
                    header={<div><b>Станции</b></div>}
                    // footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>
                        <a className='a-style' href='#'>{item}</a>
                        <Button type="primary" className='a-style'>
                            25
                        </Button></List.Item>}
                />

                <List
                    className='list-aside'
                    size="small"
                    header={<div><b>Задачи</b></div>}
                    bordered
                    dataSource={data2}
                    renderItem={item => <List.Item>
                        <a className='a-style'>{item}</a>
                        <Button type="primary" className='a-style'>
                            121
                        </Button></List.Item>}
                />

                <div className='div-data'><b>Дата</b></div>

                <div className='checkbox-my-doc'>
                    <Checkbox onChange2={onChange}>Только мои документы</Checkbox>
                </div>


                <div className="site-button-ghost-wrapper">
                    <Button>Очистить фильтры</Button>
                </div>



            </div>
        )
    }
}