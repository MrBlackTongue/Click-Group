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
            data: [],
            pageNum: 1,
            pageSize: 10,
            total: '',
            value: '',
        }
    }


    onSearch = (value) => {

        fetch(`http://185.246.64.43:8080/input/rest/listByFilter?&${this.props.updatePlantsFilter}query=${value}&plant_codes=&${this.props.updateTasksFilter}date1=&date2=&pageNum=${this.state.pageNum}&pageSize=${this.state.pageSize}`)
            .then(response => response.json())
            .then(async (response) => {
                await this.setState({
                    data: response.rows,
                    total: response.total,
                })
                this.props.updateData(this.state.data)
                this.props.updateTotal(this.state.total)
                this.props.updatePageNum(this.state.pageNum)
                this.props.updatePageSize(this.state.pageSize)
                this.props.updateValue(value)

            })
    }


    componentDidMount() {

    }


    render() {


        return (
            <div className='search'>
                <Search placeholder="Введите название документа..." allowClear
                        onSearch={this.onSearch} size='large'/>
            </div>
        )
    }
}