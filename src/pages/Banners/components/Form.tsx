import React, { useState } from 'react';

import * as Fields from '@/container/Fields'

import * as Grid from '@/components/Grid';

import Label from '@/components/Label';

const Form: React.FC = () => {
  return (
    <Grid.Row gutter={[24, 24]}>
      <Grid.Col xs={24} xl={16}>
        <Grid.Col xs={24} xl={16}>
          <Grid.Row gutter={[24, 24]}>
            

            <Grid.Col xs={24}>
              <Label title='field_title' required>
                <Fields.Text name="title" validation={{ required: true }} />
              </Label>
            </Grid.Col>

            <Grid.Col xs={24}>
              <Label title='field_description' required>
                <Fields.Text
                  name="description"
                  validation={{ required: true }}
                />
              </Label>
            </Grid.Col>
          </Grid.Row>
        </Grid.Col>

        {/* <Label title='field_photo' required>
          <Fields.Uploader
            name='photoId'
            type='image'
            accept={['image/*']}
            maxFileSize={10240}
            details={{ resolution: '512 x 512', extension: 'svg, png, jpg', size: '10 мб' }}
            validation={{ required: true }}
          />
        </Label> */}
      </Grid.Col>
    </Grid.Row>
  );
};

export default Form;
