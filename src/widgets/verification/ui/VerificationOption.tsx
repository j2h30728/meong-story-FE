import {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

import {
  BATH_OPTION,
  MEAL_OPTION,
  TREATS_OPTION,
  VERIFICATION,
} from '../../../shared/constants/verification';
import VerificationRadioOptions from './VerificationRadioOptions';

import * as S from './VerificationOption.styled';

const VerificationOption = ({
  category,
  register,
  setValue,
  watch,
}: {
  category: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}) => {
  switch (category) {
    case VERIFICATION.WALK:
      return (
        <S.WalkOptionContainer
          $isTyping={watch('hour') || watch('minutes')}
          id="hour"
          htmlFor="hour"
        >
          <span>아이는 얼마나 산책했나요?</span>
          <input id="hour" type="number" {...register('hour')} />
          <span>시</span>
          <input id="minutes" type="number" {...register('minutes')} />
          <span>분</span>
        </S.WalkOptionContainer>
      );
    case VERIFICATION.MEAL:
      return (
        <VerificationRadioOptions
          options={Object.values(MEAL_OPTION)}
          register={register}
          watch={watch}
          setValue={setValue}
        />
      );
    case VERIFICATION.TREATS:
      return (
        <VerificationRadioOptions
          options={Object.values(TREATS_OPTION)}
          register={register}
          watch={watch}
          setValue={setValue}
        />
      );
    case VERIFICATION.BATH:
      return (
        <VerificationRadioOptions
          options={Object.values(BATH_OPTION)}
          register={register}
          watch={watch}
          setValue={setValue}
        />
      );
  }
  return <S.None></S.None>;
};

export default VerificationOption;
