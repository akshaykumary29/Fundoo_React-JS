import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SearchIcon from '@mui/icons-material/Search';
import SearchOutlinedIcon from '@mui/icons-material/SearchOffOutlined'
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined'
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


import {
    Switch,
    Route

} from "react-router-dom";

import '../dashboard/Dashboard.scss'
// import { typography } from '@mui/system';
import Notes from '../notes/Notes';
import Archive from '../archive/Archive';
import IsBin from '../bin/IsBin';
import { useHistory } from 'react-router-dom';
import SignOut from '../signOut/SignOut';
import NoteServices from '../../services/NoteServices';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
    boxShadow: "0px",
    border: "1px solid lightgray",
    color: "black",
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        // width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 10,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',

        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const history = useHistory();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (!localStorage.getItem("token")) {
            history.push('/signin')
        }
    }, [])

    let list = [
        {
            text: "Notes",
            icons: <LightbulbOutlinedIcon />,
        },
        {
            text: "Reminders",
            icons: <NotificationsOutlinedIcon />,
        },
        {
            text: "Edit labels",
            icons: <CreateOutlinedIcon />,
        },
        {
            text: "Archive",
            icons: <ArchiveOutlinedIcon />,
        },
        {
            text: "Bin",
            icons: <DeleteForeverOutlinedIcon />
        }
    ]
    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    //   const handleDrawerClose = () => {
    //     setOpen(false);
    //   };

    const changeroutes = (text) => {
        if (text.text == "Notes") {
            history.push('/')
        }
        else if (text.text == "Archive") {
            history.push('/archive')
        }
        else if (text.text == "Bin") {
            history.push('/deleted')
        }
        else {
            console.log("page not found");
        }
    }


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            
            <AppBar position="fixed" open={open}>
            <div className='bar-app'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    // sx={{
                    //     marginRight: '36px',
                    //     ...(open && { display: 'none' }),
                    // }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <div className="mainHeader"> */}
                    <img className="keep" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="keep logo"></img>
                    <Typography variant="h6" noWrap overflow="inherit" component="div">
                        Keep
                    </Typography>
                    <div className='header'>
                        <div className='search-bar'><IconButton> <SearchIcon /> </IconButton>
                         {/* <SearchIcon /> */}
                            <input className='search' type="text" placeholder='Search' />
                        </div>
                        
                        <div className='hearder-bar'>
                            <ul className="header-icon">
                                <IconButton> <RefreshOutlinedIcon /> </IconButton>
                                <IconButton> <ViewAgendaOutlinedIcon /> </IconButton>
                                <IconButton> <SettingsOutlinedIcon /> </IconButton>
                                <IconButton> <AppsOutlinedIcon /></IconButton>
                                <IconButton> <SignOut /> </IconButton>
                                {/* <div>
                                    <SignOut />
                                </div> */}
                            </ul>
                        </div>
                    </div>
                    {/* </div> */}
                </Toolbar>
                </div>
            </AppBar>
            
            <div className='side-bar'>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton >
                        {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                    </IconButton>
                </DrawerHeader>
                {/* <Divider /> */}
                <List>
                    {list.map((text, index) => (
                        <ListItem button key={text.text} onClick={() => changeroutes(text)} >
                            <ListItemIcon>

                                {text.icons}

                            </ListItemIcon>
                            <ListItemText primary={text.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            </div>
            <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                <DrawerHeader />
                <typography>

                    {/* <Notes /> */}

                    <Switch>
                        <Route exact path='/' component={Notes } />
                        <Route exact path='/archive' component={Archive } />
                        <Route exact path='/deleted' component={IsBin } />
                    </Switch>

                </typography>
            </Box>
        </Box >
    );
}
