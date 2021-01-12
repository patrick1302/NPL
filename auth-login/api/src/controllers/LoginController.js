module.exports = {
  async login(req, res) {
    try {
      
      const {user, password} = req.body

      if (user != 'teste' && password != 'teste'){
        throw Error()
      }
      const fakeToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQQVRSSUNLIiwiaWF0IjoxNjEwNDc5NTc5LCJleHAiOjE2NDIwMTU1NzksImF1ZCI6Im51bGwiLCJzdWIiOiJudWxsIiwidXNlciI6InRlc3QifQ.g9hTkPXusC2DBfC8h5vjMvMbr6Q7tcd8ydv21xGaP2g"
      res.status(200).send(fakeToken);
    } catch (e) {
      res.status(500).send();
    }
  }
};