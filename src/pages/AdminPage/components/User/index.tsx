import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Button, Table, Tooltip } from "antd";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { apiUrl } from "../../../../contexts/constants";

type Props = {};

const Users = (props: Props) => {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const response = await axios.get(`${apiUrl}/users`);
    if (response) {
      setUsers(response.data.users);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      width: 70,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",

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
        <h2 style={{ margin: 0 }}>Users</h2>
        <Button type="primary">Add new</Button>
      </ContentHeader>
      <TableStyle bordered columns={columns} dataSource={users} />
    </>
  );
};

export default Users;

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
