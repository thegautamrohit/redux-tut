import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/UserActions";

function UserContainer({ getUsers, userData }) {
  useEffect(() => {
    getUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData.users.map((q) => (
          <h6>{q.name}</h6>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
