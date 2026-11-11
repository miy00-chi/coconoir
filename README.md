<a name="readme-top">

<br/>

<br />
<div align="center">
  <a href="https://github.com/a-manalo/">
    <img src="public/images/cocoir_logo.png"
     alt="PixelCore's Cocoir Website"
     width="200"
     height="200">
  </a>

  <h3 align="center">Cocoir</h3>
</div>

<div align="center">
  A Simple E-Commerce Website
</div>

<br />
<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ol>
        <li>
          <a href="#local-setup">Local Setup</a>
        </li>
        <li>
          <a href="#key-components">Key Components</a>
        </li>
        <li>
          <a href="#technology">Technology</a>
        </li>
      </ol>
    </li>
    <li>
      <a href="#resources">Resources</a>
    </li>
  </ol>
</details>

---

## Overview

Cocoir is an e‑commerce platform dedicated to promoting sustainable living through coconut coir‑based products. Our mission is to show how natural materials can be transformed into valuable everyday solutions while encouraging people to make greener choices. 

## Local Setup

### Stack

- **Next.js 16** (App Router) and **React 19**
- **JavaScript** and CSS Modules
- **MySQL** accessed through `mysql2`
- **Gmail SMTP** for registration verification emails
- **Cloudinary** for profile-picture uploads (optional)
- **bcryptjs** for password hashing

### Requirements

- Node.js 20.9 or later and npm
- MySQL 8.x, running locally
- A Gmail account with 2-Step Verification and an app password to test account registration
- A Cloudinary account only if you want to test profile-picture uploads

### Install and create the database

From the project directory, install dependencies:

```powershell
npm ci
```

Create a database in MySQL:

```sql
CREATE DATABASE cocoir_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Select `cocoir_db` in MySQL Workbench and run `database/cocoir_db.sql`. Then run each migration script once, in order:

1. `database/migrations/001_add_featured_columns.sql`
2. `database/migrations/002_add_enabled_column.sql`

The schema script also inserts the initial product catalog. The app expects the migrations to have run because product queries use the featured and enabled columns.

### Configure environment variables

Copy `.env.example` to `.env.local` and set your MySQL and Gmail credentials:

```powershell
Copy-Item .env.example .env.local
```

`NEXT_PUBLIC_APP_URL` should remain `http://localhost:3000` for local development. Set `GMAIL_USER` to your Gmail address and `GMAIL_PASSWORD` to a Google app password (not your regular Gmail password). Google requires 2-Step Verification to create an app password. Registration cannot send its required verification email without these values. Cloudinary values can be left blank unless using profile-picture uploads.

### Run the app

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production-mode check, use `npm run build` followed by `npm start`.

### Buyer and Seller accounts

The public registration form creates **Buyer** accounts; it does not offer a role selector. To make a local test Seller, first register and verify a Buyer account, then change its role in MySQL Workbench:

```sql
UPDATE users SET role = 'Seller' WHERE email = 'your-test-email@example.com';
```

Log out and back in so the session picks up the Seller role. The Seller role enables inventory, order-management, and sales-report features.

### Key Components

- Home Page with Storefront
  - Hero Section
  - Featured Products
  - Footer
- Products Page
  - Product Categories
    - Product Details
    - Buyer Features:
        - Add to Cart
        - Buy Now
  - Seller Features
    - Modify Storefront
- Checkout Page (Buyer)
- Cart Page (Buyer)
- Order History Page (Buyer)
- Manage Orders Page (Seller)
- Manage Inventory Page (Seller)
- Sales Report Page (Seller)
- About Us Page
- Authentication System
  - Login
  - Signup
  - Role Authentication
- Profile Page
  - Edit personal information
  - Upload profile picture
  - Change password
  - Delete account (Buyer)
- Additional Features
    - Export to PDF functionality
    - Search functionality
    - Error Page
    - CRUD Operations
    - Database Integration

### Technology

#### Language
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

#### Framework/Library
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

#### Databases
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

#### Deployment
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)

## Resources

| Title        | Purpose                                                                       | Link          |
| ------------ | ----------------------------------------------------------------------------- | ------------- |
| Google Fonts API          | Used for integrating custom fonts for styling                                                                           | https://fonts.googleapis.com           |
| Claude             | Used for debugging and ensuring proper code structure          | https://claude.ai/            |
| Pinterest          | Source of product and design inspiration images                | https://www.pinterest.com     |