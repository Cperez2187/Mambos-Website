import axios from 'axios';

const helpers = {
  getInstagramFeed() {
    // AJAX request to instagram API
    return axios.get("https://api.instagram.com/v1/users/self/media/recent", {
      params: {
              access_token: "3124545252.1677ed0.40f9e15f60944c48828372ce55095ba2"
          }
    }).then((response) => {
          return response.data.data;
    });
  },

  // get all dishes
  getAllDishes() {
    return axios.get("/api/dishes").then(result => {
      console.log('All dishes: ', result.data);
      return result.data;
    }).catch(err => {
      throw err;
    });
  },

  // get dishes by category
  getDishes(category) {
    console.log('helper: ' + category);
    return axios.get("/api/dishes", {
      params: {
       category: category
      }
    }).then(result => {
      console.log('Dish category: ', result.data);
      return result.data;
    }).catch(err => {
      throw err;
    });
  },

  // post dish by passing in dish object
  addDish(dish) {
    return axios.post("/api/dishes", dish).then(result => {
      // console.log('Added: ', results);
    }).catch(err => {
      throw err;
    });
  },

  // edit existing dish by id
  updateDish(dish, id) {
    return axios.put("/api/dishes", { dish, id }).then(result => {
      console.log('Updated: ', result);
    }).catch(err => {
      throw err;
    });
  },

  // delete dish by id
  deleteDish(id) {
    return axios.delete("/api/dishes", {
      params: {
          id: id
      }
    }).then(result => {
      console.log('Deleted: ', result);
    }).catch(err => {
      throw err;
    });
  },
  
    // // get dishes by category
    // getDishes: function(cat) {
    //   return axios.get("/api/dishes", {category:cat});
    // },

    // // post dish by passing in dish object
    // addDish: function(dish) {
    //   console.log(dish);
    //   return axios.post("/api/dishes", dish);
    // },

    // // edit existing dish by id
    // updateDish: function(dish, id) {
    //   console.log("Dish",dish,"id",id)
    //   return axios.put("/api/dishes", {dish: dish, id: id});
    // },

    // // delete dish by id
    // deleteDish: function(id) {
    //   return axios.delete("/api/dishes", {
    //     params: {
    //         id: id
    //     }
    //   });
    // },

  getDistinctCategories: function() {
      return axios.get("/api/categories");
  }
}

export default helpers;
