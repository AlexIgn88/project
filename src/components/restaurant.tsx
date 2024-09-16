import Dishes from './dishes';
import Reviews from '../components/reviews';
import {ActiveRestaurantProps} from '../types/PropsTypes';
import { Flex, Typography  } from "antd";
import {AverageRating} from '../components/average-rating';

const Restaurant = (props: ActiveRestaurantProps) => {
    const {restaurant: {name, menu, reviews}} = props;

    return (
        <>
        <Flex 
        justify='center'
        vertical
        align='center'
        >
            <Typography.Title>{name}</Typography.Title>
            <AverageRating reviews={reviews}/>
        </Flex>
        <Typography.Title
        style={{ textAlign: 'center' }}
        >
            Menu
        </Typography.Title>
        <Dishes 
        menu={menu} 
        />
        <Typography.Title
        style={{ textAlign: 'center' }}
        >
        Reviews
        </Typography.Title>
        <Reviews 
        reviews={reviews}
        />
        </>
    )
}

export default Restaurant;