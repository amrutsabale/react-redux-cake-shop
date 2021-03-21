import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";

const UserContainer = () => {
  const { loading, users, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          <ol>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default UserContainer;
