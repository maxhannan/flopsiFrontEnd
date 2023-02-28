import { GiCook, GiForkKnifeSpoon } from 'react-icons/gi';
import { RiFileList3Line,RiCalendarEventLine } from 'react-icons/ri';
import { MdOutlineChat, MdClose } from 'react-icons/md';
import { TbMath} from 'react-icons/tb';
import { BottomNavigation, BottomNavigationAction, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, } from '@mui/material'
import { Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';

const DrawerComponent = ({open, setOpen}) => {
  const [value, setValue] = useState('user');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  return (  
    <Paper elevation={2} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} 
    >
      <BottomNavigation
          value={value} onChange={handleChange}
          
           sx ={{ display:'flex', borderTop: 1, borderColor: '#c2c2c2', width: '100vw', height: 'auto'}} >
        <BottomNavigationAction
          label="User"
          value="user"
         
          
          onClick={()=> navigate('/') }
          icon={<GiCook  size ='3em'/>}
        />
        <BottomNavigationAction
          label="Prep"
          value="prep"
          onClick={()=> navigate('/') }
          icon={<RiFileList3Line   size ='3em'/>}
        />
        <BottomNavigationAction
          label="Recipes"
          value="recipes"
          onClick={()=> navigate('/recipes') }
          icon={<GiForkKnifeSpoon  size ='3em'/>}
        />
        <BottomNavigationAction
          label="Convert"
          value="convert"
          onClick={()=> navigate('/') }
          icon={<TbMath  size ='3em'/>}
        />
        <BottomNavigationAction
          label="Calendar"
          value="calendar"
          onClick={()=> navigate('/') }
          icon={<RiCalendarEventLine  size ='3em'/>}
        />
        <BottomNavigationAction
          label="Chat"
          value="chat"
          onClick={()=> navigate('/') }
          icon={<MdOutlineChat size ='3em'/>}
        />
      </BottomNavigation>
    </Paper>

  );
}
 
export default DrawerComponent;