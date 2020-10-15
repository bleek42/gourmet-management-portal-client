import { createContext } from 'react';

const PortalContext = createContext({
  employees: [],
  getEmployees: () => { },
  getEmployeeId: (id) => { },
});

export default PortalContext;