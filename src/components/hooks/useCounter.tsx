import { useState } from "react";

export const useCounter = (valueInitialOfUser: number) => {
  const [initialValue, setInitialValue] = useState<number>(valueInitialOfUser);

  const changeInitialValue = (initialValueOfCounter: number) => {
    setInitialValue(initialValue + initialValueOfCounter);
  };

  return { initialValue, changeInitialValue };
};
