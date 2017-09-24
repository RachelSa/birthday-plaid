let month = "-800"
let day = "-13000"
let year = "-20990"

function addColor(className, rgb){
  console.log(className, rgb)
  divs = document.getElementsByClassName(className)
  for (i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = rgb;
    divs[i].style.opacity = "0.5";
  }
}

function convertMonth(month){
  first = month < 6 ? month * 35 : month
  second = month + 100
  third = month * 3
  return `rgb(${first}, ${second}, ${third})`
}

function convertDay(day){
  first = day * 2
  second = day < 15 ? day : day + 200
  third = day < 5 ? day * 5 : day + 125
  return `rgb(${first}, ${second}, ${third})`
}

function convertYearFirst(year){
  first = year < 20 ? year + 200 : year
  second = year
  third = year * 2
  return `rgb(${first}, ${second}, ${third})`
}

function convertYearSecond(year){
  first = year
  second = year > 80 ? year + 100 : year
  third = year < 50 ? year + 200 : year
  return `rgb(${first}, ${second}, ${third})`
}

function bodyColor(day, month, year){
  first = day + 200
  second = month + 200
  third = year + 100
  console.log('body', `rgb(${first}, ${second}, ${third})`)
  document.body.style.backgroundColor = `rgb(${first}, ${second}, ${third})`
}

function addTemplate(day, month){
  let wrap = document.getElementById("wrapper")
  let parsedMonth = month % 2 === 0 ? month * 2 : month * 3
  wrap.style.setProperty("grid-template-columns", `${day}px 1fr ${parsedMonth}px 1fr ${day}px 1fr ${parsedMonth}px 1fr`)
  wrap.style.setProperty("grid-template-rows", `${day}px 1fr ${parsedMonth}px 1fr ${day}px 1fr ${parsedMonth}px 1fr`)
}

function calcYearFirst(year){
  let num = parseInt(year.substr(2,4))
  return num < 0 || num > 21 ? 20 : num
}

function calcYearSecond(year){
  let num = parseInt(year.substr(2,4))
  return num < 0 || num > 100 ? 99 : num
}

function calcMonth(month){
  let num = parseInt(month)
  return num < 0 || num > 12 ? 12 : num
}

function calcDay(day){
  let num = parseInt(day)
  return num < 0 || num > 31 ? 28 : num
}

window.onload = () => {
  let yearFirst = calcYearFirst(year)
  let yearSecond = calcYearSecond(year)
  let monthInt = calcMonth(month)
  let dayInt = calcDay(day)
  addColor("color1", convertMonth(monthInt))
  addColor("color2", convertDay(dayInt))
  addColor("color3", convertYearFirst(yearFirst))
  addColor("color4", convertYearSecond(yearSecond))
  bodyColor(day, month, yearSecond)
  addTemplate(dayInt, monthInt)
}