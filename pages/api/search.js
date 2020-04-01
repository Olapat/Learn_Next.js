const mockData = [
  {
    fristname: 'php',
    lastName: '50'
  },
  {
    fristname: 'javascript',
    lastName: '69'
  },
  {
    fristname: 'python',
    lastName: '99'
  },
  {
    fristname: 'html',
    lastName: '230'
  },
  {
    fristname: 'css',
    lastName: '290'
  }
]

export default (req, res) => {
  const { fristname, lastName } = req.query

  try {
    let fieldFristname = ''
    let fieldLastName = ''
    if (fristname) fieldFristname = fristname
    if (lastName) fieldLastName = lastName
    if (
      typeof fieldFristname !== 'string' ||
      typeof fieldLastName !== 'string'
    ) {
      throw new Error()
    }
    const result = mockData.filter(item => (
      (fristname ? item.fristname.includes(fristname) : true) &&
      (lastName ? item.lastName.includes(lastName) : true)
    ))
    setTimeout(() => {
      res.json({
        success: true,
        data: result
      })
    }, 1500)
  } catch (error) {
    res.status(400).json({
      success: false,
      error_mgs: 'มีบางอย่างผิดปกติ'
    })
  }
}
