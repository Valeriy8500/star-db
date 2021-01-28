const compose = (...funcs) => (comp) => {
  return funcs.reduceRight((result, item) => {
    return item(result);
  }, comp)
};

export default compose;