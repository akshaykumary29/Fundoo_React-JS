import React from "react";
import { Icons } from "../icons/Icons";
import '../displayNote/DisplayNote.scss'


function DisplayNote(props) {

    if (props.noteArr) {

        {
            return props.noteArr.map((item, index) => {
                return <div className='mainDisplay'>
                    <div className='displayBox'>
                        <div className='title1'>{item.title}</div>
                        <div className='title-desc'>{item.description}</div>
                        <div className='icons'><Icons /></div>
                    </div>
                </div>

            })
        }
    }
}

export default DisplayNote;