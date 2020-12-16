export const getObjectWithTypesAsString = (propObj: any): string => {
  let finalObject = "{";
  Object.keys(propObj).forEach((key: string) => {
    if (Array.isArray(propObj[key])) {
      finalObject += `${key} : Array, `;
    } else if (typeof propObj[key] === "function") {
      finalObject += `${key} : Function With ${propObj[key].length} Parameters, `;
    } else {
      finalObject += `${key} : ${typeof typeof propObj[key]}`;
    }
  });
  return finalObject;
};
