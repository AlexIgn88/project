import Dish from '../dish';
import {DishesPropsNormalized} from '../../types/PropsTypes';

const Dishes = ({menu}: DishesPropsNormalized) => {
    return (
        <div>
            {menu?.map(dishId => (
                <Dish 
                key={dishId} 
                id={dishId}
                />
            ))}
        </div>
    )
}

export default Dishes;
