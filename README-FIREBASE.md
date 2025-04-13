# Firebase Setup for CommonTable

This guide will walk you through setting up Firebase for the CommonTable application.

## Prerequisites

- A Google account
- Node.js and npm installed on your machine

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the prompts to create a new project
   - Enter a project name (e.g., "CommonTable")
   - Enable or disable Google Analytics as preferred
   - Accept the terms and create the project

## Step 2: Register Your Web App

1. In the Firebase console, click on the "</>" icon to add a web app
2. Enter a name for your app (e.g., "CommonTable Web")
3. Register the app
4. You'll be presented with a configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

5. Copy these values as you'll need them for your environment configuration

## Step 3: Set Up Firestore Database

1. In the Firebase console, navigate to "Firestore Database"
2. Click "Create database"
3. Start in production mode or test mode as needed
4. Choose a database location close to your users
5. Click "Enable"

## Step 4: Set Up Authentication

1. In the Firebase console, navigate to "Authentication"
2. Click "Get started"
3. Enable the sign-in methods you want to use:
   - Email/Password
   - Google
   - (Optional) Other providers as needed
4. For Google sign-in, you'll need to configure the OAuth consent screen if you haven't already

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in the root of your project by copying the example file:

```bash
cp .env.local.example .env.local
```

2. Update the `.env.local` file with your Firebase configuration values:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Step 6: Set Up Firestore Rules

1. In the Firebase console, navigate to "Firestore Database" > "Rules"
2. Update the rules to secure your database. Here's a basic example:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /listings/{listingId} {
      allow read;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
                            request.auth.uid == resource.data.ownerId;
    }
    
    match /conversations/{conversationId} {
      allow read: if request.auth != null && 
                  request.auth.uid in resource.data.participants;
      allow create: if request.auth != null;
      allow update: if request.auth != null && 
                    request.auth.uid in resource.data.participants;
    }
    
    match /messages/{messageId} {
      allow read: if request.auth != null && 
                  exists(/databases/$(database)/documents/conversations/$(resource.data.conversationId)) &&
                  request.auth.uid in get(/databases/$(database)/documents/conversations/$(resource.data.conversationId)).data.participants;
      allow create: if request.auth != null && 
                    exists(/databases/$(database)/documents/conversations/$(request.resource.data.conversationId)) &&
                    request.auth.uid in get(/databases/$(database)/documents/conversations/$(request.resource.data.conversationId)).data.participants;
    }
  }
}
```

## Step 7: Set Up Storage Rules (If Using Firebase Storage)

1. In the Firebase console, navigate to "Storage" > "Rules"
2. Update the rules to secure your storage. Here's a basic example:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{userId}/{allPaths=**} {
      allow read;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /listings/{listingId}/{allPaths=**} {
      allow read;
      allow write: if request.auth != null;
    }
  }
}
```

## Step 8: Deploy Firebase Rules (Optional)

If you want to use Firebase CLI to deploy your rules:

1. Install Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Login to Firebase:

```bash
firebase login
```

3. Initialize Firebase in your project:

```bash
firebase init
```

4. Deploy your rules:

```bash
firebase deploy --only firestore:rules,storage:rules
```

## Congratulations!

Your Firebase setup is now complete, and your CommonTable application should be able to:

- Authenticate users
- Store and retrieve data from Firestore
- Store and retrieve files from Firebase Storage (if configured)

For more information, refer to the [Firebase documentation](https://firebase.google.com/docs). 