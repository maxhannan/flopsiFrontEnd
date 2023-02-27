import { BottomNavigation, BottomNavigationAction, Box, Drawer, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, } from '@mui/material'

import { useState } from 'react'
import { Container } from '@mui/system';
import Nav from './Components/Nav';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { RiFileList3Line,RiCalendarEventLine } from 'react-icons/ri';
import { MdOutlineChat, MdClose } from 'react-icons/md';
import { TbMath} from 'react-icons/tb';
import DrawerComponent from './Components/Drawer';
import {Button, Input} from '@mui/joy'
function App() {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Nav open = {open} setOpen ={setOpen}/>
      <DrawerComponent open = {open} setOpen ={setOpen}/>
      <Container sx={{paddingTop: '1em'}}>
      <Input  startAdornment={
            <InputAdornment position="start">
              <TbMath />
            </InputAdornment>
          }
fullWidth label="fullWidth" id="fullWidth" />
      </Container>
    </Box>
  )
}

export default App
