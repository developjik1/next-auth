import React from 'react';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import styled from '@emotion/styled';
import { ComonC } from 'common/style';

const SignUp = () => {
  const { register, watch, handleSubmit } = useForm({ mode: 'onChange' });

  const onSubmit = async data => {
    await axios
      .post(`${process.env.REACT_APP_BACKEND}/api/signup`, data)
      .then(res => {
        Router.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onError = error => {
    console.log(error);
  };

  return (
    <SUC>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Input
          type="text"
          placeholder="ID"
          {...register('id', {
            required: true,
            minLength: {
              value: 4,
              message: 'ID must be longer than 4 characters',
            },
          })}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: true,
            minLength: {
              value: 6,
              message: 'password must be longer than 6 characters',
            },
          })}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          {...register('confirmPassword', {
            required: true,
            validate: value => value === watch('password'),
          })}
        />
        <Input
          type="email"
          placeholder="Email"
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        <Input
          type="text"
          placeholder="Phone"
          {...register('phone', {
            required: true,
            pattern: /^\d{3}-\d{3,4}-\d{4}$/,
          })}
        />
        <Input type="submit" value="Register" />
      </Form>
    </SUC>
  );
};

const SUC = styled(ComonC)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 240px;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 12px;

  & + & {
    margin-top: 16px;
  }
`;

export default SignUp;
