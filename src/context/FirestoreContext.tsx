'use client';

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import * as firestoreService from '../lib/firestore';
import { Listing, User, Conversation, Message } from '../lib/firestore';

interface FirestoreContextType {
  listings: Listing[];
  myListings: Listing[];
  loadingListings: boolean;
  getListings: () => Promise<void>;
  getListingsByType: (type: 'tangible' | 'intangible') => Promise<Listing[]>;
  getListing: (id: string) => Promise<Listing | null>;
  createListing: (listing: Listing) => Promise<string>;
  updateListing: (id: string, listing: Partial<Listing>) => Promise<void>;
  deleteListing: (id: string) => Promise<void>;
  
  conversations: Conversation[];
  loadingConversations: boolean;
  getConversations: () => Promise<void>;
  getConversation: (id: string) => Promise<Conversation | null>;
  createConversation: (conversation: Conversation) => Promise<string>;
  
  getMessages: (conversationId: string) => Promise<Message[]>;
  sendMessage: (message: Message) => Promise<string>;
}

const FirestoreContext = createContext<FirestoreContextType | undefined>(undefined);

export const useFirestore = (): FirestoreContextType => {
  const context = useContext(FirestoreContext);
  if (context === undefined) {
    throw new Error('useFirestore must be used within a FirestoreProvider');
  }
  return context;
};

interface FirestoreProviderProps {
  children: ReactNode;
}

export const FirestoreProvider: React.FC<FirestoreProviderProps> = ({ children }) => {
  const { currentUser } = useAuth();
  const [listings, setListings] = useState<Listing[]>([]);
  const [myListings, setMyListings] = useState<Listing[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loadingListings, setLoadingListings] = useState<boolean>(true);
  const [loadingConversations, setLoadingConversations] = useState<boolean>(true);

  useEffect(() => {
    getListings();
  }, []);

  useEffect(() => {
    if (currentUser) {
      getMyListings();
      getConversations();
    } else {
      setMyListings([]);
      setConversations([]);
    }
  }, [currentUser]);

  const getListings = async (): Promise<void> => {
    setLoadingListings(true);
    try {
      const fetchedListings = await firestoreService.getListings();
      setListings(fetchedListings);
    } catch (error) {
      console.error('Error fetching listings:', error);
    } finally {
      setLoadingListings(false);
    }
  };

  const getMyListings = async (): Promise<void> => {
    if (!currentUser) return;
    
    try {
      const fetchedMyListings = await firestoreService.getMyListings(currentUser.uid);
      setMyListings(fetchedMyListings);
    } catch (error) {
      console.error('Error fetching my listings:', error);
    }
  };

  const getListingsByType = async (type: 'tangible' | 'intangible'): Promise<Listing[]> => {
    try {
      return await firestoreService.getListingsByType(type);
    } catch (error) {
      console.error(`Error fetching listings by type ${type}:`, error);
      return [];
    }
  };

  const getListing = async (id: string): Promise<Listing | null> => {
    try {
      return await firestoreService.getListing(id);
    } catch (error) {
      console.error(`Error fetching listing ${id}:`, error);
      return null;
    }
  };

  const createListing = async (listing: Listing): Promise<string> => {
    try {
      const id = await firestoreService.createListing(listing);
      await getListings();
      if (currentUser && listing.ownerId === currentUser.uid) {
        await getMyListings();
      }
      return id;
    } catch (error) {
      console.error('Error creating listing:', error);
      throw error;
    }
  };

  const updateListing = async (id: string, listing: Partial<Listing>): Promise<void> => {
    try {
      await firestoreService.updateListing(id, listing);
      await getListings();
      if (currentUser) {
        await getMyListings();
      }
    } catch (error) {
      console.error(`Error updating listing ${id}:`, error);
      throw error;
    }
  };

  const deleteListing = async (id: string): Promise<void> => {
    try {
      await firestoreService.deleteListing(id);
      await getListings();
      if (currentUser) {
        await getMyListings();
      }
    } catch (error) {
      console.error(`Error deleting listing ${id}:`, error);
      throw error;
    }
  };

  const getConversations = async (): Promise<void> => {
    if (!currentUser) return;
    
    setLoadingConversations(true);
    try {
      const fetchedConversations = await firestoreService.getConversations(currentUser.uid);
      setConversations(fetchedConversations);
    } catch (error) {
      console.error('Error fetching conversations:', error);
    } finally {
      setLoadingConversations(false);
    }
  };

  const getConversation = async (id: string): Promise<Conversation | null> => {
    try {
      return await firestoreService.getConversation(id);
    } catch (error) {
      console.error(`Error fetching conversation ${id}:`, error);
      return null;
    }
  };

  const createConversation = async (conversation: Conversation): Promise<string> => {
    try {
      const id = await firestoreService.createConversation(conversation);
      await getConversations();
      return id;
    } catch (error) {
      console.error('Error creating conversation:', error);
      throw error;
    }
  };

  const getMessages = async (conversationId: string): Promise<Message[]> => {
    try {
      return await firestoreService.getMessages(conversationId);
    } catch (error) {
      console.error(`Error fetching messages for conversation ${conversationId}:`, error);
      return [];
    }
  };

  const sendMessage = async (message: Message): Promise<string> => {
    try {
      const id = await firestoreService.sendMessage(message);
      await getConversations();
      return id;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  };

  const value = {
    listings,
    myListings,
    loadingListings,
    getListings,
    getListingsByType,
    getListing,
    createListing,
    updateListing,
    deleteListing,
    
    conversations,
    loadingConversations,
    getConversations,
    getConversation,
    createConversation,
    
    getMessages,
    sendMessage,
  };

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  );
}; 