import React, { useState } from "react";
import "../styles/Register.css";

const Login = ({ onToggle }: { onToggle: () => void }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { email, password } = formData;
    let errors = {
      email: "",
      password: "",
    };
    let isValid = true;

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      isValid = false;
      errors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      isValid = false;
      errors.email = "Invalid email format";
    }

    // Password Validation
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    if (!password) {
      isValid = false;
      errors.password = "Password is required";
    } else if (!passwordPattern.test(password)) {
      isValid = false;
      errors.password =
        "Password must be at least 8 characters long and include a mix of upper and lower case letters, numbers, and special characters.";
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      alert("Login Successful!");
      // Add your form submission logic here, e.g., sending data to the backend
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="container">
      <div className="register-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              placeholder="Enter your Username or Email Id"
              type="text"
              name="username"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div>
            <label>Password:</label>
            <input
              placeholder="Enter your Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="form-anchor">
            <a href="#register" onClick={onToggle}>
              New User?
            </a>
            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>

        {isSubmitted && (
          <div className="success-message">Login Successful!</div>
        )}
      </div>
    </div>
  );
};

export default Login;
