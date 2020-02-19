import admin from "firebase-admin";
import serviceAccount from "../config/serviceAccountKey.json";

//initialize Firebase with credentialss
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mini-project-4db30.firebaseio.com"
});

//setting up firestore reference
const db = admin.firestore();

export default db;
