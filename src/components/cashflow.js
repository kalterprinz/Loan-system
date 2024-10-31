import React,  { useState } from 'react';
import './cashflow.css'; // This file will contain the necessary CSS
import Footer from './footer';

const CashFlow = () => {

    return (
        <div className="application-form-page">
            {/* Header Section */}
            <header>
                <img src="logo.png" alt="MSU-IIT NMPC Logo" className="logo" />
                <h2 className="landingh2">MSU-IIT National Multi-Purpose Cooperative</h2>
                <nav>
                    <a href="/login" className="nav-link">Login</a>
                    <a href="/register" className="nav-link">Register</a>
                </nav>
            </header>

            {/* Form Container */}
            <div className="form-container">
                <h3 className="title">Cash Flow Statement</h3>
                <form className="cashflow-form">
                    <div className="section">
                        <div className="item">
                            <label>Salaries and Wages:</label>
                            <input type="number" placeholder="₱" />
                        </div>
                        <div className="item">
                            <label>Spouse Income:</label>
                            <input type="number" placeholder="₱" />
                        </div>
                        <div className="item">
                            <label>Income from Business (Net):</label>
                            <input type="number" placeholder="₱" />
                        </div>
                        <div className="item">
                            <label>Income from Financial Investment/Dividend:</label>
                            <input type="number" placeholder="₱" />
                        </div>
                        <div className="item">
                            <label>Other Income:</label>
                            <input type="number" placeholder="₱" />
                        </div>
                        <div className="item">
                            <label style={{ fontWeight: "bold" }}>TOTAL INCOME</label>
                            <input type="number" placeholder="₱" />
                        </div>
                    </div>

                    <div className="section">
                        <h3>Expenditures</h3>
                        <div className="item">
                            <label>Food Expenses</label>
                            <input type="number" placeholder="₱" />
                        </div>
                        <div className="item">
                            <label>House Rentals</label>
                            <input type="number" placeholder="₱" />
                        </div> 

                        <div className="item">
                            <label>Education (Tuition fees, Miscellaneous fees, Books, Supplies, etc.)</label>
                            <input type="number" placeholder="₱" />
                        </div>   
                        
                        <div className="item">
                            <label>Medicals and Dental</label>
                            <input type="number" placeholder="₱" />
                        </div>                        
                        
                        <div className="item">
                            <label>Clothing</label>
                            <input type="number" placeholder="₱" />
                        </div>                        
                       
                        <div className="item">
                            <label>ersonal Hygiene</label>
                            <input type="number" placeholder="₱" />
                        </div>                        
                       
                        <div className="item">
                            <label>Cooking/Gas</label>
                            <input type="number" placeholder="₱" />
                        </div>                        
                       
                        <div className="item">
                            <label>Transportation</label>
                            <input type="number" placeholder="₱" />
                        </div>                        
                       
                        <div className="item">
                            <label>Water Bill Payment</label>
                            <input type="number" placeholder="₱" />
                        </div>                        
                       
                        <div className="item">
                            <label>Electricity Bill Payment</label>
                            <input type="number" placeholder="₱" />
                        </div>                        
                       
                        <div className="item">
                            <label>Telephone/Mobile/Internet Bill Payment</label>
                            <input type="number" placeholder="₱" />
                        </div>                        
                       
                        <div className="item">
                            <label>Salary of Helper</label>
                            <input type="number" placeholder="₱" />
                        </div>  
                                               
                        <div className="item">
                            <label>Taxes and Licenses</label>
                            <input type="number" placeholder="₱" />
                        </div>                        
                                                          
                        <div className="item">
                            <label>Other Expenses</label>
                            <input type="number" placeholder="₱" />
                        </div>      
                                               
                        <div className="item">
                        <label style={{ fontWeight: "bold" }}>TOTAL EXPENDITURES</label>
                            <input type="number" placeholder="₱" />
                        </div>                        
                    </div>

                    
                    <div className="section">
                        <h3>Cash Layout</h3>
                        <div className="item">
                            <label>Payment of other Debts/Amortization</label>
                            <input type="number" placeholder="₱" />
                        </div>  
                        <div className="group">
                        <div className="item">
                            <label>Productive loan form other banks/coop</label>
                            <input type="number" placeholder="₱" />
                        </div>  
                        <div className="item">
                            <label>Housing Amortization</label>
                            <input type="number" placeholder="₱" />
                        </div>                        
                        
                        <div className="item">
                            <label>Vehicle Amortization</label>
                            <input type="number" placeholder="₱" />
                        </div>  
                                                
                        <div className="item">
                            <label>Appliances Amortization</label>
                            <input type="number" placeholder="₱" />
                        </div>  
                                                
                        <div className="item">
                            <label>Others (Please Specify)</label>
                            <input type="text" placeholder="Specify details here..." style={{ marginBottom: "4px", width: "120%", marginRight: "250px" }} />
                            <input type="number-1" placeholder="₱" />
                            
                        
                        </div>
                        </div>   
  
                                                
                        <div className="item">
                            <label>Payments of Insurance or Pension Premiums</label>
                            <input type="number" placeholder="₱" />
                        </div>  
                                                
                        <div className="item">
                            <label>Other Cash Outlays (Please Specify)</label>
                            <input type="text" placeholder="Specify details here..." style={{ marginBottom: "4px", width: "120%", marginRight: "250px" }} />
                            <input type="number-1" placeholder="₱" />   
                        </div>  
                                                                        
                        <div className="item">
                            <label style={{ fontWeight: "bold" }}>TOTAL CASH OUTLAYS</label>
                           
                            <input type="number" placeholder="₱" />
                        </div>  
                                                                              
                        <div className="item">
                            
                            <label style={{ fontWeight: "bold" }}>TOTAL EXPENDITURE AND CASH OUTLAYS</label>
                            <input type="number" placeholder="₱" />
                        </div>  
                                                                              
                        <div className="item">
                            <label style={{ fontWeight: "bold" }}>NET SAVINGS</label>
                            <input type="number" placeholder="₱" />
                        </div>                         
                    </div>
                    <br></br>
                    <p className="aboutp">
                    I certify to the correctness and truthfulness of the above statements according to my knowledge and belief. 
                    Any false declaration made by me which may be 
                    found later shall cause the disapproval of my loan application.
                    </p>
                    <br></br>
                    <div className="form-row-5">
                                <div className="column">
                                    <div className="form-group">
                                        <label htmlFor="borrower-signature">Member-Borrower’s Signature</label>
                                        <input type="file" id="borrower-signature" name="borrowerSignature" required />
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="very">
                                        <label htmlFor="spouse-signature">Verified by</label>
                                        <input type="text" id="verified" name="verified" placeholder="Officer's name" />
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="form-group">
                                        <label htmlFor="date">Date</label>
                                        <input type="date" id="date" name="date" required />
                                    </div>
                                </div>

                            </div>

                            <button type="submit" class="submit-btn-1">Submit</button>
                </form>
                <br></br>

        

            </div>

            < Footer />
        </div>
    );
};

export default CashFlow;
