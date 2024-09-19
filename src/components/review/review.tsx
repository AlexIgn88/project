import {RestaurantReviewsType} from '../../types/fixturesTypes';
import { Card, Rate } from "antd";
import styles from './review.module.css'; 

interface ReviewProps {
    review: RestaurantReviewsType;
}

const Review = ({review: {user, rating, text}}: ReviewProps) => {
    return (
        <div className={styles.review}>
            <Card 
              title={user}
              data-testid="REVIEW"
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