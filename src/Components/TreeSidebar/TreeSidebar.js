import React, {Component} from "react";
import {Tree, Collapse, Button, Space, DatePicker} from 'antd';
import {CaretRightOutlined} from '@ant-design/icons'
import Service from "../../services/service";
import locale from "antd/es/date-picker/locale/ru_RU";
import 'moment/locale/ru';

const {Panel} = Collapse;

export default class TreeSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            plantsFilter: '',
            tasksFilter: '',
            data: [],
            checkedKeys: [],
            onCheck: [],
            // onSelect: [],
            plants: [],
            tasks: [],
            treeData: [
                {
                    title: '',
                    key: '',
                },
            ],
            total: '',
            pageNum: 1,
            pageSize: 10,
            loading: false,

        }
    }

    service = new Service()

    componentDidMount() {

        const requestPlants = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: ''})
        };
        fetch('http://185.246.64.43:8080/input/rest/filter/plants', requestPlants)
            .then(response => response.json())
            .then(response => response.map((item) => {
                item.title = item.name + ' (' + item.count + ')';
                return item
            }))
            .then(item => {
                this.setState({
                    plants: item,
                })
            })

        const requestTasks = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: ''})
        };
        fetch('http://185.246.64.43:8080/input/rest/filter/tasks', requestTasks)
            .then(response => response.json())
            .then(response => response.map((item) => {
                item.title = item.name + ' (' + item.count + ')';
                return item
            }))
            .then(item => {
                this.setState({
                    tasks: item
                })
            })


        fetch(`http://185.246.64.43:8080/input/rest/listByFilter?&plants=&query=&plant_codes=&tasks=&date1=&date2=&pageNum=${this.state.pageNum}&pageSize=${this.state.pageSize}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    loading: false,
                    data: response.rows,
                    total: response.total,

                })
                this.props.updateData(this.state.data)
                this.props.updateTotal(this.state.total)
                this.props.updatePageNum(this.state.pageNum)
                this.props.updatePageSize(this.state.pageSize)
                this.props.updateLoading(this.state.loading)
                // console.log('loading', this.state.loading)

            })
    }


    onCheckPlants = (checkedKeys) => {
        let plantsFilter = []
        for (let i = 0; i < checkedKeys.length; i++) {
            plantsFilter.push('plants=' + checkedKeys[i] + '&')
        }
        this.setState({
            plantsFilter: plantsFilter.join('')
        })
        // await this.fetchData(plantsFilter)
    };

    onCheckTasks = (checkedKeys) => {
        let tasksFilter = []
        for (let i = 0; i < checkedKeys.length; i++) {
            tasksFilter.push('tasks=' + checkedKeys[i] + '&')
        }
        this.setState({
            tasksFilter: tasksFilter.join('')
        })
        // await this.fetchData(plantsFilter)
    };

    fetchData = () => {
        fetch(`http://185.246.64.43:8080/input/rest/listByFilter?&${this.state.plantsFilter}query=&plant_codes=&${this.state.tasksFilter}date1=&date2=&pageNum=${this.state.pageNum}&pageSize=${this.state.pageSize}`)
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
                this.props.updateTasksFilter(this.state.tasksFilter)
                this.props.updatePlantsFilter(this.state.plantsFilter)

            })
    }


    addTitleObj = (obj, newKey) => {
        return {...obj, ...newKey};
    };

    updateKeyPlants = () => {
        this.state.plants.forEach((el) => {
            this.addTitleObj(this.state.plants, (el['key'] = el.id))
        });
        this.state.plants.map((el) => (el['key'] = el.id))
    }

    updateKeyTasks = () => {
        this.state.tasks.forEach((el) => {
            this.addTitleObj(this.state.tasks, (el['key'] = el.id))
        });
        this.state.tasks.map((el) => (el['key'] = el.id))
    }


    render() {

        this.updateKeyPlants()
        this.updateKeyTasks()

        return (
            <div className='sidebar'>
                <div className='treeSidebar'>
                    <div><h4 className='filters'>Фильтры:</h4></div>
                    <Collapse ghost expandIcon={
                        ({isActive}) =>
                            <CaretRightOutlined rotate={isActive ? 90 : 0}/>
                    }>
                        <Panel header="Станции" key="1">
                            <Tree
                                checkable
                                // onSelect={onSelect}
                                onCheck={this.onCheckPlants}
                                treeData={this.state.plants}
                                defaultExpandAll
                            />
                        </Panel>
                        <Panel header="Задачи" key="2">
                            <Tree
                                checkable
                                // onSelect={onSelect}
                                onCheck={this.onCheckTasks}
                                treeData={this.state.tasks}
                            />
                        </Panel>
                    </Collapse>
                    <Button
                        type="primary"
                        className='button-ghost'
                        ghost
                        size='default'
                        onClick={this.fetchData}
                    >
                        Применить
                    </Button>
                    <div><h4 className='filters-data'>Дата:</h4></div>
                    <div className='date'>
                        <Space direction="vertical">
                            <DatePicker locale={locale} onChange={''} placeholder='Выберите месяц' className='data-picker'/>
                            <DatePicker locale={locale} onChange={''} placeholder='Выберите месяц' className='data-picker'/>
                        </Space>
                    </div>
                </div>
            </div>
        )
    }
}
