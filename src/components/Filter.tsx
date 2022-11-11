import React from "react";
import { VehicleType } from "../data/vehicles/contracts";
import { VehicleTypeSelect } from "./VehicleTypeSelect";

interface IProps{
    title?: string
    vehicleType?: VehicleType | null
    onChange: (type: VehicleType | null, title: string) => void
}

interface IState{
    vehicleType: VehicleType | null
    title: string
}


export class Filter extends React.Component<IProps, IState> {
    constructor(props: any){
        super(props)
        this.state = { 
            vehicleType: null,
            title: ''
        }
    }

    inputHandler(value: string){
        this.setState({
            title: value
        })
    }
    
    selectTypeHandler(value: VehicleType| null){
        this.setState({
            vehicleType: value
        })
    }

    render() {
        return (
            <>
                <input 
                    value={this.state.title} 
                    onChange={
                        (e)=>{
                            const value = e.target.value
                            this.inputHandler(value)
                            this.props.onChange(this.state.vehicleType, value)
                        }
                    }
                />
                <VehicleTypeSelect 
                    value={this.state.vehicleType} 
                    onChange={ 
                        (value)=>{
                            this.selectTypeHandler(value)
                            this.props.onChange(value, this.state.title)
                        }
                    } 
                />
            </>
        )
    }
}
