import { useCallback, useState } from 'react';

export const useAmount = (initialState: number = 0) => {
    const [amount, setAmount] = useState(initialState);
    const decrease = useCallback(() => {
        setAmount(oldAmount => oldAmount > 0 ? oldAmount - 1 : 0)
    }, [amount]);
    const increase = useCallback(() => {
        setAmount(oldAmount => oldAmount + 1)
    }, [amount]);

    return {
        amount,
        increase,
        decrease,
      }
};

export type AmountHook = ReturnType<typeof useAmount>;