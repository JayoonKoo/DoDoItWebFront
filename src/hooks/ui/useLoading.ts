import { useRecoilState } from 'recoil';
import { loadingState } from '../../recoil/uiState';
import { useCallback, useEffect } from 'react';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';

function useLoading() {
  const [loading, setLoading] = useRecoilState(loadingState);
  const fetchingNum = useIsFetching();
  const mutatingNum = useIsMutating();

  const openLoading = useCallback(() => {
    setLoading({ isLoading: true });
  }, [setLoading]);

  const closeLoading = useCallback(() => {
    setLoading({ isLoading: false });
  }, [setLoading]);

  useEffect(() => {
    const isFetching = fetchingNum > 0;
    const isMutating = mutatingNum > 0;
    setLoading({ isLoading: isFetching || isMutating });
  }, [setLoading, fetchingNum, mutatingNum]);

  return {
    openLoading,
    closeLoading,
    loading,
  };
}

export default useLoading;
