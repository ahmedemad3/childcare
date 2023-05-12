# Childcare SaaS Product

This is a Childcare SaaS Product, which aims to provide a platform for parents to find and hire caregivers for their children. The product allows caregivers to create a profile and list their availability, hourly rate, and location. Parents can search for caregivers based on their location, availability, and hourly rate, and can also view caregiver profiles to learn more about them.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- TypeScript
- JWT for authentication
- bcrypt for password hashing
- dotenv for environment variables
- express-validator for request validation

## Getting Started

### Prerequisites

- Node.js installed on your machine
- PostgreSQL installed on your machine

### Installation

1. Clone the repository:

```
git clone https://github.com/ahmedemad3/childcare.git
```

2. Install dependencies:

```
cd childcare
npm install
```

3. Create a `.env` file based on the `.env.example` file, and add the required environment variables.

4. Create the PostgreSQL database and run the SQL script to create the necessary tables:

```
createdb childcare
psql childcare < database.sql
```

### Usage

To start the server, run:

```
npm start
```

The server will start on `http://localhost:3000`.

### Endpoints

#### POST /api/register

Registers a new user.

**Request body:**

```
{
  "username": string,
  "email": string,
  "password": string,
  "fullname": string,
  "mobileNumber": string,
  "userTypeCode": string
}
```

**Response body:**

```
{
  "id": number,
  "username": string,
  "email": string,
  "fullname": string,
  "mobileNumber": string,
  "userTypeCode": string
}

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
