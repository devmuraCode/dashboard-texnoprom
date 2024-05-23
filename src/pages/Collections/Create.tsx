import React from "react";
import { Link, useNavigate } from "react-router-dom";
import message from "antd/lib/message";

import * as Forms from "@/modules/collection/forms";

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
          navigate("/collections");
          message.success("successfully_created");
        }}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitting && <Spinner full />}

            <PageHeader
              title="title_collections_create"
              breadcrumb={{
                routes: [
                  {
                    to: "/",
                  },
                  {
                    to: "/collections",
                    name: "title_collections",
                  },
                  {
                    name: "title_collections_create",
                  },
                ],
              }}
              buttons={[
                <Button
                  key="cancel"
                  title="action_cancel"
                  variant="white"
                  container={<Link to="/collections" />}
                />,
                <Button
                  htmlType="submit"
                  key="save"
                  title="action_save"
                  variant="green"
                />,
              ]}
              onBack={() => navigate("/collections")}
            />
            <Form />
          </>
        )}
      </Forms.Create>
    </>
  );
};

export default Create;
