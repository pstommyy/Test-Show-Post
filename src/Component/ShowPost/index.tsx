import React, { useState, useEffect}from 'react';
import styles from './index.module.scss'
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/posts/'

const ShowPost: React.FC =(): JSX.Element => {

  const [post, setPost] = useState([]);

  useEffect(()=>{
    axios.get(baseURL).then((response)=>{
      setPost(response.data)
      console.log('response>>>>',response.data)
    })
  },[]);
 
  return <section className={styles.showPostBox}>
    <div className={styles.container}>
      {post.map((data:any)=>(
        <div key={data.userId} className={styles.profileCard}>
          <div className={styles.leftSide}>
            <div className={styles.detailProfile}>
              <div>
                <p className={styles.textName}>User's Name : {data.id}</p>
                <p className={styles.textGrey}>Title : {data.title}</p>
              </div>
            <div className={styles.contractGroup}>
              <article className={styles.contractGroup}>
                <p className={styles.textContent}>
                {data.body}
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>))}
    </div>
  </section>;
}

export default ShowPost;
