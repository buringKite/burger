const orm = require("../config/orm");

const burger = {
  all: async () => {
    const result = await orm.all("burger");

    return result;
  },

  // The variables cols and vals are arrays.
  create: async (cols, vals) => {
    const result = await orm.create("burger", cols, vals);

    return result;
  },

  update: async (objColVals, condition) => {
    const result = await orm.update("burger", objColVals, condition);

    return result;
  },

  // delete: async (condition) => {
  //   const result = await orm.delete("burger", condition);

  //   return result;
  // },
};
module.exports = burger;
