import React, { useState } from "react";

import * as Fields from "@/container/Fields";

import * as Grid from "@/components/Grid";

import Label from "@/components/Label";

const Form: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState("uz");
  return (
    <Grid.Row gutter={[24, 24]}>
      <Grid.Col xs={24} xl={16}>
        <Grid.Col xs={24} xl={16}>
          <Grid.Row gutter={[24, 24]}>
            <Grid.Col xs={24}>
              <Label title={"field_title"} required>
                <Fields.Text
                  name={`title[${activeLanguage}]`}
                  validation={{ required: true }}
                />
              </Label>
            </Grid.Col>
            <Grid.Col xs={24}>
              <Label title={"field_description"} required>
                <Fields.Text
                  name={`description[${activeLanguage}]`}
                  validation={{ required: true }}
                />
              </Label>
            </Grid.Col>
          </Grid.Row>
        </Grid.Col>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Form;
