# NextJS Authentication Application

Welcome to the NextJS Authentication Application! This application is designed to provide user registration, login, profile management, and password recovery functionalities. It is built on Next.js, with a sleek design created using Tailwind CSS and DaisyUI. The application leverages MongoDB for data storage, bcryptjs for password encryption, Nodemailer for sending verification emails, and Jsonwebtoken for secure authentication.

## Features

- **User Registration:**
  - Collects user information such as username, email, and password.
  - Encrypts passwords using bcryptjs.
  - Stores additional fields like `isVerified` (to check email verification status), `isAdmin` (to identify admin users), `verifyToken`, `forgotPasswordToken` and their expiry date in MongoDB.

- **Email Verification:**
  - Sends verification emails using Nodemailer and Mailtrap.io.
  - Users receive an email with a link containing a verification token.
  - Clicking the link verifies the email and sets `isVerified` to true in the database.

- **Login:**
  - Users can log in only if their email is verified.
  - Generates a Jsonwebtoken upon successful login, storing it in cookies.
  - The user remains logged in until the token expires.

- **Profile Page:**
  - After logging in, users are directed to a profile page.
  - Includes "Get Details" and "Logout" buttons.
  - "Get Details" fetches and displays the username, email, and user ID.
  - "Logout" erases the stored web token, logging the user out.

- **Forgot Password:**
  - Provides a forgot password option on the login page.
  - Users submit their registered email.
  - Receives a password reset email with a token-embedded link.
  - Clicking the link directs users to a page to enter a new password.
  - Verifies the token and updates the encrypted new password in the database.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rusteee16/Daisy-Auth.git
   ```

2. **Install dependencies:**

  ```bash
  cd Daisy_Auth
  npm install
  ```

3. **Set up environment variables:**

Create a .env file in the root of the project.

Add the following variables:

```bash
MONGODB_URL=your_mongodb_url
MAILTRAP_USERNAME=your_mailtrap_username
MAILTRAP_PASSWORD=your_mailtrap_password
TOKEN_SECRET=your_jwt_secret
DOMAIN=http://localhost:3000 
```

4. **Run the application:**

```
npm run dev
```

Visit http://localhost:3000 in your browser to access the application.

Feel free to explore and enhance the application as needed! If you have any questions or encounter issues, please open an issue. Happy coding! 🚀

# Acknowledgements

Special thanks to [Hitesh Choudhary](https://github.com/hiteshchoudhary) for providing excellent tutorial videos on YouTube.

- [Hitesh Choudhary's YouTube Channel](https://www.youtube.com/@HiteshChoudharydotcom)

Thank you, Hitesh, for sharing your knowledge and making learning enjoyable!

