// src/integrations/firebase/types.ts

// Generic JSON type (keeps parity with your previous file)
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// Basic Firestore document wrapper
// T = shape of the document (fields stored in Firestore)
export type FirestoreDoc<T = Record<string, any>> = T & {
  // Firestore's document id (not stored in document data — helpful in your app)
  id?: string
  // Common audit fields you might add — optional
  createdAt?: string | number | Date
  updatedAt?: string | number | Date
}

/**
 * Collections
 *
 * Replace or extend these example interfaces with your real Firestore collection schemas.
 *
 * Example:
 *  export interface User { name: string; email: string; phone?: string }
 *  export interface Order { userId: string; total: number; items: OrderItem[] }
 *
 * Then add them to Collections:
 *  export type Collections = {
 *    users: FirestoreDoc<User>
 *    orders: FirestoreDoc<Order>
 *    ...
 *  }
 *
 * This file intentionally leaves the collection map explicit so you can keep
 * compile-time safety and avoid accidental mismatches.
 */
export type Collections = {
  // Example collection: users
  users?: FirestoreDoc<{
    name: string
    email: string
    phone?: string
    // add other user fields here
  }>

  // Example collection: orders
  orders?: FirestoreDoc<{
    userId: string
    total: number
    status?: "pending" | "paid" | "shipped" | "cancelled"
    // add other order fields here
  }>

  // Example collection: prescriptions
  prescriptions?: FirestoreDoc<{
    userId: string
    medication: string
    dosage: string
    notes?: string
    issuedAt?: string | number | Date
  }>

  // Add your project collections below. If you want a truly dynamic collection
  // mapping, you can add an index signature, but it removes type-safety:
  // [collectionName: string]: FirestoreDoc<any>
}

/* --------- Utility types for convenience --------- */

// All names of collections (literal union of keys)
export type CollectionNames = Exclude<
  {
    [K in keyof Collections]: K
  }[keyof Collections],
  undefined
>

// The raw data shape stored inside documents of a collection (without Firestore helper fields)
export type CollectionData<Name extends CollectionNames> =
  Collections[Name] extends FirestoreDoc<infer D> ? D : never

// A full document reference type (data + optional id, timestamps)
export type DocRef<Name extends CollectionNames> =
  Collections[Name] extends FirestoreDoc<infer D> ? FirestoreDoc<D> : never

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

export default {} as Collections
