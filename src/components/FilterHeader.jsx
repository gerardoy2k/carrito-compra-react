import { Button, Select, SelectItem } from '@nextui-org/react'
import React from 'react'

export const FilterHeader = () => {
  return (
    <div className="border-solid border-1 rounded-md border-cyan-300 grid grid-cols-[5fr,1fr] bg-slate-800 mt-5">
      <div className="flex justify-between">
        <Select
          labelPlacement='outside-left'
          placeholder='Tipo de inmueble'
          startContent='🏠'
          size='sm'
          className="max-w-xs mt-1 ml-3"
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
          placeholder='Modalidad'
          startContent='$'
          size='sm'
          className="max-w-xs mt-1 ml-3"
        >
          <SelectItem key={1} value={"1"}>
            {"Venta"}
          </SelectItem>
          <SelectItem key={2} value={"2"}>
            {"Arriendo"}
          </SelectItem>
        </Select>
        <Select
          labelPlacement='outside-left'
          placeholder='Ciudad'
          startContent='🏙'
          size='sm'
          className="max-w-xs mt-1 ml-3"
        >
          <SelectItem key={1} value={"1"}>
            {"Santiago"}
          </SelectItem>
        </Select>
      </div>
      <div className="flex justify-end">
        <Button
          variant="flat"
          color="warning"
          className="capitalize"
        >
          Buscar
        </Button>
      </div>
    </div>
  )
}
