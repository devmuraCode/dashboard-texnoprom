import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import message from 'antd/lib/message';

import * as Forms from '@/modules/auth/forms';
import * as Actions from '@/modules/auth/actions';

import * as Fields from '@/container/Fields';

import * as Grid from '@/components/Grid';

import Label from '@/components/Label';
import Button from '@/components/Button';

import cls from './Login.module.scss';

const Auth: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={cls.wrapper}>
      <div className={cls.content}>
        <Forms.Login
          onSuccess={token => {
            message.success('successfully_login');
            dispatch(Actions.Login.request({ token }));
            navigate('/');
          }}
          onError={() => {
            message.error('bad_credentials');
          }}
        >
          {({ isSubmitting }) => (
            <Grid.Row gutter={[24, 24]}>
              <Grid.Col xs={24}>
                <Label title='field_login' required>
                  <Fields.Text name='username' validation={{ required: true }} />
                </Label>
              </Grid.Col>

              <Grid.Col xs={24}>
                <Label title='field_password' required>
                  <Fields.Text name='password' type='password' validation={{ required: true }} />
                </Label>
              </Grid.Col>

              <Grid.Col xs={24}>
                <Button
                  title='action_submit'
                  disabled={isSubmitting}
                  htmlType='submit'
                  variant='blue'
                  size='large'
                  block
                />
              </Grid.Col>
            </Grid.Row>
          )}
        </Forms.Login>
      </div>
    </div>
  );
};

export default Auth;
