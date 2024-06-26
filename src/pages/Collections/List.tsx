import React, { lazy, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useList } from "@/modules/collection/hooks";

import TableContainer from "@/container/Table";
import ImageContainer from "@/container/Image";

import Table from "@/components/Table";
import Modal from "@/components/Modal";
import Spacer from "@/components/Spacer";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ConfirmDelete = lazy(() => import("./components/ConfirmDelete"));

const List: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const { items, isFetched } = useList();

  return (
    <>
      <div>
        <PageHeader
          title={"title_collections"}
          breadcrumb={{
            routes: [
              {
                to: "/",
              },
              {
                name: "title_collections",
              },
            ],
          }}
          buttons={[
            <Button
              key="create"
              size="medium"
              title="action_add"
              variant="green"
              container={<Link to="/collections/create" />}
            />,
          ]}
        />

        <Spacer size={24} />

        <TableContainer
          rowKey="id"
          columns={[
            {
              title: "№",
              width: "60px",
            },
            {
              key: "name",
              title: "column_name",
              dataIndex: ["title"],
            },
            {
              key: "photo",
              title: "column_photo",
              dataIndex: ["img"],
              render: (value) => <ImageContainer url={value} />,
            },
         
            {
              title: <Table.Content.Settings />,
              width: 45,
              fixed: "right",
              align: "center",
              onCell: () => ({
                onClick: (e) => e.stopPropagation(),
              }),
              render: (v) => (
                <Table.Content.More
                  items={[
                    {
                      title: "action_edit",
                      icon: <EditOutlined name="Edit" />,
                      variant: "blue",
                      onClick: () => navigate(`/collections/update/${v.id}`),
                    },
                    {
                      title: "action_delete",
                      icon: <DeleteOutlined name="Delete" />,
                      variant: "danger",
                      onClick: () => setSelected(v.id),
                    },
                  ]}
                />
              ),
            },
          ]}
          dataSource={items || []}
          loading={!isFetched}
          scroll={{ x: true }}
        />

        <Spacer size={24} />
      </div>
      {/* @ts-ignore */}
      <Modal open={!!selected} onCancel={() => setSelected("")} width={320}>
        <ConfirmDelete id={selected} onCancel={() => setSelected("")} />
      </Modal>
    </>
  );
};

export default List;
