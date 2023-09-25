import { Button, Link, Select, SelectItem } from '@nextui-org/react'
import React from 'react'

export const FilterHeaderSearch = () => {
    return (
        <>
            <Select
                labelPlacement='outside-left'
                placeholder='Casas y Deptos.'
                size='md'
                className="w-[21vw] rounded-lg border-2 border-primary"
            >
                <SelectItem key={1} value={"1"}>
                    {"Departamento"}
                </SelectItem>
                <SelectItem key={2} value={"2"}>
                    {"Casa"}
                </SelectItem>
            </Select>
            <Select
                labelPlacement='outside-left'
                placeholder='Buscar ciudad'
                size='md'
                className="w-[21vw] rounded-lg border-2 border-primary"
            >
                <SelectItem key={1} value={"1"}>
                    {"Santiago"}
                </SelectItem>
                <SelectItem key={2} value={"2"}>
                    {"Viña Del Mar"}
                </SelectItem>
            </Select>
            <div className="flex flex-col items-end">
                <Button
                    variant="flat"
                    color="warning"
                    className="w-[98px] h-10 bg-red-500 rounded-xl"
                >
                    <span className='text-background text-xl font-bold'>Buscar</span>
                </Button>
                <span className='text-zinc-900 text-[15px] font-light mt-1'>
                    Buscar por <Link className='text-red-500 text-[15px] font-semibold underline'>ID de propiedad</Link>
                </span>
            </div>
        </>
    )
}
