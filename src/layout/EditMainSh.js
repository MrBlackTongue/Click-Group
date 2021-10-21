import React, {Component} from "react";
import HeaderEditSh from "../Components/HeaderEditSh/HeaderEditSh";
import EditReportSh from "../Components/EditReportSh/EditReportSh";


export default class EditMainSh extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return (
            <div className='edit-main'>
                <HeaderEditSh/>
                <EditReportSh/>
            </div>
        )
    }
}
