// src/pages/HomePage.jsx
import EmployeesList from '../components/employees';
import { getEmployees } from '../services/employeeservice';
import { FloatingActionButton } from '../components/fab'
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {error && <p className="text-red-500">{error}</p>}
      <EmployeesList employees={employees} />
      <FloatingActionButton />
    </div>
  );
};
