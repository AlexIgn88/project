import {RestaurantsProps} from '../types/fixturesTypes';

const RestaurantsNavigation = (props: RestaurantsProps) => {
    return (
        <div>
            {props.restaurants.map(restaurant => (
                <button
                key={restaurant.id}
                onClick={() =>  props.onRestaurantChange(restaurant.id)}
                >
                    {restaurant.name}
                    </button>
            ))}
        </div>
    )
}

export default RestaurantsNavigation;