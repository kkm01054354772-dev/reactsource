import { useNavigate, useParams } from 'react-router-dom';
import NovelForm from '../../components/novels/NovelForm';
import BasicLayout from '../../layouts/BasicLayout';
import { useNovel } from '../../hooks/useNovel';
import Error from '../../components/common/Error';
import Loading from '../../components/common/Loading';
import type { Novel } from '../../types/book';
import { putNovel } from '../../apis/novelApis';
import useLogin from '../../hooks/useLogin';

const EditNovel = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isLogin, moveToLogin } = useLogin();

  const { serverData, loading, error } = useNovel(id);

  console.log('editNovel', serverData);

  const handleCancel = (id: number) => {
    // 이전 페이지로 이동
    navigate(`../${id}`);
  };

  const handleSubmit = async (formData: Novel) => {
    // 서버로 업데이트 요청
    try {
      const result = await putNovel(formData);
      console.log(result);
      // 이전 페이지로 이동
      navigate(`../${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  // 로그인 여부 확인
  if (!isLogin) {
    moveToLogin();
  }

  if (error) return <Error />;

  return (
    <BasicLayout>
      <h1 className="text-[32px]">Edit Book</h1>
      {loading ? (
        <Loading />
      ) : (
        <NovelForm
          novel={serverData}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      )}
    </BasicLayout>
  );
};

export default EditNovel;
