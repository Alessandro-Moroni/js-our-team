const output = document.querySelector('.output')

const people = [
  {
    img: 'img/wayne-barnett-founder-ceo.jpg',
    name: 'Wayne Barnett',
    work: 'Founder & CEO'
  },
  {
    img: 'img/angela-caroll-chief-editor.jpg',
    name: 'Angelica Caroll',
    work: 'Chief Editor'
  },
  {
    img: 'img/walter-gordon-office-manager.jpg',
    name: 'Walter Gordon',
    work: 'Office Manager'
  },
  {
    img: 'img/angela-lopez-social-media-manager.jpg',
    name: 'Angela Lopez',
    work: 'Social Media Manager'
  },
  {
    img: 'img/scott-estrada-developer.jpg',
    name: 'Scott Estrada',
    work: 'Developer'
  },
  {
    img: 'img/barbara-ramos-graphic-designer.jpg',
    name: 'Barbara Ramos',
    work: 'Graphic Designer'
  }
]

for(let person of people){
  console.log(person);
  output.innerHTML += `

  <div class="col mb-3 ">
          <div class="card" style="width: 18rem;">
            <img src="${person.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-text">${person.name}</h5>
              <p class="card-text">${person.work}</p>
            </div>
          </div>
        </div>

  `
}