import React from 'react';
import bannerStyles from './Banner.styles';
import Navbar from './../Navbar/Navbar.components';

const Banner = () => {
    const classes = bannerStyles();
    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.bannerText}>
                <h1 className={classes.bannerTittle}>Material kit react<sup className={classes.sup}>PRO</sup></h1>
                <h4 className={classes.bannerSubtitle}>A Badass material-ui kit based on material design.</h4>
            </div>
        </div>
    )
}

export default Banner
