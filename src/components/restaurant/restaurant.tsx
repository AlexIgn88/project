import Dishes from '../dishes';
import Reviews from '../../components/reviews';
import {ActiveRestaurantPropsNormalized} from '../../types/PropsTypes';
import { Flex, Typography  } from "antd";
import AverageRating from '../average-rating';
import style from './restaurant.module.css';
import ReviewForm from '../review-form';

interface RestaurantsProps extends ActiveRestaurantPropsNormalized {
    children: React.ReactElement; 
  }

const Restaurant = ({restaurant: {id, name, menu, reviews}, children}: RestaurantsProps) => {
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
            <AverageRating id={reviews}/>
        </Flex>
        {children}
        <Reviews 
        reviews={reviews}
        />
        <Flex
            justify='center'
            gap='10px'
            wrap
                >
            <ReviewForm
                id={id}
                />
        </Flex>
        <Dishes 
        menu={menu} 
        />
        </>
    )
}

export default Restaurant;