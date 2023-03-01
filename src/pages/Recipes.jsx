import { Box,  FormControl, MenuItem,  Select, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import RecipeSummary from "../Components/RecipeSummary";

const Recipes = () => {
  const [itemNum, setItemNum] =useState(5)

  const [isLoading, setIsLoading] = useState(false)
  const [menu, setMenu] = useState(10);

  const handleChange = (event) => {
    setMenu(event.target.value);
  };

  const handleLoadMore = () => {
    setIsLoading(true)
    setTimeout(()=> {
      setItemNum(itemNum + 5)
      setIsLoading(false)
    }, 1000)
    
  }

  return ( 
    <Container>
      <Box display='flex'>
        <TextField fullWidth label="Search Recipes" sx ={{width: '65%'}}  />
        <FormControl sx ={{width: '34%', marginLeft: 'auto'}} >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={menu}
            displayEmpty
            onChange={handleChange}
          >
            <MenuItem value={10}>All Recipes</MenuItem>
            <MenuItem value={20}>Breads/Crackers/Wraps</MenuItem>
            <MenuItem value={30}>Spreads</MenuItem>
            <MenuItem value={40}>Raw & Cured</MenuItem>
            <MenuItem value={50}>Land & Sea</MenuItem>
            <MenuItem value={60}>Vegetables</MenuItem>
            <MenuItem value={70}>Spice Mix</MenuItem>
            <MenuItem value={80}>Dairy</MenuItem>
            <MenuItem value={90}>Pasta Dough</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Stack sx ={{mt: 2}} spacing={1}>
        {Array.from(Array(itemNum)).map(a =>(<RecipeSummary key ={uuidv4()} />))}
        <LoadingButton  loading ={isLoading} onClick={handleLoadMore}><span>Load More </span></LoadingButton>
      </Stack>
    </Container>
   );
}
 
export default Recipes;