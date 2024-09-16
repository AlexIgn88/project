import {RestaurantReviewsType} from '../types/fixturesTypes';
import { Card, Rate } from "antd";

interface ReviewProps {
    review: RestaurantReviewsType;
}

const Review = (props: ReviewProps) => {
    return (
        <div>
            <Card 
              title={props.review.user}
            >
                    <Rate value={props.review.rating}/>
                    <div></div>
                    {props.review.text}
            </Card>
        </div>
    )
}

export default Review;