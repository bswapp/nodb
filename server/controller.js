cuteCats = [
  {
    id: 1,
    name: "Sir Fancy Bacon",
    image:
      "https://images.pexels.com/photos/37337/cat-silhouette-cats-silhouette-cat-s-eyes.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    age: 3,
    description:
      "This smart, sassy feline is everything an intellectual could ever hope for."
  },

  {
    id: 2,
    name: "Clawdia",
    image:
      "https://images.pexels.com/photos/290204/pexels-photo-290204.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    age: 3,
    description:
      "A high maintenance cat, she loves to be brushed and fed fancy feast."
  },

  {
    id: 3,
    name: "Catpernicus",
    image:
      "https://images.pexels.com/photos/250575/pexels-photo-250575.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    age: 1,
    description:
      "This high energy cat is great around children and loves mouse toys."
  }
];

//get
module.exports = {
  fullList(req, res) {
    res.status(200).send(cuteCats);
  },

  //post
  addItem(req, res) {
    const { name, age, image, description, id } = req.body;
    cuteCats.push({ name, age, image, description, id });
    res.status(200).send(cuteCats);
  },

  //delete
  deleteItem: (req, res) => {
    const { id } = req.params;
    console.log(id);
    cuteCats = cuteCats.filter(cuteCats => {
      if (cuteCats.id !== +id) return cuteCats;
    });
    res.status(200).send(cuteCats);
  },
  //put
  editItem: (req, res) => {
    console.log("hit edit", req.body);
    const { id, updatedCat } = req.body;
    let catIndex = cuteCats.findIndex(cat => cat.id === +id);

    cuteCats[catIndex] = { ...updatedCat, id: id };
    console.log(cuteCats);

    res.status(200).send(cuteCats);
  }
};
