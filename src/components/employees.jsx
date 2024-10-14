// src/components/EmployeeList.jsx
import {
  Card,
  CardBody,
  Typography,
  Avatar,
} from '@material-tailwind/react';

const EmployeesList = ({ employees }) => {
  return (
    <div className="flex flex-col gap-4">
      {employees.map((employee) => (
        <Card key={employee._id} className="flex flex-row items-center gap-4 p-4">
          <Avatar
            src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`}
            alt="Avatar"
            size="lg"
          />
          <CardBody>
            <Typography variant="h6" color="blue-gray">
              {employee.firstName} {employee.lastName}
            </Typography>
            <Typography variant="small" color="gray" className="mt-1">
              {employee.department}
            </Typography>
            <Typography variant="small" color="gray">
              {employee.email}
            </Typography>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default EmployeesList;
