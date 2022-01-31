import React, { useState } from "react";
import { Icons } from "../icons/Icons";
import '../displayNote/DisplayNote.scss'

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

import NoteServices from "../../services/NoteServices";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        width: theme.spacing(80)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
        width: theme.spacing(100)
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    {/* <CloseIcon /> */}
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

function DisplayNote(props) {
    const [open, setopen] = useState(false)

    const [notes, setNotes] = useState({
        _id: "",
        title: "",
        description: "",
        isArchived: "",
        isDeleted: "",
        colour: props.noteArr
    })

    const changeColor = () => {
        props.getnote()
    }

    const changeArchive = (id) => {

        let data = {
            "_id": id,
            "isArchived": true
        }
        NoteServices.updateNotes(data)
            .then((res) => {
                props.getnote()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleOpen = (item) => {
        setopen(true)
        setNotes({
            title: item.title,
            description: item.description,
            _id: item.id
        })
    }

    const handleClose = () => {
        setopen(false)

    }

    if (props.noteArr) {
        return (
            <>
                {props.noteArr.map((item, index) => {
                    return <div className='mainDisplay'>
                        <div className='displayBox' style={{ backgroundColor: item.colour }}>
                            <div onClick={() => handleOpen(item)}>
                                <div className='title1'>{item.title}</div>
                                <div className='title-desc'>{item.description}</div>
                            </div>
                            <div className='icons'><Icons mode="display" item={item} changeColor={changeColor} changeArchive={() => changeArchive(item._id)} /></div>
                        </div>
                    </div>
                })
                }

                <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <div style={{ width: "100%", overflow: "hidden" }}>
                        <div style={{ backgroundColor: notes.colour }}>

                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>

                                <input type="text" style={{ border: "none", outline: "none", backgroundColor: notes.colour }} value={notes.title} name="title" />

                            </BootstrapDialogTitle>
                            <DialogContent>

                                <input type="text" style={{ border: "none", outline: "none", backgroundColor: notes.colour }} value={notes.description} name="description" />

                            </DialogContent>
                            <DialogContent className="close-Icon">

                                <Icons mode="update" noteId={notes._id}
                                    changeColor={changeColor} changeArchive={changeArchive} />
                                {/* updateNote={this.props.updateNote} */}
                                <Button autoFocus onClick={(title, description) => handleClose(title, description)}> Close </Button>

                            </DialogContent>
                        </div>
                    </div>
                </BootstrapDialog>
            </>
        )
    }
}

export default DisplayNote;