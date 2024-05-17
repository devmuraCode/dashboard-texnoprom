import React from 'react';

import cls from './Uploader.module.scss';

interface IProps {
  type: 'image' | 'video' | 'file';
  percent: number;
  total: string;
  loaded: string;
  onCancel: () => void;
}

const Progress: React.FC<IProps> = ({ type, percent, total, loaded, onCancel }) => {

  const title = {
    image: 'photo_loading_in_progress',
    video: 'video_loading_in_progress',
    file: 'file_loading_in_progress',
  };

  return (
    <div className={cls.progress}>
      <div className={cls.progressHeader}>
        <div className={cls.progressTitle}>{title[type]}</div>
        <div className={cls.progressPercent}>{percent}%</div>
        <div className={cls.progressCancel} onClick={() => onCancel()}>
          DismissCircle
        </div>
      </div>
      <div className={cls.progressBar}>
        <div className={cls.progressBarInner} style={{ width: `${percent}%` }} />
      </div>
      <div className={cls.progressInfo}>
        Yuklangan: {loaded} kb dan {total} kb
      </div>
    </div>
  );
};

export default Progress;
