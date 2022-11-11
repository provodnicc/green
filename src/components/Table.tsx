import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import { Vehicle, vehicleTypeTitles } from "../data/vehicles/contracts";

interface TableItemProps{
    vehicle: Vehicle,
    number: number
}

const TableItem: React.FC<TableItemProps> = ({ vehicle, number }) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{vehicle.title}</td>
            <td>
                <CurrencyLabel value={vehicle.price} fractionDigits={2} />
            </td>
            <td>{vehicleTypeTitles[vehicle.type]}</td>
        </tr>
    );
};


interface TableProps{
    vehicles: Vehicle[]
}

export const Table: React.FC<TableProps> = ({ vehicles }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Цена, ₽</th>
                <th>Тип</th>

            </tr>
            </thead>
            <tbody>
            {vehicles.map((vehicle, index) => (
                <TableItem key={vehicle.id} number={index + 1} vehicle={vehicle} />
            ))}
            </tbody>
        </table>
    );
};
