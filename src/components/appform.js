import React from 'react';
import './appform.css'; // This file will contain the necessary CSS
import Footer from './footer';

const Appform = () => {
    return (
        <div className="application-form-page">
            {/* Header Section */}
            <header>
                <img src="logo.png" alt="MSU-IIT NMPC Logo" className="logo" />
                <h2 className="landingh2">MSU-IIT National Multi-Purpose Cooperative</h2>
                <a href="/login" className="nave">Login</a>
                <a href="/register" className="nave1">Register</a>
            </header>

            {/* Form Container */}
            <div className="form-container">
            <h3 className="form-title">Loan Application Form</h3>
                <form className="loan-form">
                    <div className="form-row1">
                        <div className="form-group-1">
                        <label for="branch">BRANCH</label>
                            <select id="branch" name="branch" required>
                                <option value="tibanga">Tibanga</option>
                                <option value="main">Main</option>
                            </select>
                        </div>

                        <div className="form-group-2">
                            <label htmlFor="dateFiled">DATE FILED</label>
                            <input type="date" id="dateFiled" name="dateFiled" required />
                        </div>

                    </div>
                    
                    <div className="form-group-3">
                        <label class="container">New
                            <input type="checkbox" name="loanType" value="new" />
                            <span class="checkmark-1"></span>
                        </label>
                        <label class="container">Renewal
                            <input type="checkbox" name="loanType" value="renewal" />
                            <span class="checkmark-1"></span>
                        </label>
                    </div>


                    <div className="form-row2">
                        {/* Left Column */}
                        <div className="column left">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address:</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="permanentAddress">Permanent Address:</label>
                                <textarea id="permanentAddress" name="permanentAddress" required></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="presentAddress">Present Address:</label>
                                <textarea id="presentAddress" name="presentAddress" required></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Telephone/Mobile No.:</label>
                                <input type="text" id="phone" name="phone" required />
                            </div>

                            <div className="form-group">
                                <div className="gender"> 
                                <label htmlFor="sex">Sex:</label>
                                <select id="sex" name="sex" required>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="age">  
                                <label htmlFor="age">Age:</label>
                                <input type="number" id="age" name="age" required />
                                </div>

                            </div>

                            <div className="form-group">
                                <div className="civil">
                                    <label htmlFor="civilStatus">Civil Status:</label>
                                    <select id="civilStatus" name="civilStatus" required>
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="spouseName">Name of Spouse:</label>
                                <input type="text" id="spouseName" name="spouseName" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="spouseOccupation">Spouse Occupation:</label>
                                <input type="text" id="spouseOccupation" name="spouseOccupation" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="sketch">Sketch of Residence:</label>
                                <input type="file" id="sketch" name="sketch" required />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="column right">
                            <div className="form-group">
                                <label htmlFor="loanType">Loan Type:</label>
                                <select id="loanType" name="loanType" required>
                                    <option value="personal">Personal Loan</option>
                                    <option value="educational">Educational Loan</option>
                                    <option value="pensioner">Pensioner Loan</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="amountApplied">Amount Applied:</label>
                                <input type="number" id="amountApplied" name="amountApplied" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="loanTerm">Term of Loan:</label>
                                <input type="text" id="loanTerm" name="loanTerm" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="loanPurpose">Purpose of Loan:</label>
                                <textarea id="loanPurpose" name="loanPurpose" required></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="employer">Employer:</label>
                                <input type="text" id="employer" name="employer" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="employerContact">Employer Contact No.:</label>
                                <input type="text" id="employerContact" name="employerContact" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="employmentStatus">Employment Status/Position Held:</label>
                                <input type="text" id="employmentStatus" name="employmentStatus" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="businessName">Business Name:</label>
                                <input type="text" id="businessName" name="businessName" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="businessAddress">Business Address:</label>
                                <input type="text" id="businessAddress" name="businessAddress" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="coopMembershipLength">Length of Coop Membership:</label>
                                <input type="text" id="coopMembershipLength" name="coopMembershipLength" />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="shareCapital">Account Balance:</label>
                            </div>
                        
                                <div class="other">
                                    <div class="form-group">
                                        
                                        <label htmlFor="shareCapital">Share Capital:</label>
                                        <input type="text" id="shareCapital" name="shareCapital" />
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="savingDeposit">Savings Deposit:</label>
                                        <input type="text" id="savingDeposit" name="savingDeposit" />
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="otherDeposit">Other Deposit:</label>
                                        <input type="text" id="otherDeposit" name="otherDeposit" />
                                    </div>
                            </div>
                        </div>
                    </div>

                    {/* Collateral and Payment Details */}
            <div className="form-row">
                {/* Collateral/Security Offered */}
                <div class="column-1">
                
                    <div class="form-group">
                    <label for="payment">Collateral/Security Offered</label>
                        <div class="checkbox-group">
                            <label class="container">Real Estate - REM
                                <input type="checkbox" id="real-estate" name="collateral" value="real-estate"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Vehicle - Chattel
                                <input type="checkbox" id="vehicle" name="collateral" value="vehicle"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">ATM Deposit
                                <input type="checkbox" id="atm-deposit" name="collateral" value="atm-deposit"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Savings/Time Deposit
                                <input type="checkbox" id="savings-deposit" name="collateral" value="savings-deposit"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Appliances
                                <input type="checkbox" id="appliances" name="collateral" value="appliances"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">None
                                <input type="checkbox" id="none" name="collateral" value="none"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Others:
                                <input type="checkbox" id="others" name="collateral" value="others"/>
                                <span class="checkmark"></span>
                            </label>
                            <br></br>
                            <textarea id="payment" name="payment" required></textarea>
                            

                        </div>
                    </div>
                </div>

                {/* Source of Payment */}
                <div class="column-1">
                    <div class="form-group">
                        <label for="payment">Source of Payment</label>
                        <div class="checkbox-group">
                            <label class="container">Salary
                                <input type="checkbox" id="salary" name="payment" value="salary"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Pension
                                <input type="checkbox" id="pension" name="payment" value="pension"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Allotment
                                <input type="checkbox" id="allotment" name="payment" value="allotment"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Commission/Incentives
                                <input type="checkbox" id="commission" name="payment" value="commission"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Income from Business
                                <input type="checkbox" id="income-business" name="payment" value="income-business"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Financial Assistance
                                <input type="checkbox" id="financial-assistance" name="payment" value="financial-assistance"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Others:
                                <input type="checkbox" id="payment-others" name="payment" value="payment-others"/>
                                <span class="checkmark"></span>
                            </label>
                            <br></br>
                            <textarea id="payment" name="payment" required></textarea>
                        </div>
                    </div>
                </div>

                <div class="column-1">
                    <div class="form-group">
                        <label for="payment">Made of Payment</label>
                        <div class="checkbox-group">
                            <label class="container">Daily
                                <input type="checkbox" id="daily" name="payment" value="daily"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Weekly
                                <input type="checkbox" id="weekly" name="payment" value="weekly"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Semi-Monthly
                                <input type="checkbox" id="semiMonthly" name="payment" value="semiMonthly"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Monthly
                                <input type="checkbox" id="monthly" name="payment" value="monthly"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Quarterly
                                <input type="checkbox" id="quarterly" name="payment" value="quarterly"/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="column-1">
                    <div class="form-group">
                        <label for="payment">Manner of Payment</label>
                        <div class="checkbox-group">
                            <label class="container">Thru Coop/OTC
                                <input type="checkbox" id="otc" name="payment" value="otc"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Collector
                                <input type="checkbox" id="collector" name="payment" value="collector"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Payroll Deduction
                                <input type="checkbox" id="payroll" name="payment" value="payroll"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">PDC
                                <input type="checkbox" id="pdc" name="payment" value="pdc"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Auto-Debit
                                <input type="checkbox" id="debit" name="payment" value="debit"/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                </div>


                            <p className="aboutp">
                                I warrant the truth and correctness of all data 
                                and information herein to the best of my knowledge. 
                                I expressly submit to any credit investigation and hereby agree that 
                                any false information that will be discovered will automatically cause
                                the disapproval of this application.
                            </p>
                            <br></br>
                            {/* Upload Signature and Date */}
                            <div className="form-row">
                                <div className="column">
                                    <div className="form-group">
                                        <label htmlFor="borrower-signature">Member-Borrower’s Signature</label>
                                        <input type="file" id="borrower-signature" name="borrowerSignature" required />
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="form-group">
                                        <label htmlFor="spouse-signature">Spouse’s Signature</label>
                                        <input type="file" id="spouse-signature" name="spouseSignature" />
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="form-group">
                                        <label htmlFor="date">Date</label>
                                        <input type="date" id="date" name="date" required />
                                    </div>
                                </div>

                            </div>

                           

                            <div class="parent-container">
                                <a href="/cashflow" class="submit-btn">Next →</a>
                            </div>


                        </form>
                    </div>

         <Footer />
        </div>
    );
};

export default Appform;
