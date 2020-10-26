import React from 'react'
import { mailData } from './mailData';
import './mailBox.css';

function EmailItem({ mailData }) {
    return (
        <div className={mailData.isActive ? 'mail-container active' : 'mail-container'}>
            <div className="mail-info">
                <div className="mail-title__container">
                    <div className="mail-ico"></div>
                    <div className={mailData.isUnread ? 'mail-title unread' : 'mail-title'}>
                        {mailData.title}
                    </div>
                </div>
                <div className="mail-time">
                    {mailData.time}
                </div>

            </div>
            <div className="mail-info">
                <div className="mail-author">
                    {mailData.author}
                </div>
                <div className="mail-attach">
                    {
                        mailData.attach
                            ? <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3628 1.1721C11.3023 0.111632 9.57207 0.111632 8.5116 1.1721L2.79067 6.92093C2.14881 7.56279 2.14881 8.59535 2.79067 9.23721C3.43253 9.87907 4.46509 9.87907 5.10695 9.23721L8.65114 5.66512C8.87439 5.44186 8.87439 5.10698 8.65114 4.88373C8.42788 4.66047 8.093 4.66047 7.86974 4.88373L4.29765 8.42791C4.1023 8.62326 3.76741 8.62326 3.57207 8.42791C3.37672 8.23256 3.37672 7.89768 3.57207 7.70233L9.293 1.95349C9.90695 1.33954 10.9395 1.33954 11.5535 1.95349C12.1674 2.56745 12.1674 3.6 11.5535 4.21396L5.83253 9.96279C4.77207 11.0233 3.06974 11.0233 2.03718 9.96279C0.976717 8.90233 0.976717 7.2 2.03718 6.16745L7.17207 1.03256C7.39532 0.809306 7.39532 0.474423 7.17207 0.251167C6.94881 0.027911 6.61393 0.027911 6.39067 0.251167L1.25579 5.35814C-0.223283 6.83721 -0.223283 9.26512 1.25579 10.7442C2.73486 12.2233 5.16276 12.2233 6.64183 10.7442L12.3628 5.02326C13.4232 3.96279 13.4232 2.23256 12.3628 1.1721Z" fill="#8E8E93" />
                            </svg>
                            : ''
                    }
                </div>
            </div>
        </div>
    );
};
export const MailBox = () => {
    return (
        <div className="mail-list-wrapper">
            <div className="mail-list">
                {mailData.map((mailData, index) => (
                    <EmailItem
                        key={index}
                        index={index}
                        mailData={mailData}
                    />
                ))}
            </div>
        </div>
    )
}


