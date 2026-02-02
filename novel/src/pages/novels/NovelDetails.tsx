import NovelDetail from '../../components/novels/NovelDetail';
import BasicLayout from '../../layouts/BasicLayout';

const NovelDetails = () => {
  return (
    <BasicLayout>
      <h1 className="text-[32px]">Book Details</h1>
      <NovelDetail />
    </BasicLayout>
  );
};

export default NovelDetails;
