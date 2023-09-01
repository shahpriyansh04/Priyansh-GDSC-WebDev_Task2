import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "./firebase";
import { TailSpin } from "react-loader-spinner";
const auth = getAuth(app);

export const AuthContext = React.createContext({});

export const useAuth = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <TailSpin
            height="80"
            width="80"
            color="#000000"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
