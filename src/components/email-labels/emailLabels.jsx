import React from 'react';
import './emailLabels.css';
import { labelsContext } from './labelsContext';

export const EmailLabels = () => {
    function EmailLabelItem({ labelsContext }) {
        return (
            <div className="mail-labels__container_type">
                <div className={'label-circle ' + labelsContext.color}></div>
                <div className="label-name">{labelsContext.name} {labelsContext.count ? `${labelsContext.count}` : ''}</div>
            </div>
        );
    };
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
