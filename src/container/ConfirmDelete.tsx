import React from 'react';

import * as Grid from '@/components/Grid';

import Button from '@/components/Button';
import Spinner from '@/components/Spinner';
import Typography from '@/components/Typography';

interface IProps {
  isLoading: boolean;
  onCancel: () => void;
  Confirm: () => void;
}

const ConfirmDelete: React.FC<IProps> = ({ isLoading, onCancel, Confirm }) => {

  return (
    <Spinner spinning={isLoading}>
      <Grid.Row gutter={[12, 20]}>
        <Grid.Col xs={24}>
          <Typography weight={600} size={16} align='center'>
            {'are_you_delete_this'}
          </Typography>
        </Grid.Col>

        <Grid.Col xs={12}>
          <Button
            title={'action_cancel'}
            variant='neutral'
            onClick={onCancel}
            size='small'
            block
          />
        </Grid.Col>

        <Grid.Col xs={12}>
          <Button title={'action_delete'} variant='red' onClick={Confirm} size='small' block />
        </Grid.Col>
      </Grid.Row>
    </Spinner>
  );
};

export default ConfirmDelete;
