import { useAmount, AmountHookType } from "../custom-hooks/use-amount";

function counterDecorator(OriginalComponent: any) {
  return (props: any) => {
    const { amount, decrease, increase }: AmountHookType = useAmount(
      props.initialValue || 0,
    );

    return (
      <OriginalComponent
        {...props}
        amount={amount}
        decrease={decrease}
        increase={increase}
      />
    );
  };
}

export default counterDecorator;
