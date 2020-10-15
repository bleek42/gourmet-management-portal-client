import React, { useState, useContext, useReducer } from 'react';
import { EMPLOYEE_LIST_REQ, EMPLOYEE_ID_REQ } from '../Constants/employeeConstants';

import PortalContext from './PortalContext';
import { employeeReducer } from './Reducers/employeeReducer';

// export const GlobalState = () => {
//   const [getEmployees, setEmployees] = useState([]);
//   const [getEmployee, setEmployee] = useState(null);

//   const [getProducts, setProducts] = useState([]);
//   const [getProduct, setProduct] = useState(null);

//   const [cart, setCart] = useState([]);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   const addProductToCart = (product) => {
//     const updatedCart = [...cart];
//     const newItemIdx = updatedCart.findIndex((item) => item.id === product.id);
//     if (newItemIdx < 0) {
//       updatedCart.push({ ...product, quantity: 1 });
//     } else {
//       const newItem = {
//         ...updatedCart[newItemIdx],
//       };
//       newItem.quantity++;
//       updatedCart[newItemIdx] = newItem;
//     }
//   };

//   return (
//     <div>
//       <p>this is the global state!</p>
//     </div>
//   );
// };

const useGlobalState = (props) => {

  const [employeeState, dispatch] = useReducer(employeeReducer, { employees: [], loading: true, error: false });

  const getEmployees = (data) => {
    dispatch({ type: EMPLOYEE_LIST_REQ });
  };

  const getEmployeeId = (id) => {
    dispatch({ type: EMPLOYEE_ID_REQ, id });
  };

  return (
    <PortalContext.Provider
      value={{
        employees: employeeState.employees,
        getEmployees: getEmployees,
        getEmployeeId: getEmployeeId,
        loading: employeeState.loading,
        error: employeeState.error
      }}
    >
      {props.children}
    </PortalContext.Provider>
  );
};

export default useGlobalState;