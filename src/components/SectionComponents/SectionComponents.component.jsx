import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import sectionComponentsStyles from './SectionComponents.styles';
import laptopImg from '../../assets/img/laptop-basics.png';
import fbShare from '../../assets/img/fb.jpg';
import focusImg from '../../assets/img/focus.jpg';
import twitterImg from '../../assets/img/tweet.jpg';
import tableImg from '../../assets/img/table.jpg';
import reportImg from '../../assets/img/report.jpg';
import socialImg from '../../assets/img/social.jpg';


const SectionComponents = () => {
    const classes = sectionComponentsStyles();
    return (
        <Grid container spacing={8} alignItems="center" className={classes.root} >
            <Grid item sm={12} md={5} >
                <Paper className={classes.basic} elevation={0} >
                    <Typography className={classes.title} variant="h3">Basic Components</Typography>
                    <Typography className={classes.subTitle} variant="subtitle2">THE CORE ELEMENTS OF YOUR WEBSITE</Typography>
                    <Typography className={classes.bodyText} variant="body1">
                        We re-styled every Bootstrap element to make it resemble Material Design and also fit with each other.
                        All the Bootstrap components that you need in a development have been re-design with the new look.
                        Besides the numerous basic elements, we have also created additional classes.
                        All these items will help you take your project to the next level.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item sm={12} md={7} >
                <div className={classes.sectionContainer} >
                    <Paper elevation={0} className={classes.imageContainer} >
                        <img className={classes.mainImage} src={laptopImg} alt="laptop basics"/>
                    </Paper>
                    <div className={classes.fbShareContainer} >
                        <img src={fbShare} alt="facebook share" className={classes.movingImg} />
                    </div>
                    <div className={classes.focusImgContainer} >
                        <img src={focusImg} alt="facebook share" className={classes.movingImg} />
                    </div>
                    <div className={classes.twitterImgContainer} >
                        <img src={twitterImg} alt="facebook share" className={classes.movingImg} />
                    </div>
                    <div className={classes.tableImgContainer} >
                        <img src={tableImg} alt="facebook share" className={classes.movingImg} />
                    </div>
                    <div className={classes.reportImgContainer} >
                        <img src={reportImg} alt="facebook share" className={classes.movingImg} />
                    </div>
                    <div className={classes.socialImgContainer} >
                        <img src={socialImg} alt="facebook share" className={classes.movingImg} />
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default SectionComponents
