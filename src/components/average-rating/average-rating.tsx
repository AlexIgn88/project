import { Rate } from "antd";
import {ReviewsProps} from '../../types/PropsTypes';
import { useMemo } from 'react';
import style from './average-rating.module.css';

export const AverageRating = ({reviews}:ReviewsProps) => {
    const rateResult: number = useMemo(() => {
        return reviews.reduce(
            (sum, {rating}) => sum + rating, 0)
    }, [reviews]);

    const restaurantRate: number = useMemo(() => {
        return reviews.length > 0 
        ? Math.floor(rateResult / reviews.length)
        : 0}, [reviews, rateResult]); 
    return (
        <Rate 
        value={restaurantRate}
        disabled
        allowHalf
        className={style.stars}
        />
    )
}