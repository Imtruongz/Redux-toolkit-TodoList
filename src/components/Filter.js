import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";


import FilterSlice from "../components/features/FilterSlice";


const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setfilterStatus] = useState("All");
  const [prioriry, setPrioriry] = useState([]);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    dispatch(FilterSlice.actions.searchTodo(e.target.value));
  };

  const handleStatusChange = (e) => {
    setfilterStatus(e.target.value);
    dispatch(FilterSlice.actions.filterStatus(e.target.value));
  };

  const handlePriorityChange = (value) => {
    setPrioriry(value);
    dispatch(FilterSlice.actions.filterPriority(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Tìm kiếm
        </Typography.Paragraph>
        <Search value={searchText} onChange={handleSearchText} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Tìm kiếm theo trạng thái
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value="All">Tất cả</Radio>
          <Radio value="Completed">Đã hoàn thành</Radio>
          <Radio value="Incomplete">Chưa hoàn thành</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Tìm kiếm theo mức độ
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          value={prioriry}
          onChange={handlePriorityChange}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
      <Typography.Paragraph
        style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
      >
        Danh sách công việc
      </Typography.Paragraph>
    </Row>
  );
}
