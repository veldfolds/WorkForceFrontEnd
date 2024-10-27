import React, { useState, useEffect } from "react";
import { getEmployees } from "../services/employeeservice";
import { EmployeesList } from "../components/employeeslist";

const SearchEmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Fixed number of items per page
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await getEmployees(currentPage, itemsPerPage);
        if (Array.isArray(response.data.data)) {
          setEmployees(response.data.data);
        } else {
          setError("Data format error: Expected an array");
        }
      } catch (err) {
        console.log('Error fetching employees:', err);
        setError(err.message);
      }
    };
    fetchEmployees();
  }, [currentPage, itemsPerPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleSearchChange = (e) => {
    console.log("change detected");
    setSearchTerm(e.target.value);
    console.log(filteredEmployees);
  };

  // useEffect(() => {
    
  // }, searchTerm);

  const filteredEmployees = employees.filter(employee =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
<div class='max-w-md mx-auto'>
    <div class="relative mt-20 flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search something.." /> 
    </div>
</div>
      <EmployeesList employees={filteredEmployees ?? []} />
      <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div className="lg:w-3/5 w-full flex items-center justify-between border-t border-gray-200">
          <div
            className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-sm ml-3 font-medium leading-none">Previous</p>
          </div>
          <div className="sm:flex hidden">
            {[...Array(8).keys()].map((num) => (
              <p key={num} onClick={() => setCurrentPage(num + 1)} className={`text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ${currentPage === num + 1 ? 'text-indigo-700 border-indigo-400' : ''}`}>
                {num + 1}
              </p>
            ))}
          </div>
          <div
            className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"
            onClick={handleNextPage}
          >
            <p className="text-sm font-medium leading-none mr-3">Next</p>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchEmployeesPage;
