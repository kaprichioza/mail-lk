import React from 'react';
import './emailActions.css';
import { emailActionContext, svgInbox } from './emailActionContext';
import { EmailActionItem } from '../emailActionItem/emailActionItem';

export const EmailActions = () => { 
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
