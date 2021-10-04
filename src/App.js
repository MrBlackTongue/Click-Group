import React from "react";
import Header from './Components/Header/Header'
import Sidebar from "./Components/Sidebar/Sidebar";
import ru_RU from 'antd/lib/locale/ru_RU';
import {ConfigProvider} from 'antd';
import Content from "./Components/Content/Content";
import TreeSidebar from "./Components/TreeSidebar/TreeSidebar";



export default class App extends React.Component {
    render() {
        return (
            <ConfigProvider locale={ru_RU}>
                <div className="App">
                    <Header/>
                    <div className='app-context-div'>
                        <TreeSidebar />
                        {/*<Sidebar/>*/}
                        <Content/>
                    </div>
                </div>
            </ConfigProvider>
        );
    }
}
