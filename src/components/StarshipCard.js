import "./StarshipCard.css"

const StarshipCard = (props) => {
    const { name, starship_class, MGLT } = props

    return (
        <div key={MGLT} className='card'>
            { name } { starship_class }
        </div>
    )
}

export default StarshipCard