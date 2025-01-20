import React from 'react';
import './Goals.css';
import enhanceEducationImg from '../../images/enhance-education.jpg';
import inclusiveWorkforceImg from '../../images/inclusive-workforce.jpg';
import skillsGapImg from '../../images/skills-gap.jpg';
import learningCommunitiesImg from '../../images/learning-communities.jpg';
import empowerProfessionalsImg from '../../images/empower-professionals.jpg';
import protectInfrastructureImg from '../../images/protect-infrastructure.jpg';

function Goals() {
  const goalsData = [
    {
      title: 'Evaluating Cybersecurity Talent',
      description: 'BGSU will assess cybersecurity skills with stakeholders to identify gaps and improve education for future workforce needs.',
      image: enhanceEducationImg,
      imagePosition: 'right'
    },
    {
      title: 'Building Cybersecurity Pathways',
      description: 'Workshops, modules, and a summer camp will be offered, along with support for diversity and Accessibility Services for students interested in cybersecurity.',
      image: inclusiveWorkforceImg,
      imagePosition: 'left'
    },
    {
      title: 'Streamlining Workforce Resources',
      description: 'Collaborating with local institutions, cybersecurity resources will be shared via websites, offering materials, surveys, and workshops to support students, educators, and professionals.',
      image: skillsGapImg,
      imagePosition: 'right'
    },
    {
      title: 'Boosting Cybersecurity Workforce Retention',
      description: 'BGSU will align its cybersecurity programs with the NICE framework, incorporating virtual labs from Ohio CyberRange and CLARK, while creating job fairs for internships and co-op opportunities with local firms.',
      image: learningCommunitiesImg,
      imagePosition: 'left'
    }
  ];

  return (
    <section className="goals-section">
      <h2>Our Goal: Transforming Cybersecurity Education</h2>
      <div className="goals-container">
        {goalsData.map((goal, index) => (
          <div 
            key={index} 
            className={`goal-item ${goal.imagePosition === 'left' ? 'goal-reverse' : ''}`}
          >
            <div className="goal-text">
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
            </div>
            <div className="goal-image">
              <img src={goal.image} alt={goal.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Goals;