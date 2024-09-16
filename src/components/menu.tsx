import Dish from '../components/dish';
import {ActiveRestaurantProps} from '../types/PropsTypes';

const Menu = (props: ActiveRestaurantProps) => {
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
