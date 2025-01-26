import React,{useState} from 'react';
import './SummerCamp2024.css'
import Sidebar from './Sidebar.js'
import Module1img from '../../images/module-1.png'
import Module2img from '../../images/module-2.jpg'

function SummerCamp2024(){

    const[searchQuery, setSearchQuery] = useState('');

    const moduleData =[
       {
             title: 'Deleted Files Recovery',
             description: 'Discover how lost or deleted files are recovered using expert tools and techniques. Explore how storage systems work and the importance of data integrity and privacy in the digital world.',
             image: Module1img
           },
           {
             title:'Network Attacks',
             description: 'Explore cybersecurity by learning to identify network vulnerabilities, understand various types of network attacks, and discover strategies to protect and secure systems.',
              image: Module2img
           }
    ];

    const handleSearchChange = (e) =>{
        setSearchQuery(e.target.value)
    }

    const filteredModules = moduleData.filter((module) => 
        module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        module.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
   
    return(
        
        <div className='mainsummercontainer'>
        <div className='leftsidenav'>
        <Sidebar />
        </div>

        <div className='rightsidecontent'>
            <h1 className='campheading'>Unlock New Tech Skills at <br></br>Summer Camp 2024</h1>
            <p>Join us for an exciting and interactive summer learning experience designed to spark curiosity and develop valuable 
                tech skills. Our summer camp offers 
                two engaging modules that introduce students to real-world challenges in the world of technology and cybersecurity</p>

                <h2 className='camp-offerings'>Summer camp offerings</h2>

             <div className="search-bar" >
                <input type="search" placeholder="Search" onChange={handleSearchChange} />
             </div>

           
            {filteredModules.length > 0 ? (  
                 <div className='module-container'>
                 { filteredModules.map((module, index) => {
                        return (
                            <div className='module-item' key={index}>
                                <div className='module-image'>
                                <img src={module.image} alt="moduleimage" />
                                </div>
                                <div className='module-text'>
                                    <h3>{module.title}</h3>
                                    <p>{module.description}</p>
                                </div>
                            </div>
                        );
                    }) }
                    </div>
                ) : (
                    <div className="alertcontainer">
                    <div >
                        There are no results that match your selected search terms and/or filters. Please adjust your search and/or filters.
                        </div>
                    </div>
                )
                }
          
            
        </div>
        </div>
        
    )
}

export default SummerCamp2024;