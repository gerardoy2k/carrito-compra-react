import { Button, Checkbox, Radio, RadioGroup, Switch } from '@nextui-org/react';
import { useState } from 'react';
import { Sidebar, Menu } from 'react-pro-sidebar';
import filter from '../assets/images/filter.png';
import openFilter from '../assets/images/open-filter.png';
import closeFilter from '../assets/images/close-filter.png';

export const FilterSideBar = () => {

    const [sideBarOpened, setSideBarOpened] = useState(false);
    const handleSideBar = () => { setSideBarOpened(!sideBarOpened) }

    return (
        <div className="bg-slate-400">
            <div className="w-100 flex justify-between align-middle bg-slate-500">
                <div className='w-full flex justify-center align-middle pt-1'>
                    <img src={filter} onClick={handleSideBar} className='h-6 w-6 mt-1' />
                    {sideBarOpened ?
                        <></> :
                        <p className='my-1 text-slate-200 mx-3'>Filtros</p>}
                </div>
                <Button isIconOnly className="bg-transparent" variant="flat">
                    {
                        sideBarOpened ?
                            <img src={openFilter} onClick={handleSideBar} className='h-4 w-4' /> :
                            <img src={closeFilter} onClick={handleSideBar} className='h-4 w-4' />
                    }

                </Button>
            </div>
            <Sidebar collapsed={sideBarOpened}>
                <Menu className='px-3 pt-3'>
                    <div className='flex flex-col py-3'>
                        Modalidades:
                        <Checkbox >Nuevo</Checkbox>
                        <Checkbox >Usado</Checkbox>
                    </div>
                    <div className='flex flex-col py-2'>
                        Financiamiento:
                        <Switch defaultSelected aria-label="Automatic updates" />
                    </div>
                    <div className='flex flex-col py-2'>
                        Publicaciones de hoy:
                        <Switch defaultSelected aria-label="Automatic updates" />
                    </div>
                    <div className='flex flex-col py-2'>
                        Precio:
                        <RadioGroup>
                            <Radio value="1">50000-100000</Radio>
                            <Radio value="2">100000-200000</Radio>
                            <Radio value="3">200000-500000</Radio>
                            <Radio value="4">Mas de 500000</Radio>
                        </RadioGroup>
                    </div>
                    <div className='flex flex-col py-2'>
                        Quién publica:
                        <RadioGroup>
                            <Radio value="1">Particula</Radio>
                            <Radio value="2">Profesional</Radio>
                        </RadioGroup>
                    </div>
                    <div className='flex flex-col py-2'>
                        Cantidad de dormitorios:
                        <RadioGroup>
                            <Radio value="1">0-1</Radio>
                            <Radio value="2">1-2</Radio>
                            <Radio value="2">1-3</Radio>
                            <Radio value="2">Mas de 3</Radio>
                        </RadioGroup>
                    </div>
                    <div className='flex flex-col py-2'>
                        Cantidad de baños:
                        <RadioGroup>
                            <Radio value="1">0-1</Radio>
                            <Radio value="2">1-2</Radio>
                            <Radio value="2">1-3</Radio>
                            <Radio value="2">Mas de 3</Radio>
                        </RadioGroup>
                    </div>
                    <div className='flex flex-col py-2'>
                        Estacionamientos:
                        <RadioGroup>
                            <Radio value="1">0-1</Radio>
                            <Radio value="2">1-2</Radio>
                            <Radio value="2">1-3</Radio>
                            <Radio value="2">Mas de 3</Radio>
                        </RadioGroup>
                    </div>
                    <div className='flex flex-col py-2'>
                        Antigüedad:
                        <RadioGroup>
                            <Radio value="1">0-1 años</Radio>
                            <Radio value="2">1-3 años</Radio>
                            <Radio value="2">5-10 años</Radio>
                            <Radio value="2">Mas de 10 años</Radio>
                        </RadioGroup>
                    </div>
                </Menu>
            </Sidebar>
        </div>
    )
}
