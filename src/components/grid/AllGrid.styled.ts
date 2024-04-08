import styled from 'styled-components';

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 8px;
  height: 100vh;
  overflow-y: scroll;
  padding: 0 0 10px 0;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;

export const ClickedImage = styled.img`
  width: 100%;
  cursor: pointer;
`;
