const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

function Authorize (req, res, next) {
  const token = req.headers['authorization']
  if (!token) {
    return res.status(401).json({ message: 'No token provided' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.role = decoded.role

    if (decoded.exp <= Date.now() / 1000) {
      return res.status(401).json({ message: 'Token has expired' })
    }

    if (!decoded.role) {
      return res.status(403).json('Unauthorized')
    }

    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

module.exports = {
  Authorize
}
