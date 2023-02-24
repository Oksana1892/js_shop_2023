import { Input } from 'Components/Common/Input';
import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './AuthForm.module.scss'
import { useDispatch } from 'react-redux';
import { UserSliceActions } from 'Store';


export const AuthForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [erorrMessage, setErorrMessage] = useState('');

  const dispatch = useDispatch();

  const changeHandler = (fieldName: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => {
      const newData = { ...prev };
      newData[fieldName] = event.target.value;
      return newData;
    });
  };
  const submmitHandler = () => {
    if (formState.password.length < 5) {
      setErorrMessage('Пароль слишком короткий');
    } else {
      setErorrMessage('')
      dispatch(UserSliceActions.setUserLoading(true));
      
      setTimeout(
        () => dispatch(UserSliceActions.setUserData({ email: formState.email, token: '123' })),
        3000,
      );
      console.log(formState, 'отправленно на сервер');
    }
  };
  useEffect(() => {
    if (formState.password.length < 5 && formState.password !== '') {
      setErorrMessage('Пароль должен содержать более 5 знаков');
    } else {
      setErorrMessage('');
    }
  }, [formState.password]); 

  return (
    <div className={style.wrapper}>
      <h1>АВТОРИЗАЦИЯ</h1>
      <div className= {style.input_group}>
      <Input name={'Email'} value={formState.email} changeHandler={changeHandler('email')} />
      <Input name={'Password'} value={formState.password} changeHandler={changeHandler('password')} type = 'password'
/>

      </div>
      {erorrMessage !== '' && <div className={style.error}>{erorrMessage}</div>}
      <button type="button" onClick={submmitHandler}>
        ВОЙТИ
      </button>
    </div>
  );
};
