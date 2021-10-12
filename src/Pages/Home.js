import React from "react";
import Header from '../Components/Header/Header'
import Content from "../Components/Content/Content";
import TreeSidebar from "../Components/TreeSidebar/TreeSidebar";


export default class Home extends React.Component {

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
                <div className="Home">
                    <Header updateData={this.updateData}/>
                    <div className='home-context-div'>
                        <TreeSidebar updateData={this.updateData}/>
                        <Content dataParentToChild={data}/>
                    </div>
                </div>
        );
    }
}
