# React Finance Tracker

Register your transactions, and you will have access to them anywhere in the globe. Only user that created them has access, stored in Database. Authentication provided by Firebase.

## Features

- Built using React + react-router + Firebase(Firestore and Auth)
- Forms are taking advantage of the 'autocomplete' attribute. So your browser will store email and passwords for you (even on different devices). Autocomplete will happen automatically after you signup.
- Routes protection. If you haven't logged in, you dont have access to the dashboard '/'. You will be rerouted to the signup page. The same trying to access login when you already logged in, you wont be able.
- Email/passwords as Auth methods.
- Only fetching what the user has created ('where' method firestore)