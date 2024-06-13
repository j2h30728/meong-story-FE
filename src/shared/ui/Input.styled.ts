import styled from 'styled-components';

import { DoubleCheck } from './Icons';

export const Container = styled.div`
  position: relative;
  .check {
    position: absolute;
    right: 0;
    top: 8px;
  }
`;
export const InputItem = styled.input`
  width: 273px;
  border-bottom: 1px solid black;
  padding: 4px 0;

  font-size: 20px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: left;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS['INACTIVE-BUTTON']};
  }
`;

export const ValidDoubleCheck = styled(DoubleCheck)<{ $isValid: boolean }>`
  color: ${({ theme, $isValid }) =>
    $isValid ? theme.COLORS['P-BUTTON1'] : theme.COLORS['INACTIVE-BUTTON']};
`;
