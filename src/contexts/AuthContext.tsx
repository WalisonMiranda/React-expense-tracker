import { createContext, ReactNode, useEffect, useState } from 'react';

import { firebase, auth, database } from '../services/firebase';

type User = {
    id: string;
    name: string;
    avatar: string;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

type FirebaseTransactionsProps = {
    ammount: number;
    description: string;
    date: string;
};

type TransactionsProps = {
    id: string;
    transaction: {
        ammount: number;
        description: string;
        date: string;
    };
};

type AuthContextProps = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
    signInWithFacebook: () => Promise<void>;
    signOut: () => Promise<void>
    transactions: TransactionsProps[];
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User>();
    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            const { displayName, photoURL, uid } = user;
    
            if (!displayName || !photoURL) {
              throw new Error("Missing information from Google Account");
            }
    
            setUser({
              id: uid,
              name: displayName,
              avatar: photoURL,
            });
          }
        });
    
        return () => {
          unsubscribe();
        };
    }, []);

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        const result = await auth.signInWithPopup(provider);

        if(result.user) {
            const { displayName, photoURL, uid } = result.user;

            if (!displayName || !photoURL) {
                throw new Error("Missing information from Google Account");
            }
        
            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL,
            });
        }
    }

    const signInWithFacebook = async () => {
        const provider = new firebase.auth.FacebookAuthProvider();

        const result = await auth.signInWithPopup(provider);

        if(result.user) {
            const { displayName, photoURL, uid } = result.user;

            if (!displayName || !photoURL) {
                throw new Error("Missing information from Google Account");
            }
        
            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL,
            });
        }
    }
    
    const signOut = async () => {
        await auth.signOut();
        
        setUser(undefined);
    }

    useEffect(() => {
        const transactionRef = database.ref(`users/${user?.id}/user_transactions`);

        transactionRef.on("value", (user_transactions) => {
        const transactionsList: any[] = [];

        const databaseTransactions = user_transactions.val();
        const firebaseTransactions: FirebaseTransactionsProps =
            databaseTransactions ?? {};

        const parsedTransactions = Object.entries(firebaseTransactions).map(
            ([key, value]) => {
            return {
                id: key,
                transaction: value,
            };
            }
        );

        parsedTransactions.forEach(item => {
            return transactionsList.push(item);
        });

        setTransactions(transactionsList);
        });
        
        return () => {
            transactionRef.off("value");
        };

    }, [user]);

    return (
        <AuthContext.Provider value={{ signInWithGoogle, 
                                       signInWithFacebook,
                                       signOut,
                                       user,
                                       transactions }}>
            {children}
        </AuthContext.Provider>
    )
}

