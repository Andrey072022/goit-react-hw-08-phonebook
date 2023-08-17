import { Suspense, useEffect } from 'react';
import { AppBarComp } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { selectIsRefreshing } from 'redux/auth/auth-selectors';
import { SyncLoader } from 'react-spinners';

export const Layout = () => {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    token && dispatch(refreshUser());
  }, [dispatch, token]);

  return (
    <div>
      <AppBarComp />
      {isRefreshing ? (
        <SyncLoader color="blue" />
      ) : (
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      )}
    </div>
  );
};
