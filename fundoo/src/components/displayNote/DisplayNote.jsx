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





// export class DisplayNote extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             open: false,
//             title: "",
//             description: "",
//         }
//     }

//     handleOpenTitle = (item) => {
//         this.setState({
//             open: true,
//             title: item.title,
//             description: item.description,
//         })
//         console.log(this.state.title);
//     }

//     handleClose = () => {

//         NoteServices.getNotes()
//             .then((res) => {
//                 console.log(res);
//                 this.props.updateDisplayNote();
//                 this.setState({
//                     open: false,
//                     title: "",
//                     description: "",
//                 })
//             }).catch((err) => {
//                 console.log(err);
//             })
//     }

//     render() {
//         return (
//             <div className='mainDisplay'>
//                 {
//                     this.props.noteArr.map((item, index) => (
//                         <div className='displayBox'>
//                             <div className='title1'>{item.title}</div>
//                             <div className='title-desc'>{item.description}</div>
//                             <div className='icons'><Icons /></div>
//                         </div>
//                     ))
//                 };
//             </div>
//         )
//     }
// }


