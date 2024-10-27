import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {EmployeeForm} from '../components/employeeform';

const CreateEmployeePage = () => {
  const navigate = useNavigate();

  const handleCreateEmployee = async (data) => {
    try {
      console.log("Data has been posted");
      await axios.post('https://workforcedemoapi.azurewebsites.net/employees', data);
      alert('Employee created successfully!');
      navigate('/'); // Redirect to the employee list page
    } catch (error) {
      alert('Failed to create employee: ' + error);
    }
  };

  return (
    <EmployeeForm onSubmit={handleCreateEmployee} />
  );
};

export default CreateEmployeePage;
