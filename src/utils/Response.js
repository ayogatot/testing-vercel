const responseUtil = {}
responseUtil.success = (res, data) => {
  const body = {
    code: 200,
    message: 'SUCCESS',
    data
  }
  res.statusCode = 200
  res.send(body)
}

responseUtil.fail = (res, code ,message) => {
  const body = {
    code: code || 400,
    message: message || 'FAIL',
    data: []
  }
  res.statusCode = body.code
  res.send(body)
}

export default responseUtil
