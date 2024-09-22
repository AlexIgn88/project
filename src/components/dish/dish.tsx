import {NormalizedDishesType} from '../../types';
import { Card, Typography } from 'antd';
// import counter from '../../decorators/counter';
import { useSelector, connect } from 'react-redux';
import {StateType}  from '../../store/reducers';
import {AppDispatch}  from '../../store';
import {DecreaseButton, IncreaseButton} from '../cart-buttons';
import {selectDish} from '../../store/selectors';

// interface dishProps {
//     dish: RestaurantMenuType;
//     amount: number;
//     increase: () => void;
//     decrease: () => void;
// }

interface DishesOldProps {
    id: string;
}

interface DishProps {
    dispatch?: AppDispatch;
    id: string;
    dish: NormalizedDishesType; 
}

const Dish = ({id, dish: {name, price}}: DishProps) => {
    const amount: number = useSelector((state: StateType) => state.cart[id]) || 0;

    return (
        <Card
        title={name}
        data-testid="DISH"
        >
            <Typography.Paragraph>
                Price: {price}
            </Typography.Paragraph>
            <div>
                <div 
                data-testid="AMOUNT">
                {amount}
                </div>
                <DecreaseButton id={id}/>
                <IncreaseButton id={id}/>
            </div>
        </Card>
    )
}

const mapStateToProps = (state: StateType, ownProps: DishesOldProps) => {
    return {
        dish: selectDish(state, ownProps)
    }
}

export default connect(mapStateToProps)(Dish);