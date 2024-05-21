import React from 'react';

import * as Fields from '@/container/Fields';

import * as Grid from '@/components/Grid';

import Label from '@/components/Label';

const Form: React.FC = () => {

  return (
    <Grid.Row gutter={[24, 24]}>
      <Grid.Col xs={24}>
        <Label title='field_username' required>
          <Fields.Text name='username' validation={{ required: true }} />
        </Label>
      </Grid.Col>

      <Grid.Col xs={24}>
        <Label title='field_password' required>
          <Fields.Text name='password' validation={{ required: true }} />
        </Label>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Form;
