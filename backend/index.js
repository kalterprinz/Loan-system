const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserModel = require('./user');
const LoanModel = require('./loan');
var cors = require ('cors')

const app = express();
const port = 3001;
app.use(cors())

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1/loan',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(db=>console.log('DB is connected'))
.catch(err=> console.log(err));

app.post('/login', async (req, res) => {
    const { usernameOrEmail, password } = req.body;

    try {
        const user = await UserModel.findOne({
            $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
        });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: "Login successful", userId: user._id, role: user.role });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "An error occurred during login" });
    }
});

app.post('/signup', async (req, res) => {
    const { username, email, role, password } = req.body;
  
    try {

        if (!['admin', 'member'].includes(role)) {
            return res.status(400).json({ error: 'Invalid role. Must be either "admin" or "member".' });
        }
        
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new UserModel({
        username,
        email,
        role,
        password: hashedPassword,
      });
  
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Failed to create user' });
    }
});

app.post('/loan', async (req, res) => {
    const {
        loanId, applicantName, loanType, loanAmount, interestRate, loanTerm,
        repaymentSchedule, disbursementDate, currentBalance, paymentDueDate,
        paymentStatus, defaultStatus, riskRating, applicationDate, approvalDate, notes
    } = req.body;

    try {
        const newLoan = new LoanModel({
            loanId,
            applicantName,
            loanType,
            loanAmount,
            interestRate,
            loanTerm,
            repaymentSchedule,
            disbursementDate,
            currentBalance,
            paymentDueDate,
            paymentStatus,
            defaultStatus,
            riskRating,
            applicationDate,
            approvalDate,
            notes
        });

        const loan = await newLoan.save();
        res.status(201).json(loan);
    } catch (err) {
        console.error('Error creating loan:', err);
        res.status(500).json({ error: 'Failed to create loan' });
    }
});

app.put('/loan/:loanId', async (req, res) => {
    const loanId = req.params.loanId;
    const updateData = req.body; // Partial update

    try {
        const loan = await LoanModel.findOneAndUpdate(
            { loanId: loanId }, // Filter by loanId
            updateData,         // Data to update
            { new: true }       // Return the updated document
        );

        if (!loan) {
            return res.status(404).json({ error: 'Loan not found' });
        }

        res.status(200).json(loan);
    } catch (err) {
        console.error('Error updating loan:', err);
        res.status(500).json({ error: 'Failed to update loan' });
    }
});

app.delete('/loan/:loanId', async (req, res) => {
    const loanId = req.params.loanId;

    try {
        const loan = await LoanModel.findOneAndDelete({ loanId: loanId });

        if (!loan) {
            return res.status(404).json({ error: 'Loan not found' });
        }

        res.status(200).json({ message: 'Loan deleted successfully', loan });
    } catch (err) {
        console.error('Error deleting loan:', err);
        res.status(500).json({ error: 'Failed to delete loan' });
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});