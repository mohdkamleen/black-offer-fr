import { DeleteOutlined, EditOutlined, FilterOutlined, LinkOutlined } from '@ant-design/icons';
import { Table, Button, Select, Popconfirm, Drawer, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export default function () {
    var { loading, data } = useSelector(state => state.data)
    const [filterDrawer, setFilterDrawer] = useState(false)
    const [filter, setFilter] = useState()

    const columns = [
        {
            title: 'Topic',
            dataIndex: 'topic',
        },
        {
            title: 'Intensity',
            dataIndex: 'intensity',
            sorter: {
                compare: (a, b) => a.intensity - b.intensity,
                multiple: 2,
            },
        },
        {
            title: 'likelihood',
            dataIndex: 'likelihood',
            sorter: {
                compare: (a, b) => a.likelihood - b.likelihood,
                multiple: 1,
            },
        },
        {
            title: 'Relevance',
            dataIndex: 'relevance',
            sorter: {
                compare: (a, b) => a.relevance - b.relevance,
                multiple: 1,
            },
        },
        {
            title: 'Region',
            dataIndex: 'region',
            ellipsis: {
                showTitle: true,
            }
        },
        {
            title: 'Country',
            dataIndex: 'country',
            ellipsis: {
                showTitle: true,
            },
        },
        {
            title: 'Start Year',
            dataIndex: `start_year`,
            sorter: {
                compare: (a, b) => a.start_year - b.start_year,
                multiple: 1,
            },
        },
        {
            title: 'End Year',
            dataIndex: `end_year`,
            sorter: {
                compare: (a, b) => a.end_year - b.end_year,
                multiple: 1,
            },
        },
        {
            title: 'operation',
            dataIndex: "url",
            render: (url) => (<>
                <Button.Group>
                    <Tooltip title={url}>
                        <Button href={url} size="small" type="primary"><LinkOutlined /></Button>
                    </Tooltip>
                    <Button size="small"><EditOutlined /></Button>
                    <Popconfirm
                        title="Title"
                        description="Open Popconfirm with Promise"
                        onConfirm={() => { }} >
                        <Button size="small" type="primary" danger><DeleteOutlined /></Button>
                    </Popconfirm>
                </Button.Group>
            </>),
        },
    ];

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                <big> {data?.length || 0} Data </big>
                <div>
                    <Button> Add New </Button> &ensp;
                    <Button type='primary' onClick={() => setFilterDrawer(true)}><FilterOutlined /></Button>
                </div>
            </div> <br />

            <Table
                loading={loading}
                dataSource={filter ? data.filter(e =>
                    e.start_year === filter?.start_year
                    || e.end_year === filter?.end_year
                    || e.topic === filter?.topic
                    || e.sector === filter?.sector
                    || e.region === filter?.region
                    || e.pestle === filter?.pestle
                    || e.insight === filter?.insight
                    || e.country === filter?.country
                ) : data}
                columns={columns}
            />

            {/* filter Drawer  */}
            <Drawer closeIcon title="Filter Data" placement="right" onClose={() => setFilterDrawer(false)} open={filterDrawer}>
                <Select style={{ width: "150px" }} placeholder="Start year" onChange={(e) => setFilter({ ...filter, start_year: e })}>
                    {data && [...new Set(data.map(e => e.start_year))]?.filter(e => e !== null).map((e, i) => <option key={i} value={e} />)}
                </Select> &ensp;
                <Select style={{ width: "150px" }} placeholder="End year"  onChange={(e) => setFilter({ ...filter, end_year: e })}>
                    {data && [...new Set(data.map(e => e.end_year))]?.filter(e => e !== null).map((e, i) => <option key={i} value={e} />)}
                </Select> <br /><br />

                <Select style={{ width: "150px" }} placeholder="Topic"  onChange={(e) => setFilter({ ...filter, topic: e })}>
                    {data && [...new Set(data.map(e => e.topic))]?.filter(e => e !== "").map((e, i) => <option key={i} value={e} />)}
                </Select> &ensp;
                <Select style={{ width: "150px" }} placeholder="Sector"  onChange={(e) => setFilter({ ...filter, sector: e })}>
                    {data && [...new Set(data.map(e => e.sector))]?.filter(e => e !== "").map((e, i) => <option key={i} value={e} />)}
                </Select><br /><br />

                <Select style={{ width: "150px" }} placeholder="Region"  onChange={(e) => setFilter({ ...filter, region: e })}>
                    {data && [...new Set(data.map(e => e.region))]?.filter(e => e !== "").map((e, i) => <option key={i} value={e} />)}
                </Select> &ensp;
                <Select style={{ width: "150px" }} placeholder="Pest"  onChange={(e) => setFilter({ ...filter, pestle: e })}>
                    {data && [...new Set(data.map(e => e.pestle))]?.filter(e => e !== "").map((e, i) => <option key={i} value={e} />)}
                </Select><br /><br />

                <Select style={{ width: "150px" }} placeholder="Country" onChange={(e) => setFilter({ ...filter, country: e })}>
                    {data && [...new Set(data.map(e => e.country))]?.filter(e => e !== "").map((e, i) => <option key={i} value={e} />)}
                </Select> &ensp;
                <Select style={{ width: "150px" }} placeholder="Insight"  onChange={(e) => setFilter({ ...filter, insight: e })}>
                    {data && [...new Set(data.map(e => e.insight))]?.filter(e => e !== "").map((e, i) => <option key={i} value={e} />)}
                </Select> <br /><br /><br />

                <Button onClick={() => setFilterDrawer(false)} type='primary'> Close Filter </Button>
            </Drawer>
        </>
    );
}; 
