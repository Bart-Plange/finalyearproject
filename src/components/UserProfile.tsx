import { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user profile data from the backend API
    axios.get('http://localhost:3000/api/profile')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-2xl font-semibold">User Profile</h1>
      </header>
      <main className="container mx-auto py-8">
        {userData ? (
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <div className="mb-4">
              <strong>Username:</strong> {userData.Username}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {userData.email}
            </div>
            <div className="mb-4">
              <strong>Car Registration:</strong> {userData.carRegistration}
            </div>
            <div className="mb-4">
              <strong>Telephone:</strong> {userData.telephone}
            </div>
          </div>
        ) : (
          <p className="text-center">Loading user profile...</p>
        )}
      </main>
    </div>
  );
};

export default UserProfile;
