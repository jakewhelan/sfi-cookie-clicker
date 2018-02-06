points = 0

function addPoint() {
  points = points + 1
  document.getElementById("points").innerHTML = points

  if (points > 5)  biteCookie("first-bite")
  if (points > 10) biteCookie("second-bite")
  if (points > 15) biteCookie("third-bite")
  if (points > 20) biteCookie("fourth-bite")

}

function biteCookie(points) {
  document.getElementById("cookie").classList.add(points)
}
