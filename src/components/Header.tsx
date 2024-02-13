import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h2">Orders</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
