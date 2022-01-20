import React from 'react';
import styles from './index.module.scss'

const App: React.FC = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <p>
          TEST 01 SHOW POST
        </p>
      </header>
      <div className={styles.showPostBox}>
          
      </div>
    </div>
  );
}

export default App;
