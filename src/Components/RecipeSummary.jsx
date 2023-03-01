import { Avatar, Card, CardActionArea, CardHeader, IconButton } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { red } from '@mui/material/colors';
import { MdOutlineChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const RecipeSummary = () => {
  const navigate = useNavigate();
  return ( 
    <Card variant="outlined" >
       <CardActionArea onClick={() => navigate(`/recipes/${uuidv4()}`)}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            MH
          </Avatar>
        }
        action={
          <IconButton  aria-label="settings">
            <MdOutlineChevronRight />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="Breads/Crackers/Wraps"
      />
      </CardActionArea>
      </Card>
   );
}
 
export default RecipeSummary;