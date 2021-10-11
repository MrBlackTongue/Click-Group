import React from "react";
import Header from './Components/Header/Header'
import ru_RU from 'antd/lib/locale/ru_RU';
import {ConfigProvider} from 'antd';
import Content from "./Components/Content/Content";
import TreeSidebar from "./Components/TreeSidebar/TreeSidebar";



export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }

    }

    updateData = (value) => {
        this.setState({
            data: value
        })
    }

    render() {
        const {data} = this.state
        return (
            <ConfigProvider locale={ru_RU}>
                <div className="App">
                    <Header/>
                    <div className='app-context-div'>
                        <TreeSidebar updateData={this.updateData}/>
                        {/*<Sidebar/>*/}
                        <Content dataParentToChild={data}/>
                        {/*<Content updateData={this.state.data}/>*/}
                    </div>
                </div>
            </ConfigProvider>
        );
    }
}
