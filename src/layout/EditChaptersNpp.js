import React, {Component} from "react";
import HeaderEditNpp from "../Components/HeaderEditNpp/HeaderEditNpp";
import EditReportChaptersNpp from "../Components/EditReportChaptersNpp/EditReportChaptersNpp";


export default class EditChaptersNpp extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return (
            <div className='edit-main'>
                <HeaderEditNpp/>
                <EditReportChaptersNpp/>
            </div>
        )
    }
}
