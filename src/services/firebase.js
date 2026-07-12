import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
    authDomain: "VOTRE_PROJECT.firebaseapp.com",
      projectId: "VOTRE_PROJECT",
        storageBucket: "VOTRE_PROJECT.appspot.com",
          messagingSenderId: "VOTRE_SENDER_ID",
            appId: "VOTRE_APP_ID"
            };

            const app = initializeApp(firebaseConfig);

            export const auth = getAuth(app);
            export const db = getFirestore(app);

            export default app;