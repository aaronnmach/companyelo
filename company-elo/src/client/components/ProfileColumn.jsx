import React from 'react';
import '../components/ProfileColumn.css';

function ProfileColumn({ name, experiences, educations }) {
    return (
        <div className="profile-column">
            {/* Placeholder Profile Image */}
            <div className="profile-image"></div>

            {/* Name or heading (optional) */}
            <h2 className="profile-name">{name}</h2>

            <h3 className="section-title">Experience</h3>
            <ul className="experience-list">
                {experiences.map((exp, idx) => (
                    <li key={idx}>
                        <strong>{exp.title}</strong>
                        <br />
                        <span className="subtitle">{exp.subtitle}</span>
                    </li>
                ))}
            </ul>

            <h3 className="section-title">Education</h3>
            <ul className="education-list">
                {educations.map((edu, idx) => (
                    <li key={idx}>{edu}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProfileColumn;
