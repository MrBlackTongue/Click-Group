import React, {Component} from "react";
import HeaderEditSh from "../Components/HeaderEditSh/HeaderEditSh";
import EditReportChaptersSh from "../Components/EditReportChaptersSh/EditReportChaptersSh";


export default class EditChaptersSh extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return (
            <div className='edit-main'>
                <HeaderEditSh/>
                <EditReportChaptersSh/>
            </div>
        )
    }
}
