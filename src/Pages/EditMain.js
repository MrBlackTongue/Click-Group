import React, {Component} from "react";
import HeaderEdit from "../Components/HeaderEdit/HeaderEdit";
import EditReport from "../Components/EditReport/EditReport";


export default class с extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
        }

    }

    render() {
        // console.log('editId', this.state.id)
        return (
            <div className='edit-main'>
                <HeaderEdit/>
                <EditReport id={this.state.id}/>
            </div>
        )
    }
}
