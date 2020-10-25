import React from 'react';
import { mailData } from './../mailBox/mailData';
import './contentTitle.css';
export const ContentTitle = () => {
    function Title({ mailData }) {
        return (
            <div>
                <div className="content-title">
                    {mailData.title}
                </div>
                <div className="content-title__user-info-container">
                    <div className="content-title__user-info">
                        <div className="content-title__user-info_avatar">
                            <img src="./avatar.png" alt="avatar"></img>
                        </div>
                        <div className="content-title__user-data">
                            <div className="content-title__user-data_name">
                                {mailData.author}
                            </div>
                            <div className="content-title__user-data_email">
                                <span>From: </span>{mailData.email}
                            </div>
                        </div>
                    </div>
                    <div className="content-title__data">
                        {mailData.fullTime}
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="content-title-wrapper">
            {mailData.map((mailData, index) => (
                mailData.isActive
                    ? <Title
                        key={index}
                        index={index}
                        mailData={mailData}
                    />
                    : ''
            ))}
        </div>
    )
}
