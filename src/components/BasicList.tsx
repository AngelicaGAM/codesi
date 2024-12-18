import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
interface BasicListProps{
  items: string[];
}

const BasicList: React.FC<BasicListProps> = ({items }) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {items && items.map((item) => {
            return (  
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>)
          })}
        </List>
      </nav>
    </Box>
  );
}

export default BasicList;