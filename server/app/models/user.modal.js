module.exports = mongoose => {
    const User = mongoose.model(
      "users",
      mongoose.Schema(
        {
          firstname: String,
          lastname: String,
          email: String,
          password: String,
        },
        { timestamps: true }
      )
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("users", schema);

    return User;
  };