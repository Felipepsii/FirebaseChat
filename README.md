<h1>Installation</h1>
  <p>To get started with the project, follow these steps:</p>
  
  <ol>
    <li>Clone the repository: git clone https://github.com/Felipepsii/FirebaseChat.git</li>
    <li>Navigate to the project directory: cd webchat</li>
    <li>Install the dependencies: npm install react-firebase-hooks firebase</li>  
  </ol>

<h1>Usage</h1>
  <p>After the installation, you can run the project locally using the following command:</p>
  
 ```npm start```
  
  <p>This command starts the development server and opens the application in your default browser. You can access it at http://localhost:3000.</p>

<h1>Firebase Configuration</h1>
  
To use Firebase in the project, you need to set up a Firebase project and obtain the necessary configuration. Follow the steps below:
  <ol>
    <li>Go to the Firebase Console and create a new project.</li>
    <li>Enable the required Firebase services such as Authentication, Realtime Database, and Cloud Storage.</li>
    <li>Obtain the Firebase configuration by going to your project settings and selecting the "Config" option.</li>  
    <li>Copy the configuration object and replace the placeholder in the src/firebase/config.js file with your actual Firebase configuration." option.</li>  
  </ol>
  
Copy the configuration object and replace the placeholder in the /src/services/firebaseConfig.js file with your actual Firebase configuration.


```

const firebaseConfig = {
  // Replace with your Firebase project's configuration
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

```
Ensure that your Firebase project's security rules are properly configured to allow read/write access based on your application's requirements.
