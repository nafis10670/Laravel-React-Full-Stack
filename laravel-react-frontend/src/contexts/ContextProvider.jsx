import { createContext } from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(null);

    return (
        <StateContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                notification,
                setNotification,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};
