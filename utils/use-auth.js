import React, {useState, useEffect, useContext, createContext} from "react";
import {httpClient} from "./api";
import {Cookies} from "react-cookie";
import { useRouter } from "next/router";
const authContext = createContext({});

// Provider component that wraps app and makes auth object ..
// ... available to any child component that calls useAuth().

export function AuthProvider({children}) {
  const auth = useProvideAuth();
  console.log("auth",auth);
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoadingUser, setLoadingUser] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter()

  const fetchStart = () => {
    setLoading(true);
    setError('');
  }

  const fetchSuccess = () => {
    setLoading(false);
    setError('');
  }

  const fetchError = (error) => {
    setLoading(false);
    setError(error);
  }

  const userLogin = (data, callbackFun) => {
    fetchStart();
    httpClient.post('user/login', data)
      .then(({ data }) => {
        console.log(data);
        if (data) {
          fetchSuccess();
          httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
          const cookies = new Cookies();
          cookies.set('token', data.token);
          getAuthUser(data);
          if (callbackFun) callbackFun();
        } else {
          fetchError(data.error);
        }
      })
      .catch(function (error) {
        fetchError(error.message);
      });
  };

  const userSignup = (data, callbackFun) => {
    fetchStart();
    httpClient.post('auth/register', data)
      .then(({data}) => {
        if (data.result) {
          fetchSuccess();
          httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;
          const cookies = new Cookies();
          cookies.set('token', data.token.access_token);
          if (callbackFun) callbackFun();
        } else {
          fetchError(data.error);
        }
      })
      .catch(function (error) {
        fetchError(error.message);
      });
  };

  const userSignOut = (callbackFun) => {
    fetchStart();
    httpClient.post('auth/logout')
      .then(({data}) => {
        if (data.result) {
          fetchSuccess();
          setAuthUser(false);
          httpClient.defaults.headers.common['Authorization'] = '';
          const cookies = new Cookies();
          cookies.remove('token');
          if (callbackFun) callbackFun();
        } else {
          fetchError(data.error);
        }
      })
      .catch(function (error) {
        fetchError(error.message);
      });
  };

  const getAuthUser = (data) => {
    fetchStart();
    httpClient.get("user/auth/me").then(({data}) => {
      if (data) {
        fetchSuccess();
        setAuthUser(data);
      } else {
        fetchError(data.error);
      }
    }).catch(function (error) {
      httpClient.defaults.headers.common['Authorization'] = '';
      fetchError(error.message);
    });
  }

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.

  useEffect(() => {
      const cookies = new Cookies();
      const token = cookies.get("token");
      httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    
    httpClient.get("user/auth/me").then(({ data }) => {
        console.log(data);
        if (data.user) {
          setAuthUser(data.user);
        }
        setLoadingUser(false);
      }).catch(function (error) {
        cookies.remove('token');
        httpClient.defaults.headers.common['Authorization'] = '';
        // router.push("/login")
        setLoadingUser(false);
      });
    // if (token) {
    //   console.log('token', token);
    //   setLoadingUser(false);
    //   router.push('/')
    //   // navigate('/')
      
    // } else {
    //   // history.push('/signin')
    //   setLoadingUser(false);
    //   router.push('/signin')
    //   // window.location.reload('/')
    // }
    }, []
  );

  // Return the user object and auth methods
  return {
    isLoadingUser,
    isLoading,
    authUser,
    error,
    setAuthUser,
    getAuthUser,
    userLogin,
    userSignup,
    userSignOut,
  };
}

export const isUnRestrictedRoute = (pathname) => {
  return pathname === '/signin' || pathname === '/' || pathname === '/signup' || pathname === '/forgot-password' || pathname === '/reset-password';
}
