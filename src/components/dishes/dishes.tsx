import Dish from '../dish';
import {DishesProps} from '../../types/PropsTypes';

const Dishes = ({menu}: DishesProps) => {
    return (
        <div>
            {menu?.map(dish => (
                <Dish 
                key={dish.id} 
                dish={dish}
                />
            ))}
        </div>
    )
}

export default Dishes;
