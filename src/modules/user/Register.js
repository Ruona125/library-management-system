const User = require('../../models/user')
const bcrypt = require('bcrypt')

async function registerUser (req, res) {
  try {
    const { name, email, password } = req.body

    // check if the user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use' })
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: 'admin'
    })

    // Save the user to the database
    await user.save()

    res.status(201).json({ message: 'User registered successfully' })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

module.exports = {
  registerUser
}
