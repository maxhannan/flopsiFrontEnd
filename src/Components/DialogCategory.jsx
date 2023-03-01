import { Avatar, BottomNavigation, BottomNavigationAction, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, TextField, } from '@mui/material'
import { Container } from '@mui/system';

const DialogCategory = ({open, handleDialogClose}) => {
  return ( 
    <Dialog
        open={open}
       fullWidth
        keepMounted
        onClose={handleDialogClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Container>
        <DialogContent>
          <Box sx={{display: 'flex'}}>
          <TextField fullWidth label ='category'/>
          <Button onClick={handleDialogClose} >Add</Button>
          </Box>
        </DialogContent>
   
        </Container>
      </Dialog>
   );
}
 
export default DialogCategory;