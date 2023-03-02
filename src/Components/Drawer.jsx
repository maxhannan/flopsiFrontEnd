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
    color: ${purple[400]};
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
    
    <Paper elevation={2} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100vw' }} 
    >
      <BottomNavigation
          value={value} onChange={handleChange}
           sx ={{  borderTop: 1, borderColor: '#c2c2c2', height: '6rem',}} >
       
        <MuiBottomNavigationAction
          label="Prep"
          value="prep"
          
          onClick={()=> navigate('/prep') }
          icon={<RiFileList3Line   size ='2rem'/>}
        />
        <MuiBottomNavigationAction
          label="Recipes"
          value="/recipes"
          onClick={()=> navigate('/recipes') }
          icon={<GiForkKnifeSpoon  size ='2rem'/>}
        />
        <MuiBottomNavigationAction
          label="Convert"
          value="convert"
          onClick={()=> navigate('/convert') }
          icon={<TbMath  size ='2rem'/>}
        />
        <MuiBottomNavigationAction
          label="Calendar"
          value="calendar"
          onClick={()=> navigate('/calendar') }
          icon={<RiCalendarEventLine  size ='2rem'/>}
        />
        <MuiBottomNavigationAction
          label="Chat"
          value="chat"
          onClick={()=> navigate('/chat') }
          icon={<MdOutlineChat size ='2rem'/>}
        />
      </BottomNavigation>
    </Paper>

  );
}
 
export default DrawerComponent;