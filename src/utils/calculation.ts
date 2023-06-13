import { toast } from "react-hot-toast";

export const calculation = (value: (number | string)[]) => {
  if (!value) return;

  let operation = filterLeadingZeros(value).join("");
  try {
    // eslint-disable-next-line no-eval
    let result = eval(operation);
    return [result];
  } catch {
    toast.error("Invalid Expression");
  }
};

function filterLeadingZeros(array: (number | string)[]) {
  const firstNonZeroIndex = array.findIndex((element) => element !== 0);

  if (firstNonZeroIndex === -1) {
    return [];
  }
  const filteredArray = array.slice(firstNonZeroIndex);

  return filteredArray;
}
