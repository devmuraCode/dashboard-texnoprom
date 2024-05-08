
import message from 'antd/lib/message';

import { useDelete } from '@/modules/banner/hooks';

import ConfirmDeleteBase from '@/container/ConfirmDelete';

interface IProps {
  id: string;
  onCancel: () => void;
}

const ConfirmDelete: React.FC<IProps> = ({ id, onCancel }) => {
  const { mutate, isLoading } = useDelete();

  const Confirm = () => {
    mutate(
      { id },
      {
        onSuccess: () => {
          onCancel();
          message.success('successfully_deleted');
        },
      },
    );
  };

  return <ConfirmDeleteBase {...{ isLoading, Confirm, onCancel }} />;
};

export default ConfirmDelete;
