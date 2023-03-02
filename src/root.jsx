import { Avatar, BottomNavigation, BottomNavigationAction, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, TextField, } from '@mui/material'

import { useState } from 'react'
import { Container } from '@mui/system';
import Nav from './Components/Nav';
import DrawerComponent from './Components/Drawer';
import { Outlet } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import DialogCategory from './Components/DialogCategory';
export async function loader({params}) {
  const contacts = params.recipeId;
  return  contacts ;
} 

function Root() {
  const [open, setOpen] = useState(false)

  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Nav open = {open} handleDialogOpen ={handleDialogOpen}/>
      <Container maxWidth ='xl' sx={{paddingY: '5em', paddingX:'0'}}>
        <Outlet/>
        <DialogCategory open={open} handleDialogClose={handleDialogClose}/>
      </Container>
      <DrawerComponent open = {open} setOpen ={setOpen}/>
    </Box>
  )
}

export default Root
