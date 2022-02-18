export const selectColour = (index, counter, colour) => {
  let ctr = counter;
  let clr = colour;
  if (index === 0) {
    clr = 1;
  } else if (ctr === 1) {
    clr = (clr === 1) ? 2 : 1;
    ctr += 1;
  } else {
    ctr = 1;
  }
  return [ctr, clr];
};

export const findObjInArr = (objects, key, value) => objects.find((obj) => obj[key] === value);

export const sortObjArrByKey = (arr, key) => [...arr].sort((a, b) => ((a[key] < b[key]) ? 1 : -1));
