import { useContext } from "react"
import { PropertyCard } from "../components/PropertyCard"
import { InmueblesContext } from "../context/InmueblesContext"
import { FilterSideBar } from "../components/FilterSideBar"
import { CarouselHighlights } from "../components/CarouselHighlights"
import { FilterHeader } from "../components/FilterHeader"

export const PropertyList = () => {

	const { inmuebles } = useContext(InmueblesContext)

	return (
		<>
			<FilterHeader />
			<div className="flex columns-2 mt-4">
				<FilterSideBar />
				<div className="">
					<div className="px-2 flex flex-col justify-center">
						<CarouselHighlights></CarouselHighlights>
					</div>
					<div className="grid grid-flow-row-dense gap-4 py-4 grid-cols-[minmax(580px,_1fr)] grid-rows-max ml-2">
						{inmuebles.map(inmueble => (
							<PropertyCard
								key={inmueble.id}
								image={inmueble.images[0]}
								title={inmueble.title}
								description={inmueble.description}
								price={inmueble.price}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
