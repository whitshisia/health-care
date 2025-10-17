// src/integrations/firebase/types.ts
/* --------- Example usage ---------

import { db } from "@/integrations/firebase/client";
import type { CollectionData, DocRef } from "@/integrations/firebase/types";
import { collection, getDocs } from "firebase/firestore";

// get typed collection name
type User = CollectionData<'users'>;

// read users
const snap = await getDocs(collection(db, 'users'));
const users: DocRef<'users'>[] = snap.docs.map(d => ({ id: d.id, ...(d.data() as User) }));

--------------------------------------------------- */
export default {};
