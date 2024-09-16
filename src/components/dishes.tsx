import Dish from './dish';
import {DishesProps} from '../types/PropsTypes';

const Dishes = (props: DishesProps) => {
    return (
        <div>
            {props?.menu?.map(dish => (
                <Dish 
                key={dish.id} 
                dish={dish}
                />
            ))}
        </div>
    )
}

export default Dishes;
