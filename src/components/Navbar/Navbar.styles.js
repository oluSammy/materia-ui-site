import { makeStyles } from '@material-ui/core';

const navbarStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    appBarStyles: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    appBarColoured: {
        backgroundColor: theme.palette.primary,
    },
    toolbarGutter: {
        padding: '0 9vw 0 9vw'
    },
    title: {
        fontWeight: 300,
        fontSize: '1.3rem',
        fontFamily: 'Roboto',
        color: theme.palette.common.white,
    },
    navList: {
        listStyleType: 'none',
        display: 'flex',
    },
    navMenu: {
        backgroundColor: 'transparent',
        color: theme.palette.common.white,
        boxShadow: 'none',
        padding: '.61rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            "& $endIcon": {
                transform: 'rotate(180deg)',
                transition: 'all .5s ease-in-out'
            },
        },
        '&:active': {
        }
    },
    rotateEndIcon: {
        transform: 'rotate(180deg)',
        transition: 'all .5s ease-in-out'
    },
    btnText: {
        fontSize: '12px'
    },
    navDropDown: {
        marginTop: '3rem'
    },
    extendedIcon: {
        backgroundColor: theme.palette.common.white,
        padding: '1rem 2rem',
        color: '#9e9e9e',
        fontSize: '.8rem'
    },
    cartIcon: {
        marginRight: '.3rem'
    },
    endIcon: {
        marginLeft: '-4px'
    },
    menuItem: {
        '&:hover': {
            backgroundColor: '#00acc1',
            "& $menuText": {
                color: theme.palette.common.white
            }
        }
    },
    menuText: {
        marginLeft: '-1rem',
        fontSize: '.9rem',
        color: '#616161',
    }
}));

export default navbarStyles;
