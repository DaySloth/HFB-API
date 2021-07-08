const db = require("../sql.connection.js");

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      // db.query("SELECT * FROM category", (error, results) => {
      //   if (error) reject(error);
      //   resolve(results);
      // });
      resolve("not yet functional");
    });
  },
  getAllCategories: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM category", (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  },
  getAllSubCategories: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM sub_category", (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  },
  getAllProducts: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM products", (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  },
  createCategory: (category) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO category SET ?", category, (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  },
  createSubCategory: (subCategory) => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO sub_category SET ?",
        subCategory,
        (error, results) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });
  },
  createProduct: (product) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO products SET ?", product, (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  },
  updateProduct: (data, id) => {
      return new Promise((resolve, reject) => {
        db.query(
          `UPDATE products SET ${data} WHERE id=${id}`,
          (error, results) => {
            if (error) reject(error);
            resolve(results);
          }
        );
      });
  },
};
