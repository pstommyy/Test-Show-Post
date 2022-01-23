import React from 'react';
import styles from './index.module.scss'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//component
import NavTop from './Component/NavTop'
import ShowPost from './Component/ShowPost'

const firebaseConfig = {
  apiKey: "AIzaSyD1scpOpRpQd4DtirqfiTmX_uOSf1-MqNw",
  authDomain: "test-show-post.firebaseapp.com",
  projectId: "test-show-post",
  storageBucket: "test-show-post.appspot.com",
  messagingSenderId: "868955795898",
  appId: "1:868955795898:web:1e346e6b02302e4e0fed83",
  measurementId: "G-4CC7FC54L3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App: React.FC = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <nav>
        <NavTop />
      </nav>
      <div className={styles.showPostBox}>
          <ShowPost />
      </div>
    </div>
  ); 
}

export default App;
