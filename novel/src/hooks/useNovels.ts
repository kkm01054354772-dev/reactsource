import { useCallback, useEffect, useState } from 'react';
import { getList, putAvailable } from '../apis/novelApis';
import {
  initialNovel,
  initialPageState,
  type Novel,
  type NovelPut,
  type PageResult,
} from '../types/book';

// 전체목록 가져오기
export const useNovels = (
  page: number,
  size: number,
  genre: number,
  keyword: string,
) => {
  const [serverData, setServerData] =
    useState<PageResult<Novel>>(initialPageState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  // 전체 목록
  const fetchData = useCallback(async () => {
    // react-paginate 라이브러리가 페이지 번호 클릭시 자동으로 -1 처리
    page = page + 1;

    try {
      const data = await getList({ page, size, genre, keyword });
      setServerData(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [page, size, genre, keyword]);

  // available 업데이트
  const toggleAvailable = useCallback(
    async (id: number, available: boolean) => {
      console.log(id);
      const result = await putAvailable({ id: id, available: !available });

      console.log('toggleAvailable', result);
      fetchData();
    },
    [fetchData],
  );

  useEffect(() => {
    // 렌더링 시 함수 호출
    fetchData();
  }, [fetchData]);

  return { serverData, loading, error, toggleAvailable };
};
