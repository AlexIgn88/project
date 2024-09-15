import {RestaurantMenuType} from '../types/fixturesTypes';
import { Button } from 'antd';
import {useAmount, AmountHook} from '../custom-hooks/use-amount';

interface dishProps {
    dish: RestaurantMenuType;
}

const Dish = (props: dishProps) => {
    const { amount, increase, decrease }: AmountHook = useAmount();
    return (
        <div>
            <p>{props.dish.name}</p>
            <p>{props.dish.price}</p>
            <div>
                {amount}
                <Button 
                onClick={() => decrease()}
                type='primary'
                disabled={amount <= 0}
                >-</Button>
                <Button 
                onClick={() => increase()}
                type='primary'
                >+</Button>
            </div>
        </div>
    )
}

export default Dish;