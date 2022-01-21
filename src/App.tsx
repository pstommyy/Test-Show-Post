import React from 'react';
import styles from './index.module.scss'
//component
import NavTop from './Component/NavTop'
import ShowPost from './Component/ShowPost'

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
