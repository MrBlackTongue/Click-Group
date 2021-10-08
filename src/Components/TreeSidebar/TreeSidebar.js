import React, {Component} from "react";
import {Tree, Collapse} from 'antd';
import {CaretRightOutlined} from '@ant-design/icons'

import Service from "../../services/service";


// const treeData = [
//     {
//         title: 'Станции',
//         key: '0-0',
//         children: [ ],
//     },
//     {
//         title: 'Задачи',
//         key: '0-1',
//         children: [ ],
//     },
// ];

const {Panel} = Collapse;

// const onSelect = (selectedKeys, info) => {
//     console.log('selected', selectedKeys, info);
// };

// const onCheck = (checkedKeys, info) => {
//     console.log('onCheck', checkedKeys, info);
// };

// const onCheck = (checkedKeys) => {
//     let params = []
//     for (let i = 0; i < checkedKeys.length; i++) {
//         params.push('plants=' + checkedKeys[i] + '&')
//     }
//     console.log('params', params);
//     return params.join('')
//
// };


export default class TreeSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            params: '',
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

    }


    onCheck = (checkedKeys) => {
        let params = []
        for (let i = 0; i < checkedKeys.length; i++) {
            params.push('plants=' + checkedKeys[i] + '&')
        }

        console.log('checkedKeys', checkedKeys)
        params = params.join('')
        console.log('params', params);


        this.fetchData(params)

    };

    fetchData = (params) => {
        fetch(`http://185.246.64.43:8080/input/rest/listByFilter?&${params}date1=&date2=&pageNum=1&pageSize=1500`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: response.row
                })
                console.log('data', response.rows)
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

        // const updateData = (e) => {
        //
        //      e.preventDefault();
        //      fetch(`http://185.246.64.43:8080/input/rest/listByFilter?&${this.state.checketPlants}plants=7&plant_codes=&tasks=&date1=&date2=&pageNum=1&pageSize=1500$/`, {
        //          method: "GET",
        //
        //      }).then(response => response.json())
        //     console.log('response', this.response)
        //      // .then(data => {
        //      //     console.log('Data from response: ', data);
        //      //     this.setState({forecasts: [...this.state.forecasts, data]})
        //      // });
        //  }


        // console.log('tasks', this.state.tasks)
        // console.log('plants', this.state.plants)

        // this.updatePlants()
        // this.updateTasks()
        this.updateKeyPlants()

        this.updateKeyTasks()

        return (

            <div className='sidebar'>
                <div className='treeSidebar'>
                    <div><h4 className='filters'>Фильтры:</h4></div>
                    <Collapse ghost expandIcon={
                        ({
                             isActive
                         }
                        ) =>
                            <CaretRightOutlined rotate={isActive ? 90 : 0}/>
                    }>
                        <Panel header="Станции" key="1">
                            <Tree
                                checkable
                                // onSelect={onSelect}
                                onCheck={this.onCheck}
                                treeData={this.state.plants}
                            />
                        </Panel>
                        <Panel header="Задачи" key="2">
                            <Tree
                                checkable
                                // onSelect={onSelect}
                                onCheck={this.onCheck}
                                treeData={this.state.tasks}
                            />
                        </Panel>
                    </Collapse>
                </div>
            </div>

        )
            ;
    }
}


