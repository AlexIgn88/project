import {RestaurantMenuType} from '../types/fixturesTypes';
import { Button, Card, Typography } from 'antd';
import counter from '../decorators/counter';

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
        >
            <Typography.Paragraph>
                Price: {price}
            </Typography.Paragraph>
            <div>
                {amount}&#160;
                <Button 
                onClick={() => decrease()}
                type='primary'
                disabled={amount <= 0}
                >
                -
                </Button>
                <Button 
                onClick={() => increase()}
                type='primary'
                >
                +
                </Button>
            </div>
        </Card>
    )
}

export default counter(Dish);