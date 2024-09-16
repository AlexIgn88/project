import {RestaurantReviewsType} from '../types/fixturesTypes';
import { Card, Rate } from "antd";

interface ReviewProps {
    review: RestaurantReviewsType;
}

const Review = ({review: {user, rating, text}}: ReviewProps) => {
    return (
        <div>
            <Card 
              title={user}
            >
                    <Rate 
                    value={rating}
                    disabled
                    allowHalf
                    />
                    <div></div>
                    {text}
            </Card>
        </div>
    )
}

export default Review;