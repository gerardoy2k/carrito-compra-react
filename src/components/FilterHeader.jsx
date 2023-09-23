import { Button, Card, CardBody, Link, Select, SelectItem, Tab, Tabs } from '@nextui-org/react'
import React from 'react'

export const FilterHeader = () => {
  return (
    <div className="flex w-full flex-col mt-[-100px]">
      <Tabs aria-label="Options" radius='none'
        classNames={{
          tabList: [
            "py-0",
            "rounded-tl-none",
            "gap-0"
          ],
          cursor: [
            "rounded-tl-xl",
            "rounded-tr-xl",
            "bg-secondary",
            "text-black-900",
            "text-xl",
            "font-background"
          ],
          tab: [
            "py-5",
            "px-5",
            "bg-cyan-950",
            "rounded-tl-xl",
            "rounded-tr-xl",
            "text-white",
            "text-xl",
            "font-background"
          ],
          panel: [
            "py-0",
            "rounded-tl-none"
          ],
        }}
      >
        <Tab key="compra" title="Quiero comprar" >
          <Card className='bg-background rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-xl' >
            <CardBody className='grid grid-cols-3 items-center py-2'>
              <div>
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
              </div>
              <div>
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
              </div>
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
            </CardBody>
          </Card>
        </Tab>
        <Tab key="arriendo" title="Quiero arrendar">
          <Card className='bg-background' radius='none'>
            <CardBody>
              saadsdasd
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  )
}
