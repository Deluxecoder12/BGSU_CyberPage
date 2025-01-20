import React from 'react';
import './Collaborator.css';
import ohioCyberrangeLogo from '../../images/ohio-cyberrange-logo.png';

function Collaborator(){
    return(
        <>
        <h2 className='collaborator-heading'>Collaborator</h2>
        <div className="collaborator-card">
            <a className='col-card' href="https://www.ohiocyberrangeinstitute.org/" >
            <div className='collaborator-card-media'>
                <img src={ohioCyberrangeLogo} alt="ohio-cybersecurity-logo" className="collaborator-card-img" />
                <div className="overlay">
                <a href="https://www.ohiocyberrangeinstitute.org/" target="_blank" rel="noopener noreferrer" className="sponsor-link-icon">
                    <h4>OCRI🔗</h4>
                </a>
                </div>
            </div>
            </a>
        </div>
        </>
    )
}

export default Collaborator;