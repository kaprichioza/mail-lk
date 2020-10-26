import React from 'react'

export const EmailLabelItem = ({ labelsContext }) => {
    return (
        <div className="mail-labels__container_type">
            <div className={'label-circle ' + labelsContext.color}></div>
            <div className="label-name">{labelsContext.name} {labelsContext.count ? `${labelsContext.count}` : ''}</div>
        </div>
    );
}
