import { Card, Rate } from "antd";
import styles from './review.module.css'; 
// import { connect } from 'react-redux';
import {selectReview} from '../../store/selectors';
import {StateType}  from '../../store/reducers';
import {NormalizedReviewsTypeExtended} from '../../types';
// import {AppDispatch} from '../../store/';
import { useSelector } from "react-redux";

interface ReviewOldProps {
    id: string;
}

// interface ReviewProps {
//     dispatch: AppDispatch;
//     id: string;
//     review: NormalizedReviewsTypeExtended;
// }

// const Review = ({review: {userName, rating, text}}: ReviewProps) => {

const Review = (props: ReviewOldProps) => {
    // console.log('props',props);

    const {
        userName, 
        rating, 
        text
        }: NormalizedReviewsTypeExtended = useSelector(
        (state: StateType) => selectReview(state, props));

    // console.log('review',review);
    
    return (
        <div className={styles.review}>
            <Card 
              title={userName}
              data-testid="REVIEW"
            >
                    <Rate 
                    value={rating}
                    disabled
                    allowHalf
                    />
                    <div>
                        {text}
                    </div>
            </Card>
        </div>
    )
}

// const mapStateToProps = (state: StateType, ownProps: ReviewOldProps) => {
//     return {
//         review: selectReview(state, ownProps)
//     }
// }

// export default connect(mapStateToProps)(Review);
export default Review;