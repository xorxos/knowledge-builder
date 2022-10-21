import { useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext, useScrollToAlert } from "../../context/appContext";
import Wrapper from "../../wrappers/DashboardProfile";

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const cancelStateChanges = () => {
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setEmail(user?.email);
    setPassword("password");
    setConfirmPassword("password");
  };

  const cancelEditing = () => {
    setIsEditingInfo(false);
    setIsEditingEmail(false);
    setIsEditingPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // check for something in all fields
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      displayAlert("Please provide all values!", "danger");
      return;
    }

    // confirm passwords match
    // only if editing password because dummy values are in state if not
    if (isEditingPassword && password !== confirmPassword) {
      displayAlert("Passwords do not match!", "danger");
      return;
    }

    if (isEditingPassword) {
      updateUser({ firstName, lastName, email, password });
      cancelEditing();
      return;
    }

    updateUser({ firstName, lastName, email });

    cancelEditing();
  };

  const editInfoToggle = (isEditingCanceled) => {
    setIsEditingInfo((prevState) => !prevState);

    if (isEditingCanceled) {
      cancelStateChanges();
    }
  };

  const editEmailToggle = (isEditingCanceled) => {
    setIsEditingEmail((prevState) => !prevState);

    if (isEditingCanceled) {
      cancelStateChanges();
    }
  };

  const editPasswordToggle = (isEditingCanceled) => {
    setIsEditingPassword((prevState) => !prevState);
    setPassword("");
    setConfirmPassword("");

    if (isEditingCanceled) {
      cancelStateChanges();
    }
  };


  useScrollToAlert();

  return (
    <Wrapper>
      <h3>Your Profile</h3>
      <form className="form" onSubmit={handleSubmit}>
        <h4>
          personal info{" "}
          <span
            className="edit-btn"
            onClick={() => editInfoToggle(isEditingInfo)}
          >
            {isEditingInfo ? "Cancel" : "Update Info"}
          </span>
        </h4>
        <div className="form-center">
          <FormRow
            type="text"
            labelText="First Name"
            disabled={!isEditingInfo}
            name="firstName"
            value={firstName}
            handleChange={(e) => setFirstName(e.target.value)}
          />
          <FormRow
            type="text"
            labelText="last name"
            disabled={!isEditingInfo}
            name="lastName"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          {isEditingInfo && (
            <button
              className="btn btn-block"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Please wait..." : "Save Changes"}
            </button>
          )}
        </div>
      </form>
      <form className="form additional-form" onSubmit={handleSubmit}>
        <h4>
          Email{" "}
          <span
            className="edit-btn"
            onClick={() => editEmailToggle(isEditingEmail)}
          >
            {isEditingEmail ? "Cancel" : "Change email"}
          </span>
        </h4>
        <div className="password-center">
          <FormRow
            type="email"
            disabled={!isEditingEmail}
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          {isEditingEmail && (
            <button
              className="btn btn-block"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Please wait..." : "Save Changes"}
            </button>
          )}
        </div>
      </form>
      <form className="form additional-form" onSubmit={handleSubmit}>
        <h4>
          Password{" "}
          <span
            className="edit-btn"
            onClick={() => editPasswordToggle(isEditingPassword)}
          >
            {isEditingPassword ? "Cancel" : "Change password"}
          </span>
        </h4>
        <div className="password-center">
          <FormRow
            type="password"
            name="password"
            disabled={!isEditingPassword}
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <FormRow
            type="password"
            disabled={!isEditingPassword}
            labelText="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
          {isEditingPassword && (
            <button
              className="btn btn-block"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Please wait..." : "Change password"}
            </button>
          )}
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
