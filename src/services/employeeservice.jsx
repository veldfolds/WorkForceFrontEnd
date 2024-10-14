export const getEmployees = async () => {
    const response = await fetch('http://localhost:3000/employees');
    if (!response.ok) {
      throw new Error('Failed to fetch employees');
    }
    return response.json();
  };
  