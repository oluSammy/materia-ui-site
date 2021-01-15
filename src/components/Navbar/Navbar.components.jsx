import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import navbarStyles from './Navbar.styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppsIcon from '@material-ui/icons/Apps';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import DescriptionIcon from '@material-ui/icons/Description';


const Navbar = () => {
    const classes = navbarStyles();
    const [anchorEl1, setAnchorEl1] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const [anchorEl3, setAnchorEl3] = useState(null);
    const [navbar, setNavbar] = useState(false);

    const handleMenuClick = e => {
        switch (e.currentTarget.name) {
            case 'anchorEl1':
                setAnchorEl1(e.currentTarget);
                break;
            case 'anchorEl2':
                setAnchorEl2(e.currentTarget);
                break;
            case 'anchorEl3':
                setAnchorEl3(e.currentTarget);
                break;
            default:
        }
    }

    const handleMenuClose = e => {
        switch (e.currentTarget.name) {
            case 'anchorEl1':
                setAnchorEl1(null);
                break;
            case 'anchorEl2':
                setAnchorEl2(null);
                break;
            case 'anchorEl3':
                setAnchorEl3(null);
                break;
            default:
        }
    }

    const handleCloseMenu1 = () => {
        setAnchorEl1(null);
    }

    const handleCloseMenu2 = () => {
        setAnchorEl2(null);
    }

    const handleCloseMenu3 = () => {
        setAnchorEl3(null);
    }

    const changeNavBg = () => {
        window.scrollY >=450 ? setNavbar(true) : setNavbar(false);
    };

    window.addEventListener('scroll', changeNavBg);

    const tabs = [
        {
            tabName: 'Components',
            arialControl: 'simple-menu',
            startIcon: <AppsIcon />,
            anchor: anchorEl1,
            anchorName: 'anchorEl1',
            closeFunction: handleCloseMenu1,
            menu: [
                { name: 'Presentation Page', icon: <SubtitlesIcon /> },
                { name: 'All Components', icon: <MeetingRoomIcon /> },
                { name: 'Documentation', icon: <DescriptionIcon /> }
            ]
        },
        {
            tabName: 'Sections',
            arialControl: 'another-menu',
            startIcon: <CalendarViewDayIcon />,
            anchor: anchorEl2,
            anchorName: 'anchorEl2',
            closeFunction: handleCloseMenu2,
            menu: [
                { name: 'Presentation Page', icon: <SubtitlesIcon /> },
                { name: 'All Components', icon: <MeetingRoomIcon /> },
                { name: 'Documentation', icon: <DescriptionIcon /> },
                { name: 'Documentation', icon: <DescriptionIcon /> },
                { name: 'Documentation', icon: <DescriptionIcon /> },
                { name: 'Documentation', icon: <DescriptionIcon /> },
                { name: 'Documentation', icon: <DescriptionIcon /> },
                { name: 'Documentation', icon: <DescriptionIcon /> },
            ]
        },
        {
            tabName: 'Examples',
            arialControl: 'example-menu',
            startIcon: <ReceiptIcon />,
            anchor: anchorEl3,
            anchorName: 'anchorEl3',
            closeFunction: handleCloseMenu3,
            menu: [
                { name: 'Presentation Page', icon: <SubtitlesIcon /> },
                { name: 'All Components', icon: <MeetingRoomIcon /> },
                { name: 'Documentation', icon: <DescriptionIcon /> },
                { name: 'Documentation', icon: <DescriptionIcon /> },
                { name: 'Documentation', icon: <DescriptionIcon /> },
                { name: 'Documentation', icon: <DescriptionIcon /> },
            ]
        }
    ]

    return (
        <AppBar className={navbar ? classes.appBarColoured : classes.appBarStyles} position="fixed">
            <Toolbar classes={{ gutters: classes.toolbarGutter }}>
                <h1 className={`${classes.grow} ${classes.title}`}>Material Kit Pro React</h1>
                <ul className={classes.navList}>
                    {
                        tabs.map(el => (
                            <li key={el.tabName}>
                                <Button className={classes.navMenu}
                                    aria-controls={el.arialControl}
                                    aria-haspopup="true"
                                    variant='contained'
                                    startIcon={ el.startIcon }
                                    endIcon={<ArrowDropDownIcon className={Boolean(el.anchor) ? classes.rotateEndIcon : ''} />}
                                    onClick={handleMenuClick}
                                    name={el.anchorName} >
                                    <Typography className={classes.btnText} >{el.tabName}</Typography>
                                </Button>
                            </li>
                        ))
                    }
                    <li>
                        <Fab className={classes.extendedIcon} variant="extended">
                            <ShoppingCartIcon className={classes.cartIcon} fontSize="small" />
                            BUY NOW
                        </Fab>
                    </li>
                </ul>
            </Toolbar>
            {
                tabs.map(el => (
                    <Menu
                        className={classes.navDropDown}
                        id={el.arialControl}
                        anchorEl={el.anchor}
                        keepMounted
                        open={Boolean(el.anchor)}
                        onClose={el.closeFunction}
                    >
                        {
                            el.menu.map(menu => (
                                <MenuItem className={classes.menuItem} onClick={el.closeFunction}>
                                    <ListItemIcon style={{width: '20px'}}>
                                        {menu.icon}
                                    </ListItemIcon>
                                    {/* <ListItemText  primary={menu.name} /> */}
                                    <Typography variant="Subtitle1" className={classes.menuText} >
                                        {menu.name} 
                                    </Typography>
                                </MenuItem>
                            ))
                        }
                    </Menu>
                ))
            }
        </AppBar>
    );
}

export default Navbar
