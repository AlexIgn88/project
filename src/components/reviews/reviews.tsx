import Review from '../review';
import { Flex } from "antd";

import { selectRestaurantReviews } from '../../store/selectors';
import { StateType } from '../../store/reducers';
import { NormalizedReviewsTypeExtended } from '../../types';
// import {AppDispatch} from '../../store/';
import { useSelector } from "react-redux";

interface ReviewsProps {
    id: string;
    // reviews: Array<string>;
}

const Reviews = (props: ReviewsProps) => {

    const restaurantReviews = useSelector((state: StateType) => selectRestaurantReviews(state, props));
    // console.log('restaurantReviews', restaurantReviews);

    // const { reviews } = props;

    return (
        <>
            <Flex
                data-testid="REVIEWS"
                justify='center'
                gap='10px'
                wrap
            >
                {restaurantReviews?.map((review) => (
                    <Review
                        key={review.id}
                        review={review}
                    />
                ))}
            </Flex>
        </>
    )
}

export default Reviews;