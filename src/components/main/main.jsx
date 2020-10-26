import React from 'react';
import './main.css';
import { MailBox } from './../mailBox/mailBox';
import { InputBase, Button, Menu, MenuItem } from '@material-ui/core';
export const Main = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="middle-side">
            <div className="middle-side-wrapper">
                <div className="search-bar">
                    <div >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8993 14.1672L10.9567 10.2244C11.8729 9.14189 12.4264 7.74253 12.4264 6.21322C12.4264 2.7818 9.64464 0 6.21322 0C2.7818 0 0 2.7818 0 6.21322C0 9.64464 2.7818 12.4264 6.21322 12.4264C7.74253 12.4264 9.14189 11.8729 10.2244 10.9565L14.1672 14.8993C14.3014 15.0336 14.5212 15.0336 14.6553 14.8993L14.8993 14.6553C15.0336 14.521 15.0336 14.3014 14.8993 14.1672ZM1.03554 6.21322C1.03554 3.35824 3.35824 1.03554 6.21322 1.03554C9.06819 1.03554 11.3909 3.35824 11.3909 6.21322C11.3909 9.06819 9.06819 11.3909 6.21322 11.3909C3.35824 11.3909 1.03554 9.06819 1.03554 6.21322Z" fill="#8E8E93" />
                        </svg>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className="type-mail">
                    <div className="type-mail__title">Inbox</div>
                    <div className="type-mail__sort-container">
                        <div>Sort by:</div>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Unread
                        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.88907 1.15647C10.1001 0.945449 10.4422 0.945449 10.6533 1.15647C10.8643 1.3675 10.8643 1.70963 10.6533 1.92066L5.97356 6.60035C5.94917 6.68573 5.90335 6.76629 5.83611 6.83353C5.71841 6.95123 5.55993 7.00328 5.40615 6.98968C5.25238 7.00328 5.0939 6.95122 4.9762 6.83353C4.90896 6.76629 4.86314 6.68573 4.83875 6.60035L0.159058 1.92066C-0.0519657 1.70963 -0.0519657 1.3675 0.159058 1.15647C0.37008 0.94545 0.712216 0.94545 0.92324 1.15647L5.40615 5.63939L9.88907 1.15647Z" fill="#484C51" />
                            </svg>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Date</MenuItem>
                            <MenuItem onClick={handleClose}>Sent mail</MenuItem>
                        </Menu>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <MailBox />

        </div>
    )
}
