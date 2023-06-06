import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const[role,setRole] = useState('');
    let r1;
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                role,
                login: async (email, password, setLoading) => {
                    try {
                        setLoading(true);
                        await auth().signInWithEmailAndPassword(email, password);
                        try {
                            console.log(user)
                            
                        
                           console.log("role",role)
                         } catch (err) {
                           console.log(err)
                         }
                    
                    } catch (e) {
                        console.log(e);
                        alert(e)
                    }
                    finally {
                        setLoading(false);
                    }
                },
                googleLogin: async () => {
                    try {
                        const { idToken } = await GoogleSignin.signIn();
                        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                        await auth().signInWithCredential(googleCredential)
                            .catch(error => {
                                console.log('Something went wrong with sign up: ', error);
                            });
                    } catch (error) {
                        console.log({ error });
                    }
                },
                register: async (email, password, setLoading) => {
                    try {
                        setLoading(true);
                        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
                        const user = userCredential.user;
                            //to get jwt token on console
                            const idToken = await user.getIdToken();
                            console.log(idToken);
                        } catch (e) {
                            console.log(e);
                            alert(e)
                        }
                        finally {
                            setLoading(false);
                        }
                    },
                    logout: async () => {
                        try {
                            await auth().signOut();
                        } catch (e) {
                            console.log(e);
                        }

                    },
            }
            }
                >
                { children }
        </AuthContext.Provider >
    );
};