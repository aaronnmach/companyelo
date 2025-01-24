import React, { useState, useEffect } from 'react';
import './ComparisonSection.css';
import { supabase } from './supabaseClient';

function ComparisonSection() {
    const [selectedIndustry, setSelectedIndustry] = useState('Tech'); // Dropdown selection
    const [companies, setCompanies] = useState([]); // Companies to display
    const [loading, setLoading] = useState(true); // Loading state

    // Fetch companies when component mounts or industry changes
    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from('companies') // Your Supabase table name
                    .select('*') // Select all columns
                    .eq('industry', selectedIndustry) // Filter by selected industry
                    .order('id', { ascending: true }); // Avoid caching issues

                if (error) {
                    console.error('Error fetching companies:', error);
                } else {
                    console.log(`Companies fetched for ${selectedIndustry}:`, data);
                    setCompanies(data); // Set fetched companies
                }
            } catch (err) {
                console.error('Unexpected error:', err);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        console.log('Selected Industry:', selectedIndustry);
        fetchCompanies();
    }, [selectedIndustry]); // Re-run when `selectedIndustry` changes

    const handleDropdownChange = (e) => {
        setSelectedIndustry(e.target.value); // Update industry based on dropdown
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

            {loading ? (
                <p>Loading companies...</p>
            ) : (
                <div className="comparison-columns">
                    {companies.length > 0 ? (
                        companies.map((company) => (
                            <div key={company.id} className="company-card">
                                <div
                                    className="company-logo"
                                    style={{
                                        backgroundImage: `url(${company.logo})`,
                                        backgroundSize: 'cover',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                    }}
                                ></div>
                                <h2>{company.name}</h2>
                                <p>{company.overview || 'No description available.'}</p>
                                <div className="details">
                                    <p><strong>Industry:</strong> {company.industry}</p>
                                    <p><strong>Employees:</strong> {company.employees}</p>
                                    <p><strong>Location:</strong> {company.location}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No companies found in the selected industry.</p>
                    )}
                </div>
            )}

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
