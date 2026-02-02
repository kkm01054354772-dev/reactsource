import BookForm from '../../components/novels/NovelForm';
import BasicLayout from '../../layouts/BasicLayout';

const AddNovel = () => {
  return (
    <BasicLayout>
      <h1 className="text-[32px]">Add New Book</h1>
      <BookForm />
    </BasicLayout>
  );
};

export default AddNovel;
