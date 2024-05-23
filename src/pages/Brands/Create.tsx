import React from "react";
import { Link, useNavigate } from "react-router-dom";
import message from "antd/lib/message";

import * as Forms from "@/modules/brand/forms";

import Button from "@/components/Button";
import Spinner from "@/components/Spinner";

import Form from "./components/Form";
import PageHeader from "@/components/PageHeader";

const Create: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Forms.Create
        onSuccess={() => {
          navigate("/brands");
          message.success("successfully_created");
        }}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitting && <Spinner full />}

            <PageHeader
              title="title_brands_create"
              breadcrumb={{
                routes: [
                  {
                    to: "/",
                  },
                  {
                    to: "/brands",
                    name: "title_brands",
                  },
                  {
                    name: "title_brands_create",
                  },
                ],
              }}
              buttons={[
                <Button
                  key="cancel"
                  title="action_cancel"
                  variant="white"
                  container={<Link to="/brands" />}
                />,
                <Button
                  htmlType="submit"
                  key="save"
                  title="action_save"
                  variant="green"
                />,
              ]}
              onBack={() => navigate("/brands")}
            />
            <Form />
          </>
        )}
      </Forms.Create>
    </>
  );
};

export default Create;
