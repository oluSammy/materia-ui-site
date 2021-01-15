import { makeStyles } from '@material-ui/core/styles';


const navMenuStyles = makeStyles(theme => ({
    navMenu: {
        backgroundColor: 'transparent',
        color: theme.palette.common.white,
        boxShadow: 'none',
        padding: '.61rem',
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
    }
}));

export default navMenuStyles;