import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

import useGridVerificationsForUploader from '../../../entities/verification/api/useGridVerificationsForUploader';
import { RightArrowIcon } from '../../../shared/ui/Icons';
import Spinner from '../../../shared/ui/Spinner';

import * as S from './GridVerificationsByUploader.styled';

const UploaderTypeGridVerifications = () => {
  const navigate = useNavigate();
  const gridByUploader = useGridVerificationsForUploader();

  return gridByUploader.map((verification) => (
    <S.UploaderSection key={verification.author.id}>
      <S.Uploader onClick={() => navigate(verification.author.id)}>
        <span>{verification.author.name}</span>
        <RightArrowIcon />
      </S.Uploader>
      <S.GridWrapper>
        {verification.items.map((item) => (
          <img key={item.id} src={item.imageUrl} />
        ))}
      </S.GridWrapper>
    </S.UploaderSection>
  ));
};

const GridVerificationsByUploader = () => {
  return (
    <S.GridContainer>
      <Suspense fallback={<Spinner size={100} />}>
        <UploaderTypeGridVerifications />
      </Suspense>
    </S.GridContainer>
  );
};
export default GridVerificationsByUploader;
