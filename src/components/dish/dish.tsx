import {RestaurantMenuType} from '../../types/fixturesTypes';
import { Button, Card, Typography } from 'antd';
import counter from '../../decorators/counter';

interface dishProps {
    dish: RestaurantMenuType;
    amount: number;
    increase: () => void;
    decrease: () => void;
}

const Dish = (props: dishProps) => {
    const {
        dish: {name, price},
        amount,
        increase,
        decrease
    } = props;

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
                <Button 
                onClick={() => decrease()}
                type='primary'
                // disabled={amount <= 0}
                data-testid="DECREASE"
                >
                -
                </Button>
                <Button 
                onClick={() => increase()}
                type='primary'
                data-testid="INCREASE"
                >
                +
                </Button>
            </div>
        </Card>
    )
}

export default counter(Dish);