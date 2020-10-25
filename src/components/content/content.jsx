import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React from 'react';
import './content.css';
import { svgMenu, svgSignOut, svgAlarm, svgMail, svgLabels, svgTrash } from './svgForBtns';
export const Content = () => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div className="content-btns-action">
                <BottomNavigation value={value} onChange={handleChange}>
                    <BottomNavigationAction label="" value="recents" icon={svgMail} />
                    <BottomNavigationAction label="" value="favorites" icon={svgSignOut} />
                    <BottomNavigationAction label="" value="favorites" icon={svgAlarm} />
                    <BottomNavigationAction label="" value="favorites" icon={svgMenu} />
                    <BottomNavigationAction label="" value="nearby" icon={svgLabels} />
                    <BottomNavigationAction label="" value="trash" icon={svgTrash} />
                </BottomNavigation>
            </div>
            <div className="mail-content-title"></div>
            <div className="mail-content"></div>
            <div className="mail-content-attach"></div>
            <div className="mail-content-btn-reply"></div>
        </div>
    )
}
