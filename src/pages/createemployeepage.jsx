
import { useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/employeesform';
import axios from 'axios';

export const CreateEmployeePage = () => {
  const navigate = useNavigate();

  const handleCreateEmployee = async (data) => {
    try {
      await axios.post('http://localhost:3000/employees', data);
      alert('Employee created successfully!');
      navigate('/'); // Redirect to the employee list page
    } catch (error) {
      alert('Failed to create employee'+ error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <EmployeeForm onSubmit={handleCreateEmployee} />
    </div>
  );
};
