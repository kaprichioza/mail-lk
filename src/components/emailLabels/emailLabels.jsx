import React from 'react';
import './emailLabels.css';
import { labelsContext } from './labelsContext';
import { EmailLabelItem } from './../emailLabelItem/emailLabelItem';

export const EmailLabels = () => {    
    return (
        <section className="mail-labels">
            <div className="mail-labels__title">LABELS</div>
            <div className="mail-labels__container">
                {labelsContext.map((labelsContext, index) => (
                    <EmailLabelItem
                        key={index}
                        index={index}
                        labelsContext={labelsContext}
                    />
                ))}            
            </div>
        </section>
    )
}
