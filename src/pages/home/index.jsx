import React, { useEffect, useState } from "react";
import { Column, Line } from "@ant-design/plots";
import { Button } from "antd";
import axios from '../../axios';
import { useNavigate } from "react-router-dom";

export default function () {

    const [visitor, setvisitor] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/monitor/get-visitor')
            .then((res) => setvisitor(res?.data))
            .catch((error) => {
                console.log('fetch visitor failed', error);
            });
    }, []);

    const configVisitor = {
        data: visitor,
        xField: "date",
        yField: "visitors",
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
    };

    return (
        <div style={{ padding: "10px 5%" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button loading={!visitor.length > 0}> {visitor.length > 0 && visitor?.map(e => e.visitors).reduce((i, j) => i + j)} Visitors</Button>
                <Button onClick={() => navigate("appoinments")}> 20 Appoinments </Button>
                <Button onClick={() => navigate("blogs")}> 70 Blogs</Button>
                <Button onClick={() => navigate("subscriber")}> 300 Subscribers </Button>
            </div> <br />

            <big>Visitors </big> <br /><br />
            <Line autoFit {...configVisitor} /> <br /><br />

        </div>
    )
}

