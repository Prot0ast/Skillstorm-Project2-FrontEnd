import React from "react";
import { JsxElement } from "typescript";
import { Device } from "../types";

interface DeviceTableRowProps {
    device: Device
}

export function DeviceTableRow({device}: DeviceTableRowProps): JSX.Element{
    let deviceLink = `/Device/${device.id}`;

    return(
        <tr>
            <td>{device.id}</td>
            <td>{device.custId}</td>
            <td>{device.name}</td>
            <td>{device.number}</td>
            <td><a className="btn btn-info" href={deviceLink}>Details</a></td>
        </tr>
    )
}