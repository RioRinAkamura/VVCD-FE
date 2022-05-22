import React, { useCallback, useEffect, useState } from "react";
import { Table, Tag, Space, Button } from "antd";
import styled from "styled-components";
import { apiUrl } from "../../../../contexts/constants";
import axios from "axios";

type Props = {};

const Places = (props: Props) => {
  const [places, setPlaces] = useState([]);

  const getPlaces = useCallback(async () => {
    const response = await axios.get(`${apiUrl}/places`);
    if (response) {
      setPlaces(response.data.places);
    }
  }, []);

  useEffect(() => {
    getPlaces();
  }, [getPlaces]);

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 200,

      render: (text: string) => <span>{text}</span>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 200,
    },
    {
      title: "Distance",
      dataIndex: "distance",
      key: "distance",
      width: 200,
    },
    {
      title: "Pictures",
      dataIndex: "pictures",
      key: "pictures",
      width: 300,
      render: (text: any) => text.map((item: string) => <div>{item}</div>),
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
      render: (text: string) => <Tag>{text}</Tag>,
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <ContentHeader>
        <h2 style={{ margin: 0 }}>Places</h2>
        <Button type="primary">Add new</Button>
      </ContentHeader>
      <TableStyle columns={columns} dataSource={places} />
    </>
  );
};

export default Places;

const TableStyle = styled(Table)`
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  padding: 12px;
`;

const ContentHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 0px 24px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
`;
