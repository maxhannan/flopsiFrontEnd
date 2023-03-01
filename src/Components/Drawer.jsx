import { GiCook, GiForkKnifeSpoon } from 'react-icons/gi';
import { RiFileList3Line,RiCalendarEventLine } from 'react-icons/ri';
import { MdOutlineChat } from 'react-icons/md';
import { TbMath} from 'react-icons/tb';
import { BottomNavigation, BottomNavigationAction, Paper,  } from '@mui/material'
import { useNavigate, useLocation} from 'react-router-dom';
import { useState } from 'react';
import { purple } from '@mui/material/colors';
import { styled } from "@mui/material/styles";

const MuiBottomNavigationAction  = styled(BottomNavigationAction)(`
  &.Mui-selected {
    color: ${purple[300]};
  }
`);
const DrawerComponent = ({open, setOpen}) => {
  const location = useLocation()
  const navigate = useNavigate();

  const [value, setValue] = useState(location.pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (  
    <Paper elevation={2} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} 
    >
      <BottomNavigation
          value={value} onChange={handleChange}
           sx ={{ display:'flex', borderTop: 1, borderColor: '#c2c2c2', width: '100vw', height: 'auto'}} >
        <MuiBottomNavigationAction
          label="User"
         
          value="user"
          onClick={()=> navigate('/') }
          icon={<GiCook  size ='3em'/>}
        />
        <MuiBottomNavigationAction
          label="Prep"
          value="prep"
          
          onClick={()=> navigate('/') }
          icon={<RiFileList3Line   size ='3em'/>}
        />
        <MuiBottomNavigationAction
          label="Recipes"
          value="/recipes"
          onClick={()=> navigate('/recipes') }
          icon={<GiForkKnifeSpoon  size ='3em'/>}
        />
        <MuiBottomNavigationAction
          label="Convert"
          value="convert"
          onClick={()=> navigate('/') }
          icon={<TbMath  size ='3em'/>}
        />
        <MuiBottomNavigationAction
          label="Calendar"
          value="calendar"
          onClick={()=> navigate('/') }
          icon={<RiCalendarEventLine  size ='3em'/>}
        />
        <MuiBottomNavigationAction
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