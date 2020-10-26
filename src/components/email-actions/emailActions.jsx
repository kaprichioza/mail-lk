import React from 'react';
import './emailActions.css';
import { emailActionContext, svgInbox } from './emailActionContext';

export const EmailActions = () => {
    function EmailActionItem({ emailActionContext }) {
        return (
            <div>
                <div className="mail-action__container_icon">
                    {emailActionContext.icon}
                </div>
                <div className="mail-action__container_description active">{emailActionContext.name + ' ' + emailActionContext.count}</div>
            </div>
        );
    }
    return (
        <section className="mail-action">
            <div className="mail-action__title">MAILBOX</div>
            <div className="mail-action__container">
                {emailActionContext.map((emailActionContext, index) => (
                    < EmailActionItem
                        key={index}
                        index={index}
                        emailActionContext={emailActionContext}
                    />))}
            </div>
        </section>
    )
}
