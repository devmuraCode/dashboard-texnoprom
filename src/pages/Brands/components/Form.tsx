import React, { useState } from "react";
import * as Fields from "@/container/Fields";
import * as Grid from "@/components/Grid";
import Label from "@/components/Label";
import { useList } from "@/modules/categories/hooks";

const Form: React.FC = () => {
  const { items } = useList();

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setFile(file);
  };


  return (
    <Grid.Row gutter={[24, 24]}>
      <Grid.Col xs={24} xl={16}>
        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={24}>
            <Label title="field_title" required>
              <Fields.Text name="title" validation={{ required: true }} />
            </Label>
          </Grid.Col>
          <Grid.Col xs={24}>
          <Label title={"field_photo"} required>
              <Fields.File
                name={`logo`}
                onChange={handleFileChange}
                accept={"image/*"}
              />
            </Label>
          </Grid.Col>
          <Grid.Col xs={24}>
            <Label title="field_category" required>
              <Fields.Select
                name="category"
                validation={{ required: true }}
                // @ts-ignore
                options={items.map(item => ({ label: item.title, value: item.id }))}
              />
            </Label>
          </Grid.Col>
        </Grid.Row>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Form;
