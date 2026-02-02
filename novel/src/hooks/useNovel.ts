import { useCallback, useEffect, useState } from 'react';
import { initialNovel, type Novel } from '../types/book';
import { getRow } from '../apis/novelApis';

// id : string 처리 이유는 주소줄에서 id를 받아올 때는 string 형태이고 spring server에서 형변환해서 받을 수 있기 때문에 상관 x
export const useNovel = (id?: string) => {
  const [serverData, setServerData] = useState<Novel>(initialNovel);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchData = useCallback(async () => {
    if (!id) return;

    try {
      const data = await getRow(id);
      setServerData(data);

      console.log('useNovel 확인', data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    // 렌더링 시 함수 호출
    fetchData();
  }, [fetchData]);

  return { serverData, loading, error };
};
