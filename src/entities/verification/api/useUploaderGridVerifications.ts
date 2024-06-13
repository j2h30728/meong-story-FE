import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import useIntersectionObserver from '../../../shared/hooks/useIntersectionObserver';
import verificationAPI from './verificationAPI';
import { verificationKey } from '../../../shared/lib/query/queryKey';
import { SortType } from '../../../shared/types/verification';

const useUploaderGridVerifications = ({
  uploaderId,
  sort,
}: {
  uploaderId: string;
  sort: SortType;
}) => {
  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: verificationKey.uploaderGrid(uploaderId, sort),
    queryFn: ({ pageParam }) =>
      verificationAPI.getGridVerificationsForUploader({
        uploaderId,
        sort,
        currentPage: pageParam,
      }),
    getNextPageParam: ({ currentPage, totalPages }) =>
      currentPage < totalPages ? currentPage + 1 : undefined,
    initialPageParam: 0,
  });

  const { targetItemRef } =
    useIntersectionObserver<HTMLDivElement>(fetchNextPage);
  const gridData = data?.pages.flatMap((page) => page.items);

  return { data: gridData, targetItemRef, isFetchingNextPage };
};
export default useUploaderGridVerifications;
