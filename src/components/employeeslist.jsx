// src/components/EmployeeList.jsx
import { useEffect, useState } from 'react';
import { FloatingActionButton } from '../components/fab';
import { AuthenticatedTemplate } from '@azure/msal-react';
export const EmployeesList = ({ employees }) => {
  const [employeesData, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(employees);
    console.log('employees list loaded finally');
  }, [employees]);

  return (
    <div className="container mx-auto p-4">
    <div className="grid gap-4">
        {employeesData.map((employee, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 flex">
                <img
                   src={`https://ui-avatars.com/api/?name=${employee.firstName}+${employee.lastName}&background=random&length=1`}
                   alt="Avatar"
                   className="w-12 h-12 rounded-full object-cover"
                />
                <div className='ml-2'>
                    <h3 className="text-sm text-start font-semibold">
                        {employee.firstName} {employee.lastName}
                    </h3>
                    <p className="text-gray-600">{employee.email}</p>
                </div>
            </div>
        ))}
    </div>
    <AuthenticatedTemplate>
        <FloatingActionButton className="fixed bottom-8 right-8"/>
    </AuthenticatedTemplate>
</div>
  );
};