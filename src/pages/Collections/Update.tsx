import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import message from 'antd/lib/message';

import * as Forms from '@/modules/collection/forms';
import * as Hooks from '@/modules/collection/hooks';

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
          title: item.title,
          description: item.description,
          img: item.img,
        }}
        onSuccess={() => {
          navigate('/collections');
          message.success('successfully_updated');
        }}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitting && <Spinner full />}

            <PageHeader
              title={'title_collections_update'}
              breadcrumb={{
                routes: [
                  {
                    to: '/',
                    name: 'Home'
                  },
                  {
                    to: '/banners',
                    name: 'title_collections',
                  },
                  {
                    name: 'title_collections_update',
                  },
                ],
              }}
              buttons={[
                <Button
                  key='cancel'
                  title={'action_cancel'}
                  variant='white'
                  container={<Link to='/collections' />}
                />,
                <Button
                  htmlType='submit'
                  key='save'
                  title={'action_save'}
                  variant='green'
                />,
              ]}
              onBack={() => navigate('/collections')}
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
