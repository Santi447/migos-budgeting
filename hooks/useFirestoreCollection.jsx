"use client";

import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

export function useFirestoreCollection(path) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!path) {
      setData([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const unsubscribe = onSnapshot(
      collection(db, ...path),
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(items);
        setIsLoading(false);
        setError(null);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [path ? path.join("/") : ""]);

  return { data, isLoading, error };
}