import Dishes from '../dishes';
import Reviews from '../../components/reviews';
import {ActiveRestaurantProps} from '../../types/PropsTypes';
import { Flex, Typography  } from "antd";
import {AverageRating} from '../../components/average-rating';
import style from './restaurant.module.css';
import Order from '../order';

const Restaurant = (props: ActiveRestaurantProps) => {
    const {restaurant: {name, menu, reviews}} = props;

    return (
        <>
        <Flex 
        justify='center'
        vertical
        align='center'
        className={style.restaurant__title}
        >
            <Typography.Title 
            className={style.restaurant__name}
            style={{ color: 'white' }}
            >
            {name}
            </Typography.Title>
            <AverageRating reviews={reviews}/>
        </Flex>
        <Order />
        <Reviews 
        reviews={reviews}
        />
        <Dishes 
        menu={menu} 
        />
        </>
    )
}

export default Restaurant;