import { Rate } from "antd";
import style from './average-rating.module.css';
import {StateType}  from '../../store/reducers';
import {selectRestaurantRate} from '../../store/selectors';
import { connect } from 'react-redux';
import {AppDispatch} from '../../store/';

interface AverageRatingOldProps {
    id: Array<string>;
}

interface AverageRatingProps {
    dispatch: AppDispatch;
    id: Array<string>;
    restaurantRate: number | undefined;
}

const mapStateToProps = (state: StateType, ownProps: AverageRatingOldProps) => {
    return {
        restaurantRate: selectRestaurantRate(state, ownProps)
    }
}

const AverageRating = (props: AverageRatingProps) => {
    return (
        <Rate 
        value={props.restaurantRate}
        disabled
        allowHalf
        className={style.stars}
        />
    )
}

export default connect(mapStateToProps)(AverageRating);