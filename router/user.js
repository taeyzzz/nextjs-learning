var express = require('express')
var router = express.Router()

const listUser = [
  { id:1, name: "taey", age: 15 },
  { id:2, name: "hello", age: 120 },
  { id:3, name: "good", age: 105 }
]

router.get('/', function (req, res) {
  res.json({
    users: listUser
  })
})

router.get('/:id', function (req, res) {
  const id = req.params.id
  const user = listUser.find(user => user.id == id)
  if(user){
    res.json({
      user
    })
  }
  else {
    res.status(404).json({
      message: "error"
    })
  }
})

module.exports = router
