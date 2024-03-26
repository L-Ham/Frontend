import React, {useState} from 'react';
import {Menu, MenuItem, ListItemIcon, ListItemText, Button} from '@mui/material';
import HotIcon from '@mui/icons-material/Whatshot';
import NewIcon from '@mui/icons-material/FiberNew';
import TopIcon from '@mui/icons-material/BarChart';
import RisingIcon from '@mui/icons-material/TrendingUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

/**
 * A menu component for a Reddit-style filtering interface, allowing users to select between
 * "Hot", "New", "Top", and "Rising" filters.
 *
 * Utilizes Material UI components to create a dropdown menu with custom icons for each option.
 * The selected filter is displayed on the button and highlighted within the menu.
 * @return {JSX.Element} The RedditMenu component.
 */
function RedditMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selected, setSelected] = useState('New');

    /**
     * Handles opening the menu by setting the anchor element to the current target.
     *
     * @param {React.MouseEvent<HTMLButtonElement>} event The event object representing the click.
     */
    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    /**
     * Handles closing the menu and sets the selected filter.
     * Logs and alerts the newly selected filter for demonstration purposes.
     *
     * @param {string} text The text of the selected menu item.
     */
    function handleClose(text) {
        setSelected(text);
        setAnchorEl(null);
        console.log(`The selected item is now ${text}`);
        // Uncomment the following line for a production environment, if user feedback is necessary.
        // alert(`The selected item is now ${text}`);
    }

    const menuItems = [
        {text: 'Hot', icon: <HotIcon />},
        {text: 'New', icon: <NewIcon />},
        {text: 'Top', icon: <TopIcon />},
        {text: 'Rising', icon: <RisingIcon />},
    ];

    const selectedStyle = {
        color: 'blue',
        backgroundColor: 'white',
    };

    const unselectedStyle = {
        color: 'black',
        backgroundColor: 'white',
    };

    return (
        <div>
            <Button
                aria-controls="reddit-menu"
                aria-haspopup="true"
                onClick={handleClick}
                endIcon={<ArrowDropDownIcon />}
                sx={{
                    'textTransform': 'none',
                    'color': 'black',
                    'backgroundColor': 'white',
                    'fontWeight': 'bold',
                    '&:hover': {
                        backgroundColor: '#f0f0f0',
                    },
                }}
            >
                {selected}
            </Button>
            <Menu
                id="reddit-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.text}
                        onClick={() => handleClose(item.text)}
                        sx={selected === item.text ? selectedStyle : unselectedStyle}
                    >
                        <ListItemIcon sx={selected === item.text ? {color: 'blue'} : {}}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={item.text}
                            primaryTypographyProps={{
                                color: selected === item.text ? 'blue' : 'inherit',
                            }}
                        />
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export {RedditMenu};
