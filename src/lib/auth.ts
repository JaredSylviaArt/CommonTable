import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { auth } from './firebase';
import { createUser, getUser, updateUser } from './firestore';
import { User } from './firestore';

export const signUp = async (email: string, password: string, name: string): Promise<User | null> => {
  try {
    // Create the user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;
    
    // Update profile with display name
    await updateProfile(firebaseUser, { displayName: name });
    
    // Create user document in Firestore
    const userId = firebaseUser.uid;
    const newUser: User = {
      name,
      email,
      photoURL: firebaseUser.photoURL || '',
    };
    
    await createUser({ ...newUser, id: userId });
    
    return { ...newUser, id: userId };
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const signIn = async (email: string, password: string): Promise<FirebaseUser> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const signInWithGoogle = async (): Promise<FirebaseUser> => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const firebaseUser = userCredential.user;
    
    // Check if user exists in Firestore, if not create one
    const userDoc = await getUser(firebaseUser.uid);
    
    if (!userDoc) {
      const newUser: User = {
        id: firebaseUser.uid,
        name: firebaseUser.displayName || 'User',
        email: firebaseUser.email || '',
        photoURL: firebaseUser.photoURL || '',
      };
      
      await createUser(newUser);
    }
    
    return firebaseUser;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};

export const getCurrentUser = (): FirebaseUser | null => {
  return auth.currentUser;
};

export const onUserStateChanged = (callback: (user: FirebaseUser | null) => void): () => void => {
  return onAuthStateChanged(auth, callback);
}; 