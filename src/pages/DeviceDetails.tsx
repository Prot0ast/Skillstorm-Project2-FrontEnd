import React from "react";
import { useParams } from "react-router-dom";
import { getDeviceById } from "../services/deviceService";

export function DeviceDetails(){
    const[device, setDevice] = React.useState({
        id: '',
        custId: '',
        name: '',
        number: ''
    });

    const{deviceId} = useParams();

    React.useEffect(() => {
        if(!deviceId){
            return;
        }
        getDeviceById(device.id).then(response =>{
            setDevice(response.data)
        });
    }, [setDevice, deviceId])

    return(
        <div>
            <h2>Customer Device Details</h2>
            <dl>
                <dt>ID</dt>
                <dd>{device.id}</dd>
                <dt>Customers ID</dt>
                <dd>{device.custId}</dd>
                <dt>Device Name</dt>
                <dd>{device.name}</dd>
                <dt>Device Phone Number</dt>
                <dd>{device.number}</dd>
            </dl>
        </div>
    )
}