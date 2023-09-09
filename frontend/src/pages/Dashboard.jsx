import React from 'react';
import UserInput from '../components/UserInput'; // Import the UserInput component

function Dashboard() {
  return (
    <div className="flex">
      <div className="w-3/4 p-4">
        {/* Add your dashboard content here */}
      </div>
      <div className="w-1/4 p-4">
        <UserInput /> {/* Include the UserInput component */}
      </div>
    </div>
  );
}

export default Dashboard;
