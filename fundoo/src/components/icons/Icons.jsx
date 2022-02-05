import { IconButton, Typography } from "@mui/material";
import React from "react";

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

export default function Icons(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchor, setAnchor] = React.useState(null);

    const handleOpenColor = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseColor = () => {
        setAnchorEl(null);
    };

    const handleOpenMore = (event) => {
        setAnchor(event.currentTarget);
    };

    const handleCloseMore = () => {
        setAnchor(null);
    };

    const open = Boolean(anchorEl);
    const open1 = Boolean(anchor);
    const id = open ? 'simple-popover' : undefined;
    const id1 = open1 ? 'simple-popover' : "";

    const upateColor = (val) => {
        if (props.mode === "create") {
            props.changeColour1(val)
        }
        else if (props.mode === "display") {

            let data = {
                "_id": props.notes._id,
                "colour": val,                     //adding color
            }
            NoteServices.updateNotes(data)
                .then((res) => {
                    console.log(res);
                    // props.changeColour1(val)
                    props.getnote()
                }).catch((err) => {
                })
        }

    }

    const useArchive = () => {
        if (props.mode === "create") {
            props.changeArchive()
        }
        else if (props.mode === "display") {
            props.changeArchive()
        }
    }
    const handleMore = () => {
        if (props.mode === "display") {
            props.isdeleteChange()
        }
    }

    return <div className='icon-main'>
        <IconButton><AddAlertOutlinedIcon htmlColor="grey" /></IconButton>
        <IconButton><PersonAddAlt1OutlinedIcon htmlColor="grey" /></IconButton>
        <div>
            <IconButton> <ColorLensOutlinedIcon htmlColor="grey" onClick={handleOpenColor} variant="contained" aria-describedby={id} />
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleCloseColor}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >

                    <Typography sx={{ p: 1 }}>
                        <div className='icon-color'>

                            {
                                colours.map((item) => {
                                    return <div className='color-pallets' style={{ backgroundColor: item }} onClick={() => upateColor(item)}></div>
                                }
                                )}
                        </div>
                    </Typography>
                </Popover>
            </IconButton>
        </div>
        <div>
            <IconButton> <PhotoOutlinedIcon htmlColor="grey" /> </IconButton>
        </div>
        <div>
            <IconButton><ArchiveOutlinedIcon htmlColor="grey" onClick={useArchive} /></IconButton>
        </div>

        <div>
            <IconButton> <MoreVertOutlinedIcon htmlColor="grey" onClick={handleOpenMore} variant="contained" aria-describedby={id1} /></IconButton>

            <Popover
                id={id1}
                open={open1}
                anchorEl={anchor}
                onClose={handleCloseMore}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >

                <Typography sx={{ p: 1 }}>
                    {
                        More.map((more, index) => (
                            <MenuItem onClick={() => handleMore(more)}>
                                {more}
                            </MenuItem>
                        ))
                    }
                </Typography>
            </Popover>
        </div>
    </div>;
}