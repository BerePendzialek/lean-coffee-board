const express = require('express')
const User = require('../models/User')
const router = express.Router()

router.get('/api/users', async (req, res, next) => {
  res.json(await User.find().catch(next))
})
router.get('/api/users/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await User.findById(id).catch(next))
})
router.delete('/api/users/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await User.findByIdAndDelete(id).catch(next))
})
router.post('/api/users', async (req, res, next) => {
  res.json(await User.create(req.body).catch(next))
})

module.exports = router
