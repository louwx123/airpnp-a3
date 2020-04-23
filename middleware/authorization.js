const dashBoardLoader = (req,res)=>{

  if(req.session.userInfo.type=="Admin")
  {
      res.render("adminDashboard");
  }
  
  else
  {
      res.render("userDashboard");
  }

}

module.exports = dashBoardLoader;