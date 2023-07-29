import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  collectionGroup,
  where,
  addDoc,
} from "firebase/firestore";
import { db } from "./../firebase";

export type createParksDoc = {
  resortId: string;
  name: string;
};

export const createParksDoc = async (data: createParksDoc) => {
  const parksRef = collection(db, "resorts", data.resortId, "parks");
  return await addDoc(parksRef, data);
};

export const createDocumnet = async (
  path: string,
  collections: string,
  data: any
) => {
  const collectionRef = collection(db, path, collections);
  return await addDoc(collectionRef, data);
};
