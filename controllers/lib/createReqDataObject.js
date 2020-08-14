const createReqDataObject = (reqParams, reqBody) => {
  let reqDataObject = {};
  let paramsLength = Object.keys(reqParams).length;
  let bodyLength = Object.keys(reqBody).length;

  for (let paramsIndex = 0; paramsIndex < paramsLength; paramsIndex++) {
    let paramsKey = Object.keys(reqParams)[paramsIndex];
    reqDataObject[paramsKey] = reqParams[paramsKey];
  }
  for (let bodyIndex = 0; bodyIndex < bodyLength; bodyIndex++) {
    let bodyKey = Object.keys(reqBody)[bodyIndex];
    reqDataObject[bodyKey] = reqBody[bodyKey];
  }

  return reqDataObject;
}

module.exports = {
  createReqDataObject,
}
