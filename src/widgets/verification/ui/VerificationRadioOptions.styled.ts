import styled from 'styled-components';

import { VerificationWithCategory } from './VerificationRadioOptions';

export const VerificationOptionContainer = styled.label<{
  $name: VerificationWithCategory;
}>`
  display: flex;
  width: ${({ $name }) => ($name === 'treats' ? 'auto' : '100%')};
  margin: ${({ $name }) => ($name === 'treats' ? '0 -60px' : '')};
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.FONT.XS};

  input {
    display: none;
  }
  label {
    height: 35px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.COLORS['FONT-COLOR-IA']};
    color: ${({ theme }) => theme.COLORS['FONT-COLOR-IA']};
    font-size: ${({ theme }) => theme.FONT.XS};
  }
  label.selected {
    background-color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
    border-color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
    color: ${({ theme }) => theme.COLORS['FONT-COLOR-A']};
  }
`;
