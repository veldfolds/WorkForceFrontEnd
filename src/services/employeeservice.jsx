export const getEmployees = async (page, count) => {
  const response = await fetch(`https://workforcedemoapi.azurewebsites.net/employees/${page}/${count}`);
  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }
  return response.json();
};
