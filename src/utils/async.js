import { API_URL, API_TOKEN } from '../Constants/APIConstants';

// if (!res.ok) {
//   throw new Error(`${res.status}${res.statusText}`);
// }

export const fetchAllEmployees = async () => {
  try {
    const req = {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };
    const res = await fetch(`${API_URL}/employee`, req);
    const data = await res.JSON();
    return data;
  }
  catch (err) {
    console.error(err);
  }
};

export const fetchOneEmployee = async (id) => {
  try {
    const req = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(id)
    };
    const res = await fetch(`${API_URL}/employee/${id}`);
    const data = await res.JSON();
    return data;
  }
  catch (err) {
    console.error(err);
  }
};

// useEffect(() => {

//   fetchAll();
// }, []);

export const submitSignup = async (user) => {
  try {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(user)
    };
    const res = await fetch(`${API_URL}/users/new`, req);
    const data = await res.json();
    console.log(data);
    return data;
  }
  catch (err) {
    console.error(err);
  }
};