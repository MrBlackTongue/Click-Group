import React, {Component} from "react";
import {ArrowRightOutlined, UserOutlined, UnorderedListOutlined, CaretDownOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';
import {Button, Avatar} from 'antd';

// const {API_KEY} = process.env
// const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

export default class Header extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         query: '',
    //         results: [],
    //         name: '',
    //     }
    // }
    //
    // componentDidMount() {
    //     axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
    //         .then(({data}) => {
    //             this.setState({
    //                 results: data.data
    //             })
    //         })
    // }


    render() {
        return (
            <div className='header'>
                <div className="site-page-header">
                    <Button type="primary"><ArrowRightOutlined/>Система Ввода</Button>
                    <Button type="primary">
                        <Avatar size={20} icon={<UserOutlined/>}/>
                        &nbsp; find
                        <CaretDownOutlined/>
                    </Button>
                </div>

                <div className='header-list'>
                    <UnorderedListOutlined title="Title"/>
                    <div>&nbsp; Список документов</div>
                </div>
            </div>
        )
    }
}