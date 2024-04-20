import { useSuspenseQuery } from '@tanstack/react-query';

import { verificationKey } from '../../../utils/query/queryKey';
import verificationAPI from '../../../api/verificationAPI';

const useVerificationCalendar = ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  const { data } = useSuspenseQuery({
    queryKey: verificationKey.calendar(),
    queryFn: () => verificationAPI.getVerificationCalendar({ year, month }),
  });
  return data;
};

export default useVerificationCalendar;
