import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const HeadeMenu = ({setOpenDrawer}) => {
    const [open,setOpen] = useState(null);
    const handleClose = ()=>{
        setOpen(null);
    }
    const handleClick = (e)=>{
        setOpen(e.currentTarget);
    }
  return (
    <Box>
      <MoreVertIcon onClick={handleClick}/>
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose} 
        getContentAnchorE1={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
      >
        <MenuItem onClick={()=> {handleClose(); setOpenDrawer(true);}}>Profile</MenuItem>
      </Menu>
    </Box>
  );
};

export default HeadeMenu;
