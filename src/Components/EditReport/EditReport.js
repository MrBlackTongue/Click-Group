import React, {Component} from "react";
import {Tabs, Input, Avatar} from 'antd';
import {ArrowRightOutlined, CaretDownOutlined, UserOutlined} from '@ant-design/icons'

const { TabPane } = Tabs;
const { TextArea } = Input;

function callback(key) {
    console.log(key);
}



export default class EditReport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            report: [],
            id: this.props.id,

        }
    }


    render() {
        // console.log('url', window.location.href)
        console.log('idReport', this.state.id)
        return (
            <div className='edit-report'>
                <div className='text-doc'>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Текст документа" key="1">
                            <TextArea rows={4} value='Content of Tab Pane 1'/>
                        </TabPane>
                        <TabPane tab="Оригинал документа" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                    </Tabs>
                </div>

            </div>

        )
    }
}
