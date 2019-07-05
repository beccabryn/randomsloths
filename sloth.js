const randNum = (maxNumber) => {
  return Math.ceil(Math.random() * maxNumber)
}

const displaySloths = (numSloths) => {
  let slothHTML = ''
  for (let i = 1; i <= numSloths; i++) {
    // console.log('This is sloth number: ' + i + ' out of ' + numSloths);
    slothHTML += '<img src="sloth.jpg">'
  }
  document.getElementById('slothContainer').innerHTML = slothHTML
}

const changeTitle = (numSloths) => {
  document.getElementById('heading').innerHTML = numSloths + ' Random Sloths'
}

let numOfSloths = randNum(100)

displaySloths(numOfSloths)
changeTitle(numOfSloths)
