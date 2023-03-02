import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import  Button  from '@mui/material/Button';
import { MdAdd, MdDarkMode, MdOutlineFilterList } from 'react-icons/md';
import { Box, Container } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { GiCook } from 'react-icons/gi';

export default function Nav({open, handleDialogOpen}) {
  console.log(useLocation())
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const navigate = useNavigate()
  const location = capitalizeFirstLetter(useLocation().pathname.replace('/','').slice(0,7))

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
   
      <AppBar position="fixed"  elevation={0} sx ={{bgcolor: '#ffffff', borderBottom: 1, borderColor: '#c2c2c2', }} >

        <Toolbar>
          <Typography variant="h5" component="div"color='secondary' sx={{ flexGrow: 1}}>
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
              <IconButton variant='outlined' size='large' color='secondary' onClick ={()=> navigate('/auth/login')} sx ={{ml: '1rem'}}><GiCook /></IconButton>
            </div>    
          </Toolbar>

      </AppBar>
      
    
  );
}