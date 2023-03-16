import React, { useEffect, useState } from "react";
import { Column, Line } from "@ant-design/plots";
import { Button } from "antd";
import axios from '../../axios';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function () {
    const { loading, data } = useSelector(state => state.data)
    const navigate = useNavigate()

    const configData = {
        data : data || [],
        xField: "intensity",
        yField: "end_year",
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
                <Button> 10000 Visitors</Button>
                <Button onClick={() => navigate("appoinments")}> 20 Appoinments </Button>
                <Button onClick={() => navigate("blogs")}> 70 Blogs</Button>
                <Button onClick={() => navigate("subscriber")}> 300 Subscribers </Button>
            </div> <br /><br />


            <big>Visitors </big> <br /><br />
            <Column autoFit {...configData} />
        </div>
    )
}

