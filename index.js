function addColor(className, rgb){
  divs = document.getElementsByClassName(className)
  for (i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = rgb;
    divs[i].style.opacity = "0.5";
  }
}

function convertMonth(month){
  first = month < 6 ? month * 35 : month
  second = month > 9 ? month * 21 : month * 15
  third = month % 2 == 0 ? month * 6 : month
  return `rgb(${first}, ${second}, ${third})`
}

function convertDay(day){
  first = day % 2 == 0 ? day * 2 : day * 6
  second = day < 20 ? day + 50 : day + 200
  third = day < 5 ? day * 5 : day + 125
  return `rgb(${first}, ${second}, ${third})`
}

function convertYearFirst(year){
  first = year === 19 ? year + 200 : year
  second = year
  third = year * 2
  return `rgb(${first}, ${second}, ${third})`
}

function convertYearSecond(year){
  first = year % 2 === 0 ? year : parseInt(year * 2.5)
  second = year > 80 ? year + 100 : year
  third = year < 20 ?  year : year + 120
  return `rgb(${first}, ${second}, ${third})`
}

function bodyColor(day, month, year){
  first = day + 224
  second = month + 243
  third = year < 20 ? 255 - year : 255
  document.body.style.backgroundColor = `rgb(${first}, ${second}, ${third})`
}

function addTemplate(day, month){
  let wrap = document.getElementById("wrapper")
  let parsedMonth = day % 2 === 0 ? day * 2 : month * 4
  wrap.style.setProperty("grid-template-columns", `${day}px 1fr ${parsedMonth}px 1fr ${day}px 1fr ${parsedMonth}px 1fr`)
  wrap.style.setProperty("grid-template-rows", `${day}px 1fr ${parsedMonth}px 1fr ${day}px 1fr ${parsedMonth}px 1fr`)
}

function calcYearFirst(year){
  let sub = year.substr(0,2)
  let num = parseInt(sub)
  return num < 0 || num > 21 ? 20 : num
}

function calcYearSecond(year){
  let sub = year.substr(2,4)
  let num = parseInt(sub)
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

function addFormListener(){
  let form = document.getElementById("form")
  form.addEventListener("submit", handleSubmit)
}

function handleSubmit(event){
  event.preventDefault()
  date = document.getElementById("date").value.split("-")
  let year = date[0]
  let month = date[1]
  let day = date[2]
  changeCSS(year, month, day)
}

function changeCSS(year, month, day){
  let yearFirst = calcYearFirst(year)
  let yearSecond = calcYearSecond(year)
  let monthInt = calcMonth(month)
  let dayInt = calcDay(day)
  addColor("color1", convertMonth(monthInt))
  addColor("color2", convertDay(dayInt))
  addColor("color3", convertYearFirst(yearFirst))
  addColor("color4", convertYearSecond(yearSecond))
  bodyColor(dayInt, monthInt, yearSecond)
  addTemplate(dayInt, monthInt)
}

window.onload = () => {
  changeCSS(year = "1892", month = "05", day = "06")
  addFormListener()

}
