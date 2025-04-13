import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';

// Interfaces for our data types
export interface Listing {
  id?: string;
  title: string;
  description: string;
  price?: number;
  location: string;
  imageUrl?: string;
  type: 'tangible' | 'intangible';
  category: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
  ownerId: string;
  isForSale?: boolean;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  photoURL?: string;
  bio?: string;
  createdAt?: Timestamp;
  lastActive?: Timestamp;
}

export interface Message {
  id?: string;
  conversationId: string;
  senderId: string;
  text: string;
  createdAt?: Timestamp;
  read: boolean;
}

export interface Conversation {
  id?: string;
  participants: string[];
  lastMessage?: string;
  lastMessageTime?: Timestamp;
  listingId?: string;
}

// Listings
export const getListings = async (): Promise<Listing[]> => {
  const listingsCollection = collection(db, 'listings');
  const listingsSnapshot = await getDocs(listingsCollection);
  return listingsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Listing));
};

export const getListingsByType = async (type: 'tangible' | 'intangible'): Promise<Listing[]> => {
  const listingsCollection = collection(db, 'listings');
  const q = query(listingsCollection, where('type', '==', type));
  const listingsSnapshot = await getDocs(q);
  return listingsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Listing));
};

export const getMyListings = async (userId: string): Promise<Listing[]> => {
  const listingsCollection = collection(db, 'listings');
  const q = query(listingsCollection, where('ownerId', '==', userId));
  const listingsSnapshot = await getDocs(q);
  return listingsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Listing));
};

export const getListing = async (id: string): Promise<Listing | null> => {
  const listingRef = doc(db, 'listings', id);
  const listingSnapshot = await getDoc(listingRef);
  
  if (listingSnapshot.exists()) {
    return {
      id: listingSnapshot.id,
      ...listingSnapshot.data()
    } as Listing;
  }
  
  return null;
};

export const createListing = async (listing: Listing): Promise<string> => {
  const listingsCollection = collection(db, 'listings');
  const newListing = {
    ...listing,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };
  
  const docRef = await addDoc(listingsCollection, newListing);
  return docRef.id;
};

export const updateListing = async (id: string, listing: Partial<Listing>): Promise<void> => {
  const listingRef = doc(db, 'listings', id);
  await updateDoc(listingRef, {
    ...listing,
    updatedAt: serverTimestamp()
  });
};

export const deleteListing = async (id: string): Promise<void> => {
  const listingRef = doc(db, 'listings', id);
  await deleteDoc(listingRef);
};

// Users
export const getUser = async (id: string): Promise<User | null> => {
  const userRef = doc(db, 'users', id);
  const userSnapshot = await getDoc(userRef);
  
  if (userSnapshot.exists()) {
    return {
      id: userSnapshot.id,
      ...userSnapshot.data()
    } as User;
  }
  
  return null;
};

export const createUser = async (user: User): Promise<string> => {
  const usersCollection = collection(db, 'users');
  const newUser = {
    ...user,
    createdAt: serverTimestamp(),
    lastActive: serverTimestamp()
  };
  
  const docRef = await addDoc(usersCollection, newUser);
  return docRef.id;
};

export const updateUser = async (id: string, userData: Partial<User>): Promise<void> => {
  const userRef = doc(db, 'users', id);
  await updateDoc(userRef, {
    ...userData,
    lastActive: serverTimestamp()
  });
};

// Messages & Conversations
export const getConversations = async (userId: string): Promise<Conversation[]> => {
  const conversationsCollection = collection(db, 'conversations');
  const q = query(
    conversationsCollection, 
    where('participants', 'array-contains', userId),
    orderBy('lastMessageTime', 'desc')
  );
  
  const conversationsSnapshot = await getDocs(q);
  return conversationsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Conversation));
};

export const getConversation = async (id: string): Promise<Conversation | null> => {
  const conversationRef = doc(db, 'conversations', id);
  const conversationSnapshot = await getDoc(conversationRef);
  
  if (conversationSnapshot.exists()) {
    return {
      id: conversationSnapshot.id,
      ...conversationSnapshot.data()
    } as Conversation;
  }
  
  return null;
};

export const createConversation = async (conversation: Conversation): Promise<string> => {
  const conversationsCollection = collection(db, 'conversations');
  const newConversation = {
    ...conversation,
    lastMessageTime: serverTimestamp()
  };
  
  const docRef = await addDoc(conversationsCollection, newConversation);
  return docRef.id;
};

export const getMessages = async (conversationId: string): Promise<Message[]> => {
  const messagesCollection = collection(db, 'messages');
  const q = query(
    messagesCollection,
    where('conversationId', '==', conversationId),
    orderBy('createdAt', 'asc')
  );
  
  const messagesSnapshot = await getDocs(q);
  return messagesSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Message));
};

export const sendMessage = async (message: Message): Promise<string> => {
  const messagesCollection = collection(db, 'messages');
  const newMessage = {
    ...message,
    createdAt: serverTimestamp(),
    read: false
  };
  
  const docRef = await addDoc(messagesCollection, newMessage);
  
  // Update the conversation with the last message
  if (message.conversationId) {
    const conversationRef = doc(db, 'conversations', message.conversationId);
    await updateDoc(conversationRef, {
      lastMessage: message.text,
      lastMessageTime: serverTimestamp()
    });
  }
  
  return docRef.id;
}; 