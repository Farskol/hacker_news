import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/" className="header">
                    <Typography>
                        Hacker News
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;