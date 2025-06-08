import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
class Connection{
database(){
const firebaseConfig = {
        apiKey: "AIzaSyBXFzZqF4RYCusRkoYpCV2ePuZPojh9bQ0",
        authDomain: "atlas-8fef6.firebaseapp.com",
        projectId: "atlas-8fef6",
        storageBucket: "atlas-8fef6.firebasestorage.app",
        messagingSenderId: "131854842895",
        appId: "1:131854842895:web:e998b331a7964ff08e777a",
        measurementId: "G-BVD3F12ETV"
      };

      const app = initializeApp(firebaseConfig);
    //   const analytics = getAnalytics(app);

return app;

    }










};

export default Connection;