import React from 'react';
import bannerStyles from './Banner.styles';
import Navbar from './../Navbar/Navbar.components';

const Banner = () => {
    const classes = bannerStyles();
    return (
        <div className={classes.root}>
            <Navbar />
            <h1>Material kit react</h1>
        </div>
    )
}

export default Banner
