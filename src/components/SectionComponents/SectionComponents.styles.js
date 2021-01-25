import { makeStyles } from "@material-ui/core";

const sectionComponentsStyles = makeStyles(theme => ({
    root: {
        padding: '10rem 5rem'
    },
    basic: {

    },
    title: {
        fontSize: '1.7rem',
        fontWeight: 700,
        color: theme.palette.grey[700],
        marginBottom: '.8rem'
    },
    subTitle: {
        fontSize: '.75rem',
        color: theme.palette.grey[500],
        marginBottom: '1.7rem'
    },
    bodyText: {
        color: theme.palette.grey[500],
    },
    sectionContainer: {
        position: 'relative'
    },
    imageContainer: {
        width: '100%',
        height:'70vh',
        // backgroundColor: 'red'
    },
    mainImage: {
        height: '120%',
        width: '125%',
        objectFit: 'cover',
        display: 'block'
    },
    fbShareContainer: {
        width: '7vw',
        position: 'absolute',
        top: '-1rem',
        left: '6rem',
        animation: `$testEffect 14s infinite`
    },
    focusImgContainer: {
        width: '10vw',
        position: 'absolute',
        top: '0.8rem',
        left: '13rem',
        animation: `$testEffect 24s infinite`

    },
    twitterImgContainer: {
        width: '10vw',
        position: 'absolute',
        top: '4rem',
        left: '33rem',
        animation: `$testEffect 14s infinite`
    },
    tableImgContainer: {
        width: '18vw',
        position: 'absolute',
        top: '9rem',
        left: '0rem',
        animation: `$testEffect 19s infinite`
    },
    reportImgContainer: {
        width: '6vw',
        position: 'absolute',
        top: '24rem',
        left: '6rem',
        animation: `$testEffect 16s infinite`

    },
    socialImgContainer: {
        width: '26vw',
        position: 'absolute',
        top: '24rem',
        left: '26rem',
        animation: `$testEffect 20s infinite`
    },
    movingImg: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        display: 'block',
        boxShadow: '0px 1px 5px 1px rgba(0,0,0,0.75)',
        borderRadius: '.1rem'
    },
    "@keyframes testEffect": {
        "0%": {
            transform: "translateX(0)"
        },
        "50%": {
            transform: "translateX(70%)"
        },
        "100%": {
            transform: "translateX(0)"
        }
    }
}));

export default sectionComponentsStyles;