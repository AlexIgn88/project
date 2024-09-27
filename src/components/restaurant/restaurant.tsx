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
import { fetchDishes, fetchReviews } from '../../store/action-creators';
import { StateType } from '../../store/reducers';
import { selectDishes, selectReviews } from '../../store/selectors';
import Loader from '../loader';

interface RestaurantsProps extends ActiveRestaurantPropsNormalized {
    children: React.ReactElement;
}

const Restaurant = ({ restaurant: { id, name, menu, reviews }, children }: RestaurantsProps) => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchDishes());
        dispatch(fetchReviews());
    }, []);

    const
        reviewsData = useSelector((state: StateType) => selectReviews(state)),
        isReviewsData = (Object.keys(reviewsData).length > 0),
        reviewsComponent = isReviewsData
            ? <Reviews
                id={id}
                // reviews={reviews}
            />
            : <Loader />;

    const
        dishesData = useSelector((state: StateType) => selectDishes(state)),
        isDishesData = (Object.keys(dishesData).length > 0),
        dishesComponent = isDishesData
            ? <Dishes
                menu={menu}
            />
            : <Loader />;


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
                {isReviewsData &&
                    <AverageRating
                        id={reviews}
                    />}
            </Flex>
            {children}
            {reviewsComponent}
            <Flex
                justify='center'
                gap='10px'
                wrap
            >
                <ReviewForm
                    id={id}
                />
            </Flex>
            {dishesComponent}
        </>
    )
}

export default Restaurant;