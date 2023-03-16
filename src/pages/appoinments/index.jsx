import { DeleteOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Input, Radio, Table, Tooltip } from "antd";

export default function () {

    const columns = [
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
            width: 150,
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'Doctor',
            dataIndex: 'doctor',
            key: 'doctor',
            width: 150,
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'Patient',
            dataIndex: 'patient',
            key: 'patient',
            width: 150,
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            ellipsis: {
                showTitle: false,
            },
            render: (address) => (
                <Tooltip placement="topLeft" title={address}>
                    {address}
                </Tooltip>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'phone',
            key: 'phone',
            render: (phone) => (<>
                <Tooltip placement="topRight" title={phone}>
                    <Button size="small" type="primary"><PhoneOutlined /></Button> &ensp;
                </Tooltip>
                <Button size="small" type="primary" danger><DeleteOutlined /></Button>
            </>),
        },
    ];
    const data = [
        {
            key: 1,
            department: 'John Brown',
            doctor: "Dr. Jhon",
            patient: "Mohd Kamleen",
            address: 'New York No. 1 Lake Park',
            phone: '987654321',
            description: 'My department is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
        {
            key: 2,
            department: 'Jim Green',
            doctor: "Dr. Jhon",
            patient: "Mohd Kamleen",
            address: 'London No. 1 Lake Park',
            phone: '987654321',
            description: 'My department is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        },
        {
            key: 3,
            department: 'Not Expandable',
            doctor: "Dr. Jhon",
            patient: "Mohd Kamleen",
            address: 'Jiangsu No. 1 Lake Park',
            phone: '987654321',
            description: 'This not expandable',
        },
        {
            key: 4,
            department: 'Joe Black',
            doctor: "Dr. Jhon",
            patient: "Mohd Kamleen",
            address: 'Sydney No. 1 Lake Park',
            phone: '987654321',
            description: 'My department is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
        },
    ];

    return (
        <>
            {/* header componants  */}
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                <Radio.Group
                    options={["Past", "Upcoming", "Cancelled"]}
                    optionType="button"
                    buttonStyle="solid"
                    defaultValue={"Past"}
                />
                <Input
                    style={{ maxWidth: "300px" }}
                    placeholder="Search by Name, Email, Phone or Address" />
            </div> <br />

            {/* body content of appoinment  */}
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