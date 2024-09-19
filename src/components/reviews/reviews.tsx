import {ReviewsProps} from '../../types/PropsTypes';
import Review from '../review/review';
import { Flex } from "antd";

const Reviews = ({reviews}: ReviewsProps) => {
    return (
        <Flex 
        data-testid="REVIEWS"
        justify='center'
        gap='10px'
        wrap
        >
            {reviews?.map(review => (
                <Review 
                key={review.id}
                review={review}
                />
            ))
            }
        </Flex>
    )
}

export default Reviews;