import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import message from 'antd/lib/message';

import * as Forms from '@/modules/banner/forms';
import * as Hooks from '@/modules/banner/hooks';

import Button from '@/components/Button';
import Spinner from '@/components/Spinner';
import PageHeader from '@/components/PageHeader';

import Form from './components/Form';
import Spacer from '@/components/Spacer';

const Update: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { item } = Hooks.useSingle({ id });

  return (
    <>
      <Forms.Update
        id={id}
        values={{
          title_ru: item.title_ru,
          title_en: item.title_en,
          img: item.img,
        }}
        onSuccess={() => {
          navigate('/banners');
          message.success('successfully_updated');
        }}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitting && <Spinner full />}

            <PageHeader
              title={'title_banner_update'}
              breadcrumb={{
                routes: [
                  {
                    to: '/',
                    name: 'Home'
                  },
                  {
                    to: '/banners',
                    name: 'title_banners',
                  },
                  {
                    name: 'title_banner_update',
                  },
                ],
              }}
              buttons={[
                <Button
                  key='cancel'
                  title={'action_cancel'}
                  variant='white'
                  container={<Link to='/banners' />}
                />,
                <Button
                  htmlType='submit'
                  key='save'
                  title={'action_save'}
                  variant='green'
                />,
              ]}
              onBack={() => navigate('/banners')}
            />

            <Spacer size={24} />

            <Form />
          </>
        )}
      </Forms.Update>
    </>
  );
};

export default Update;
