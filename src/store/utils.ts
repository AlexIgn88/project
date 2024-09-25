export const arrayToMap = (arr: any[]) =>
    arr.reduce((accumulator, item) => {
      return {
        ...accumulator,
        [item.id]: item,
      }
    }, {})