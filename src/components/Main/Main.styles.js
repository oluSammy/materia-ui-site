import { makeStyles } from "@material-ui/core";

const mainStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        minHeight: '80vh',
        boxShadow: '0px 1px 19px -1px rgba(0,0,0,0.54)',
        width: '95%',
        margin: '0 auto',
        borderRadius: '1rem',
        marginTop: '-6rem',
        zIndex: '1000',
        backgroundColor: theme.palette.common.white,
        paddingBottom: '12rem',
    },
    intro: {
        padding: '7rem 1rem'
    },
    kit: {
        width: '70%',
        margin: '0 auto',
        textAlign: 'center',
        color: theme.palette.grey[600],
        fontSize: '1.4rem',
        fontWeight: 300
    },
    featuresContainer: {
        width: '100%',
        margin: '0 auto',
        padding: '.4rem 4rem'
        // marginBottom: '2rem'
    },
    feature: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    featureIcon: {
        fontSize: '4rem',
        marginBottom: '2rem'
    },
    featureIcon1: {
        color: 'red'
    },
    featureIcon2: {
        color: 'purple'
    },
    featureIcon3: {
        color: 'green'
    },
    featureTitle: {
        fontSize: '1.2rem',
        fontWeight: 700,
        color: theme.palette.grey[800],
        textAlign: 'center'
    },
    featureText: {
        fontSize: '1rem',
        textAlign: 'center',
        color: theme.palette.grey[600],
        marginTop: '1rem'
    }

}));

export default mainStyles;