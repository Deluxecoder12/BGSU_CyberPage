import React, { useState } from 'react';
import './SummerCamp2025.css';
import Sidebar from './Sidebar.js';
import Module1img from '../../images/2025module-1.jpg';
import Module2img from '../../images/2025module-2.jpg';
import Module3img from '../../images/2025module-3.png';
import Module4img from '../../images/2025module-4.jpg';
import Module5img from '../../images/module-1.png'

function SummerCamp2025() {
    const [searchQuery, setSearchQuery] = useState('');

    const moduleData = [
        {
            title: 'Phishing and Social Engineering',
            description: 'Understand how attackers use social engineering techniques like phishing to manipulate individuals into revealing sensitive information. Learn how to identify, prevent, and respond to these common cyber threats.',
            image: Module1img
        },
        {
            title: 'Network Security Fundamentals',
            description: 'Discover how to protect networks from cyber threats by implementing essential security measures. Learn about firewalls, encryption, and intrusion detection systems to safeguard digital infrastructures.',
            image: Module2img
        },
        {
            title:'Digital Forensics and Investigations',
            description:'Explore how digital forensics experts recover and analyze data from devices after cyber incidents. Learn key tools, techniques, and the importance of privacy and data integrity in investigations.',
            image: Module3img
        },
        {
            title:'Ethical Hacking Basics',
            description:'Dive into the world of ethical hacking by learning how to test and secure systems from potential vulnerabilities. Understand the methods used by ethical hackers to identify weaknesses and protect against cyber threats.',
            image: Module4img
        },
        {
            title:'Malware Analysis and Prevention',
            description:'Learn how to identify, analyze, and defend against various types of malware. Explore techniques to prevent infections and safeguard systems from harmful software that can compromise security.',
            image: Module5img
        }
    ];

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredModules = moduleData.filter((module) =>
        module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        module.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='main-summer-container-2025'>
            <div className='left-sidenav-2025'>
                <Sidebar />
            </div>

            <div className='right-side-content-2025'>
                <h1 className='camp-heading-2025'>Cybersecurity Awaits: Join Us for Summer Camp 2025!</h1>
                <p>
                Dive into an inspiring and hands-on learning adventure designed to ignite 
                creativity and nurture valuable tech skills. This year’s camp offers 
                exciting modules, providing students with the opportunity to tackle real-world challenges in technology and cybersecurity.
                </p>

                <p>
                Whether you’re passionate about exploring innovative tools or understanding 
                how to protect digital systems, Summer Camp 2025 is your gateway to discovering 
                the world of tech in an engaging and interactive way.
                </p>

                <h2 className='camp-offerings-2025'>Summer camp offerings</h2>

                <div className='search-bar-2025'>
                    <input type='search' placeholder='Search' onChange={handleSearchChange} />
                </div>

                {filteredModules.length > 0 ? (
                    <div className='module-container-2025'>
                        {filteredModules.map((module, index) => {
                            return (
                                <div className='module-item-2025' key={index}>
                                    <div className='module-image-2025'>
                                        <img src={module.image} alt='moduleimage' />
                                    </div>
                                    <div className='module-text-2025'>
                                        <h3>{module.title}</h3>
                                        <p>{module.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className='alert-container-2025'>
                        <div>
                            There are no results that match your selected search terms and/or filters. Please adjust your search and/or
                            filters.
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SummerCamp2025;
