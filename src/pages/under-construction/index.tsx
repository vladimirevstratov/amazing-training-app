import MainLayout from '../../components/common/main-layout';

interface UnderConstructionProps {
  pageTitle: string;
}

const UnderConstruction = ({ pageTitle }: UnderConstructionProps) => {
  return (
    <MainLayout title={'Under construction'} pageTitle={pageTitle}>
      <h2>The page is under construction...</h2>
    </MainLayout>
  );
};

export default UnderConstruction;
