import { useReducer, useEffect } from "react"
import { authReducer, initialAuthState } from "./Reducer"
export function AuthProvider ({children}){
    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if(storedUser){
            dispatch({
                type:"LOGIN",
                payload: JSON.parse(storedUser),
            });
        }
    },[]);

    const login = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        dispatch({type: "LOGIN", payload: userData});
    };

const logout = () =>{
    localStorage.removeItem("user");
    dispatch({type: "LOGOUT"});
};

const updateProfile = (updatedUser) => {
    localStorage.setItem("user", JSON.stringify(updatedUser));
    dispatch({type: "UPDATE_PROFILE", payload: updatedUser});
};

    // useEffect(()=> {
    //     if(state.user){
    //         localStorage.setItem("user", JSON.stringify(state.user));
    //     }
    //     else{
    //         localStorage.removeItem("user");
    //     }
    // }, [state.user]);
    return (
        <AuthContext.Provider value={{
            user: state.user,
            login,
            logout,
            updateProfile,
        }}>
            {children}
        </AuthContext.Provider>
    )

}