import React from 'react';
import styles from './index.module.scss'

const ShowPost: React.FC =(): JSX.Element => {

  const postMocData = [
    {
      id: 1,
      name:'Username-01',
      topic:'Topic-01',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      id: 2,
      name:'Username-02',
      topic:'Topic-02',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tempus imperdiet et amet est cursus mauris, neque, sollicitudin Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tempus imperdiet et amet est cursus mauris, neque, sollicitudin a.'
    },
    {
      id: 3,
      name:'Username-03',
      topic:'Topic-03',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tempus imperdiet et amet est cursus mauris, neque, sollicitudin Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.'
    },
  ]

  return <section className={styles.showPostBox}>
    <div className={styles.container}>
      {postMocData.map((data)=>(
        <div key={data.id} className={styles.profileCard}>
          <div className={styles.leftSide}>
            <div className={styles.detailProfile}>
              <div>
                <p className={styles.textName}>{data.name}</p>
                <p className={styles.textGrey}>{data.topic}</p>
              </div>
            <div className={styles.contractGroup}>
              <article className={styles.contractGroup}>
                <p className={styles.textContent}>
                {data.content}
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
