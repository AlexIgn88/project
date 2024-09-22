import Dish from '../dish';

interface DishesProps {
    menu: Array<string>;
}

const Dishes = ({menu}: DishesProps) => {
    return (
        <div>
            {menu?.map((dishId: string) => (
                <Dish 
                key={dishId} 
                id={dishId}
                />
            ))}
        </div>
    )
}

export default Dishes;
