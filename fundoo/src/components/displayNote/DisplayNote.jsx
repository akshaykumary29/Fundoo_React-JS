import React, { useState } from "react";
import Icons from "../icons/Icons";
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
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

function DisplayNote(props) {
    const [open, setOpen] = useState(false);

    const [dialogbox, setDialogbox] = useState({
        title: "",
        description: "",
        _id: ""
    })

    const [notes, setNotes] = useState({
        _id: "",
        title: "",
        description: "",
        isArchived: "",
        isDeleted: "",
        colour: "#ffffff"
    })

    const changeColor = (val) => {
        // color noes .colorr
        // setNotes(val)
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

    const isdeleteChange = (id) => {
        let data = {
            "_id": id,
            "isDeleted": true
        }
        NoteServices.updateNotes(data)
            .then((res) => {
                props.getnote()
            })
            .catch((err) => {

            })
    }

    const handleOpen = (data) => {
        setNotes(data)
        setOpen(true);
        setDialogbox({
            title: data.title,
            description: data.description,
            // _id: data.id
        })
    }

    const handleClose = (id) => {
        setOpen(false);
        let data = {
            "_id": id,
            "title": dialogbox.title,
            "description": dialogbox.description
        }
        NoteServices.updateNotes(data)
            .then((res) => {
                props.getnote()
            })
            .catch((err) => {

            })
    }

    const changeField = (e, id) => {
        setDialogbox(previousvalues => {
            return { ...previousvalues, [e.target.name]: e.target.value, '_id': id }
        })
    }

    
    return (
        <div className="Notes-container">
            {props.noteArr.map((notes, index) => {
                return <div className='mainDisplay' key={index}>
                    <div className='displayBox' style={{ backgroundColor: notes.colour }}>
                        <div style={{ width: "90%" }} onClick={() => handleOpen(notes)}>
                            <div className='title1'>{notes.title}</div>
                            <div className='title-desc'>{notes.description}</div>
                        </div>
                        <div className='icons'><Icons mode="display" notes={notes} changeColour1={changeColor} changeArchive={() => changeArchive(notes._id)} isdeleteChange={() => isdeleteChange(notes._id)} getnote={() => props.getnote()} /></div>
                    </div>
                </div>
            })
            }

            <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <div style={{ backgroundColor: '#ffffff', width: "100%", overflow: "hidden" }}>
                    <div style={{ backgroundColor: notes.colour }}>

                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>

                            <input name="title" style={{ border: "none", outline: "none", backgroundColor: notes.colour }} value={dialogbox.title} onChange={(e) => { changeField(e, notes._id) }} />

                        </BootstrapDialogTitle>
                        <DialogContent>
                        
                            <input  name="description" style={{ border: "none", outline: "none", backgroundColor: notes.colour }} value={dialogbox.description} onChange={(e) => { changeField(e, notes._id) }} />

                        </DialogContent>
                        <DialogContent className="close-Icon">
                        {/* changeColour1={() => changeColor(notes.colour)} */}
                            <Icons mode="display" notes={notes} changeColour1={changeColor} changeArchive={() => changeArchive(notes._id)} isdeleteChange={() => isdeleteChange(notes._id)} getnote={() => props.getnote()} />
                            
                            <Button autoFocus onClick={() => handleClose(notes)} style={{ backgroundColor: notes.colour }} > Close </Button>

                        </DialogContent>
                    </div>
                </div>
            </BootstrapDialog>
        </div>
    )
}

export default DisplayNote;