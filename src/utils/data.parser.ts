export function parseData(
  data: string,
  removeZeros = false,
  formatNum = false
) {
  if (!data) {
    return;
  }
  data = data.toString();
  const dataArray: any[] = data.split("");
  let dataStrings = [];
  let currentString = "";
  dataArray.forEach((data, i) => {
    const isNoN = isNaN(parseInt(data));
    if (isNoN) {
      currentString += data;
    } else if (
      isNaN(parseInt(dataArray[i + 1])) ||
      (dataArray[i + 1] > 0 && data == 0)
    ) {
      currentString += data;
      dataStrings.push(currentString);
      currentString = "";
    } else {
      currentString += data;
    }
  });
  return {
    firstName: removeZeros ? removeZero(dataStrings[0]) : dataStrings[0],
    lastName: removeZeros ? removeZero(dataStrings[1]) : dataStrings[1],
    clientId: formatNum ? formatNumber(dataStrings[2]) : dataStrings[2],
  };
}

export function removeZero(stringData: string): string | null {
  if (stringData) return stringData.replace(/0/g, "");
}
export function formatNumber(stringData: string): string | null {
  if (stringData)
    return (
      stringData.substr(0, 3) + "-" + stringData.substr(3, stringData.length)
    );
}
