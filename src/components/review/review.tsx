import { Card, Rate } from "antd";
import styles from "./review.module.css";
import { NormalizedReviewsTypeExtended } from "../../types";

interface ReviewProps {
  review: NormalizedReviewsTypeExtended;
}

const Review = ({ review: { userName, rating, text } }: ReviewProps) => {
  return (
    <div className={styles.review}>
      <Card title={userName} data-testid="REVIEW">
        <Rate value={rating} disabled allowHalf />
        <div>{text}</div>
      </Card>
    </div>
  );
};

export default Review;
