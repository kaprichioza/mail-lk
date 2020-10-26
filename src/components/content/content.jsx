import { BottomNavigation, BottomNavigationAction, Button } from '@material-ui/core';
import React from 'react';
import './content.css';
import { svgMenu, svgSignOut, svgAlarm, svgMail, svgLabels, svgTrash } from './svgForBtns';
import { ContentTitle } from './../contentTitle/contentTitle';
import { mailData } from './../mailBox/mailData';
export const Content = () => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="content-wrapper">
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
            <ContentTitle />
            <pre className="mail-content">
                {mailData.map((mailData, index) => (
                    mailData.isActive
                        ? mailData.article
                        : ''
                ))}
            </pre>
            <div className="mail-content-attach">
                <Button
                    variant="contained"
                    startIcon={<svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H17.2955C17.2955 4.70697 21.1112 8.52273 25.8182 8.52273L25.8182 26C25.8182 28.2091 24.0273 30 21.8182 30H4C1.79086 30 0 28.2091 0 26V4Z" />
                        </mask>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H17.2955C17.2955 4.70697 21.1112 8.52273 25.8182 8.52273L25.8182 26C25.8182 28.2091 24.0273 30 21.8182 30H4C1.79086 30 0 28.2091 0 26V4Z" fill="#FF6650" />
                        <path d="M17.2955 0H18.2955V-1H17.2955V0ZM25.8182 8.52273H26.8182V7.52273H25.8182V8.52273ZM25.8182 26H26.8182H25.8182ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1ZM17.2955 -1H4V1H17.2955V-1ZM25.8182 7.52273C21.6635 7.52273 18.2955 4.15469 18.2955 0H16.2955C16.2955 5.25925 20.5589 9.52273 25.8182 9.52273V7.52273ZM26.8182 26L26.8182 8.52273H24.8182L24.8182 26H26.8182ZM21.8182 31C24.5796 31 26.8182 28.7614 26.8182 26H24.8182C24.8182 27.6569 23.475 29 21.8182 29V31ZM4 31H21.8182V29H4V31ZM-1 26C-1 28.7614 1.23858 31 4 31V29C2.34315 29 1 27.6569 1 26H-1ZM-1 4V26H1V4H-1Z" fill="#FF6650" mask="url(#path-1-inside-1)" />
                        <path opacity="0.100338" fill-rule="evenodd" clip-rule="evenodd" d="M21.0018 8.52272H25.8182V14.4886L21.0018 8.52272Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2954 0L21.8977 4.60227L25.8181 8.52273C21.1112 8.52273 17.2954 4.70697 17.2954 0Z" fill="#EC9D95" />
                        <path d="M5.56641 21.8867V24H4.57812V18.3125H6.75391C7.38932 18.3125 7.89323 18.4779 8.26562 18.8086C8.64062 19.1393 8.82812 19.5768 8.82812 20.1211C8.82812 20.6784 8.64453 21.112 8.27734 21.4219C7.91276 21.7318 7.40104 21.8867 6.74219 21.8867H5.56641ZM5.56641 21.0938H6.75391C7.10547 21.0938 7.3737 21.0117 7.55859 20.8477C7.74349 20.681 7.83594 20.4414 7.83594 20.1289C7.83594 19.8216 7.74219 19.5768 7.55469 19.3945C7.36719 19.2096 7.10938 19.1146 6.78125 19.1094H5.56641V21.0938ZM9.69531 24V18.3125H11.375C11.8776 18.3125 12.3229 18.4245 12.7109 18.6484C13.1016 18.8724 13.4036 19.1901 13.6172 19.6016C13.8307 20.013 13.9375 20.4844 13.9375 21.0156V21.3008C13.9375 21.8398 13.8294 22.3138 13.6133 22.7227C13.3997 23.1315 13.0938 23.4466 12.6953 23.668C12.2995 23.8893 11.8451 24 11.332 24H9.69531ZM10.6836 19.1094V23.2109H11.3281C11.8464 23.2109 12.2435 23.0495 12.5195 22.7266C12.7982 22.401 12.9401 21.9349 12.9453 21.3281V21.0117C12.9453 20.3945 12.8112 19.9232 12.543 19.5977C12.2747 19.2721 11.8854 19.1094 11.375 19.1094H10.6836ZM18.1992 21.5898H15.9102V24H14.9219V18.3125H18.5352V19.1094H15.9102V20.8008H18.1992V21.5898Z" fill="white" />
                    </svg>
                    }
                >
                    Sample.pdf
                </Button>
            </div>
            <div className="mail-content-btn-reply">
                <Button
                    variant="contained"
                    className="btn-reply"
                    startIcon={<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12C16 12 14.4667 3.33333 6.66667 3.33333V0L0 6L6.66667 11.6V7.75417C10.9 7.75417 13.7917 8.125 16 12Z" fill="white" />
                    </svg>
                    }
                >
                    Reply
                </Button>
                <Button
                    variant="contained"
                    className="btn-forward"
                    startIcon={<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 12 1.53333 3.33333 9.33333 3.33333V0L16 6L9.33333 11.6V7.75417C5.1 7.75417 2.20833 8.125 0 12Z" fill="#999EB1" />
                    </svg>
                    }
                >
                    Forward
                </Button>
            </div>
        </div>
    )
}
