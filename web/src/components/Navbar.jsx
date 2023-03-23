import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography sx={{ flexGrow: 1 }} variant='h6'>
                            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                                PERN Stack
                            </Link>
                        </Typography>
                        <Button variant='contained' color='primary' onClick={() => navigate('/tasks/new')}>
                            New Task
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
