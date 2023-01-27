function countHours(year, holidays) {
    let resp = 0
    let holidayconcat = []
    holidays.map((holiday) => {
      holidayconcat.push(`${holiday}/${year}`)
    })
    resp = holidayconcat.map((holiday) => {
      return new Date(holiday).getDay()
    }).filter((item) => item !== 0 && item !== 6)
    resp = resp.length * 2
    return resp
  }