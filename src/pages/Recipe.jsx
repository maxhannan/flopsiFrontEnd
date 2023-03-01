import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useLoaderData, useNavigate } from "react-router-dom";

const Recipe = ({params}) => {
  console.log(params)
  const navigate = useNavigate()
  const recipe = useLoaderData()
  return (  
    <Container>
      <Button onClick = {() => navigate('/recipes')}>Back</Button>
      <Typography as = 'h1'>
      {recipe}
      </Typography>
    </Container>
  );
}
 
export default Recipe;