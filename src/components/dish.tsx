import {RestaurantMenuType} from '../types/fixturesTypes';
import { Button, Card, Typography } from 'antd';
import {useAmount, AmountHook} from '../custom-hooks/use-amount';

interface dishProps {
    dish: RestaurantMenuType;
}

const Dish = (props: dishProps) => {
    const { amount, increase, decrease }: AmountHook = useAmount();
    return (
        <Card
        title={props.dish.name}
        >
            <Typography.Paragraph>
                Price: {props.dish.price}
            </Typography.Paragraph>
            <div>
                {amount}&#160;
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
        </Card>
    )
}

export default Dish;