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
        type: Number, // In years
        required: true
    },
    repaymentSchedule: {
        type: String,
        enum: ['Monthly', 'Bi-weekly', 'Quarterly', 'Annually'], // Add more frequencies if needed
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
        enum: ['Low', 'Medium', 'High'], // Risk level assessment
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
