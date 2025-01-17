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
      title: 'Enhance Cybersecurity Education',
      description: 'Develop comprehensive educational programs that provide cutting-edge knowledge and practical skills in cybersecurity.',
      image: enhanceEducationImg,
      imagePosition: 'right'
    },
    {
      title: 'Foster Inclusive Workforce Development',
      description: 'Create pathways for diverse talents to enter and thrive in the cybersecurity field, breaking down traditional barriers.',
      image: inclusiveWorkforceImg,
      imagePosition: 'left'
    },
    {
      title: 'Bridge Technology Skills Gap',
      description: 'Connect academic training with industry needs, preparing students with the most relevant and in-demand cybersecurity skills.',
      image: skillsGapImg,
      imagePosition: 'right'
    },
    {
      title: 'Create Collaborative Learning Communities',
      description: 'Build interconnected networks of students, educators, and industry professionals to foster knowledge sharing and innovation.',
      image: learningCommunitiesImg,
      imagePosition: 'left'
    },
    {
      title: 'Empower Future-Ready Professionals',
      description: 'Equip students with leadership skills, critical thinking, and adaptive strategies to tackle emerging cybersecurity challenges.',
      image: empowerProfessionalsImg,
      imagePosition: 'right'
    },
    {
      title: 'Protect Critical Digital Infrastructure',
      description: 'Develop experts who can safeguard national and organizational digital assets against evolving cyber threats.',
      image: protectInfrastructureImg,
      imagePosition: 'left'
    }
  ];

  return (
    <section className="goals-section">
      <h2>Our Mission: Transforming Cybersecurity Education</h2>
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