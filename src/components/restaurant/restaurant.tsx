import Dishes from "../dishes";
import Reviews from "../../components/reviews";
import { ActiveRestaurantPropsNormalized } from "../../types/PropsTypes";
import { Flex, Typography } from "antd";
import AverageRating from "../average-rating";
import style from "./restaurant.module.css";
import ReviewForm from "../review-form";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import {
  fetchDishes,
  fetchReviews,
  fetchUsers,
} from "../../store/action-creators";
import { StateType } from "../../store/reducers";
import {
  selectDishes,
  selectReviewsLoading,
  selectReviewsLoaded,
  selectReviewsError,
  selectUsers,
} from "../../store/selectors";
import Loader from "../loader";

interface RestaurantsProps extends ActiveRestaurantPropsNormalized {
  children: React.ReactElement;
}

const Restaurant = ({
  restaurant: { id, name, menu, reviews },
  children,
}: RestaurantsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDishes());
    dispatch(fetchReviews());
    dispatch(fetchUsers());
  }, []);

  const reviewsIsLoading = useSelector((state: StateType) =>
      selectReviewsLoading(state),
    ),
    reviewsIsLoaded = useSelector((state: StateType) =>
      selectReviewsLoaded(state),
    ),
    reviewsError = useSelector((state: StateType) => selectReviewsError(state)),
    usersData = useSelector((state: StateType) => selectUsers(state)),
    isUsersData = Object.keys(usersData).length > 0,
    reviewsComponent =
      reviewsIsLoaded && isUsersData ? (
        <Reviews id={id} />
      ) : reviewsIsLoading ? (
        <Loader />
      ) : (
        <div style={{ textAlign: "center" }}>{reviewsError}</div>
      );

  const dishesData = useSelector((state: StateType) => selectDishes(state)),
    isDishesData = Object.keys(dishesData).length > 0,
    dishesComponent = isDishesData ? <Dishes menu={menu} /> : <Loader />;

  return (
    <>
      <Flex
        justify="center"
        vertical
        align="center"
        className={style.restaurant__title}
      >
        <Typography.Title
          className={style.restaurant__name}
          style={{ color: "white" }}
        >
          {name}
        </Typography.Title>
        {reviewsIsLoaded && <AverageRating id={reviews} />}
      </Flex>
      {children}
      {reviewsComponent}
      <Flex justify="center" gap="10px" wrap>
        <ReviewForm id={id} />
      </Flex>
      {dishesComponent}
    </>
  );
};

export default Restaurant;
