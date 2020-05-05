export const asyncWrap = Promise => Promise.then(result => [null, result]).catch(err => [err]);


export const getRamdomName = () => {
  return "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
      .toString();
} 