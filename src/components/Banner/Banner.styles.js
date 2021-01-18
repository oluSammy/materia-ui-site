import { makeStyles } from "@material-ui/core";
import hero from '../../assets/img/banner.jpg';

const bannerStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundImage: `linear-gradient(rgba(10, 13, 15, 0.433), rgba(9, 11, 14, 0.495)),url(${hero})`,
        minHeight: '90vh',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '-10'
    },
    bannerText: {
        color: theme.palette.common.white
    },
    sup: {
        marginLeft: '.7rem',
        fontSize: '1.3rem',
        color: '#424242',
        backgroundColor: theme.palette.common.white,
        padding: '.6rem 1rem',
        borderRadius: '.3rem'
    },
    bannerTittle: {
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '4rem',
        textTransform: 'capitalize'
    },
    bannerSubtitle: {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: '1.55rem'
    }
}));

export default bannerStyles;