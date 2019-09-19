exports.index = (req, res, next) => {
  res.status(200).render("index", { title: "ven match" });
};
