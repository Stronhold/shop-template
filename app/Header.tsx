'use client';
import { AppBar, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Link from "next/link";

interface Props {
  title?: string;
  categories?: Array<string>;
};

export const Header = ({ title, categories }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleDrawerToggle = () => setShowSidebar(!showSidebar);

  return (<AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
    </Toolbar>
    <Drawer
      anchor="left"
      open={showSidebar}
      onClose={handleDrawerToggle}
      sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', minWidth: '33vw',},
      }}
    >
      <List>
        {categories?.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Link href={`/${text.toLowerCase()}`}>
                <ListItemText primary={text}/>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  </AppBar>);
}
