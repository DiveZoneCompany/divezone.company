const brandsSorted = (collectionApi) => {
  return collectionApi.getFilteredByTag('brands').sort(function (a, b) {
    return a.data.order - b.data.order;
  });
};

export default {
  brandsSorted,
};
