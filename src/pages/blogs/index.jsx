import { DeleteOutlined, EditOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Input, Radio, Table, Tooltip } from "antd";

export default function () {

    const columns = [
        {
            title: 'Auther',
            dataIndex: 'auther',
            key: 'auther',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'CreatedAt',
            dataIndex: 'createdAt',
            key: 'createdAt',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            ellipsis: {
                showTitle: false,
            },
            render: (title) => (
                <Tooltip placement="topLeft" title={title}>
                    {title}
                </Tooltip>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'edit',
            key: 'edit',
            render: (edit) => (<>
                <Button size="small" type="primary"><EditOutlined /></Button> &ensp;
                <Button size="small" type="primary" danger><DeleteOutlined /></Button>
            </>),
        },
    ];
    const data = [
        {
            key: 1,
            auther: 'John Brown',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'My auther is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
        {
            key: 2,
            auther: 'Jim Green',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'My auther is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        },
        {
            key: 3,
            auther: 'Dr dom roy',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        },
        {
            key: 4,
            auther: 'Joe Black',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'My auther is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
        },
        {
            key: 5,
            auther: 'Dom Dike',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        },
        {
            key: 5,
            auther: 'Dom Dike',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        },
        {
            key: 5,
            auther: 'Dom Dike',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        },
        {
            key: 5,
            auther: 'Dom Dike',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        },
        {
            key: 5,
            auther: 'Dom Dike',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        },
        {
            key: 5,
            auther: 'Dom Dike',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        }, 
        {
            key: 5,
            auther: 'Dom Dike',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        },
        {
            key: 5,
            auther: 'Dom Dike',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        },
        {
            key: 5,
            auther: 'Dom Dike',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        },
        {
            key: 5,
            auther: 'Dom Dike',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        },
        {
            key: 5,
            auther: 'Dom Dike',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        },
        {
            key: 5,
            auther: 'Dom Dike',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        },
        {
            key: 5,
            auther: 'Dom Dike',
            createdAt: "03 Jan 2023",
            title:"This is title of blogs", 
            description: 'This not expandable',
        },
    ];

    return (
        <>
            {/* header componants  */}
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                <Radio.Group
                    options={["All", "Active", "Disabled"]}
                    optionType="button"
                    buttonStyle="solid"
                    defaultValue={"All"}
                />
                <Button type="primary">Add New</Button>
            </div> <br />

            {/* title content of appoinment  */}
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => (
                        <p
                            style={{
                                margin: 0,
                            }}
                        >
                            {record.description}
                        </p>
                    ),
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }}
                dataSource={data}
            />

        </>
    )
}