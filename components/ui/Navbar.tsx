import NextLink from 'next/link';

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { UiContex } from '../../context';
import { useContext } from 'react';

export const Navbar = () => {
    const {toggleMenu} = useContext(UiContex)
    const router = useRouter();
    
    const isActive   = ( urlBtn : string )=> {
        if ( urlBtn === router.asPath) return true;
        return false;
    }

  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/' passHref>
                <Link display='flex' alignItems='center'>
                    <Typography variant='h6'>Teslo |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>  
            </NextLink>

            <Box flex={ 1 } />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <NextLink href='/category/men' passHref >
                    <Link>
                        <Button sx={{mx: '4px'}} color={ isActive('/category/men') ? 'primary' : 'info' }>Hombres</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/women' passHref>
                    <Link>
                        <Button sx={{mx: '4px'}}  color={ isActive('/category/women') ? 'primary' : 'info' }>Mujeres</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/kids' passHref>
                    <Link>
                        <Button sx={{mx: '4px'}}  color={ isActive('/category/kids') ? 'primary' : 'info' }>Niños</Button>
                    </Link>
                </NextLink>
            </Box>


            <Box flex={ 1 } />

            <IconButton>
                <SearchOutlined />
            </IconButton>

            <NextLink href="/cart" passHref>
                <Link>
                    <IconButton>
                        <Badge badgeContent={ 2 } color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>
            </NextLink>


            <Button  onClick={toggleMenu}>
                Menú
            </Button>

        </Toolbar>
    </AppBar>
  )
}
