import React, {Component} from "react";
import {Tabs, Input, Form, Select, Button} from 'antd';
import {Option} from "antd/es/mentions";
// import {ArrowRightOutlined, CaretDownOutlined, UserOutlined} from '@ant-design/icons'

const {TabPane} = Tabs;
const {TextArea} = Input;

function callback(key) {
    console.log(key);
}


export default class EditReport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            report: [],
            index_text: [],
            title: [],
            report_id: [],
            date_str: [],
            report_types: [],
            report_type_id: [],
            report_type_value: '',
            selectValue: "",

        }
    }

    async componentDidMount() {
        let url = window.location.href
        let id = url.match(/\d+$/)[0]

        await fetch(`http://185.246.64.43:8080/input/rest/sh_main/${id}`)

            .then(response => response.json())
            .then(response => {
                this.setState({
                    report: response.index,
                    index_text: response.index.index_text,
                    title: response.main.title,
                    report_id: response.main.report_id,
                    date_str: response.main.date_str,
                    report_types: response.report_types,
                    report_type_id: response.main.report_type_id,

                })

                // console.log('report', this.state.report)
                // console.log('index_text', this.state.index_text)
                // this.props.updateId(this.state.id)
            })
        this.setState({
            selectValue: "1"
        })

        // .then(response => {
        //     let types = this.state.report_types
        //     let selectId = String(this.state.report_type_id)
        //     // let result = types.filter((el) => {
        //     //     return el.key == selectId
        //     // })[0].value
        //     let result;
        //     for (let i = 0; i < types.length; i++) {
        //         if (types[i].key === selectId) {
        //             result = types[i].value;
        //             break;
        //         }
        //     }
        //     console.log('id', selectId)
        //     console.log('types', types)
        //     console.log('result', result)
        //     this.setState({
        //         report_type_value: result,
        //
        //     })
        //     console.log('result', this.state.report_type_value)
        //
        // })

    }

    changeValue = (value) => {
        this.setState({
            selectValue: value
        });
    };


    render() {

        let arr = ['svetka', 'dimka']


        return (
            <div className='edit-report-sh'>
                <div className='text-doc'>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Текст документа" key="1">
                            <TextArea rows={120} value={this.state.index_text}/>
                        </TabPane>
                        <TabPane tab="Оригинал документа" key="2">
                        </TabPane>
                    </Tabs>
                </div>
                <div className='edit-info'>
                    <Form
                        labelCol={{span: 4,}}
                        wrapperCol={{// span: 14,}}
                            // layout="horizontal"
                            // initialValues={{
                            // size: componentSize,
                        }}
                        // onValuesChange={onFormLayoutChange}
                        // size={componentSize}
                    >
                        <Form.Item label="" name="size">
                            <div className='label'>Название отклонения:</div>
                            <TextArea rows={4} value={this.state.title}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>Код отклонения:</div>
                            <Input value={this.state.report_id}/>
                        </Form.Item>

                        <Form.Item label="" className='display-flex'>
                            <div className='label'>Дата отклонения:</div>
                            <Input value={this.state.date_str}/>
                            <span className='label'>Дата отклонения в СПАНД:</span>
                            <span>   {this.state.date_str}</span>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>Тип отклонения:</div>
                            <Select
                                value={this.state.selectValue}
                                onChange={this.changeValue}
                                optionLabelProp='label'>

                                {this.state.report_types.map((item) => (
                                    <Option key={item.key} value={item.key} label={item.value}
                                    >
                                        {item.value}
                                    </Option>
                                ))}


                            </Select>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>Влияние на надёжность энергосистемы</div>
                            <Select>
                                <Select.Option value="demo">основной</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>Нормативная документация:</div>
                            <Select>
                                <Select.Option value="demo">основной</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="">
                            <Button type="primary" ghost>Принять изменения</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        )
    }
}
