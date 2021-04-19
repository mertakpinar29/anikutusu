import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import express from 'express'

import User from '../db/userModel.js'
import tokenModel from '../db/tokenModel.js'

const router = express.Router()

router.post('/signup', async (req, res) => {
  try {
    const { email, password, confirmPassword, firstName, lastName } = req.body

    const userExists = await User.findOne({ email })

    if (userExists)
      return res
        .status(400)
        .json({ message: 'Bu emaile sahip bir kullanıcı mevcut' })

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Şifreler eşleşmiyor' })

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      email,
      name: `${firstName} ${lastName}`,
      password: hashedPassword,
    })

    const accessToken = jwt.sign(
      { email: user.email, id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '3m',
      }
    )

    const refreshToken = jwt.sign(
      { email: user.email, id: user._id },
      process.env.REFRESH_TOKEN_SECRET
    )

    await tokenModel.create({
      userId: user._id,
      refreshToken: refreshToken,
    })

    res.status(200).json({ user, accessToken })
  } catch (error) {
    console.log(error)
  }
})

export default router
