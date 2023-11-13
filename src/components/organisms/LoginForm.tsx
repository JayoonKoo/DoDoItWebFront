import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputField from './InputField';
import Button from '../atom/Button';
import LinkButton from '../atom/LinkButton';
import Bold from '../atom/Bold';
import useLogin from '../../hooks/auth/useLogin';
import AuthException, { AuthExceptionType } from '../../api/auth/AuthException';
import useAlert from '../../hooks/ui/useAlert';
import { useNavigate } from 'react-router-dom';

type LoginFormFieldType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm<LoginFormFieldType>();
  const { login, isError, error, isSuccess } = useLogin();
  const { openAlert } = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    // login error
    if (isError && error instanceof AuthException) {
      console.error(error.type);
      switch (error.type) {
        case AuthExceptionType.PasswordOrIdNotMatch:
          openAlert({
            title: '오류',
            text: '회원 정보가 일치하지 않습니다.',
            errText: error.message,
            type: 'info',
          });
      }
    }
  }, [openAlert, isError, error]);

  useEffect(() => {
    // 로그인 성공시
    if (isSuccess) {
      navigate('/main');
    }
  }, [isSuccess, navigate]);

  const { errors } = formState;

  const onValid = async ({ email, password }: LoginFormFieldType) => {
    await login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit(onValid)} className="grid grid-cols-1 gap-4">
      <InputField
        id="email"
        type="email"
        label="이메일"
        {...register('email', {
          required: '이메일을 입력해주세요.',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: '이메일 형식이 아닙니다.',
          },
        })}
        errorMessage={errors?.email?.message}
      />

      <InputField
        id="password"
        type="password"
        label="비밀번호"
        {...register('password', {
          required: '비밀번호를 입력해주세요.',
          minLength: {
            value: 8,
            message: '비밀번호가 너무 짧습니다.(8자리 이상)',
          },
        })}
        errorMessage={errors?.password?.message}
      />

      <div className="mt-2">
        <Button text="로그인" />
        <LinkButton to="../signup">
          아직 회원이 아니신가요? <Bold>회원가입</Bold> 으로 가기
        </LinkButton>
      </div>
    </form>
  );
};

export default LoginForm;
