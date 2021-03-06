import "dotenv/config";

import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

if (process.env.NODE_ENV === "production") {
  process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS_PATH;

  initializeApp({
    credential: applicationDefault(),
    storageBucket: "playground-abc-firebase.appspot.com",
  });
} else {
  const PROJECT_ID = "playground-abc-firebase";
  const FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";
  const FIRESTORE_EMULATOR_HOST = "localhost:8080";
  const FIREBASE_STORAGE_EMULATOR_HOST = "localhost:9199";

  process.env.GCLOUD_PROJECT = PROJECT_ID;
  process.env.FIREBASE_AUTH_EMULATOR_HOST = FIREBASE_AUTH_EMULATOR_HOST;
  process.env.FIRESTORE_EMULATOR_HOST = FIRESTORE_EMULATOR_HOST;
  process.env.FIREBASE_STORAGE_EMULATOR_HOST = FIREBASE_STORAGE_EMULATOR_HOST;

  initializeApp({
    storageBucket: "playground-abc-firebase.appspot.com",
  });
}

export const getDb = () => getFirestore();
export { getAuth, getStorage };
