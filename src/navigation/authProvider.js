import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const[role,setRole] = useState('');
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
                        firebase.firestore().collection('users').doc(user.uid).get()
                        .then((doc) => {
                          if (doc.exists) {
                            const userData = doc.data();
                            const role = userData.role;
                            if (role === 'finder') {
                                navigation.navigate('FinderStack');
                              } else if (role === 'driver') {
                                navigation.navigate('DriverRegistration');
                              }
                            } else if (role === '') {
                                navigation.navigate('UserTypeScreen');
                              }
                            })
                    
                    } catch (e) {
                        console.log(e);
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
                        firebase.firestore().collection('users').doc(user.uid).set({
                            role: '',
                        });
                            //to get jwt token on console
                            const idToken = await user.getIdToken();
                            console.log(idToken);
                        } catch (e) {
                            console.log(e);
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