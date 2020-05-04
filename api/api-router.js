const router = require('express').Router()
const authRouter = require('../auth/auth-router')
const userRouter = require('../users/users-router')
const jokesRouter = require('../jokes/jokes-router')
const jwt = require('jsonwebtoken');
const restricted = require('../middleware/restricted-middleware')

router.use('/auth', authRouter);
router.use('/users', restricted, userRouter);
router.use('/jokes', restricted, jokesRouter);
router.get('/', (req, res) => {
    Items.find()
      .then((response) =>{
          return (res.status(200).json(response))
      })
      .catch((err) => res.send(err));
  }) 

router.get('/', (req,res) => {
    res.json({api: 'Welcome to party town'})
});

// router.get('/token', (req, res) => {

//     const payload = {
//       subject: 'thisuser',
//       userid: 'samirhub',
//       favoriteCookie: 'White Chocolate Macadamia',
//     };
  
//     const secret = 'wubbalubbadubdub';
//     const options = {
//       expiresIn: '1h'
//     };
  
//     const token = jwt.sign(payload, secret, options);
  
//     res.json(token);
//   })

module.exports = router