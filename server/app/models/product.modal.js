module.exports = mongoose => {
    const Product = mongoose.model(
      "products",
      mongoose.Schema(
        {
          title: String,
          description: String,
          img: String,
          price: String,
        },
        { timestamps: true }
      )
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Product = mongoose.model("products", schema);

    return Product;
  };