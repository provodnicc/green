import React, { useState, useEffect } from "react";
import { Vehicle, VehicleFilter, VehicleType } from "./data/vehicles/contracts";
import { VehicleApi } from "./data/vehicles/api";
import { Filter } from "./components/Filter";
import { Table } from "./components/Table";

const initialFilter: VehicleFilter = {
    title: "",
    type: null
};

export default function App() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    
    function filterHandler(type: VehicleType | null, title: string){
        initialFilter.title = title
        initialFilter.type = type

        setVehicles(
            VehicleApi.search(initialFilter)
        )
        console.log(type)
    }

    useEffect(() => {
        // initialFilter.title = 
        const data = VehicleApi.search(initialFilter);
        setVehicles(data);
        // state
    }, []);

    return (
        <>
            <Filter onChange={filterHandler}/>
            <Table vehicles={vehicles} />
        </>
    );
}
