import React from 'react';
import styles from './index.module.scss'

const ShowPost: React.FC =(): JSX.Element => {

  const postMocData = [
    {
      id: 1,
      name:'Username-01',
      topic:'Topic-01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tempus imperdiet et amet est cursus mauris, neque, sollicitudin a.'
    },
    {
      id: 2,
      name:'Username-02',
      topic:'Topic-02',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tempus imperdiet et amet est cursus mauris, neque, sollicitudin a.'
    },
    {
      id: 3,
      name:'Username-03',
      topic:'Topic-03',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tempus imperdiet et amet est cursus mauris, neque, sollicitudin a.'
    },
  ]

  return <section className={styles.showPostBox}>
    <div className={styles.container}>
      {postMocData.map((data)=>(
        <div className={styles.profileCard}>
          <div className={styles.leftSide}>
            <div className={styles.detailProfile}>
              <div>
                <p className={styles.textName}>Username</p>
                <p className={styles.textGrey}>Topic</p>
              </div>
            <div className={styles.contractGroup}>
              <article className={styles.contractGroup}>
                <p className={styles.textContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tempus imperdiet et amet est cursus mauris, neque, sollicitudin a.
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
