let wineBag = {
  prop: {
    health:100,
    status:'Sober',
 }
}

//*Health goes down everytime you slap
function slap(drink){
  switch (drink) {
    case 'sip': wineBag.prop.health -= 5 
    break;
    case 'slap': wineBag.prop.health -= 20
    break;
    case 'slander': wineBag.prop.health -= 50
    break;
    case 'pizza' : wineBag.prop.health += 20
    break;
    case 'water' : wineBag.prop.health += 5
  }
 
  drawHealth()
  drawStatus()
  passedOut()
}

//*draw health to autopopulate
//*TODO Update template to reflect status

function drawHealth(){
 let template = '';
 for(let key in wineBag){
let keyLime = wineBag[key];
console.log(keyLime);
 template += `
 <div class="col-6 pt-2">
 <h3 id="health">${keyLime.health}</h3>
 <h3 id="status">${keyLime.status}</h3>
 <div id="bar" class="col-12 progress p-0">
  <div class="progress-bar bg-danger" role="progressbar" style="width:${keyLime.health}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>

 `
 }
 document.getElementById('healthTemplate').innerHTML = template
}

function drawStatus(){
  let drunkImg = document.getElementById('drunkImg')
  if(wineBag.prop.health >= 80){
    wineBag.prop.status = 'Feeling Tipsy'
    drunkImg.src = "https://images.vexels.com/media/users/3/146417/isolated/preview/ccaf817713c93d7e0109859c8c0cc451-man-drinking-silhouette-side-view-by-vexels.png"
    drunkImg.classList.add("drunk.Happy.img");
  } else if ( 79 > wineBag.prop.health && wineBag.prop.health >= 50 ){
    wineBag.prop.status = 'Stumbling'
    drunkImg.src="https://cdn.pixabay.com/photo/2012/04/24/17/31/drunkard-40577__340.png"
  } else if (49 > wineBag.prop.health && wineBag.prop.health >= 25){
    wineBag.prop.status = 'Dissapointing Parents'
    drunkImg.src="https://cdn.pixabay.com/photo/2017/01/31/18/56/boy-2026413_960_720.png"
    drunkImg.classList.remove('happyGlow');
    drunkImg.classList.add('sadGlow')
    
  } else if (24 > wineBag.prop.health && wineBag.prop.health >= 10){
    wineBag.prop.status = 'Puking'
    drunkImg.src="https://cdn.pixabay.com/photo/2016/11/26/18/37/female-1861366_960_720.png"
  } else {
    wineBag.prop.status = 'Passed Out On The Lawn'
    drunkImg.src="https://www.pinclipart.com/picdir/big/135-1352230_women-shoes-clipart-silhouettes-vector-free-download-sexy.png"
}
}

function passedOut(){
  let btn = document.getElementById('btn')
  let btn2 = document.getElementById('btn2')
  let btn3 = document.getElementById('btn3')
  let btn4 = document.getElementById('btn4')
  let btn5 = document.getElementById('btn5')
  let sick = document.getElementById('sick')
  let sober = document.getElementById('sober')
  let passed = document.getElementById('passed')
  let status = document.getElementById('status')
  let health = document.getElementById('health')
  let bar = document.getElementById('bar')
  if (wineBag.prop.health == 0 || wineBag.prop.health < 0){
    btn.classList.add('hidden')
    btn2.classList.add('hidden')
    btn3.classList.add('hidden')
    btn4.classList.add('hidden')
    btn5.classList.add('hidden')
    sick.classList.add('hidden')
    sober.classList.add('hidden')
    status.classList.add('hidden')
    health.classList.add('hidden')
    bar.classList.add('hidden')
    passed.classList.remove('hidden')
  }
}


 drawHealth()