export default (req, res) => {
  const { username, password } = req.body

  if (!username.trim() || !password.trim()) {
    res.status(400).json({
      success: false,
      error_mgs: 'โปรดระบุชื่อผู้ใช้และรหัสผ่าน'
    })
  } else if (username.trim() === 'admin_test' && password.trim() === '1@234') {
    res.json({
      success: true,
      token: '7815696ecbf1c96e6894b779456d330e'
    })
  } else {
    res.status(401).json({
      success: false,
      error_mgs: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'
    })
  }
}
