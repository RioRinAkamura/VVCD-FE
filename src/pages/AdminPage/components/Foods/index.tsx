import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Button, Table, Tooltip } from "antd";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { apiUrl } from "../../../../contexts/constants";

type Props = {};

const Foods = (props: Props) => {
  const [foods, setFoods] = useState([]);

  const getFoods = useCallback(async () => {
    const response = await axios.get(`${apiUrl}/foods`);
    if (response) {
      setFoods(response.data.foods);
    }
  }, []);

  useEffect(() => {
    getFoods();
  }, [getFoods]);

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      width: 70,
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
      title: "Pictures",
      dataIndex: "pictures",
      key: "pictures",
      width: 500,
      render: (text: any) =>
        text.map((item: string) => (
          <img
            src={item}
            alt={item}
            width={150}
            height={150}
            style={{ margin: 2 }}
          />
        )),
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <>
          <Tooltip title="Edit">
            <Button icon={<EditTwoTone twoToneColor="#d46b08" />} />
          </Tooltip>{" "}
          &nbsp;
          <Tooltip title="Delete">
            <Button icon={<DeleteTwoTone twoToneColor="red" />} />
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <>
      <ContentHeader>
        <h2 style={{ margin: 0 }}>Foods</h2>
        <Button type="primary">Add new</Button>
      </ContentHeader>
      <TableStyle bordered columns={columns} dataSource={foods} />
    </>
  );
};

export default Foods;

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
