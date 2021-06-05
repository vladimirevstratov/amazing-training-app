import MainLayout from '../../components/common/main-layout';
import cup from '../../images/cup.png';
import { Button } from 'react-bootstrap';
import { menuTitles, menuUrls } from '../../constants/structures';
import { useHistory } from 'react-router-dom';
import styles from './index.module.css';

interface UnderConstructionProps {
  pageTitle: string;
}

const UnderConstruction = ({ pageTitle }: UnderConstructionProps) => {
  const history = useHistory();

  return (
    <MainLayout title={'Under construction'} pageTitle={pageTitle}>
      <div className={styles.container}>
        <img src={cup} width="144" height="144" />
        <p className={styles.text}>The page is under construction...</p>
        <button
          onClick={() => history.push(menuUrls.training)}
          className={styles.button}
        >
          Go to {menuTitles.training}
        </button>
      </div>
    </MainLayout>
  );
};

export default UnderConstruction;
