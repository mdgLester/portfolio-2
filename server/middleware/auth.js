// Simple middleware for future admin routes
const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify token (you'd implement JWT verification here)
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = decoded.user;
    
    // For now, just pass through (implement proper auth later)
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = auth;