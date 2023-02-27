import { GiForkKnifeSpoon } from 'react-icons/gi';
import { RiFileList3Line,RiCalendarEventLine } from 'react-icons/ri';
import { MdOutlineChat, MdClose } from 'react-icons/md';
import { TbMath} from 'react-icons/tb';
import { BottomNavigation, BottomNavigationAction, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'

const DrawerComponent = ({open, setOpen}) => {
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

<BottomNavigation   sx ={{borderBottom: 0, borderColor: '#c2c2c2', width: '100vw', height: 'auto'}} >
<BottomNavigationAction
label="Recents"
value="recents"
icon={<MdClose color='#37474f' size ='3em'/>}
/>
<BottomNavigationAction
label="Recents"
value="recents"
icon={<RiFileList3Line color='#37474f'  size ='3em'/>}
/>
<BottomNavigationAction
label="Recents"
value="recents"
icon={<GiForkKnifeSpoon color='#37474f' size ='3em'/>}
/><BottomNavigationAction
label="Recents"
value="recents"
icon={<TbMath color='#37474f' size ='3em'/>}
/><BottomNavigationAction
label="Recents"
value="recents"
icon={<RiCalendarEventLine color='#37474f' size ='3em'/>}
/>
<BottomNavigationAction
label="Recents"
value="recents"
icon={<MdOutlineChat color='#37474f' size ='3em'/>}
/>
</BottomNavigation>
  </Box>
  </Drawer>
  );
}
 
export default DrawerComponent;