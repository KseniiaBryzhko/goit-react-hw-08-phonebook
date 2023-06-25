// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button">Logout</button>
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> */}
    </div>
  );
};
