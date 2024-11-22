const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const UserModel = require('./user');
const LoanModel = require('./loan');
var cors = require ('cors')

const app = express();
const port = 3001;
app.use(cors())

app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

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
        branch, applicationDate, newRe, applicantName, emailAddress,
        permanentAddress, presentAddress, telMob, age, sex, civilStatus, 
        spouseName, spouseOccu, location, loanType, loanAmount, loanTerm, 
        purposeLoan, employer, empCon, empStatus, businessName, businessAdd, 
        lengthMem, shareCapital, savingsDepo, otherDepo ,collateral, sourcePay,
        modePay, mannerPay
    } = req.body;

    try {
        // Validate required fields
        if (!branch || !applicationDate || !newRe || !applicantName) {
            return res.status(400).json({ error: 'Branch, application date, application type, and applicant name are required.' });
        }

        // Create a new Loan object
        const newLoan = new LoanModel({
            branch,
            applicationDate,
            newRe,
            applicantName,
            emailAddress,
            permanentAddress,
            presentAddress,
            telMob,
            age,
            sex,
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
            sourcePay,
            modePay,
            mannerPay,
        });

        // Save the newLoan object to the database
        await newLoan.save();
        return res.status(201).json({ 
            message: 'Loan added successfully!',
            loan: newLoan
        });

    } catch (error) {
        console.error('Error submitting loan:', error);
        return res.status(500).json({ 
            error: 'An error occurred while processing your request.',
            details: error.message // Include error message details for debugging
        });
    }
});

app.put('/loan/:loanId', async (req, res) => {
    const loanId = req.params.loanId;
    const updateData = req.body;

    try {
        const loan = await LoanModel.findOneAndUpdate(
            { loanId: loanId },
            updateData,
            { new: true }
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

app.get('/loans', async (req, res) => {
    try {
        const { defaultStatus } = req.query;

        // If a defaultStatus is specified, use it as a filter; otherwise, return all loans
        const filter = defaultStatus ? { defaultStatus } : {};
        const loans = await LoanModel.find(filter);

        res.status(200).json(loans);
    } catch (err) {
        console.error('Error fetching loans:', err);
        res.status(500).json({ message: 'Failed to retrieve loans' });
    }
});

app.get('/loans/pending', async (req, res) => {
    try {
        const pendingLoans = await LoanModel.find({ defaultStatus: 'Pending' });
        res.status(200).json(pendingLoans);
    } catch (err) {
        console.error('Error fetching pending loans:', err);
        res.status(500).json({ message: 'Failed to retrieve pending loans' });
    }
});

app.get('/borrowers/approved', async (req, res) => {
    try {
        const approvedBorrowers = await LoanModel.find({ defaultStatus: 'Approved' });
        res.status(200).json(approvedBorrowers);
    } catch (err) {
        console.error('Error fetching approved borrowers:', err);
        res.status(500).json({ message: 'Failed to retrieve approved borrowers' });
    }
});

app.get('/payments/approved', async (req, res) => {
    try {
        const approvedPayments = await LoanModel.find({ defaultStatus: 'Approved' });
        res.status(200).json(approvedPayments);
    } catch (err) {
        console.error('Error fetching approved payments:', err);
        res.status(500).json({ message: 'Failed to retrieve approved payments' });
    }
});


app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});