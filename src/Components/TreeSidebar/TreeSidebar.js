import React, {Component} from "react";
import {Tree, Collapse, Button} from 'antd';
import {CaretRightOutlined, PlusOutlined} from '@ant-design/icons'

import Service from "../../services/service";


const {Panel} = Collapse;

// const onSelect = (selectedKeys, info) => {
//     console.log('selected', selectedKeys, info);
// };

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
                    plants: item
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


        fetch('http://185.246.64.43:8080/input/rest/listByFilter?&plant_codes=&tasks=&date1=&date2=&pageNum=1&pageSize=1500')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: response.rows
                })
                this.props.updateData(this.state.data)
            })
    }


    onCheckPlants = (checkedKeys) => {
        let plantsFilter = []
        for (let i = 0; i < checkedKeys.length; i++) {
            plantsFilter.push('plants=' + checkedKeys[i] + '&')
        }
        // console.log('checkedKeys', checkedKeys)
        this.setState({
            plantsFilter: plantsFilter.join('')
        })
        // console.log('plantsFilter', this.state.plantsFilter);
        // await this.fetchData(plantsFilter)
    };

    onCheckTasks = (checkedKeys) => {
        let tasksFilter = []
        for (let i = 0; i < checkedKeys.length; i++) {
            tasksFilter.push('tasks=' + checkedKeys[i] + '&')
        }
        // console.log('checkedKeys', checkedKeys)
        this.setState({
            plantsFilter: tasksFilter.join('')
        })
        // console.log('tasksFilter', this.state.tasksFilter);
        // await this.fetchData(plantsFilter)
    };

    fetchData = () => {
        fetch(`http://185.246.64.43:8080/input/rest/listByFilter?&${this.state.plantsFilter}${this.state.tasksFilter}date1=&date2=&pageNum=1&pageSize=1500`)
            .then(response => response.json())
            .then(async (response) => {
                await this.setState({
                    data: response.rows
                })
                // console.log('dataTree', response.rows)
                this.props.updateData(this.state.data)
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

    // updatePlants = () => {
    //     this.state.plants.forEach((el) => {
    //         this.addTitleObj(this.state.plants, (el['title'] = el.name));
    //     });
    //     this.state.plants.map((el) => (el['title'] = el.name));
    // };
    // updateTasks = () => {
    //     this.state.tasks.forEach((el) => {
    //         this.addTitleObj(this.state.tasks, (el['title'] = el.name));
    //     });
    //     this.state.tasks.map((el) => (el['title'] = el.name));
    // };


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
                    <Button type="primary" className='button-ghost' ghost size='default' onClick={this.fetchData}>
                        Отфильтровать
                    </Button>
                </div>
            </div>

        )
            ;
    }
}
