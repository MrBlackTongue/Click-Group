import React from "react";
import Header from '../Components/Header/Header'
import Content from "../Components/Content/Content";
import TreeSidebar from "../Components/TreeSidebar/TreeSidebar";


export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            report: [],
            id: [],
            total: '',
            pageNum: 1,
            pageSize: '',
            value: '',
            tasksFilter: '',
            plantsFilter: '',
        }

    }

    updateData = (value) => {
        this.setState({
            data: value,
        })
    }

    updateTotal = (value) => {
        this.setState({
            total: value,
        })
    }

    updateId = (value) => {
        this.setState({
            id: value,
        })
        this.props.updateId(this.state.id)
    }

    updatePageNum = (value) => {
        this.setState({
            pageNum: value,
        })
    }

    updatePageSize = (value) => {
        this.setState({
            pageSize: value,
        })
    }

    updateValue = (value) => {
        this.setState({
            value: value,
        })
    }

    updateTasksFilter = (value) => {
        this.setState({
            tasksFilter: value,
        })
    }

    updatePlantsFilter = (value) => {
        this.setState({
            plantsFilter: value,
        })
    }

    onChange = (response) => {
        this.setState({
            data: response
        })
    }

    render() {
        const {data, total, pageNum, pageSize} = this.state

        // console.log('data', this.state.data)
        console.log('plantsFilterHome', this.state.plantsFilter)

        return (
                <div className="Home">
                    <Header
                        updateData={this.updateData}
                        updateTotal={this.updateTotal}
                        updatePageNum={this.updatePageNum}
                        updatePageSize={this.updatePageSize}
                        updateValue={this.updateValue}
                    />
                    <div className='home-context-div'>
                        <TreeSidebar
                            updateData={this.updateData}
                            updateTotal={this.updateTotal}
                            updatePageNum={this.updatePageNum}
                            updatePageSize={this.updatePageSize}
                            updateTasksFilter={this.updateTasksFilter}
                            updatePlantsFilter={this.updatePlantsFilter}
                        />
                        <Content
                            dataParentToChild={data}
                            updateId={this.updateId}
                            totalParentToChild={total}
                            pageNumParentToChild={pageNum}
                            pageSizeParentToChild={pageSize}
                            onChange={this.onChange}
                            num={this.state.pageNum}
                            size={this.state.pageSize}
                            value={this.state.value}
                            updatePageNum={this.updatePageNum}
                            updatePageSize={this.updatePageSize}
                            updateTasksFilter={this.state.tasksFilter}
                            updatePlantsFilter={this.state.plantsFilter}

                        />
                    </div>
                </div>
        );
    }
}
