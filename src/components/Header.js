import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link to="/" className="header">
                        Hacker News
                    </Link>
                </Typography>
                <Button color="inherit">
                    <Link to="/" className="header">
                        Back to news list
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;