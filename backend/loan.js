const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
    loanId: {
        type: String,
        required: true,
        unique: true
    },
    applicantName: {
        type: String,
        required: true
    },
    newRe: {
        type: String,
        enum: ['New', 'Renewal'],
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    },
    presentAddress: {
        type: String,
        required: true
    },
    telMob: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        enum: ['Tibanga-Main', 'Pala-o', 'Buru-un', 'Kiwalan', 'Poblacion', 'Suarez-Tominobo', 'Tubod Iligan'],
        required: true
    },
    civilStatus: {
        type: String,
        enum: ['Single', 'Married', 'Widowed'],
        required: true
    },
    spouseName: {
        type: String
    },
    spouseOccu: {
        type: String
    },
    location: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    loanType: {
        type: String,
        enum: ['Personal', 'Educational', 'Pensioner'],
        required: true
    },
    loanAmount: {
        type: Number,
        required: true
    },
    interestRate: {
        type: Number,
        required: true
    },
    loanTerm: {
        type: Number, 
        required: true
    },
    purposeLoan: {
        type: String,
        required: true
    },
    employer: {
        type: String
    },
    empCon: {
        type: String
    },
    empStatus: {
        type: String
    },
    businessName: {
        type: String
    },
    businessAdd: {
        type: String
    },
    lengthMem: {
        type: Number
    },
    shareCapital: {
        type: Number
    },
    savingsDepo: {
        type: Number
    },
    otherDepo: {
        type: Number
    },
    
    collateral: {
        type: String,
        enum: [
            'Real Estate - REM',
            'Vehicle - Chattel',
            'ATM Deposit',
            'Savings/Time Deposit',
            'Appliances',
            'None',
            'Others'
        ],
        required: true
    },
    collateralOther: {
        type: String,
        required: function() { return this.collateral === 'Others'; } // Required if collateral is "Others"
    },
    
    sourcePay: {
        type: String,
        enum: [
            'Salary',
            'Pension',
            'Allotment',
            'Commission/Incentives',
            'Income from Business',
            'Financial Assistance',
            'Others'
        ],
        required: true
    },
    sourcePayOther: {
        type: String,
        required: function() { return this.sourcePay === 'Others'; } // Required if sourcePay is "Others"
    },
    
    modePay: {
        type: String,
        enum: [
            'Daily',
            'Weekly',
            'Semi-Monthly',
            'Monthly',
            'Quarterly'
        ],
        required: true
    },
    
    mannerPay: {
        type: String,
        enum: [
            'Thru Coop/OTC',
            'Collector',
            'Payroll Deduction',
            'PDC',
            'Auto-Debit'
        ],
        required: true
    },
    
    repaymentSchedule: {
        type: String,
        enum: ['Monthly', 'Bi-weekly', 'Quarterly', 'Annually'],
        required: true
    },
    disbursementDate: {
        type: Date,
        required: true
    },
    currentBalance: {
        type: Number,
        required: true
    },
    paymentDueDate: {
        type: Date,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['Paid', 'Overdue', 'Not Paid'],
        required: true
    },
    defaultStatus: {
        type: String,
        enum: ['Approved', 'Pending', 'Review'],
        required: true
    },
    riskRating: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: true
    },
    applicationDate: {
        type: Date,
        required: true
    },
    approvalDate: {
        type: Date,
        required: true
    },
    notes: {
        type: String
    }
});

const LoanModel = mongoose.model('Loan', LoanSchema);

module.exports = LoanModel;
