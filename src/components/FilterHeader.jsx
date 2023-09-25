import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import { FilterHeaderSearch } from './FilterHeaderSearch'

export const FilterHeader = () => {
  return (
    <section className="flex w-full flex-col mt-[-100px] shadow-2xl rounded-bl-xl rounded-br-xl">
      <Tabs aria-label="Options" radius='none'
        classNames={{
          tabList: [
            "py-0",
            "rounded-tl-none",
            "gap-0",
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
            "px-0",
            "py-0",
            "rounded-tl-none"
          ],
        }}
      >
        <Tab key="compra" title="Quiero comprar" >
          <Card className='bg-background rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-xl' >
            <CardBody className='grid grid-cols-3 items-center py-2'>
              <FilterHeaderSearch />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="arriendo" title="Quiero arrendar">
          <Card className='bg-background rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-xl'>
            <CardBody className='grid grid-cols-3 items-center py-2'>
              <FilterHeaderSearch />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </section>
  )
}
