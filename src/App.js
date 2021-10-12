import React from "react";
import ru_RU from 'antd/lib/locale/ru_RU';
import {ConfigProvider} from 'antd';
import Home from "./Pages/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import EditMain from "./Pages/EditMain";

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

        return (
            <ConfigProvider locale={ru_RU}>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <Route path={`/sh/main/`} component={EditMain}/>
                    </Switch>
                </BrowserRouter>
                {/*<div className="App">*/}
                {/*</div>*/}
            </ConfigProvider>
        );
    }
}
