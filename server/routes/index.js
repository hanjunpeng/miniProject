const express = require('express')
const router = express.Router()
router.get('/user', function (req, res) {
  res.json({
    code: 1,
    msg: 'user',
    data: [43]
  })
})

module.exports = router
