import { useField } from "formik";
import { FC, ChangeEvent } from "react";

interface IProps {
  onChange: (value: File | null) => void;
  name: string;
  accept?: string;
}

const FileInput: FC<IProps> = ({ onChange, name, accept = "image/*" }) => {
  const [field, , helpers] = useField(name);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    const file = files ? files[0] : null;
    helpers.setValue(file);
    onChange && onChange(file);
  };

  return (
    <div>
      <input
        type="file"
        accept={accept}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default FileInput;
