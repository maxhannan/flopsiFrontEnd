import { GiForkKnifeSpoon } from 'react-icons/gi';
import { RiFileList3Line,RiCalendarEventLine } from 'react-icons/ri';
import { MdOutlineChat, MdClose } from 'react-icons/md';
import { TbMath} from 'react-icons/tb';
import { BottomNavigation, BottomNavigationAction, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'
import { Link ,useNavigate} from 'react-router-dom';

const DrawerComponent = ({open, setOpen}) => {
  const navigate = useNavigate();
  return (  
  <Drawer elevation={0} 
    anchor={'top'}
    open={open}
    onClose ={()=> setOpen(false)}
    variant = 'persistent'
  >
    <Box
      sx={{ width: 'auto', display: 'flex'}}
      role="presentation"
      onClick={()=> setOpen(false)}
      onKeyDown={()=> setOpen(false)}
    >
      <BottomNavigation   sx ={{ display:'flex', borderBottom: 0, borderColor: '#c2c2c2', width: '100vw', height: 'auto'}} >
      
       <BottomNavigationAction
        label="Recents"
        value="recents"
        onClick={()=> navigate('/') }
        icon={<MdClose color='#37474f' size ='3em'/>}
         />
         
     
          <BottomNavigationAction
          label="Recents"
          value="recents"
          onClick={()=> navigate('/') }
          icon={<RiFileList3Line color='#37474f'  size ='3em'/>}
          />
 
        
          <BottomNavigationAction
          label="Recents"
          value="recents"
          onClick={()=> navigate('/recipes') }
          icon={<GiForkKnifeSpoon color='#37474f' size ='3em'/>}
          />
       
   
          <BottomNavigationAction
          label="Recents"
          value="recents"
          onClick={()=> navigate('/') }
          icon={<TbMath color='#37474f' size ='3em'/>}
          />
     
          <BottomNavigationAction
          label="Recents"
          value="recents"
          onClick={()=> navigate('/') }
          icon={<RiCalendarEventLine color='#37474f' size ='3em'/>}
          />
   
          <BottomNavigationAction
          label="Recents"
          value="recents"
          onClick={()=> navigate('/') }
          icon={<MdOutlineChat color='#37474f' size ='3em'/>}
          />

</BottomNavigation>
  </Box>
  </Drawer>
  );
}
 
export default DrawerComponent;