# React Query Product Manager

A React product management application built as a hands-on learning project focused on TanStack Query (React Query).

## 🎯 Project Purpose

This project was created to learn TanStack Query from scratch through a practical project instead of only following isolated tutorials.

The application starts with basic data fetching and gradually introduces more advanced concepts such as:

- Queries
- Query keys
- Query functions
- Caching
- Mutations
- Query invalidation
- Server-state synchronization
- CRUD operation

## 🛠️ Tech Stack

- React
- JavaScript
- TanStack Query
- Tailwind CSS
- Vite
- REST API
- Fetch API

## 📚 Topics covered

### 🔍 Queries

- QueryClient
- QueryClientProvider
- useQuery
- queryKey
- queryFn
- Loading states
- Error handling
- Query caching
- Stale data
- Refetching
- staleTime
- gcTime

### ✏️ Mutations

- useMutation
- Creating products
- Updating products
- Deleting products
- Mutation loading states
- Mutation error handling

### 🗃️ Cache Management

- Understanding the TanStack Query cache
- Query invalidation
- invalidateQueries
- Keeping UI data synchronized with the server
- Understanding cached vs. fresh data

### 🔑 Query Keys

- Understanding how query keys identify server data
- Dynamic query keys
- Query keys for individual products
- Query keys for search and pagination

## ✨ Features

- 📦 Display products
- 👀 View product details
- ➕ Create products
- ✏️ Update products
- 🗑️ Delete products
- ⏳ Loading states
- ❌ Error handling
- 💾 Server-state caching
- 🔄 Automatic refetching
- ♻️ Query invalidation

## 🔄 Data Fetching Flow
A typical product query follows this flow:

```text
User Action
     ↓
useMutation()
     ↓
API Function
     ↓
REST API
     ↓
Server Updated
     ↓
invalidateQueries()
     ↓
Fresh Server Data
     ↓
UI Updated
```

## 📌 Note
This project is primarily an educational project created to demonstrate practical knowledge of TanStack Query.
The product application is the vehicle for learning the library — the main focus is understanding server-state management with TanStack Query.
