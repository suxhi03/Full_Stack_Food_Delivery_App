# Forkful - Full Stack Food Delivery Website

Forkful is a full-stack food delivery website built using the MERN stack (MongoDB, Express.js, React, Node.js) with Stripe integration for secure online payments. This project includes a customer-facing frontend, a backend for handling user data and orders, and an admin panel to manage the menu and view order history.

## Features

- **User Authentication**: Sign up and login functionality for customers.
- **Menu Management**: Users can browse a variety of food items available in the menu.
- **Order Placement**: Customers can add food items to the cart, place orders, and pay online using Stripe.
- **Order Tracking**: Customers can view the current status of their orders.
- **Admin Panel**: Admins can add or remove items from the menu and view the order histories of all customers.
  
## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe (Test Mode)
- **Authentication**: JWT (JSON Web Tokens)

## Setup and Installation

### Prerequisites
Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use a cloud-based MongoDB instance like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Stripe](https://stripe.com/docs/keys) (for payment functionality)

### Clone the Repository
First, clone the repository to your local machine:

```bash
git clone  https://github.com/suxhi03/Full_Stack_Food_Delivery_App.git
cd forkful
```
  
### Install Dependencies

- **Backend (Node.js/Express):** Navigate to the backend folder and install the required dependencies:
```bash
cd backend
npm install
```
- **Frontend (React):** Navigate to the frontend folder and install the required dependencies:
```bash
cd frontend
npm install
```

## Configuration
Create a `.env` file in the backend folder and add the following configurations:
```bash
JWT_SECRET=<Your JWT Secret Key>
STRIPE_SECRET_KEY=<Your Stripe Secret Key>
```

### Running the Application
- **Start the backend:** In the `backend` directory, run the following command:
```bash
npm run server
```

- **Start the frontend:** In the frontend directory, run:
```bash
npm run dev
```
The frontend should now be running on http://localhost:5174

- **Start the admin:** In the `admin` directory, run:
```bash
npm run dev
```
The admin should now be running on http://localhost:5173

### Testing Stripe Payment
The Stripe payment system is configured in Test Mode. You can use the following test card details for making payments:

- **Card Number:** `4000 0035 6000 0008`
- **Expiry Date:** Any future date
- **CVC:** Any 3-digit number

## Usage
- **Customer:** Visit the homepage, sign up or log in, browse the menu, add food items to the cart, place an order, and proceed with the payment via Stripe.
- **Admin:** Log in to the admin panel to manage the menu (add/remove items) and view customer order history.



