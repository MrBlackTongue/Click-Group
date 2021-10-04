import React, {Component} from "react";
import {Tree} from 'antd';
import Service from "../../services/service";


const treeData = [

    {
        title: 'Станции',
        key: '0-0-0',
        children: [
            {
                title: 'leaf',
                key: '0-0-0-0',
            },

        ],
    },
    {
        title: 'Задачи',
        key: '0-0-1',
        children: [
            {
                title: (
                    <span
                        style={{
                            color: '#1890ff',
                        }}
                    >
                sss
              </span>
                ),
                key: '0-0-1-0',
            },
        ],
    },

];

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
            plants: null,
            tasks: [],
        }
    }

    service = new Service()

    componentDidMount() {
        const requestTasks = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title: ''})
        };
        fetch('http://185.246.64.43:8080/input/rest/filter/tasks', requestTasks)
            .then(response => response.json())
            .then((tasks) => {
                this.setState({
                    tasks
                })
            })

    }

    renderTasks(arr) {
        return arr.map(({id, name, count}) => {
            return (
                <li key={id}>
                    { name }  <button>{count}</button>
                </li>
            )
        })
    }


    render() {

        const {tasks} = this.state
        const task = this.renderTasks(tasks)

        return (
            <div className='sidebar'>
                <Tree
                    checkable
                    defaultExpandedKeys={['0-0-0', '0-0-1']}  // ключи развернутого treeNodes по умолчанию
                    defaultSelectedKeys={['0-0-0', '0-0-1']} // ключи выбранных по умолчанию treeNodes
                    onSelect={onSelect}
                    onCheck={onCheck}
                    treeData={treeData}
                />


                {task}
            </div>

        );
    }
}


