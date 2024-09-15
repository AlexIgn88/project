import {RestaurantMenuType} from '../types/fixturesTypes';

interface dishProps {
    dish: RestaurantMenuType;
}

const Dish = (props: dishProps) => {
    return (
        <div>
            <p>{props.dish.name}</p>
            <p>{props.dish.price}</p>
        </div>
    )
}

export default Dish;