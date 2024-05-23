import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import message from 'antd/lib/message';

import * as Forms from '@/modules/categories/forms';
import * as Hooks from '@/modules/categories/hooks';

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
          collection: item.collection,
        }}
        onSuccess={() => {
          navigate('/categories');
          message.success('successfully_updated');
        }}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitting && <Spinner full />}

            <PageHeader
              title={'title_categories_update'}
              breadcrumb={{
                routes: [
                  {
                    to: '/',
                    name: 'Home'
                  },
                  {
                    to: '/categories',
                    name: 'title_category',
                  },
                  {
                    name: 'title_categories_update',
                  },
                ],
              }}
              buttons={[
                <Button
                  key='cancel'
                  title={'action_cancel'}
                  variant='white'
                  container={<Link to='/categories' />}
                />,
                <Button
                  htmlType='submit'
                  key='save'
                  title={'action_save'}
                  variant='green'
                />,
              ]}
              onBack={() => navigate('/categories')}
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
