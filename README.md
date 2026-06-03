# Online Shop

A simple online shop application built with React, PHP, and MySQL.

## Features

- View products
- Add products
- Update products
- Delete products
- Shopping cart

## Technologies Used

### Frontend
- React
- JavaScript
- CSS

### Backend
- PHP
- MySQL

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/anesa666/Online_shop.git
```

### 2. Set up the backend

1. Move the project to your XAMPP/Laragon `www` folder.
2. Create a MySQL database named `online_shop`.
3. Import the provided SQL file.
4. Update database credentials in `dbconn.php`.

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /api/getProducts.php | Get all products |
| POST | /api/addProduct.php | Add a product |
| POST | /api/updateProduct.php | Update a product |

## Project Structure

```text
project/
│
├── frontend/
│   ├── src/
│   └── components/
│
├── backend/
│   ├── api/
│   └── dbconn.php
│
└── README.md
```

## Screenshots

not done yet

## Author

Anesa Hoxha