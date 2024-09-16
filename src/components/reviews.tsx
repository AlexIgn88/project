import {ReviewsProps} from '../types/PropsTypes';
import Review from '../components/review';

const Reviews = (props: ReviewsProps) => {
    return (
        <div>
            {props?.reviews?.map(review => (
                <Review 
                key={review.id}
                review={review}
                />
            ))
            }
        </div>
    )
}

export default Reviews;