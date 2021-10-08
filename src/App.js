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
            name: '',
            onCheck: '',
        }

    }

    updateData = (value) => {
        this.setState({
            name: value
        })
        console.log('value', value);


    }

    render() {
        return (
            <ConfigProvider locale={ru_RU}>
                <div className="App">
                    <Header/>
                    <div className='app-context-div'>
                        <TreeSidebar updateData={this.updateData}/>
                        {/*<Sidebar/>*/}
                        <Content/>
                    </div>
                </div>
            </ConfigProvider>
        );
    }
}
