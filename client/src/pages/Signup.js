import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';
import '../styles/Signup.css'; // Assuming the CSS is in the same directory

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    firstName:'',
    lastName:'',
    jobTitle:'',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="mainStyle">
      <div className="colStyle">
        <div className="cardStyle">
          <h4 className="cardHeaderStyleSignUp">Sign Up</h4>
          <div className="cardBodyStyle">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="formInputStyle"
                  placeholder="Your username"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="formInputStyle"
                  placeholder="Your first name"
                  name="firstName"
                  type="text"
                  value={formState.firstName}
                  onChange={handleChange}
                />
                <input
                  className="formInputStyle"
                  placeholder="Your last name"
                  name="lastName"
                  type="text"
                  value={formState.lastName}
                  onChange={handleChange}
                />
                <input
                  className="formInputStyle"
                  placeholder="Your job title"
                  name="jobTitle"
                  type="text"
                  value={formState.jobTitle}
                  onChange={handleChange}
                />
                <input
                  className="formInputStyle"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="formInputStyle"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="buttonStyle"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
  
            {error && (
              <div className="errorStyle">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
