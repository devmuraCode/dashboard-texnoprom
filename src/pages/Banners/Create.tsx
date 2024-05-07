import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import message from 'antd/lib/message';

import * as Forms from '@/modules/banner/forms'

import Button from '@/components/Button';
import Spinner from '@/components/Spinner';

import Form from './components/Form';
import PageHeader from '@/components/PageHeader';

const Create: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Forms.Create
        onSuccess={() => {
          navigate('/banners');
          message.success('successfully_created');
        }}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitting && <Spinner full />}

            <PageHeader
              title='title_banner_create'
              breadcrumb={{
                routes: [
                  {
                    to: '/',
                  },
                  {
                    to: '/banners',
                    name: 'title_banners',
                  },
                  {
                    name: 'title_banner_create',
                  },
                ],
              }}
              buttons={[
                <Button
                  key='cancel'
                  title='action_cancel'
                  variant='white'
                  container={<Link to='/banners' />}
                />,
                <Button
                  htmlType='submit'
                  key='save'
                  title='action_save'
                  variant='green'
                />,
              ]}
              onBack={() => navigate('/banners')}
            />
            <Form />
          </>
        )}
      </Forms.Create>
    </>
  );
};

export default Create;
