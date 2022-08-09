const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// @desc    Login/Landing Page
// @route   Get /
router.get('/', ensureGuest, (req,res)=> {
    res.render('login',{
        layout: 'Login'
    })
})

// @desc    Dashboard
// @route   Get /dashboard
router.get('/dashboard', ensureAuth, (req,res)=> {
    res.render('Dashboard')
})


module.exports = router