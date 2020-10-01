export const API_URL = process.env.API_URL || 'http://localhost:8000/api';
export const API_TOKEN = process.env.API_TOKEN || '9cc7e1bb-fd93-43f9-85c3-9936e179de2b';

export const submitSignup = async (user) => {
  try {
    const req = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(user)
    };
    const res = await fetch(`${API_URL}/users/new`, req);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const myUser = {
  username: 'anotherUser',
  email: 'anotherUser@gmail.com',
  password: 'an0th3rP@ssword'
}

submitSignup(myUser);