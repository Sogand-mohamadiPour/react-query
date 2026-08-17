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
- Searching
- Pagination
- Server-state synchronization

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

### 🔎 Searching

- Search state
- Query parameters
- Dynamic query keys
- Fetching filtered server data

### 📄 Pagination

- Pagination state
- Page-based queries
- Pagination query keys
- Fetching different pages
- Keeping pagination state synchronized with server data

## ✨ Features

- 📦 Display products
- 🔍 Search products
- 📄 Paginate products
- 👀 View product details
- ➕ Create products
- ✏️ Update products
- 🗑️ Delete products
- ⏳ Loading states
- ❌ Error handling
- 💾 Server-state caching
- 🔄 Automatic refetching
- ♻️ Query invalidation

## 📁 Project Structure

```text
src/
├── api/
│   └── products.js
│
├── assets/
│   └── hero.png
│
├── components/
│   ├── Pagination.jsx
│   ├── ProductCard.jsx
│   ├── ProductForm.jsx
│   ├── ProductList.jsx
│   └── SearchBar.jsx
│
├── hooks/
│   ├── useCreateProduct.js
│   ├── useDeleteProduct.js
│   ├── useProduct.js
│   ├── useProducts.js
│   └── useUpdateProduct.js
│
├── pages/
│   ├── ProductDetails.jsx
│   └── Products.jsx
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

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
