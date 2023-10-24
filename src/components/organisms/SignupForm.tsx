import React, { forwardRef } from 'react';
import InputField from './InputField';
import Button from '../atom/Button';
import LinkButton from '../atom/LinkButton';
import Bold from '../atom/Bold';
import { useForm } from 'react-hook-form';

type SignupFormFieldType = {
  email: string;
  password: string;
  confirmPassword: string;
  nickname?: string;
  formError?: string;
};

const SignupForm = () => {
  const { register, handleSubmit, formState, setError } = useForm<SignupFormFieldType>();

  const { errors } = formState;

  const onValid = (data: SignupFormFieldType) => {
    if (data.password !== data.confirmPassword) {
      setError('password', { message: '비밀번호와 비밀번호 확인이 다릅니다.' }, { shouldFocus: true });
    }
    setError('formError', { message: 'Server Error' });
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onValid)} className="grid grid-cols-1 gap-4">
      <InputField
        id="email"
        type="email"
        label="이메일"
        {...register('email', {
          required: '이메일을 입력해주세요.',
          pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: '이메일 형식이 아닙니다.' },
        })}
        errorMessage={errors?.email?.message}
      />
      <InputField
        id="password"
        type="password"
        label="비밀번호"
        {...register('password', {
          required: '비밀번호를 입력해주세요.',
          minLength: { value: 8, message: '비밀번호가 너무 짧습니다.(8자리 이상)' },
        })}
        errorMessage={errors?.password?.message}
      />
      <InputField
        id="confirmPassword"
        type="password"
        label="비밀번호 확인"
        {...register('confirmPassword', {
          required: '비밀번호 확인을 입력해주세요.',
          minLength: { value: 8, message: '비밀번호 확인이 너무 짧습니다.(8자리 이상)' },
        })}
        errorMessage={errors?.confirmPassword?.message}
      />
      <InputField
        id="nickname"
        type="text"
        label="닉네임"
        {...register('nickname')}
        errorMessage={errors?.nickname?.message}
      />

      <div className="mt-2">
        <Button text="회원가입" />
        <LinkButton to="../login">
          아이디가 있으신가요? <Bold>로그인</Bold> 으로 가기
        </LinkButton>
      </div>
    </form>
  );
};

export default forwardRef(SignupForm);
