import React, {Component} from "react";
import HeaderEditNpp from "../Components/HeaderEditNpp/HeaderEditNpp";
import EditReportNpp from "../Components/EditReportNpp/EditReportNpp";


export default class EditMainSh extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return (
            <div className='edit-main'>
                <HeaderEditNpp/>
                <EditReportNpp/>
            </div>
        )
    }
}
