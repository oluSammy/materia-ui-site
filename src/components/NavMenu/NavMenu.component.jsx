import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import navMenuStyles from './NavMenu.styles';


const NavMenu = ({ handleMenuClick, menuId, anchorEl, startIcon, endIcon, btnText }) => {
    const classes = navMenuStyles();
    return (
        <li>
            <Button className={classes.navMenu}
                aria-controls={menuId}
                aria-haspopup="true"
                variant='contained'
                startIcon={ <AppsIcon /> }
                endIcon={<ArrowDropDownIcon className={classes.endIcon} />}
                onClick={handleMenuClick} >
                    components
                {/* <Typography className={classes.btnText} component="body2" >Components</Typography> */}
            </Button>
        </li>
    )
}

export default NavMenu