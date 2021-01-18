import React from 'react';
import mainStyles from './Main.styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppsIcon from '@material-ui/icons/Apps';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import ReceiptIcon from '@material-ui/icons/Receipt';





const Main = () => {
    const classes = mainStyles();
    return (
        <main className={classes.root}>
            <div className={classes.intro}>
                <Typography className={classes.kit} variant="subtitle1" color="initial">
                    Material Kit React PRO is a Material-UI Kit with a fresh, new design inspired by Google's
                    Material Design. You asked for it, so we built it. It's a great pleasure to introduce to you the material
                    concepts in an easy to use and beautiful set of components.
                </Typography>
            </div>
            <Grid className={classes.featuresContainer} container spacing={5} justify="center">
                <Grid  item xs={12} sm={6} md={4}  >
                    <Paper className={classes.feature} elevation={0} >
                        <AppsIcon className={`${classes.featureIcon} ${classes.featureIcon1}`} />
                        <Typography className={classes.featureTitle} variant="h5" color="initial">Huge Number of Components</Typography>
                        <Typography className={classes.featureText} variant="body1" color="initial">
                            Every element that you need in a product comes built in as a component.
                            All components fit perfectly with each other and can take variations in colour.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}  >
                    <Paper className={classes.feature} elevation={0} >
                        <CalendarViewDayIcon className={`${classes.featureIcon} ${classes.featureIcon2}`} />
                        <Typography className={classes.featureTitle} variant="h5" color="initial">Multi-Purpose Sections</Typography>
                        <Typography className={classes.featureText} variant="body1" color="initial">
                            Putting together a page has never been easier than matching together sections.
                            From team presentation to pricing options, you can easily customise and built your pages.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}  >
                    <Paper className={classes.feature} elevation={0} >
                        <ReceiptIcon className={`${classes.featureIcon} ${classes.featureIcon3}`} />
                        <Typography className={classes.featureTitle} variant="h5" color="initial">Example Pages</Typography>
                        <Typography className={classes.featureText} variant="body1" color="initial">
                            If you want to get inspiration or just show something directly to your clients,
                            you can jump start your development with our pre-built example pages.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </main>
    )
}

export default Main;
