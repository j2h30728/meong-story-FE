import UserImage from '../../../shared/ui/UserImage';
import { VerificationResponse } from '../../../shared/types/verification';
import { getVerificationTitle } from '../../../shared/lib/getVerificationInfo';
import formattedDate from '../../../shared/lib/formattedDate';
import ROUTE_PATH from '../../../shared/constants/routePath';

import * as S from './DetailVerificationItem.style';

const DetailVerificationItem = ({
  verification,
  as,
}: {
  verification: VerificationResponse;
  as?: string;
}) => {
  return (
    <S.FeedItemWrapper
      as={as}
      to={`${ROUTE_PATH.VERIFICATION}/${verification.id}`}
      key={verification.id}
    >
      <S.FeedItemHeader $category={verification.category}>
        <UserImage size="XS" imageUrl={verification.author?.imageUrl} />
        <div>
          <span>{verification.author.name}</span>
          <div>
            {verification.verificationOption && (
              <p className="option">{verification.verificationOption}</p>
            )}
          </div>
        </div>
        <div className="info">
          <div className="category">
            {getVerificationTitle(verification.category)}
          </div>
          <p className="date">{formattedDate(verification.createdAt)}</p>
        </div>
      </S.FeedItemHeader>
      {verification.comment && (
        <p className="comment">{verification.comment}</p>
      )}
      {verification.imageUrl && (
        <img
          className="image"
          src={verification.imageUrl}
          alt={verification.createdAt}
        />
      )}
    </S.FeedItemWrapper>
  );
};

export default DetailVerificationItem;
