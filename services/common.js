const passport = require("passport")

exports.isAuth=(req, res, done)=> {
  return passport.authenticate('jwt')
  }

  exports.sanitizeUser=(user)=>{
    return {
        id:user.id,
        role:user.role
    }
  }


 exports.cookieExtractor = function(req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
   // token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDUzYzcyOTU3ZmVjMjY0ZDJlNzZiYyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5MTcxNDE5Nn0.VDPGErbAc3fGNdveZWAVg1m1DplWkG69BCy1uUWzNEw"
    return token;
  };