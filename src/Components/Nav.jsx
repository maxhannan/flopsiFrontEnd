import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import  Button  from '@mui/material/Button';
import { MdAdd, MdOutlineFilterList } from 'react-icons/md';
import { Box, Container } from '@mui/system';
import { useLocation } from 'react-router-dom';

export default function Nav({open, handleDialogOpen}) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  const location = capitalizeFirstLetter(useLocation().pathname.replace('/',''))

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openMenu = () =>{
    handleDialogOpen()
    handleClose()
  }

  return (
   
      <AppBar position="fixed"  elevation={0} sx ={{bgcolor: '#ffffff', borderBottom: 1, borderColor: '#c2c2c2'}} >
        <Container>
        <Toolbar>
   
          <Typography variant="h5" component="div"color='#37474f' sx={{ flexGrow: 1}}>
            {location}
          </Typography> 
        
            <div>
            
            <Button variant='outlined' elevation='0' startIcon={<MdAdd />} color='secondary' onClick={handleMenu}>Add</Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                keepMounted
             
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Add Recipe</MenuItem>
                <MenuItem onClick={openMenu}>Add Category</MenuItem>
              </Menu>
            </div>
          
        </Toolbar>
        </Container>
      </AppBar>
      
    
  );
}