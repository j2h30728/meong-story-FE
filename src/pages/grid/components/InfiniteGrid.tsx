import Spinner from '../../../components/Spinner';
import useControlImageModal from '../../../hooks/useControlImageModal';
import { VerificationForGridResponse } from '../../../types/verification';
import ImageModal from './ImageModal';

import * as S from './InfiniteGrid.styled';

const InfiniteGrid = ({
  verificationsForGrid,
  isFetchingNextPage,
  targetItemRef,
}: {
  verificationsForGrid: VerificationForGridResponse[];
  isFetchingNextPage: boolean;
  targetItemRef: React.RefObject<HTMLDivElement>;
}) => {
  const { clickedImage, openImageModal, closeImageModal } =
    useControlImageModal();

  return (
    <S.GridWrapper>
      {verificationsForGrid.map((image) => (
        <S.VerificationImage
          onClick={() => openImageModal({ imageUrl: image.imageUrl })}
          key={image.id}
          src={image.imageUrl}
        />
      ))}
      {isFetchingNextPage && <Spinner size={30} />}
      <div ref={targetItemRef}></div>
      {clickedImage.isClicked && (
        <ImageModal onClose={closeImageModal}>
          <S.ClickedImage src={clickedImage.imageUrl} />
        </ImageModal>
      )}
    </S.GridWrapper>
  );
};
export default InfiniteGrid;
