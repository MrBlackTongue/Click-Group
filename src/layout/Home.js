import React from "react";
import Header from '../Components/Header/Header'
import Content from "../Components/Content/Content";
import TreeSidebar from "../Components/TreeSidebar/TreeSidebar";
import ru_RU from "antd/lib/locale/ru_RU";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import EditMainSh from "./EditMainSh";
import EditMainNpp from "./EditMainNpp";
import EditChaptersSh from "./EditChaptersSh";
import EditChaptersNpp from "./EditChaptersNpp";
import {ConfigProvider} from "antd";


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
            loading: false,
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

    updateLoading = (value) => {
        this.setState({
            loading: value,
        })
    }

    render() {
        const {data, total, pageNum, pageSize} = this.state

        return (

            <ConfigProvider locale={ru_RU}>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/'} exact render={(props) => (
                            <div className="Home">
                                <Header
                                    updateData={this.updateData}
                                    updateTotal={this.updateTotal}
                                    updatePageNum={this.updatePageNum}
                                    updatePageSize={this.updatePageSize}
                                    updateValue={this.updateValue}
                                    updatePlantsFilter={this.state.plantsFilter}
                                    updateTasksFilter={this.state.tasksFilter}
                                />
                                <div className='home-context-div'>

                                    <div>
                                        <iframe src="http://www.youtube.com/embed/xDMP3i36naA" height="500px" width="1000px"></iframe>
                                    </div>



                                    {/*<TreeSidebar*/}
                                    {/*    updateData={this.updateData}*/}
                                    {/*    updateTotal={this.updateTotal}*/}
                                    {/*    updatePageNum={this.updatePageNum}*/}
                                    {/*    updatePageSize={this.updatePageSize}*/}
                                    {/*    updateTasksFilter={this.updateTasksFilter}*/}
                                    {/*    updatePlantsFilter={this.updatePlantsFilter}*/}
                                    {/*    updateLoading={this.updateLoading}*/}

                                    {/*/>*/}
                                    {/*<Content*/}
                                    {/*    dataParentToChild={data}*/}
                                    {/*    updateId={this.updateId}*/}
                                    {/*    totalParentToChild={total}*/}
                                    {/*    pageNumParentToChild={pageNum}*/}
                                    {/*    pageSizeParentToChild={pageSize}*/}
                                    {/*    onChange={this.onChange}*/}
                                    {/*    num={this.state.pageNum}*/}
                                    {/*    size={this.state.pageSize}*/}
                                    {/*    value={this.state.value}*/}
                                    {/*    updatePageNum={this.updatePageNum}*/}
                                    {/*    updatePageSize={this.updatePageSize}*/}
                                    {/*    updateTasksFilter={this.state.tasksFilter}*/}
                                    {/*    updatePlantsFilter={this.state.plantsFilter}*/}
                                    {/*    loading={this.state.loading}*/}
                                    {/*/>*/}
                                </div>
                            </div>

                        )}/> />
                        <Route path={`/sh/main/`} component={EditMainSh}/>
                        <Route path={`/npp/main/`} component={EditMainNpp}/>
                        <Route path={`/sh/chapters/`} component={EditChaptersSh}/>
                        <Route path={`/npp/chapters/`} component={EditChaptersNpp}/>
                    </Switch>
                </BrowserRouter>
            </ConfigProvider>


        );
    }
}
