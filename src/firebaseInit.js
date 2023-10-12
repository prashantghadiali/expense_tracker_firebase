import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCw1cjlYPQBhuVI6kjdHGEeBMBOXxUrazw",
  authDomain: "blogging-app-e6787.firebaseapp.com",
  projectId: "blogging-app-e6787",
  storageBucket: "blogging-app-e6787.appspot.com",
  messagingSenderId: "54790263140",
  appId: "1:54790263140:web:5ea850df4758b364c86a71"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
