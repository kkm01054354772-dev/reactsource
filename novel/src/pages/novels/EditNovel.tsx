import NovelForm from '../../components/novels/NovelForm';
import BasicLayout from '../../layouts/BasicLayout';

const EditNovel = () => {
  return (
    <BasicLayout>
      <h1 className="text-[32px]">Edit Book</h1>
      <NovelForm />
    </BasicLayout>
  );
};

export default EditNovel;
