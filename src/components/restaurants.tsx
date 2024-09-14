// import {restaurantType} from '../types/fixturesTypes';
import RestaurantsNavigation from './restaurants-navigation';
import Menu from './menu';
import {restaurantsProps} from '../types/fixturesTypes'

const Restaurants = (props: restaurantsProps) => {
    return (
        <div>
            <RestaurantsNavigation 
            restaurants={props.restaurants}
            // onRestaurantChange={() => {}}
            />
            {/* @ts-ignore */}
            {/* <Menu 
            id={''} 
            name={''} 
            // location={undefined} 
            image={''} 
            menu={[]} 
            reviews={[]}
            /> */}

            <Menu restaurants={props.restaurants} />
        </div>
    )
}

export default Restaurants;