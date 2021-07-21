import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from './NavigationItems.js';
import DrawerToggle from './DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo} onClick={props.RedirectToMainPage} >

            <span style={{ color: "#FEDC19", fontWeight: "bold", fontSize: "2rem" }}><span style={{ color: "#483C23" }}>JUS</span>AKO</span>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>

    </header>
);

export default toolbar;