module.exports = function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'IU Developers Email API'
  });
}
