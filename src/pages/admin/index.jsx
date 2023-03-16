import { Input, Radio } from "antd";

export default function () {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                <Radio.Group
                    options={["New", "Active", "Blocked"]}
                    optionType="button"
                    buttonStyle="solid"
                    defaultValue="New"
                />
                <Input
                    style={{ maxWidth: "300px" }}
                    placeholder="Search by Name or Email" />
            </div>
        </>
    )
}