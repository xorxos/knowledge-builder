import Wrapper from "../wrappers/RegisterPage";
import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import { useAppContext, useScrollToAlert } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "parkertleavitt@gmail.com",
  password: "secret",
  confirmPassword: "",
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  // add user back when fixed
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  const toggleMember = () => {
    if (!values.isMember) {
      setValues({
        ...values,
        isMember: !values.isMember,
        email: "parkertleavitt@gmail.com",
        password: "secret",
      });
      return;
    }
    setValues({
      ...values,
      isMember: !values.isMember,
      email: "",
      password: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword, isMember } =
      values;

    if (
      !email ||
      !password ||
      (!isMember && (!firstName || !lastName || !confirmPassword))
    ) {
      displayAlert();
      return;
    }

    if (!isMember && password !== confirmPassword) {
      displayAlert("Passwords do not match!");
      return;
    }

    const currentUser = { firstName, lastName, email, password };

    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  useScrollToAlert();

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            labelText="First Name"
            name="firstName"
            value={values.firstName}
            handleChange={handleChange}
          />
        )}
        {!values.isMember && (
          <FormRow
            type="text"
            labelText="Last Name"
            name="lastName"
            value={values.lastName}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        {!values.isMember && (
          <FormRow
            type="password"
            labelText="Confirm Password"
            name="confirmPassword"
            value={values.confirmPassword}
            handleChange={handleChange}
          />
        )}
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
