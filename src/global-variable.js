const baseURL = 'http://ant-admin.9vdata.com/'
const hoistoryCity = function (cityName) {
  let jsonstr = localStorage.getItem('status_list') || '[]'
  let arr = JSON.parse(jsonstr)

  let index = arr.indexOf(cityName)
  if (index > -1) {
    // 已经存在, 删除该项
    arr.splice(index, 1)
  }
  // 2. 不能超过3个
  if (arr.length >= 3) {
    arr.pop()
  }
  arr.unshift(cityName)
  localStorage.setItem('status_list', JSON.stringify(arr))
}

export default {
  baseURL,
  hoistoryCity
}
