import Dish from '../components/dish';
import {RestaurantType} from '../types/fixturesTypes'

interface MenuProps {
    restaurant: RestaurantType | undefined;
}

const Menu = (props: MenuProps) => {
    return (
        <div>
            {props?.restaurant?.menu.map(dish => (
                <Dish 
                key={dish.id} 
                dish={dish}
                />
            ))}
        </div>
    )
}

export default Menu;
