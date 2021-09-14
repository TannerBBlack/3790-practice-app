import { starships } from "../data/starships";
import StarshipCard from './StarshipCard'

const StarshipContainer = () => {
    return (
        <div>
            {starships.map((starship) => {
                return (
                    <StarshipCard
                        name={starship.name}
                        starship_class={starship.starship_class}
                        MGLT={starship.MGLT}
                    />
                )
            })}
        </div>
    )
}

export default StarshipContainer