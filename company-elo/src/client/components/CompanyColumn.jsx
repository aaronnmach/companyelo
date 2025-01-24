import React from 'react';
import './CompanyColumn.css'; // You can create a corresponding CSS file for styling

function CompanyColumn({ companyName, overview, details, industry, employees, location }) {
    return (
        <div className="company-column">
            {/* Placeholder for the company's logo */}
            <div className="company-logo">
                <div className="logo-placeholder"></div>
            </div>
            <h2 className="company-name">{companyName}</h2>

            <div className="company-section">
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>

            <div className="company-section">
                <h3>Details</h3>
                <ul>
                    <li><strong>Industry:</strong> {industry}</li>
                    <li><strong>Employees:</strong> {employees}</li>
                    <li><strong>Location:</strong> {location}</li>
                </ul>
            </div>
        </div>
    );
}

export default CompanyColumn;
