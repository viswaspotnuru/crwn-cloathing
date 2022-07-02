import {createContext, useState} from 'react';

const UserContext = createContext();

const UserProvider  = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value={currentUser, setCurrentUser};
    return (
        <UserContext.Provider  value={value}>{children}</UserContext.Provider>
    )
}

export {UserProvider} ;
export {UserContext};