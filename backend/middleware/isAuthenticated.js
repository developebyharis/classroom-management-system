

export function isAuthenticated(req, res, next) {
  console.log("Session" , req.session)
  if (req.session && req.session.isAuthenticated) {
    next();
        res.status(200).json({ success: true, message: "Authorized" });

  } else {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
}


export function isTeacher(req,res, next) {
  if(res.session && req.session.user && req.session.user.role === "teacher") {
    next();
    res.status(200).json({ success: true, message: "Authorized as Teacher" });
  } 
res.status(403).json({ success: false, message: "Forbidden" });
}


export function isAdmin() {
  if(req.session && req.session.user && req.session.user.role === "admin") {
    next();
    res.status(200).json({ success: true, message: "Authorized as Admin" });
  }
  res.status(403).json({ success: false, message: "Forbidden" });
}