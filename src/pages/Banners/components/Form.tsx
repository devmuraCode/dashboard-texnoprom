import React, { useState } from "react";
import * as Fields from "@/container/Fields";
import * as Grid from "@/components/Grid";
import Label from "@/components/Label";

const Form: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setFile(file);
  };

  return (
    <Grid.Row gutter={[24, 24]}>
      <Grid.Col xs={24} xl={16}>
        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={24}>
            <Label title={"field_title_en"} required>
              <Fields.Text name={`title_en`} validation={{ required: true }} />
            </Label>
          </Grid.Col>
          <Grid.Col xs={24}>
            <Label title={"field_title_ru"} required>
              <Fields.Text name={`title_ru`} validation={{ required: true }} />
            </Label>
          </Grid.Col>
          <Grid.Col xs={24}>
            <Label title={"field_photo"} required>
              <Fields.File
                name={`img`}
                onChange={handleFileChange}
                accept={"image/*"}
              />
            </Label>
          </Grid.Col>
        </Grid.Row>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Form;
