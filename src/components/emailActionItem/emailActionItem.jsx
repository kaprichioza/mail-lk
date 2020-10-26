import React from 'react'

export const  EmailActionItem = ({ emailActionContext }) => {
    return (
        <div>
            <div className="mail-action__container_icon">
                {emailActionContext.icon}
            </div>
            <div className="mail-action__container_description active">{emailActionContext.name + ' ' + emailActionContext.count}</div>
        </div>
    );
}
