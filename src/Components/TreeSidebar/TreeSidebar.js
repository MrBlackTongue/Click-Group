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

const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
};

const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
};

export default class TreeSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onCheck: [],
            onSelect: [],
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

    addTitleObj = (obj, newKey) => {
        return {...obj, ...newKey};
    };

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


    updateKeysPlants = () => {
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

    // updateTreeData(list, key, children) {
    //     return list.map(node => {
    //         if (node.key === key) {
    //             return {
    //                 ...node,
    //                 children
    //             }
    //         }
    //         if (node.children) {
    //             return {
    //                 ...node,
    //                 children: this.updateTreeData(node.children, key, children)
    //             }
    //         }
    //         return node
    //     })
    // }


    // renderTasks(arr) {
    //     return arr.map(({id, name, count}) => {
    //
    //         return (
    //             <li key={id}>
    //                 { name }  <button>{count}</button>
    //             </li>
    //         )
    //     })
    // }


    render() {

        const {tasks} = this.state
        const {plants} = this.state

        // const task = this.renderTasks(tasks)
        console.log('tasks', this.state.tasks)
        console.log('plants', this.state.plants)

        console.log('treeData', this.state.treeData)

        // this.updatePlants()
        // this.updateTasks()
        this.updateKeyTasks()
        this.updateKeysPlants()
        return (
            <div className='sidebar'>

                <Collapse ghost
                          expandIcon={({isActive}) => <CaretRightOutlined rotate={isActive ? 90 : 0}/>}>
                    <Panel header="Станции" key="1">
                        <Tree
                            checkable
                            onSelect={onSelect}
                            onCheck={onCheck}
                            treeData={this.state.plants}

                        />

                    </Panel>
                    <Panel header="Задачи" key="2">
                        <Tree
                            checkable
                            onSelect={onSelect}
                            onCheck={onCheck}
                            treeData={this.state.tasks}
                        />
                    </Panel>
                </Collapse>

                {/*<Tree*/}
                {/*    checkable*/}
                {/*    defaultExpandedKeys={['0-0-0', '0-0-1']}  // ключи развернутого treeNodes по умолчанию*/}
                {/*    onSelect={onSelect}*/}
                {/*    onCheck={onCheck}*/}
                {/*    treeData={this.state.plants}*/}
                {/*/>*/}
                {/*<Tree*/}
                {/*    checkable*/}
                {/*    defaultExpandedKeys={['0-0-0', '0-0-1']}  // ключи развернутого treeNodes по умолчанию*/}
                {/*    onSelect={onSelect}*/}
                {/*    onCheck={onCheck}*/}
                {/*    treeData={this.state.tasks}*/}
                {/*/>*/}
                {/*{plants}*/}
                {/*{task}*/}
            </div>

        );
    }
}


