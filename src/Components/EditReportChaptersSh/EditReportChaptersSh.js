import React, {Component} from "react";
import {Tabs, Input, Form, Button} from 'antd';

const {TabPane} = Tabs;
const {TextArea} = Input;

function callback(key) {
    console.log(key);
}


export default class EditReportChaptersSh extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            index_text: [],
            report: [],
            head: [],
            un_state: [],
            descrip: [],
            action: [],
            analog: [],
            effect: [],
            anomal: [],
            direct_cause: [],
            root_cause: [],
            an_safety: [],
            defic: [],
            measure: [],
            cod_map: [],
            attach: [],

        }
    }

    async componentDidMount() {
        let url = window.location.href
        let id = url.match(/\d+$/)[0]
        this.setState({
            id: id
        })

        await fetch(`http://185.246.64.43:8080/input/rest/sh_chapters/${id}`)

            .then(response => response.json())
            .then(response => {
                this.setState({
                    report: response,
                    index_text: response.index.index_text,
                    head: response.chapters.head,
                    un_state: response.chapters.un_state,
                    descrip: response.chapters.descrip,
                    action: response.chapters.action,
                    analog: response.chapters.analog,
                    effect: response.chapters.effect,
                    anomal: response.chapters.anomal,
                    direct_cause: response.chapters.direct_cause,
                    root_cause: response.chapters.root_cause,
                    an_safety: response.chapters.an_safety,
                    defic: response.chapters.defic,
                    measure: response.chapters.measure,
                    cod_map: response.chapters.cod_map,
                    attach: response.chapters.attach,

                })
            })

    }

    // changeHandler = (e) => {
    //     this.setState({[e.target.name]: e.target.value})
    // }

    fetchData = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
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
        fetch(`http://185.246.64.43:8080/input/rest/sh_chapters/${this.state.id}/save
Request Method: POST`, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({
                report: data
            }));
    }


    render() {

        return (
            <div className='edit-report-sh'>
                <div className='text-doc-chapters'>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Текст документа" key="1">
                            <TextArea rows={155} value={this.state.index_text}/>
                        </TabPane>
                        <TabPane tab="Оригинал документа" key="2">
                        </TabPane>
                    </Tabs>
                </div>
                <div className='edit-info-chapters'>
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

                        <Form.Item label="">
                            <Button type="primary" ghost onClick={this.fetchData}>Применить</Button>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>ШАПКА</div>
                            <TextArea rows={8} value={this.state.head}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>1. ОПИСАНИЕ ОТКЛОНЕНИЯ</div>
                            <div className='label-point'>1.1. Состояние блока (АС) до отклонения.</div>
                            <TextArea rows={8} value={this.state.un_state}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label-point'>1.2. Описание последовательности отказов, ошибок персонала в ходе отклонения.</div>
                            <TextArea rows={8} value={this.state.descrip}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label-point'>1.3. Действия, предпринятые для выяснения отказов, ошибок персонала.</div>
                            <TextArea rows={8} value={this.state.action}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label-point'>1.4. Предшествующие аналогичные отклонения.</div>
                            <TextArea rows={8} value={this.state.analog}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>2. ПОСЛЕДСТВИЯ ОТКЛОНЕНИЯ</div>
                            <TextArea rows={8} value={this.state.effect}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>3. ПРИЧИНЫ ОТКЛОНЕНИЯ</div>
                            <div className='label-point'>3.1. Перечень отказов, ошибок персонала в ходе отклонения.</div>
                            <TextArea rows={8} value={this.state.anomal}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label-point'>3.2. Непосредственные причины отказов, ошибок персонала.</div>
                            <TextArea rows={8} value={this.state.direct_cause}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label-point'>3.3. Коренные причины отказов, ошибок персонала.</div>
                            <TextArea rows={8} value={this.state.root_cause}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>4. ОЦЕНКА С ТОЧКИ ЗРЕНИЯ БЕЗОПАСНОСТИ</div>
                            <TextArea rows={8} value={this.state.an_safety}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>5. НЕДОСТАТКИ, ВЫЯВЛЕННЫЕ ПРИ РАССЛЕДОВАНИИ ОТКЛОНЕНИЯ</div>
                            <TextArea rows={8} value={this.state.defic}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>6. КОРРЕКТИРУЮЩИЕ МЕРЫ</div>
                            <TextArea rows={8} value={this.state.measure}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>7. КОДИРОВАННАЯ ИНФОРМАЦИОННАЯ КАРТА</div>
                            <TextArea rows={8} value={this.state.cod_map}/>
                        </Form.Item>

                        <Form.Item label="">
                            <div className='label'>8. ПЕРЕЧЕНЬ ПРИЛОЖЕНИЙ К ОТЧЕТУ О РАССЛЕДОВАНИИ ОТКЛОНЕНИЯ В РАБОТЕ АС</div>
                            <TextArea rows={8} value={this.state.attach}/>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        )
    }
}
