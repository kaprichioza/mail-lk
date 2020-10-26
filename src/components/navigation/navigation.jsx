import React from 'react';
import './navigation.css';
import { Button } from '@material-ui/core';
import { EmailLabels } from '../emailLabels/emailLabels';
import { EmailActions } from '../emailActions/emailActions';
export const Navigation = () => {
    return (
        <div className="left-side-wrapper">
            <Button variant="contained" className="btn-compose">
                <div className="btn-compose__icon">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7889 2.37016L13.7665 3.39182C13.6476 3.51259 13.4523 3.51259 13.3315 3.39182L11.6021 1.66241C11.4806 1.54164 11.4806 1.34634 11.6021 1.22557L12.6238 0.203187C12.8947 -0.067729 13.3329 -0.067729 13.6042 0.203187L14.7889 1.38898C15.0588 1.66026 15.0588 2.09852 14.7889 2.37016ZM12.961 4.11534L7.3047 9.77555C7.18537 9.97766 6.99042 9.97766 6.86965 9.85797L5.13988 8.12819C5.01947 8.00671 5.01947 7.81213 5.13988 7.69136L10.7961 2.03187C10.9169 1.91218 11.1108 1.91218 11.2315 2.03187L12.961 3.76236C13.0821 3.88277 13.0821 4.07843 12.961 4.11534ZM6.34467 10.5743L3.89065 11.4154L3.84514 11.4311C3.77025 11.4483 3.68818 11.4276 3.62941 11.3692C3.571 11.3104 3.55058 11.2287 3.56885 11.1534L3.5839 11.1083L4.4246 8.65283L4.44001 8.60732C4.45005 8.58331 4.46653 8.56037 4.48552 8.54066C4.57547 8.45071 4.72275 8.45071 4.81306 8.54066L6.45683 10.1851C6.54642 10.2762 6.54642 10.4217 6.45683 10.512C6.4364 10.5328 6.4149 10.5478 6.39053 10.5582L6.34467 10.5743ZM8.01245 2.59305H1.55096V13.4487H12.4066V6.9872C12.4066 6.5586 12.7542 6.21172 13.1821 6.21172C13.6099 6.21172 13.9575 6.5586 13.9575 6.9872V14.2245C13.9575 14.3317 13.9357 14.4334 13.8963 14.5266C13.7787 14.8043 13.5028 15 13.1821 15H0.775479C0.347245 15 0 14.6524 0 14.2245V1.81793C0 1.3897 0.347245 1.04245 0.775479 1.04245H8.01245C8.44032 1.04245 8.78793 1.3897 8.78793 1.81793C8.78793 2.24581 8.44068 2.59305 8.01245 2.59305Z" fill="white" />
                    </svg>
                </div>
                <div>Compose</div>
            </Button>
            <EmailActions />            
            <section className="type-display">
                <div className="type-display__title">LISTS</div>
                <div className="type-display__action">Linkedn</div>
            </section>
            <EmailLabels />            
            <section className="user-profile">
                <div className="user-profile__avatar">
                    <img src="./avatar.png" alt="avatar"></img>
                </div>
                <div className="user-profile__data-container">
                    <div className="user-profile__data-container_name">Salman Shah</div>
                    <div className="user-profile__data-container_email">shah.salman4@gmaiil.com</div>
                </div>
            </section>
        </div>
    )
}