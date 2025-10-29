// lib/firebase.ts

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
// Use environment variables (recommended) or hardcoded strings (for testing)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDF_kxqcS_V6cCCHGT0G-WAZCv8uDwKc34",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "shebright-66fe1.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "shebright-66fe1",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "shebright-66fe1.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "708792241069",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:708792241069:web:cd1ab0a6eff724af8a2f24",
};

//  Prevent multiple Firebase initializations
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

//  Export commonly used Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
