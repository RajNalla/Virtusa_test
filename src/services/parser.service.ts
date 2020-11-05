import { parseData } from "../utils/data.parser";

export async function v1Parser(details) {
  try {
    return parseData(details.data);
  } catch (err) {
    throw err;
  }
}

export async function v2Parser(details) {
  try {
      console.log('v22')
    return parseData(details.data, true, true);
  } catch (err) {
    throw err;
  }
}
