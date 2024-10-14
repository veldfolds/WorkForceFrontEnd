import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
} from '@material-tailwind/react';

// Validation schema using Yup
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().matches(/^\d+$/, 'Phone number must be numeric').required('Phone is required'),
  department: yup.string().required('Department is required'),
  address: yup.string().required('Address is required'),
});

const EmployeeForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardBody>
        <Typography variant="h5" className="mb-4 text-center">
          Create Employee
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <Input
              label="First Name"
              {...register('firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Last Name"
              {...register('lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Email"
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Phone"
              {...register('phone')}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Department"
              {...register('department')}
              error={!!errors.department}
              helperText={errors.department?.message}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Address"
              {...register('address')}
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          </div>
          <div className="text-center">
            <Button type="submit" color="blue" className="mt-4">
              Submit
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default EmployeeForm;
