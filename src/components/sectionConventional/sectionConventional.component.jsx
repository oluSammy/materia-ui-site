import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import sectionConventionalStyles from './sectionConventional.styles';
import cardImage from '../../assets/img/cards-con.png';

const SectionConventional = () => {
    const classes = sectionConventionalStyles();

    return (
        <Grid container spacing={2} alignItems="center" className={classes.root} >
            <Grid item xs={12} md={7} >
                <Paper elevation={0} className={classes.imageContainer} >
                    <img src={cardImage} className={classes.cardImage} alt="card pics"/>
                </Paper>
            </Grid>
            <Grid item xs={12} md={5} >
                <Paper elevation={0} className={classes.textContainer} >
                    <Typography className={classes.title} variant="h3">Unconventional Cards</Typography>
                        <Typography className={classes.subTitle} variant="subtitle2">ONE CARD FOR EVERY PROBLEM</Typography>
                        <Typography className={classes.bodyText} variant="body1">
                            We love cards and everybody on the web seems to. We have gone above
                            and beyond with options for you to organise your information. From cards
                            designed for blog posts, to product cards or user profiles, you will have many
                            options to choose from. All the cards follow the material principles
                        and have a design that stands out.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default SectionConventional
