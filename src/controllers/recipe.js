exports.index = (req, res) => {
    const data = {}
  
    res.json({
      status: 'OK',
      message: 'success',
      data,
    })
  }