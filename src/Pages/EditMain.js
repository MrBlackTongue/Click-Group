import React, {Component} from "react";
import HeaderEdit from "../Components/HeaderEdit/HeaderEdit";


export default class EditMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='edit-main'>
                <HeaderEdit/>
            </div>

        )
    }
}
