import React from 'react';
import ProfileColumn from './ProfileColumn';
import '../components/ComparisonSection.css';

function ComparisonSection() {
    return (
        <section className="comparison-container">
            <ProfileColumn
                name="Left User"
                experiences={[
                    { title: 'Board Liaison', subtitle: 'American Youth Association' },
                    { title: 'Advisory Board Member', subtitle: 'California Children’s Trust' },
                    { title: 'Research Assistant - Prof. Colleen Chien', subtitle: 'UC Berkeley' },
                ]}
                educations={['University of Pennsylvania', 'Miramonte High School']}
            />

            {/* Center divider with "Equal" text */}
            <div className="divider-container">
                <div className="divider-line"></div>
                <div className="divider-circle">Equal</div>
            </div>

            <ProfileColumn
                name="Right User"
                experiences={[
                    { title: 'CEO Intern', subtitle: 'Summerville Medical Center' },
                    { title: 'Medical Assistant', subtitle: 'Palmetto Primary Care Physicians' },
                    { title: 'Mentor', subtitle: 'Research Girl' },
                ]}
                educations={[
                    'University of Pennsylvania – BS in Neuroscience',
                    'Academic Magnet High School',
                ]}
            />
        </section>
    );
}

export default ComparisonSection;
