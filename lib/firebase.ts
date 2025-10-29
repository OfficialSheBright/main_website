import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDF_kxqcS_V6cCCHGT0G-WAZCv8uDwKc34
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=shebright-66fe1.firebaseapp.com
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=shebright-66fe1
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=shebright-66fe1.firebasestorage.app
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=708792241069 
  NEXT_PUBLIC_FIREBASE_APP_ID=1:708792241069:web:cd1ab0a6eff724af8a2f24
};

// Check if Firebase is already initialized to avoid multiple initializations
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
