const Test = require('../models/test.model')

const test_index = (req, res) => {
    Test.find().sort({ createdAt: -1 })
        .then(result => {
            res.send(result);
        })
        .catch(err => console.warn(err))
}

const test_details = (req, res) => {
  const id = req.params.id;
  Test.findById(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.send('Test not found');
    });
}

const test_create_get = (req, res) => {
  res.send('Create a new test');
}

const test_create_post = (req, res) => {
  const test = new Test(req.body);
  blog.save()
    .then(result => {
        res.send('post created')
        res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
}

const test_delete = (req, res) => {
  const id = req.params.id;
  Test.findByIdAndDelete(id)
    .then(result => {
        res.send('deleted');
        res.send(result);s
    })
    .catch(err => {
      console.warn(err);
    });
}

module.exports = {
  test_index, 
  test_details, 
  test_create_get, 
  test_create_post, 
  test_delete
}