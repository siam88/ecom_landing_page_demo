import React from 'react';

import NavigationItems from './NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from './Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                   Categories
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>)
};

export default sideDrawer;