const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:Sayu1fyqWVxa8iMz@test-cluster-1.qiqhvln.mongodb.net/churn"
);

const CompanySchema = new mongoose.Schema({
  enail: String,
  password: String,
  testfile: String,
  result: String,
});

const Company = mongoose.model("News", CompanySchema);
module.exports = { Company };
