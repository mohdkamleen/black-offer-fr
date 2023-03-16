import { DeleteOutlined, EditOutlined, FileAddOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, Radio, Table, Tooltip } from "antd";

export default function () {
    const dataSource = [
        {
            key: '1',
            auther: 'Mike',
            title: "Books",
            body: '10 Downing Street',
        },
        {
            key: '2',
            auther: 'John',
            title: "Demo",
            body: '10 Downing Street',
        },
        {
            key: '2',
            auther: 'John deo ',
            title: "Demo",
            body: '10 Downing Street',
        },
        {
            key: '2',
            auther: 'John',
            title: "Demo",
            body: '10 Downing Street lorem poem demo and alal sadf asdfasd fasdf sdfas ',
        },
        {
            key: '2',
            auther: 'John',
            title: "Demo",
            body: '10 Downing Street',
        }
    ];

    const columns = [
        {
            title: 'Auther',
            dataIndex: 'auther',
            key: 'auther',
            width: 150,
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
        },
        {
            title: 'Body',
            dataIndex: 'body',
            key: 'body',
            ellipsis: {
                showTitle: false,
            },
            render: (body) => (
                <Tooltip placement="topLeft" title={body}>
                    {body}
                </Tooltip>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <>
                    <Button size="small"> <EditOutlined /> </Button>&ensp;
                    <Button size="small" type="primary" danger><DeleteOutlined /></Button>
                </>
            )
        },
    ];

    return (
        <>
            {/* header parts of blogs  */}
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                <Radio.Group
                    options={["All", "My Blog"]}
                    optionType="button"
                    buttonStyle="solid"
                    defaultValue={"All"}
                />
                <Button type="primary"><PlusOutlined /> Add New</Button>
            </div> <br />

            {/* body content of blogs  */}

            <Table dataSource={dataSource} columns={columns} />;
        </>
    )
}