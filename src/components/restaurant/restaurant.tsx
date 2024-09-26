import Dishes from '../dishes';
import Reviews from '../../components/reviews';
import { ActiveRestaurantPropsNormalized } from '../../types/PropsTypes';
import { Flex, Typography } from "antd";
import AverageRating from '../average-rating';
import style from './restaurant.module.css';
import ReviewForm from '../review-form';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchDishes } from '../../store/action-creators';
import { StateType } from '../../store/reducers';
import { selectDishes } from '../../store/selectors';

interface RestaurantsProps extends ActiveRestaurantPropsNormalized {
    children: React.ReactElement;
}

const Restaurant = ({ restaurant: { id, name, menu, reviews }, children }: RestaurantsProps) => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchDishes())
    }, []);

    const dishes = useSelector((state: StateType) => selectDishes(state));

    const isDishes = (Object.keys(dishes).length > 0);

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
                <AverageRating id={reviews} />
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
            {!isDishes && (
                <div style={
                    {
                        color: 'red',
                        fontWeight: 'bold',
                        fontSize: 'x-large',
                    }
                }>
                    Loading dishes...
                </div>)}
            {isDishes && <Dishes
                menu={menu}
            />}
        </>
    )
}

export default Restaurant;