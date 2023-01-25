import React, { useEffect, useState, createContext } from 'react';

import firebase from '../services/firebaseConnetion';

export const AuthContext = createContext({});

export default function AuthProvider ({children}){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ loadingAuth, setLoadingAuth] = useState(false);

    return(

        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>


    );
}