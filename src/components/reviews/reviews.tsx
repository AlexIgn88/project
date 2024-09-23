import Review from '../review';
import { Flex } from "antd";

interface ReviewsProps {
    reviews: Array<string>
}

const Reviews = ({reviews}: ReviewsProps) => {
    return (
        <>
        <Flex 
        data-testid="REVIEWS"
        justify='center'
        gap='10px'
        wrap
        >
            {reviews?.map((review: string) => (
                <Review 
                key={review}
                id={review}
                />
            ))}
        </Flex>
        </>
    )
}

export default Reviews;