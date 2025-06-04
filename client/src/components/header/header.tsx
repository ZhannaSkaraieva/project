import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { LogoGroup } from "./logogroup";
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
    { label: 'QUESTS', path: '/' },
    { label: 'For Beginers', path: '/' },
    { label: 'Reviews', path: '/' },
    { label: 'Promotions', path:'/'},
    { label: 'Contacts', path: '/contact'},
    ];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
    return (
        <AppBar position="static" color="transparent">
            <Container maxWidth={false} disableGutters sx={{ width: '1366px'}}>
                <Toolbar disableGutters>
{/* Левая часть — логотип + иконка */}
                    <Box component="section"
                        sx={{
                        width: '1366px',
                        height: '74px',
                        }}>
                        <LogoGroup />
                    </Box>

{/* АДАПТИВНОЕ МЕНЮ */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                      <IconButton
                        size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleOpenNavMenu}
                          color="inherit"
                      >
                      <MenuIcon />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                      >
                      {pages.map((page) => (
                        <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                          <Typography sx={{ textAlign: 'center' }}>{page.label}</Typography>
                        </MenuItem>
                      ))}
                      </Menu>
                      </Box>
                    
                    
{/* Центр — горизонтальное меню */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 3  }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.path}
                                    component={RouterLink}
                                    to={page.path}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 5, color: 'white', display: 'block' }}
                                >
                                    {page.label}
                                </Button>
                            ))}
                    </Box>

{/* Правая часть — телефон */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                       
                        <Typography variant="body1">+38 (099) 123-45-67</Typography>
                    </Box>
                    
                </Toolbar>    
            </Container>
        </AppBar>
    );
}

export default Header;