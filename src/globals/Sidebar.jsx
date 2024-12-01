import { Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Divider } from "@mui/material"

const components = [
    {
        name: "Autocomplete",
        url: "/autocomplete"
    },
    {
        name: "TextField",
        url: "/testfield"
    }
]

const Sidebar = () => {
    return (
        <Drawer 
            anchor="left" 
            variant="permanent" 
            sx={{ width: 500, flexShrink: 0, '& .MuiDrawer-paper': { width: 500, boxSizing: 'border-box' } }}
        >
            <Toolbar/>
            <Divider/>
            <List>
                {
                    components.map(component => (
                        <ListItem key={component.name}>
                            <ListItemButton>
                                <ListItemText>{component.name}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    )
}

export default Sidebar