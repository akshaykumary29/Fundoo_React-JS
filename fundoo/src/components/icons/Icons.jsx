import { IconButton } from "@mui/material";
import React, { Component } from "react";

import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export class Icons extends Component {

    render(){
        return (

            <div>
                <IconButton> <AddAlertOutlinedIcon /> </IconButton>
                <IconButton> <PersonAddAlt1OutlinedIcon /> </IconButton>
                <IconButton> <ColorLensOutlinedIcon /> </IconButton>
                <IconButton> <PhotoOutlinedIcon /> </IconButton>
                <IconButton> <ArchiveOutlinedIcon /> </IconButton>
                <IconButton> <MoreVertOutlinedIcon /> </IconButton>
            </div>
        )
    }
}