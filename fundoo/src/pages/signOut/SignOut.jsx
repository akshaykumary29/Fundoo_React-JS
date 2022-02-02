import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../signOut/SignOut.scss'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function SignOut() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <div className='signOut-page'>
            <IconButton>
                < AccountCircleOutlinedIcon aria-describedby={id} onClick={handleClick} style={{ backgroundColor: 'white' }} />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }} >
                    <div className='userDetail'>

                        <div className='userName' >
                            <div className="fundoo">
                                <p style={{ color: 'blue' }} >F</p>
                                <p style={{ color: 'red' }}>u</p>
                                <p style={{ color: 'yellow' }}>n</p>
                                <p style={{ color: 'blue' }}>d</p>
                                <p style={{ color: 'green' }}>o</p>
                                <p style={{ color: 'red' }}>o</p>
                            </div>
                        </div>
                        <div>
                            <Link to="/signin"> <Button className='signOut'>Sign Out</Button> </Link>
                        </div>
                    </div>
                </Typography>
            </Popover>
        </div>
    );
}