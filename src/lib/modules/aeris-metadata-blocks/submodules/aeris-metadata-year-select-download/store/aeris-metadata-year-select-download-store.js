export default {
  state: {
    yearListCache: {}
  },

  getters: {
    getYearListCache: state => state.yearListCache
  },

  mutations: {
    setYearListCache(state, yearList) {
      state.yearListCache[yearList.key] = yearList.value;
    },

  }
};
