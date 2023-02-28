import { Avatar, BottomNavigation, BottomNavigationAction, Box, Drawer, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, TextField, } from '@mui/material'

import { useState } from 'react'
import { Container } from '@mui/system';
import Nav from './Components/Nav';
import DrawerComponent from './Components/Drawer';
import { Outlet } from "react-router-dom";

function Root() {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Nav open = {open} setOpen ={setOpen}/>
      <DrawerComponent open = {open} setOpen ={setOpen}/>
      <Container sx={{paddingTop: '5em'}}>
      <Outlet/>
    
      </Container>
    </Box>
  )
}

export default Root
