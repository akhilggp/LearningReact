import React, { useState } from "react";
import "../styles/Register.css";

const Register = ({ onToggle }: { onToggle: () => void }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    const { firstname, lastname, email, password, confirmPassword } = formData;
    let errors = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    let isValid = true;

    // Firstname and Lastname Validation
    if (!firstname) {
      isValid = false;
      errors.firstname = "Firstname is required";
    }
    if (!lastname) {
      isValid = false;
      errors.lastname = "Lastname is required";
    }

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

    // Confirm Password Match
    if (password !== confirmPassword) {
      isValid = false;
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      alert("Registration Successful!");
      // Add your form submission logic here, e.g., sending data to the backend
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="container">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Firstname:</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            {errors.firstname && (
              <span className="error">{errors.firstname}</span>
            )}
          </div>
          <div>
            <label>Lastname:</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            {errors.lastname && (
              <span className="error">{errors.lastname}</span>
            )}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>
          <div className="form-anchor">
            <a href="#login" onClick={onToggle}>
              Already a User?
            </a>
          </div>
          <button type="submit">Register</button>
        </form>

        {isSubmitted && (
          <div className="success-message">Registration Successful!</div>
        )}
      </div>
    </div>
  );
};

export default Register;
