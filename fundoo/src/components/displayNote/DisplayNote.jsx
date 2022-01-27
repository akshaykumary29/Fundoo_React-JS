import React, { Component } from "react";
import { Icons } from "../icons/Icons";
import '../displayNote/DisplayNote.scss'

export class DisplayNote extends Component {
    render() {
        return (
            <div className='mainDisplay'>
                <div className='displayBox'>
                    <div className='title1'>Title</div>
                    <div className='title-desc'>Title description</div>
                    <div className='icons'><Icons /></div>

                </div>
            </div>
        )
    }
}

export default DisplayNote