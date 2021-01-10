import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
const originData = [];

for (let i = 0; i < 40; i++) {
  originData.push({
    key: i.toString(),
    ProductName: `Product ${i}`,
    ProductQuantity: 32*i,
    SKU: `P_${i}_SKU`,
    ProductType:`Simple`,
  });
}


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;
const handleDelete = (key) => {
 const newData= originData.filter((item) => item.key !== key);
 setData(newData);
  };

  const edit = (record) => {
    form.setFieldsValue({
      ProductName: '',
      ProductQuantity: '',
      SKU: '',
      Simple:'',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
      console.log('new', newData);
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'ProductName',
      dataIndex: 'ProductName',
      width: '15%',
      editable: true,
    },
    {
      title: 'ProductQuantity',
      dataIndex: 'ProductQuantity',
      width: '15%',
      editable: true,
    },
    {
      title: 'SKU',
      dataIndex: 'SKU',
      width: '15%',
      editable: true,
    },
    {
      title: 'ProductType',
      dataIndex: 'ProductType',
      width: '15%',
      editable: true,
    },
    
    
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <>
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
          <Popconfirm title="Sure to delete?" onConfirm={() =>handleDelete(record.key)}>
          <a> / Delete</a>
        </Popconfirm>
        </>
        );
      },
    },
    
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        columns={columns}
         responsive
         scroll={{ x: 'fit-content' }}
      
         style={{width:'auto'}}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default EditableTable;