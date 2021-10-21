import React from "react";
import ru_RU from 'antd/lib/locale/ru_RU';
import {ConfigProvider} from 'antd';
import Home from "./layout/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import EditMainSh from "./layout/EditMainSh";
import EditMainNpp from "./layout/EditMainNpp";
import EditChaptersSh from "./layout/EditChaptersSh";
import EditChaptersNpp from "./layout/EditChaptersNpp";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            report: [],
            id: [],
        }

    }

    updateId = (value) => {
        this.setState({
            id: value
        })
    }

    render() {

        return (
            <ConfigProvider locale={ru_RU}>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/'} exact render={(props) => (
                            <Home updateId={this.updateId}/>
                        )}/>

                        <Route path={`/sh/main/`} render={(props) => (
                            <EditMainSh {...props} id={this.state.id}/>
                        )}/>
                        <Route path={`/npp/main/`} render={(props) => (
                            <EditMainNpp {...props} id={this.state.id}/>
                        )}/>

                        <Route path={`/sh/chapters/`} render={(props) => (
                            <EditChaptersSh {...props} id={this.state.id}/>
                        )}/>

                        <Route path={`/npp/chapters/`} render={(props) => (
                            <EditChaptersNpp {...props} id={this.state.id}/>
                        )}/>

                    </Switch>
                </BrowserRouter>
                {/*<div className="App">*/}
                {/*</div>*/}
            </ConfigProvider>
        );
    }
}
