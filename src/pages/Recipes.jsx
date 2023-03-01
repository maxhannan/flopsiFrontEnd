import { Container, Stack } from "@mui/system";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import RecipeSummary from "../Components/RecipeSummary";
import SearchAndFilter from "../Components/SearchAndFilter";

const Recipes = () => {
  const [itemNum, setItemNum] =useState(5)
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMore = () => {
    setIsLoading(true)
    setTimeout(()=> {
      setItemNum(itemNum + 5)
      setIsLoading(false)
    }, 1000)
  }

  return ( 
    <Container>
      <SearchAndFilter />
      <Stack sx ={{mt: 2}} spacing={1}>
        {Array.from(Array(itemNum)).map(a =>(<RecipeSummary key ={uuidv4()} />))}
        <LoadingButton  color ='secondary' loading ={isLoading} onClick={handleLoadMore}><span> Load More </span></LoadingButton>
      </Stack>
    </Container>
   );
}
 
export default Recipes;