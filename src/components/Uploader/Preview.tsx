import React from "react";
import cx from "classnames";

import Details from "./Details";

import cls from "./Uploader.module.scss";
import {
  CloudDownloadOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";

interface IProps {
  name: string;
  type: "image" | "video" | "file";
  details: {
    resolution?: string;
    extension?: string;
    size?: string;
  };
  source: string;
  extension: string;
  size: string;
  onView: () => void;
  onRemove: () => void;
}

const Preview: React.FC<IProps> = ({
  name,
  type,
  source,
  extension,
  size,
  onView,
  onRemove,
}) => (
  <>
    <div className={cls.content}>
      <div className={cls.name}>{name}</div>
      <Details {...{ extension, size }} />
    </div>
    <div className={cls.preview}>
      <div className={cls.previewImage}>
        {type === ("image" || "video" || "file") ? (
          <img src={source} alt="Image preview" />
        ) : (
          <div className={cx(cls["file-type"], cls[`file-type--${type}`])} />
        )}
      </div>
      <div className={cls.previewButtonList}>
        {type === "image" ? (
          <div className={cls.previewButtonItem} onClick={() => onView()}>
            <EyeOutlined size={24} />
          </div>
        ) : null}
        <a className={cls.previewButtonItem} href={source}>
          <CloudDownloadOutlined size={24} />
        </a>
        <div className={cls.previewButtonItem} onClick={() => onRemove()}>
          <DeleteOutlined size={24} />
        </div>
      </div>
    </div>
  </>
);

export default Preview;
