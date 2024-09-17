import { useCallback, useState } from 'react';

export const useAmount = (initialState: number = 0) => {
    const [amount, setAmount] = useState(initialState);
    const decrease: () => void = useCallback(() => {
        setAmount(oldAmount => oldAmount > 0 ? oldAmount - 1 : 0)
    }, []);
    const increase: () => void = useCallback(() => {
        setAmount(oldAmount => oldAmount + 1)
    }, []);

    return {
        amount,
        increase,
        decrease,
      }
};

export type AmountHookType = ReturnType<typeof useAmount>;
