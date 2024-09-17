import {ReviewsProps} from '../../types/PropsTypes';
import Review from '../review/review';

const Reviews = ({reviews}: ReviewsProps) => {
    return (
        <div data-testid="REVIEWS">
            {reviews?.map(review => (
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