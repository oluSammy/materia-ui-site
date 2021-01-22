import React from 'react'
import Banner from './../Banner/Banner.components';
import Main from './../Main/Main.component';
import homeStyles from './Home.styles';

const Home = () => {
    const classes = homeStyles();
    return (
        <div className={classes.root}>
            <Banner />
            <Main />
        </div>
    )
}

export default Home
