import Dish from '../components/dish';
// import {restaurantType} from '../types/fixturesTypes';
import {restaurantsProps} from '../types/fixturesTypes'

const Menu = (props: restaurantsProps) => {
    return (
        <div>
            {props.restaurants[0].menu.map(dish => (
                <Dish 
                key={dish.id} 
                dish={dish}
                />
            ))}
        </div>
    )
}

export default Menu;
