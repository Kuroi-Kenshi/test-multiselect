export const eventGenerator = (name, value) => {
  const id = Date.now();

  if (typeof value === 'object') {
    const jsonObject = JSON.stringify(value);
    return `{ "id": "${id}", "eventName": "${name}", "eventValue": ${jsonObject}}`;
  }
  return `{ "id": "${id}", "eventName": "${name}", "eventValue": "${value}"}`;
};
