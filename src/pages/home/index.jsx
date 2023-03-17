import React, { useEffect, useState } from "react";
import { Area, Column, Line, Pie } from "@ant-design/plots";
import { Button, DatePicker, Radio, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function () {
    const { loading, data } = useSelector(state => state.data)
    const navigate = useNavigate()

    var configData = {
        data: data || [],
        xField: "start_year",
        yField: "end_year",
        seriesField: 'topic',
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
    };

    var lineData = {
        data: data || [],
        xField: "end_year",
        yField: "intensity", 
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
    };

    const PieData = {
        data: data || [],
        angleField: 'intensity',
        colorField: 'country',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ], 
    };


    return (
        <div style={{ padding: "10px 3%" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button size="large"> 1000 Visitors</Button>
                <Button size="large"> {data && [...new Set(data.map(e => e.country))]?.length} Country</Button>
                <Button size="large"> {data && [...new Set(data.map(e => e.intensity))]?.length} Intensity </Button>
                <Button size="large"> {data && [...new Set(data.map(e => e.topic))]?.length} Topics </Button>
            </div> <br /><br />


            <div style={{ border: "1px solid lightgray", padding: "50px", borderRadius: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <big>Intensity </big>
                    <Select style={{ width: "150px" }} defaultValue={"2023"}>
                        <option value="2023"></option>
                        <option value="2022"></option>
                        <option value="2021"></option>
                    </Select>
                </div> <br />
                <Line {...lineData} />
            </div><br /><br />

            <div className="chart-flex" >

                <div className="chart">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <big>Topics </big>
                        <Radio.Group
                            optionType="button"
                            defaultValue={"All"}
                            options={["All", "Oil", "Export"]}
                        />
                    </div> <br />
                    <Column {...configData} />
                </div>

                <div className="chart">
                    <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
                        <big>Country </big>
                        <DatePicker />
                    </div> <br />
                    <Pie {...PieData} />
                </div>

            </div> <br /><br />

        </div>
    )
}

