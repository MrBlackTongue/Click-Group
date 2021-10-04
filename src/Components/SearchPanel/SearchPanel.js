import React, {Component} from "react";
import {Button, Input} from 'antd';
// import {FormOutlined, RetweetOutlined, ArrowUpOutlined, DeleteOutlined} from '@ant-design/icons'
import axios from "axios";

import 'antd/dist/antd.css';


const {Search} = Input;
const onSearch = value => console.log(value); //todo: убрать результат поиска из консоли


export default class SearchPanel extends Component {

    state = {
        results: '',
        loading: false,
        value: '',
    }


    search = async val => {
        this.setState({ loading: true });
        const res = await axios(
            `https://jsonplaceholder.typicode.com/albums/${val}/photos/`
            // `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
        );
        const results = await res.data.results;

        this.setState({ results, loading: false });
    };

    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ value: e.target.name });
    };

    get renderResults() {
        let results
        if (this.state.results) {
            results = <results list={this.state.results} />;
        }

        return results;
    }


    render() {
        return (
            <div className='search'>
                {/*<Search onSubmit={this.submitHandler} placeholder="Введите название документа..." allowClear onSearch={onSearch}/>*/}
                <Search searchValue={this.state.value} onSearch={e => this.onChangeHandler(e)} placeholder="Введите название документа..." allowClear size='large'/>
                {this.renderResults}
            </div>
        )
    }
}