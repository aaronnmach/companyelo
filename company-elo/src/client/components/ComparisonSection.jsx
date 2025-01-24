import React, { useState } from 'react';
import CompanyColumn from './CompanyColumn';
import './ComparisonSection.css';

function ComparisonSection() {
    const [selectedIndustry, setSelectedIndustry] = useState('Tech');

    const handleDropdownChange = (e) => {
        setSelectedIndustry(e.target.value);
    };

    return (
        <section className="comparison-container">
            {/* Dropdown menu for industry selection */}
            <div className="dropdown-container">
                <select
                    className="industry-dropdown"
                    value={selectedIndustry}
                    onChange={handleDropdownChange}
                >
                    <option value="Tech">Tech</option>
                    <option value="Investment Banking">Investment Banking</option>
                    <option value="Quant">Quant</option>
                    <option value="Consulting">Consulting</option>
                </select>
            </div>

            <div className="comparison-columns">
                <div className="company-card">
                    <div className="company-logo" style={{ backgroundColor: '#C58BF2', width: '80px', height: '80px', borderRadius: '50%' }}></div>
                    <h2>Company 1</h2>
                    <p>Leading tech company focusing on AI and cloud services.</p>
                    <div className="details">
                        <p><strong>Industry:</strong> Technology</p>
                        <p><strong>Employees:</strong> 10,000+</p>
                        <p><strong>Location:</strong> San Francisco, CA</p>
                    </div>
                </div>
                <div className="company-card">
                    <div className="company-logo" style={{ backgroundColor: '#C58BF2', width: '80px', height: '80px', borderRadius: '50%' }}></div>
                    <h2>Company 2</h2>
                    <p>Innovative startup specializing in blockchain solutions. Additional description here.</p>
                    <div className="details">
                        <p><strong>Industry:</strong> Finance</p>
                        <p><strong>Employees:</strong> 500+</p>
                        <p><strong>Location:</strong> New York, NY</p>
                    </div>
                </div>
            </div>


            {/* Buttons placed below */}
            <div className="comparison-buttons">
                <button className="company-button">Company 1</button>
                <button className="equal-button">Equal</button>
                <button className="company-button">Company 2</button>
            </div>
        </section>
    );
}

export default ComparisonSection;
