import { makeStyles } from '@material-ui/core';

const sectionConventionalStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        background: 'radial-gradient(ellipse at center,#585858 0,#232323 100%)',
        backgroundColor: '#343434',
        width: '100%',
        margin: '0 auto'
        // padding: '1rem 5rem 1rem 0',
    },
    imageContainer: {
        height: '80vh',
        backgroundColor: 'transparent',
        padding: 0
    },
    cardImage: {
        width: '130%',
        height: '160%',
        marginLeft: '-14rem',
        marginTop: '-8rem'
    },
    textContainer: {
        padding: '1rem 6rem',
        backgroundColor: 'transparent',
    },
    title: {
        color: theme.palette.common.white,
        fontWeight: 700,
        fontSize: '1.6rem',
        marginBottom: '1.3rem'
    },
    subTitle: {
        color: theme.palette.grey[400],
        marginBottom: '.71rem'
    },
    bodyText: {
        color: theme.palette.grey[400],
    }
}));

export default sectionConventionalStyles;
