import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import DialogCategory from "../Components/DialogCategory";
import Nav from "../Components/Nav";

const AuthLayout = () => {
  const [open, setOpen] = useState(false)

  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  return ( 
    <Box>
    <Nav open = {open} handleDialogOpen ={handleDialogOpen}/>
    <Container maxWidth ='xl' sx={{paddingY: '5em', paddingX:'0'}}>
      <Outlet/>
      <DialogCategory open={open} handleDialogClose={handleDialogClose}/>
    </Container>

  </Box>
   );
}
 
export default AuthLayout;