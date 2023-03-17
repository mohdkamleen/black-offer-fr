import React, { useEffect, useState } from "react";
import { Column, Line } from "@ant-design/plots";
import { Button, DatePicker, Select } from "antd";
import axios from '../../axios';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function () {
    const { loading, data } = useSelector(state => state.data)
    const navigate = useNavigate()

    const configData = {
        data: data || [],
        xField: "intensity",
        yField: "end_year",
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        slider: {
            start: 0.1,
            end: 0.2,
        },
        smooth: true,
    };

    // const configData = {
    //     data: data || [],
    //     xField: 'topic',
    //     yField: 'intensity',
    //     seriesField: 'end_year',
    //     xAxis: {
    //       type: 'start_year',
    //     },
    //     yAxis: {
    //       label: {
    //         // 数值格式化为千分位
    //         formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    //       },
    //     },
    //   };

    return (
        <div style={{ padding: "10px 3%" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button size="large"> 1000 Visitors</Button>
                <Button size="large"> {[...new Set(data.map(e => e.country))].length} Country</Button>
                <Button size="large"> 240 Users </Button>
                <Button size="large"> 300 Subscribers </Button>
            </div> <br /><br />

            <div style={{ border: "1px solid lightgray", padding: "50px", borderRadius: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <big>Visitors </big>
                    <Select style={{ width: "150px" }} defaultValue={"2023"}>
                        <option value="2023"></option>
                        <option value="2022"></option>
                        <option value="2021"></option>
                    </Select>
                </div> <br />
                <Line {...configData} />
            </div><br /><br />

            <div style={{ border: "1px solid lightgray", padding: "50px", borderRadius: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <big>Visitors </big>
                    <DatePicker />
                </div> <br />
                {/* <Column {...configData} /> */}
            </div><br /><br />

        </div>
    )
}

