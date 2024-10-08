import React from 'react';

const OfficerDashboard2 = () => {
  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '120vh',  // Increased height to make the container longer
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      backgroundColor: 'white',
      padding: '20px 0',  // Vertical padding only
      borderBottom: '1px solid #9C0B0F',
      textAlign: 'center',
      position: 'relative',  // Position relative for absolute positioning of the search bar
    },
    logo: {
      height: '50px',  // Adjust the height to make the logo smaller
      width: '50px',
      position: 'absolute',
      left: '60px',
      top: '10px',
    },
    sidebar: {
      width: '150px',
      backgroundColor: '#9C0B0F',
      color: 'white',
      padding: '20px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    mainContent: {
      flex: 1,
      padding: '20px',
    },
    tableContainer: {
      border: '1px solid #ccc',  // Border for the rectangle
      borderRadius: '5px',       // Rounded corners
      padding: '20px',           // Padding inside the rectangle
      backgroundColor: '#D9D9D9',  // Light gray background for the container
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',  // Shadow for depth
      marginTop: '20px',         // Space above the rectangle
      height: '120vh',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      borderRadius: '15px',  // Added border radius
      overflow: 'hidden',    // Ensure border radius is applied to the table
      backgroundColor: '#ffffff', // White background for the table
    },
    th: {
      backgroundColor: 'white',
      color: 'black',
      padding: '10px',
      textAlign: 'Center',
    },
    td: {
      padding: '10px',
      textAlign: 'center',
    },
    title: {
      fontSize: '30px',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    userName: {
      fontSize: '20px',
      fontWeight: 'xtra bold',
      color: '#ffffff',  // White color for better visibility
      margin: '0',      // Remove default margin
      borderBottom: '1px solid #ffffff',  // Line below the name
      paddingBottom: '10px', // Space between the name and the links
    },
    userRole: {
      fontSize: '14px',
      color: '#ffffff',  // White color for better visibility
      margin: '0',      // Remove default margin
      paddingBottom: '30px', // Space below the user role
    },
    link: {
      color: '#030229',
      textDecoration: 'none',
      textAlign: 'left',
      padding: '10px',
      borderRadius: '15px',  // Rounded corners
      marginBottom: '10px',  // Space between links
      transition: 'border 0.3s',  // Smooth border transition
      backgroundColor: 'white',
      fontSize: '16',
    },
    logoutButton: {
      color: 'white',
      fontSize: '20px',
      padding: '10px',
      textAlign: 'center',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
      marginTop: '20px', // Space above the logout button
    },
    searchContainer: {
      position: 'absolute',
      right: '20px',
      top: '15px',  // Adjust this value to fit within the header
    },
    searchInput: {
      padding: '8px',
      fontSize: '14px',
      borderRadius: '23px',
      width: '300px',
      backgroundColor: '#F5F3FF',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src="/logo.png" alt="Logo" style={styles.logo} />
        <h1 style={{ fontFamily: 'Acme', fontSize: '15px', color: '#9C0B0F', marginRight: '750px', marginTop: '1px' }}>
          MSU-IIT National Multi-Purpose Cooperative
        </h1>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            style={styles.searchInput}
          />
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={styles.sidebar}>
          <p style={styles.userName}>Nicholas Patrick</p>
          <p style={styles.userRole}>Loan Clerk</p>
          <a href="/officerdash" style={styles.link}>Dashboard</a>
          <a href="/OfficerDashboard2" style={{...styles.link, backgroundColor: '#10004E', color: 'white'}}>Loan Applications</a>
          <a href="/OfficerDashboard3" style={styles.link}>Borrower List</a>
          <a href="/payment" style={styles.link}>Payment</a>
          <a href="/profile" style={styles.link}>Profile</a>
          <a href="/logout" style={styles.logoutButton}>Logout</a>
        </div>
        <div style={styles.mainContent}>
          <div style={styles.title}>Pending Loan Application</div>
          <div style={styles.tableContainer}>  {/* Rectangle around the table */}
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Applicant Name</th>
                  <th style={styles.th}>Loan Amount</th>
                  <th style={styles.th}>Loan Type</th>
                  <th style={styles.th}>Tenure</th>
                  <th style={styles.th}>Date Applied</th>
                  <th style={styles.th}>Step/process</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Placeholder for table data */}
                <tr>
                  <td style={styles.td}>John Doe</td>
                  <td style={styles.td}>5000</td>
                  <td style={styles.td}>Personal</td>
                  <td style={styles.td}>12 months</td>
                  <td style={styles.td}>2024-10-06</td>
                  <td style={styles.td}>Review</td>
                  <td style={styles.td}>Pending</td>
                </tr>
                <tr>
                  <td style={styles.td}>Jane Smith</td>
                  <td style={styles.td}>7000</td>
                  <td style={styles.td}>personal</td>
                  <td style={styles.td}>24 months</td>
                  <td style={styles.td}>2024-10-07</td>
                  <td style={styles.td}>Approved</td>
                  <td style={styles.td}>Completed</td>
                </tr>
                <tr>
                  <td style={styles.td}>Jean Ampang</td>
                  <td style={styles.td}>1000</td>
                  <td style={styles.td}>Education</td>
                  <td style={styles.td}>24 months</td>
                  <td style={styles.td}>2024-10-01</td>
                  <td style={styles.td}>Approved</td>
                  <td style={styles.td}>Completed</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerDashboard2;
