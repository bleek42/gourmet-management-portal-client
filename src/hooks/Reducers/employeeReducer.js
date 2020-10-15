import {
  EMPLOYEE_LIST_REQ,
  EMPLOYEE_ID_REQ,
  EMPLOYEE_LIST_ERR,
  EMPLOYEE_LIST_SUCCESS,
} from "../../Constants/employeeConstants";
import { initialState } from '../initialState';

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_LIST_REQ:
      return { loading: true, employees: [] };
    case EMPLOYEE_LIST_SUCCESS:
      return { loading: false, employees: action.payload };
    case EMPLOYEE_LIST_ERR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
