import React, { useState } from 'react';
import './appform.css'; // This file will contain the necessary CSS
import Footer from './footer';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Modal from 'react-modal';
import L from 'leaflet';


const icon = L.icon({
    iconUrl: 'src/to/pin.jpg', // Provide your custom marker icon path here
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
});

const LocationPin = ({ onLocationSelect }) => {
    useMapEvents({
        click(e) {
            const { lat, lng } = e?.latlng || {};
            if (lat !== undefined && lng !== undefined) {
                onLocationSelect([lat, lng]);
            } else {
                console.error("Error: Location data is undefined.");
            }
        }
    });
    return null;
};
const Appform = () => {

    const [isMapVisible, setIsMapVisible] = useState(false);
    const [location, setLocation] = useState(null); // To store selected location
    const [applicantName, setApplicantName] = useState("");
    const [newRe, setNewRe] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [permanentAddress, setPermanentAddress] = useState("");
    const [presentAddress, setPresentAddress] = useState("");
    const [telMob, setTelMob] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState("");
    const [branch, setBranch] = useState("");
    const [civilStatus, setCivilStatus] = useState("");
    const [spouseName, setSpouseName] = useState("");
    const [spouseOccu, setSpouseOccu] = useState("");
    const [locationll, setLocationll] = useState("");
    const [loanType, setLoanType] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [loanTerm, setLoanTerm] = useState("");
    const [purposeLoan, setPurposeLoan] = useState("");
    const [employer, setEmployer] = useState("");
    const [empCon, setEmpCon] = useState("");
    const [empStatus, setEmpStatus] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessAdd, setBusinessAdd] = useState("");
    const [lengthMem, setLengthMem] = useState("");
    const [shareCapital, setShareCapital] = useState("");
    const [savingsDepo, setSavingsDepo] = useState("");
    const [otherDepo, setOtherDepo] = useState("");
    const [collateral, setCollateral] = useState("");
    const [collateralOther, setCollateralOther] = useState("");
    const [sourcePay, setSourcePay] = useState("");
    const [sourcePayOther, setSourcePayOther] = useState("");
    const [modePay, setModePay] = useState("");
    const [mannerPay, setMannerPay] = useState("");
    const [applicationDate, setApplicationDate] = useState("");

    const handleFileChange = (event, setState) => {
        const { files } = event.target;
        setState(files[0]);
    };

    const handleCheckboxChange = (event, setState, currentState) => {
        const { value, checked } = event.target;

        if (checked) {
            setState([...currentState, value]); // Add to state
        } else {
            setState(currentState.filter((item) => item !== value)); // Remove from state
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        // Construct the data object directly from state variables
        const requestData = {
            applicantName,
            newRe,
            emailAddress,
            permanentAddress,
            presentAddress,
            telMob,
            sex,
            age,
            branch,
            civilStatus,
            spouseName,
            spouseOccu,
            location,
            loanType,
            loanAmount,
            loanTerm,
            purposeLoan,
            employer,
            empCon,
            empStatus,
            businessName,
            businessAdd,
            lengthMem,
            shareCapital,
            savingsDepo,
            otherDepo,
            collateral,
            collateralOther,
            sourcePay,
            sourcePayOther,
            modePay,
            mannerPay,
            applicationDate,
        };
    
        try {
            // Use Axios or Fetch API to send a POST request
            const response = await axios.post('http://localhost:3001/loan', requestData);
    
            if (response.status === 201) {
                alert('Loan submitted successfully!');
                console.log(response.data); // Log the response for debugging
            } else {
                alert('Something went wrong.');
            }
        } catch (error) {
            console.error('Error submitting loan:', error);
            alert('Error submitting loan. Please try again.');
        }
    };
    const handleLocationSelect = (selectedLocation) => {
        setLocation(selectedLocation); // Store selected location
        setIsMapVisible(false); // Optionally close the map after selection
    };
    const showMap = () => {
        setIsMapVisible(true); // show map when called
    };
    return (
        <div className="application-form-pageapp">
            {/* Header Section */}
            <header className="header">
                <img src="logo.png" alt="MSU-IIT NMPC Logo" className="logol" />
                <h2 className="landingh2off2">MSU-IIT National Multi-Purpose Cooperative</h2>
            </header>

            {/* Form Container */}
            
            <div className="sulodPorm" onSubmit={handleSubmit}>
            <h3 className="lontaytel">Loan Application Form</h3>
                <form className="porm">
                    <div className="plesDet">
                    <div className="lugar"> 
                        <label htmlFor="branch">BRANCH</label>
                        <select 
                            id="branch" 
                            name="branch" 
                            required 
                            value={branch} // Access from the branch state
                            onChange={(e) => setBranch(e.target.value)}  
                        >
                            <option value="Tibanga-Main">Tibanga-Main</option>
                            <option value="Pala-o">Pala-o</option>
                            <option value="Buru-un">Buru-un</option>
                            <option value="Kiwalan">Kiwalan</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="Suarez-Tominobo">Suarez-Tominobo</option>
                            <option value="Tubod Iligan">Tubod Iligan</option>
                        </select>
                    </div>

                    <div className="det">
                        <label htmlFor="applicationDate">DATE FILED</label>
                        <input
                            type="date"
                            id="applicationDate"
                            name="applicationDate"
                            required
                            className="date-input"
                            value={applicationDate} // Access from the applicationDate state
                            onChange={(e) => setApplicationDate(e.target.value)} // Update applicationDate state
                        />
                    </div>

                    <div className="bago"> 
                        <div className="application-type">
                            <label className="pili">New
                                <input 
                                    type="radio" 
                                    name="applicationType" 
                                    value="new" 
                                    checked={newRe === 'new'}
                                    onChange={() => setNewRe('new')}
                                />
                            </label>
                            <label className="pili">Renewal
                                <input 
                                    type="radio" 
                                    name="applicationType" 
                                    value="renewal" 
                                    checked={newRe === 'renewal'}
                                    onChange={() => setNewRe('renewal')}
                                />
                            </label>
                        </div>
                    </div>

                    </div>


                    <div className="isa">

                        <div className="pormleft">
                        <div className="fillupan">
                            <label htmlFor="applicantName">Name:</label>
                            <input 
                                type="text" 
                                id="applicantName" 
                                name="applicantName" 
                                value={applicantName} // Access from state
                                onChange={(e) => setApplicantName(e.target.value)} // Update state
                                required 
                            />
                        </div>

                        <div className="fillupan">
                            <label htmlFor="emailAddress">Email Address:</label>
                            <input 
                                type="text" 
                                id="emailAddress" 
                                name="emailAddress" 
                                value={emailAddress} // Access from state
                                onChange={(e) => setEmailAddress(e.target.value)} // Update state
                                required 
                            />
                        </div>

                        <div className="fillupan">
                            <label htmlFor="permanentAddress">Permanent Address:</label>
                            <textarea 
                                id="permanentAddress" 
                                name="permanentAddress" 
                                value={permanentAddress} // Access from state
                                onChange={(e) => setPermanentAddress(e.target.value)} // Update state
                                required
                            ></textarea>
                        </div>

                        <div className="fillupan">
                            <label htmlFor="presentAddress">Present Address:</label>
                            <textarea 
                                id="presentAddress" 
                                name="presentAddress" 
                                value={presentAddress} // Access from state
                                onChange={(e) => setPresentAddress(e.target.value)} // Update state
                                required
                            ></textarea>
                        </div>

                        <div className="fillupan">
                            <label htmlFor="telMob">Telephone/Mobile No.:</label>
                            <input 
                                type="text" 
                                id="telMob" 
                                name="telMob" 
                                value={telMob} // Access from state
                                onChange={(e) => setTelMob(e.target.value)} // Update state
                                required 
                            />
                        </div>

                        <div className="ageapp">
                            <label htmlFor="age">Age:</label>
                            <input 
                                type="text" 
                                id="age" 
                                name="age" 
                                value={age} // Access from state
                                onChange={(e) => setAge(e.target.value)} // Update state
                                required 
                            />
                        </div>

                        <div className="genderapp">
                            <label htmlFor="sex">Sex:</label>
                            <select 
                                id="sex" 
                                name="sex" 
                                required 
                                value={sex} // Access from state
                                onChange={(e) => setSex(e.target.value)} // Update state
                            >
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </div>

                        <div className="civilapp">
                            <label htmlFor="civilStatus">Civil Status:</label>
                            <select 
                                id="civilStatus" 
                                name="civilStatus" 
                                required 
                                value={civilStatus} // Access from state
                                onChange={(e) => setCivilStatus(e.target.value)} // Update state
                            >
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="widowed">Widowed</option>
                            </select>
                        </div>

                        <div className="fillupan">
                            <label htmlFor="spouseName">Name of Spouse:</label>
                            <input 
                                type="text" 
                                id="spouseName" 
                                name="spouseName" 
                                value={spouseName} // Access from state
                                onChange={(e) => setSpouseName(e.target.value)} // Update state
                                required 
                            />
                        </div>

                        <div className="fillupan">
                            <label htmlFor="spouseOccu">Spouse Occupation:</label>
                            <input 
                                type="text" 
                                id="spouseOccu" 
                                name="spouseOccu" 
                                value={spouseOccu} // Access from state
                                onChange={(e) => setSpouseOccu(e.target.value)} // Update state
                                required 
                            />
                        </div>

                            
                                    <div className="form-row-checkbox-upload-date">
                                            <div className="checkboxq-groupapp">
                                                <label class="pili">Share Residence Location</label>
                                                </div>
                                                <div className="sher">
                                                <textarea 
                                                    onClick={showMap}
                                                    type="text"
                                                    id="locationll" 
                                                    name="locationll" 
                                                    value={location ? `Latitude: ${location[0]}, Longitude: ${location[1]}` : ''}
                                                        placeholder="Please select your location on the map"
                                                        readOnly
                                                        className="location-input"
                                                    onChange={(e) => setLocationll(e.target.value)} // Update state
                                                    required
                                                ></textarea>
                                    
                                                    {isMapVisible && (
                                                        <div className="map">
                                                            <p>Select a location on the map.</p>
                                                        </div>
                                                    )}
                                                </div>

                                                

                                            {/* Modal for Map with Pin */}
                                            <Modal
                                                isOpen={isMapVisible}
                                                onRequestClose={() => setIsMapVisible(false)}
                                                contentLabel="Select Residence Location"
                                                className="map-modal"
                                                overlayClassName="map-modal-overlay"
                                            >
                                                <MapContainer
                                                    center={[8.2265, 124.2497]} 
                                                    zoom={13}
                                                    style={{ height: "500px", width: "100%" }}
                                                >
                                                    <TileLayer
                                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                                                    />
                                                    {/* Pin marker when user clicks */}
                                                    {location && (
                                                        <Marker position={location} icon={icon}>
                                                            <Popup>
                                                                Selected Location: <br /> Latitude: {location[0]} <br /> Longitude: {location[1]}
                                                            </Popup>
                                                        </Marker>
                                                    )}
                                                    <LocationPin onLocationSelect={handleLocationSelect} />
                                                </MapContainer>
                                            </Modal>
                                        </div>
                        </div>


                        <div className="pormrayt">
                        <div className="fillupan">
                            <label htmlFor="loanType">Loan Type:</label>
                            <select 
                                id="loanType" 
                                name="loanType" 
                                required 
                                value={loanType} // Access from state
                                onChange={(e) => setLoanType(e.target.value)} // Update state
                            >
                                <option value="personal">Personal Loan</option>
                                <option value="educational">Educational Loan</option>
                                <option value="pensioner">Pensioner Loan</option>
                            </select>
                        </div>

                        <div className="fillupan">
                            <label htmlFor="loanAmount">Amount Applied:</label>
                            <input 
                                type="text" 
                                id="loanAmount" 
                                name="loanAmount" 
                                value={loanAmount} // Access from state
                                onChange={(e) => setLoanAmount(e.target.value)} // Update state
                                required 
                            />
                        </div>

                        <div className="fillupan">
                            <label htmlFor="loanTerm">Term of Loan:</label>
                            <input 
                                type="text" 
                                id="loanTerm" 
                                name="loanTerm" 
                                value={loanTerm} // Access from state
                                onChange={(e) => setLoanTerm(e.target.value)} // Update state
                                required 
                            />
                        </div>

                        <div className="fillupan">
                            <label htmlFor="purposeLoan">Purpose of Loan:</label>
                            <textarea 
                                id="purposeLoan" 
                                name="purposeLoan" 
                                value={purposeLoan} // Access from state
                                onChange={(e) => setPurposeLoan(e.target.value)} // Update state
                                required
                            ></textarea>
                        </div>

                        <div className="fillupan">
                            <label htmlFor="employer">Employer:</label>
                            <input 
                                type="text" 
                                id="employer" 
                                name="employer" 
                                value={employer} // Access from state
                                onChange={(e) => setEmployer(e.target.value)} // Update state
                                required 
                            />
                        </div>

                        <div className="fillupan">
                            <label htmlFor="empCon">Employer Contact No.:</label>
                            <input 
                                type="text" 
                                id="empCon" 
                                name="empCon" 
                                value={empCon} // Access from state
                                onChange={(e) => setEmpCon(e.target.value)} // Update state
                                required 
                            />
                        </div>

                        <div className="fillupan">
                            <label htmlFor="empStatus">Employment Status/Position Held:</label>
                            <input 
                                type="text" 
                                id="empStatus" 
                                name="empStatus" 
                                value={empStatus} // Access from state
                                onChange={(e) => setEmpStatus(e.target.value)} // Update state
                                required 
                            />
                        </div>

                        <div className="fillupan">
                            <label htmlFor="businessName">Business Name:</label>
                            <input 
                                type="text" 
                                id="businessName" 
                                name="businessName" 
                                value={businessName} // Access from state
                                onChange={(e) => setBusinessName(e.target.value)} // Update state
                                required 
                            />
                        </div>

                        <div className="fillupan">
                            <label htmlFor="businessAdd">Business Address:</label>
                            <input 
                                type="text" 
                                id="businessAdd" 
                                name="businessAdd" 
                                value={businessAdd} // Access from state
                                onChange={(e) => setBusinessAdd(e.target.value)} // Update state
                                required 
                            />
                        </div>

                        <div className="fillupan">
                            <label htmlFor="lengthMem">Length of Coop Membership:</label>
                            <input 
                                type="text" 
                                id="lengthMem" 
                                name="lengthMem" 
                                value={lengthMem} // Access from state
                                onChange={(e) => setLengthMem(e.target.value)} // Update state
                                required 
                            />
                        </div>

                        <div className="fillupan">
                            <label>Account Balance:</label>
                            <div className="balanceFields">
                                <label htmlFor="shareCapital">Share Capital:</label>
                                <input 
                                    type="text" 
                                    id="shareCapital" 
                                    name="shareCapital" 
                                    value={shareCapital} // Access from state
                                    onChange={(e) => setShareCapital(e.target.value)} // Update state
                                    required 
                                />
                                <label htmlFor="savingsDepo">Savings Deposit:</label>
                                <input 
                                    type="text" 
                                    id="savingsDepo" 
                                    name="savingsDepo" 
                                    value={savingsDepo} // Access from state
                                    onChange={(e) => setSavingsDepo(e.target.value)} // Update state
                                    required 
                                />
                                <label htmlFor="otherDepo">Other Deposit:</label>
                                <input 
                                    type="text" 
                                    id="otherDepo" 
                                    name="otherDepo" 
                                    value={otherDepo} // Access from state
                                    onChange={(e) => setOtherDepo(e.target.value)} // Update state
                                    required 
                                />
                            </div>
                        </div>
                        </div>
                    </div>

                   
            <div className="form-rowapp">
                
                <div class="column-1app">
                
                <div className="fillupan">
                    <label htmlFor="payment">Collateral/Security Offered</label>
                    <div className="checkbox-groupapp">
                        <label class="pili">Real Estate
                            <input
                                type="checkbox"
                                value="real-estate"
                                checked={collateral.includes("real-estate")}
                                onChange={(e) => handleCheckboxChange(e, setCollateral, collateral)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Vehicle
                            <input
                                type="checkbox"
                                value="vehicle"
                                checked={collateral.includes("vehicle")}
                                onChange={(e) => handleCheckboxChange(e, setCollateral, collateral)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">ATM Deposit
                            <input
                                type="checkbox"
                                value="atm-deposit"
                                checked={collateral.includes("atm-deposit")}
                                onChange={(e) => handleCheckboxChange(e, setCollateral, collateral)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Savings/Time Deposit
                            <input
                                type="checkbox"
                                value="savings-deposit"
                                checked={collateral.includes("savings-deposit")}
                                onChange={(e) => handleCheckboxChange(e, setCollateral, collateral)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Others
                            <input
                                type="checkbox"
                                value="others"
                                checked={collateral.includes("others")}
                                onChange={(e) => handleCheckboxChange(e, setCollateral, collateral)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        {collateral.includes("others") && (
                            <textarea
                                value={collateralOther}
                                onChange={(e) => setCollateralOther(e.target.value)}
                                placeholder="Specify other collateral"
                            />
                        )}
                    </div>
                </div>
                </div>

                {/* Source of Payment */}
                <div class="column-1app">
                <div class="fillupan">
                    <label for="payment">Source of Payment</label>
                    <div className="checkbox-groupapp">
                        <label class="pili">Salary
                            <input
                                type="checkbox"
                                value="salary"
                                checked={sourcePay.includes("salary")}
                                onChange={(e) => handleCheckboxChange(e, setSourcePay, sourcePay)}
                            />
                            <span class="checkmarkapp"></span>
                           
                        </label>
                        <label class="pili">Pension
                            <input
                                type="checkbox"
                                value="pension"
                                checked={sourcePay.includes("pension")}
                                onChange={(e) => handleCheckboxChange(e, setSourcePay, sourcePay)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Allotment
                            <input
                                type="checkbox"
                                value="allotment"
                                checked={sourcePay.includes("allotment")}
                                onChange={(e) => handleCheckboxChange(e, setSourcePay, sourcePay)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Commission
                            <input
                                type="checkbox"
                                value="commission"
                                checked={sourcePay.includes("commission")}
                                onChange={(e) => handleCheckboxChange(e, setSourcePay, sourcePay)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Income from Business
                            <input
                                type="checkbox"
                                value="income-business"
                                checked={sourcePay.includes("income-business")}
                                onChange={(e) => handleCheckboxChange(e, setSourcePay, sourcePay)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Financial Assistance
                            <input
                                type="checkbox"
                                value="financial-assistance"
                                checked={sourcePay.includes("financial-assistance")}
                                onChange={(e) => handleCheckboxChange(e, setSourcePay, sourcePay)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Others
                            <input
                                type="checkbox"
                                value="others"
                                checked={sourcePay.includes("others")}
                                onChange={(e) => handleCheckboxChange(e, setSourcePay, sourcePay)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        {sourcePay.includes("others") && (
                            <textarea
                                value={sourcePayOther}
                                onChange={(e) => setSourcePayOther(e.target.value)}
                                placeholder="Specify other source of payment"
                            />
                        )}
                    </div>
                </div>

                </div>

                <div class="column-1app">
                <div class="fillupan">
                    <label for="payment">Mode of Payment</label>
                    <div className="checkbox-groupapp">
                        <label class="pili">Daily
                            <input
                                type="checkbox"
                                value="daily"
                                checked={modePay.includes("daily")}
                                onChange={(e) => handleCheckboxChange(e, setModePay, modePay)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Weekly
                            <input
                                type="checkbox"
                                value="weekly"
                                checked={modePay.includes("weekly")}
                                onChange={(e) => handleCheckboxChange(e, setModePay, modePay)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Monthly
                            <input
                                type="checkbox"
                                value="monthly"
                                checked={modePay.includes("monthly")}
                                onChange={(e) => handleCheckboxChange(e, setModePay, modePay)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Quarterly
                            <input
                                type="checkbox"
                                value="quarterly"
                                checked={modePay.includes("quarterly")}
                                onChange={(e) => handleCheckboxChange(e, setModePay, modePay)}
                            />
                            <span class="checkmarkapp"></span>
                        </label>
                    </div>
                </div>

                </div>

                <div class="column-1app">
                    <div class="fillupan">
                        <label for="payment">Manner of Payment</label>
                        <div className="checkbox-groupapp">
                        <label class="pili">Thru Coop/OTC
                            <input
                                type="checkbox"
                                value="otc"
                                checked={mannerPay.includes("otc")}
                                onChange={(e) => handleCheckboxChange(e, setMannerPay, mannerPay)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Collector
                            <input
                                type="checkbox"
                                value="collector"
                                checked={mannerPay.includes("collector")}
                                onChange={(e) => handleCheckboxChange(e, setMannerPay, mannerPay)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Payroll Deduction
                            <input
                                type="checkbox"
                                value="payroll"
                                checked={mannerPay.includes("payroll")}
                                onChange={(e) => handleCheckboxChange(e, setMannerPay, mannerPay)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">PDC
                            <input
                                type="checkbox"
                                value="pdc"
                                checked={mannerPay.includes("pdc")}
                                onChange={(e) => handleCheckboxChange(e, setMannerPay, mannerPay)}
                            />
                            <span class="checkmarkapp"></span>
                            
                        </label>
                        <label class="pili">Auto-Debit
                            <input
                                type="checkbox"
                                value="auto-debit"
                                checked={mannerPay.includes("auto-debit")}
                                onChange={(e) => handleCheckboxChange(e, setMannerPay, mannerPay)}
                            />
                            <span class="checkmarkapp"></span>
                            
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
                            <div className="form-rowapp">
                                <div className="columnapp">
                                    <div className="form-groupapp">
                                        <label htmlFor="borrower-signature">Member-Borrower’s Signature:</label>
                                        <input
                                            type="file"
                                            id="borrower-signature"
                                            name="memberSig"
                                            onChange={(e) => handleFileChange(e, setMemberSig)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="columnapp">
                                    <div className="form-groupapp">
                                        <label htmlFor="spouse-signature">Spouse’s Signature:</label>
                                        <input
                                            type="file"
                                            id="spouse-signature"
                                            name="spouseSig"
                                            onChange={(e) => handleFileChange(e, setSpouseSig)}
                                        />
                                    </div>
                                </div>
                            </div>

                           

                            <div class="parent-containerapp">
                                <a type="submit" class="submit-btn">Next →</a>
                            </div>


                        </form>
                    </div>

         <Footer />
        </div>
    );
};

export default Appform;