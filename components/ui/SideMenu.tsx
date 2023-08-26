import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"
import { useContext, useState } from "react"
import { UiContex } from "../../context"
import { useRouter } from "next/router"


export const SideMenu = () => {
    
    const { isMenuOpen, toggleMenu } = useContext(UiContex)
    
    const [searchTerm, setSeachTerm] = useState('');
    

    const handleSearch = (term : string)=>{
        term.trim();
        if(term.length <= 0) setSeachTerm('');
        setSeachTerm(term);
    }
    
    const router = useRouter();

    const navigation = ( url : string ) =>{
        router.push( url );
        toggleMenu();
    }

    const seacrhProducts = ()=>{
        const url = `/search/${searchTerm}`;
        navigation( url );
    }
  return (
    <Drawer
        open={ isMenuOpen }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        onClose={ toggleMenu }

    >
        <Box sx={{ width: 250, paddingTop: 5 }}>            
            <List>
                <ListItem>
                    <Input
                        defaultValue={searchTerm}
                        onKeyPress={(e)=> {if(e.code === 'Enter') seacrhProducts()} }
                        onChange={(e)=> handleSearch(e.target.value)}
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={seacrhProducts}
                                >
                                    <SearchOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </ListItem>

                <ListItemButton >
                    <ListItemIcon>
                        <AccountCircleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Perfil'} />
                </ListItemButton>

                <ListItemButton >
                    <ListItemIcon>
                        <ConfirmationNumberOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Mis Ordenes'} />
                </ListItemButton>


                <ListItemButton  sx={{ display: { xs: '', sm: 'none' } }}>
                    <ListItemIcon>
                        <MaleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Hombres'} />
                </ListItemButton>

                <ListItemButton  sx={{ display: { xs: '', sm: 'none' } }}>
                    <ListItemIcon>
                        <FemaleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Mujeres'} />
                </ListItemButton>

                <ListItemButton  sx={{ display: { xs: '', sm: 'none' } }}>
                    <ListItemIcon>
                        <EscalatorWarningOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Niños'} />
                </ListItemButton>


                <ListItemButton >
                    <ListItemIcon>
                        <VpnKeyOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Ingresar'} />
                </ListItemButton>

                <ListItemButton onClick={toggleMenu}>
                    <ListItemIcon>
                        <LoginOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Salir'} />
                </ListItemButton>


                {/* Admin */}
                <Divider />
                <ListSubheader>Admin Panel</ListSubheader>

                <ListItemButton >
                    <ListItemIcon>
                        <CategoryOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Productos'} />
                </ListItemButton>
                <ListItemButton onClick={()=> navigation('/orders/history') }>
                    <ListItemIcon>
                        <ConfirmationNumberOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Ordenes'} />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <AdminPanelSettings/>
                    </ListItemIcon>
                    <ListItemText primary={'Usuarios'} />
                </ListItemButton>
            </List>
        </Box>
    </Drawer>
  )
}