import { useNavigate } from 'react-router-dom';
import NovelForm from '../../components/novels/NovelForm';

import BasicLayout from '../../layouts/BasicLayout';
import { initialNovel, type Novel } from '../../types/book';
import { postNovel } from '../../apis/novelApis';

const AddNovel = () => {
  const navigate = useNavigate();

  const handleCancel = (id: number) => {
    // 이전 페이지로 이동
    navigate(`../${id}`);
  };

  const handleSubmit = async (formData: Novel) => {
    // 서버로 생성 요청
    try {
      const id = await postNovel(formData);
      console.log('생성 후', id);
      // 상세페이지로 이동
      navigate(`../${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BasicLayout>
      <h1 className="text-[32px]">Add New Book</h1>
      <NovelForm
        novel={initialNovel}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </BasicLayout>
  );
};

export default AddNovel;
