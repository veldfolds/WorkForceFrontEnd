import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MsalProvider } from '@azure/msal-react';
import Layout from './components/layout';
import SearchEmployeesPage from './pages/searchemployeespage';
import Home from './pages/home';
import {EmployeeForm} from './components/employeeform';
import CreateEmployeePage from './pages/createemployee';

const RoutedContent = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/employees" element={<SearchEmployeesPage/>} />
          <Route path="/employees/create" element={<CreateEmployeePage/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

const App = () => {
  return (
      <RoutedContent/>
  );
};

export default App
