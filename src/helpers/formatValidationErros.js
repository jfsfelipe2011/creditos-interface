export default {
  format: function (err) {
    let result = ''
    for (let prop in err.body) {
      if (err.body.hasOwnProperty(prop)) {
        for (let children in err.body[prop]) {
          if (err.body[prop].hasOwnProperty(children)) {
            result += err.body[prop][children] + `<br>`
          }
        }
      }
    }
    return result
  }
}
