import { IconButton, Typography } from "@mui/material";
import React, { Component } from "react";

import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import '../icons/Icons.scss'

import { MenuItem } from "@material-ui/core";
import Popover from "@mui/material/Popover"
import NoteServices from "../../services/NoteServices";


let colours = [
    "#f28b82", "#fbbc04", "#fff475", "#ccff90",
    "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb",
    "#fdcfe8", "#e6c9a8", "#e8eaed"
]

let More = ["Delete note", "Add label", "Add drawing", "Make a copy", "Show tick boxes"]

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

    handleOpenMore = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        })
    }

    handleCloseMore = () => {
        this.setState({
            anchorEl: false
        })
    }

    upateColor = (val) => {
        if (this.props.mode === "create") {
            this.props.changeColour1(val)
        }
        else if (this.props.mode === "display") {
            let data = {
                "_id": this.props.notes._id,
                "colour": val,
            }
            NoteServices.updateNotes(data)
                .then((res) => {
                    console.log(res);
                    this.props.changeColour1() //refresh ui..calling getnotes
                })
                .catch(() => {
                    // console.log();
                })
        }
    }

    useArchive = () => {
        if (this.props.mode === "create") {
            this.props.changeArchive()
        }
        else if (this.props.mode === "display") {
            this.props.changeArchive()
        }
    }

    handleMore = () => {
        if (this.props.mode === "display") {
            this.props.isdeleteChange()
        }
    }

    render() {

        const { anchorEl, colour } = this.state

        // const open = Boolean(anchorEl);
        // const id = open ? 'simple-popover' : undefined;

        return (

            <div className="icon-main">
                <IconButton> <AddAlertOutlinedIcon /> </IconButton>
                <IconButton> <PersonAddAlt1OutlinedIcon /> </IconButton>

                <div>
                    <IconButton> <ColorLensOutlinedIcon onClick={(e) => this.handleOpenColor(e)} variant="contained" />
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
                                <div className="icon-color">
                                    {
                                        colours.map((item, index) => (
                                            <div className="color-pallets" onClick={() => this.upateColor(item)} style={{ backgroundColor: item }}>
                                                {item.backgroundColor}
                                            </div>
                                        ))
                                    }
                                </div>
                            </Typography>
                        </Popover>
                    </IconButton>
                </div>
                <IconButton> <PhotoOutlinedIcon /> </IconButton>

                <div>
                    <IconButton> <ArchiveOutlinedIcon onClick={this.useArchive} /> </IconButton>
                </div>

                <div>
                    <IconButton> <MoreVertOutlinedIcon onClick={(e) => this.handleOpenMore(e)} /> </IconButton>
                    <Popover
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={this.handleCloseMore}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left"
                        }}
                    >
                        {
                            More.map((more, index) => (
                                <MenuItem onClick={() => this.handleMore(more)}>
                                    {more}
                                </MenuItem>
                            ))
                        }

                    </Popover>
                </div>
            </div>
        )
    }
}

export default Icons;