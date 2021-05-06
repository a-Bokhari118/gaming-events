import Head from 'next/head';
import styles from '../styles/Layout.module.css';
const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Gaming Events',
  description: 'Find the Latest gaming events',
  keywords: 'Game, gaming, events',
};

export default Layout;
