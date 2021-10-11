import React, {Component} from "react";
import {Input} from 'antd';
import 'antd/dist/antd.css';


const {Search} = Input;


export default class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: '',
            loading: false,
            // value: '',
            data: [],
        }
    }


    onSearch = (value) => {
        // console.log('value', value);
        fetch(`http://185.246.64.43:8080/input/rest/listByFilter?&query=${value}&plant_codes=&tasks=&date1=&date2=&pageNum=1&pageSize=1500`)
            .then(response => response.json())
            .then(async (response) => {
                await this.setState({
                    data: response.rows
                })
                // console.log('searchData', response.rows)
                this.props.updateData(this.state.data)
            })
    }


    componentDidMount() {

    }


    render() {
        return (
            <div className='search'>
                <Search placeholder="Введите название документа..." allowClear
                        onSearch={this.onSearch} size='large'/>
                {/*<Search onSubmit={this.searchData}  />*/}
            </div>
        )
    }
}