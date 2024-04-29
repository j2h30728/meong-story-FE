import { useNavigate } from 'react-router-dom';

import { GridType } from '../../../types/verification';
import { PropsWithChildren } from 'react';

import * as S from './GridLayout.styled';
import { LeftArrowIcon } from '../../../components/Icons';

const GridLayout = ({
  type = 'all',
  children,
}: PropsWithChildren<{ type?: GridType }>) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.TopBar $hasGridType={!!type}>
        {type ? (
          <S.SelectGridType $gridType={type}>
            <button id="all" onClick={() => navigate(`/grid/all`)}>
              모두보기
            </button>
            <button id="uploader" onClick={() => navigate(`/grid/uploader`)}>
              업로드별로 보기
            </button>
          </S.SelectGridType>
        ) : (
          <S.BackButton
            type="button"
            onClick={() => navigate('/grid/uploader')}
          >
            <LeftArrowIcon />
            <div>뒤로가기</div>
          </S.BackButton>
        )}
      </S.TopBar>
      <S.Layout>{children}</S.Layout>
    </S.Container>
  );
};

export default GridLayout;
