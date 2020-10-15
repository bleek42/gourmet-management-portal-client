import { createContext } from 'react';

const PortalContext = createContext({
  employees: [],
  loading: true,
  error: null,
  getEmployees: () => { },
  getEmployeeId: () => { },
  isLoading: () => { },
  hasError: () => { }
});

export default PortalContext;