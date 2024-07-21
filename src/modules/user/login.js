const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
dotenv.config()

async function login (req, res) {
  try {
    const { email, password } = req.body

    // Find the user by email
    const user = await User.findOne({ email })

    // If the user does not exist, return an error
    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }

    // Check if the provided password matches the stored password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid login details' })
    }

    // Generate a JWT token containing the user's ID
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: '1hr' // Token expiration time (adjust as needed)
      }
    )

    // Convert the user document to a plain JavaScript object
    const userObject = user.toObject()

    // Remove the password field from the user object
    delete userObject.password

    // Return the token and user object to the client
    return res.status(200).json({ user: userObject, token })
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

module.exports = {
  login
}
