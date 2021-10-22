import React from "react";
import ru_RU from 'antd/lib/locale/ru_RU';
import {ConfigProvider} from 'antd';
import Home from "./layout/Home";


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {

        return (
            <ConfigProvider locale={ru_RU}>
                <div className="App">
                    <Home/>
                </div>
            </ConfigProvider>
        );
    }
}
