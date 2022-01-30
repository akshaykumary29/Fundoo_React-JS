import { IconButton, Typography } from "@mui/material";
import React, { Component } from "react";

import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import '../icons/Icons.scss'

import { Popover } from "@material-ui/core";

let colours = [
    "#f28b82", "#fbbc04", "#fff475", "#ccff90",
    "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb",
    "#fdcfe8", "#e6c9a8", "#e8eaed"
]


export class Icons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: false,
            colour: false
        }
    }


    handleOpenColor = (e) => {
        this.setState({
            colour: e.currentTarget,
        })
    }

    handleCloseColor = () => {
        this.setState({
            colour: false
        })
    }

   
    render() {

        const { anchorEl, colour } = this.state
        return (

            <div className="icon-main">
                <IconButton> <AddAlertOutlinedIcon /> </IconButton>
                <IconButton> <PersonAddAlt1OutlinedIcon /> </IconButton>


                <div>
                    <IconButton> <ColorLensOutlinedIcon varient="contained" onClick={(e) => this.handleOpenColor(e)} /> 
                    <Popover
                        style={{ display: "flex" }}
                        id="simple-menu"
                        anchorEl={colour}
                        keepMounted
                        open={Boolean(colour)}
                        onClose={this.handleCloseColor}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left"
                        }}
                    >
                        <Typography sx={{ p: 1 }}>
                        {
                            colours.map((item, index) => (
                                <div className="icon-color">
                                    <div className="color-pallets" onClick={() => this.upateColor(item)} style={{ backgroundColor: item }}>
                                        {item.backgroundColor}
                                    </div>
                                </div>
                            ))
                        }
                        </Typography>
                    </Popover>
                    </IconButton>
                </div>
                <IconButton> <PhotoOutlinedIcon /> </IconButton>
                <IconButton> <ArchiveOutlinedIcon /> </IconButton>

                <div>
                <IconButton> <MoreVertOutlinedIcon /> </IconButton>
                        
                </div>
            </div>
        )
    }
}