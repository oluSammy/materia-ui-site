import { makeStyles } from "@material-ui/core";
import hero from '../../assets/img/banner.jpg';

const bannerStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundImage: `linear-gradient(rgba(10, 13, 15, 0.433), rgba(9, 11, 14, 0.495)),url(${hero})`,
        minHeight: '90vh',
        backgroundSize: 'cover'
    }
}));

export default bannerStyles;