import { useState } from "react"

import { AppBar, IconButton, Toolbar, Typography, Button, FormControl, Box, FormGroup, FormControlLabel, Switch, Menu, MenuItem, Input } from "@mui/material"
import { styled, alpha } from "@mui/material/styles"
import MenuIcon from "@mui/icons-material/Menu"
import { AccountCircle } from "@mui/icons-material"

/* basic Navbar */
// const Navbar = () => {
//     return (
//         <AppBar>
//             <Toolbar>
//                 <IconButton color="inherit" size="large" edge="end" aria-label="menu">
//                     <MenuIcon/>
//                 </IconButton>
//                 <Typography sx={{ flexGrow: 1 }} variant="h6">
//                     News
//                 </Typography>
//                 <Button color="inherit">Login</Button>
//             </Toolbar>
//         </AppBar>
//     )
// }

/* Navbar with menu */
// const Navbar = () => {
//     const [ loggedIn, setLoggedIn ] = useState(false)
//     const [ anchorElement, setAnchorElement ] = useState(null)

//     return (
//         <Box>
//             <FormGroup>
//                 <FormControlLabel 
//                     control={
//                         <Switch checked={loggedIn} onChange={() => setLoggedIn(!loggedIn)} aria-label="login switch"/>
//                     }
//                     label={ loggedIn ? "Logout" : "login"}
//                 />
//             </FormGroup>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton color="inherit" size="large" edge="start" aria-label="menu">
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" sx={{ flexGrow: 1 }}>Photos</Typography>
//                     {
//                         loggedIn && (
//                             <Box>
//                                 <IconButton 
//                                     size="large" 
//                                     color="inherit" 
//                                     onClick={(event) => setAnchorElement(event.currentTarget)}
//                                 >
//                                     <AccountCircle/>
//                                 </IconButton>
//                                 <Menu 
//                                     anchorEl={anchorElement} 
//                                     onClose={() => setAnchorElement(null)}
//                                     open={Boolean(anchorElement)}
//                                 >
//                                     <MenuItem onClick={() => setAnchorElement(null)}>Profile</MenuItem>
//                                     <MenuItem onClick={() => setAnchorElement(null)}>My Account</MenuItem>
//                                 </Menu>
//                             </Box>
//                         )
//                     }
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     )
// }

const Search = styled('div')(({theme}) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius
}))

const SearchIconWrapper = styled('div')(({theme}) => {

})



const Navbar = () => {
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <IconButton size="large" color="inherit" edge="start" aria-label="open drawer" sx={{ mr: 2 }}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap sx={{ display: { xs: "none", sm: "flex"} }}>MUI</Typography>
                    <Input/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar