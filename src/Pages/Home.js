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
        }

    }

    updateData = (value) => {
        this.setState({
            data: value,
        })
    }

    updateId = (value) => {
        this.setState({
            id: value,
        })
        console.log('idParent', this.state.id)
        this.props.updateId(this.state.id)

    }

    render() {
        const {data} = this.state
        return (
                <div className="Home">
                    <Header updateData={this.updateData}/>
                    <div className='home-context-div'>
                        <TreeSidebar updateData={this.updateData}/>
                        <Content dataParentToChild={data} updateId={this.updateId}/>
                    </div>
                </div>
        );
    }
}
