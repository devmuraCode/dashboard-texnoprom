import React from "react";
import * as Fields from "@/container/Fields";
import * as Grid from "@/components/Grid";
import Label from "@/components/Label";
import { useList } from "@/modules/collection/hooks";

const Form: React.FC = () => {
  const { items } = useList();

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
            <Label title="field_description" required>
              <Fields.Text name="description" validation={{ required: true }} />
            </Label>
          </Grid.Col>
          <Grid.Col xs={24}>
            <Label title="field_collection" required>
              <Fields.Select
                name="collection"
                validation={{ required: true }}
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
