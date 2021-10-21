import React, {Component} from "react";
import {Tabs, Input, Form, Select, Button} from 'antd';
import {Option} from "antd/es/mentions";

const {TabPane} = Tabs;
const {TextArea} = Input;

function callback(key) {
    console.log(key);
}


export default class EditReportSh extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            report: [],
            index_text: [],
            title: [],
            report_id: [],
            date_str: [],
            report_types: [],
            report_type_id: [],
            selectValueType: "",
            selectValueCode: "",
            selectValueDesc: "",
            cod_techs: [],
            pnags: [],
            cod_tech: [],
            pnag_desc: [],

        }
    }

    async componentDidMount() {
        let url = window.location.href
        let id = url.match(/\d+$/)[0]
        this.setState({
            id: id
        })

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
                    cod_techs: response.cod_techs,
                    pnags: response.pnags,
                    cod_tech: response.main.cod_tech,
                    pnag_desc: response.main.pnag_desc,

                })
            })
        this.setState({
            selectValueType: "1",
            selectValueCode: "Не влияет",
            selectValueDesc: "РД ЭО 1.1.2.01.0163-2016",
        })

    }

    changeValueType = (value) => {
        this.setState({
            selectValueType: value
        });
    };

    changeValueCode = (value) => {
        this.setState({
            selectValueCode: value
        });
    };

    changeValueDesc = (value) => {
        this.setState({
            selectValueDesc: value
        });
    };

    // changeHandler = (e) => {
    //     this.setState({[e.target.name]: e.target.value})
    // }

    fetchData = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                // index_text: e.target.value,

                // index_text: this.state.index_text,
                // title: this.state.report_type_id,
                // report_id: this.state.report_id,
                // date_str: this.state.date_str,
                // report_type_id: this.state.report_type_id,
                // cod_tech: this.state.cod_tech,
                // pnag_desc: this.state.pnag_desc,
            })
        };
        fetch(`http://185.246.64.43:8080/input/rest/sh_main/${this.state.id}/save
Request Method: POST`, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({
                report: data
            }));
    }


    render() {

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
                                value={this.state.selectValueType}
                                onChange={this.changeValueType}
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
                            <Select
                                value={this.state.selectValueCode}
                                onChange={this.changeValueCode}
                                optionLabelProp='label'>
                                {this.state.cod_techs.map((item) => (
                                    <Option key={item.key} value={item.key} label={item.value}
                                    >
                                        {item.value}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>Нормативная документация:</div>
                            <Select
                                value={this.state.selectValueDesc}
                                onChange={this.changeValueDesc}
                                optionLabelProp='label'>
                                {this.state.pnags.map((item) => (
                                    <Option key={item.key} value={item.key} label={item.value}
                                    >
                                        {item.value}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item label="">
                            <Button type="primary" ghost onClick={this.fetchData}>Применить</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        )
    }
}
