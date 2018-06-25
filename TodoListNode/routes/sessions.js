const router = require('express').Router()


router.get('/login',(req, res, next) => {
  res.format({
    html: () => {
      res.render('sessions/index',{
        title:'Connectez vous !'
      })
    },
    json: ()=>{
      next(new Error('Bad request'))
    }
  })
})

module.exports = router
