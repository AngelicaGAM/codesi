import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
const BasicList = ({ items }) => {
    return (_jsx(Box, { sx: { width: '100%', maxWidth: 360, }, children: _jsx("nav", { "aria-label": "secondary mailbox folders", children: _jsx(List, { children: items && items.map((item) => {
                    return (_jsx(ListItem, { disablePadding: true, children: _jsx(ListItemButton, { children: _jsx(ListItemText, { primary: item }) }) }));
                }) }) }) }));
};
export default BasicList;
