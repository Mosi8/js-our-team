const team = [
  {
    'name': 'Wayne Barnett',
    'role': 'Founder & CEO',
    'image': 'wayne-barnett-founder-ceo.jpg',
  },
  {
    'name': 'Angela Caroll',
    'role': 'Chief Editor',
    'image': 'angela-caroll-chief-editor.jpg',
  },
  {
    'name': 'Walter Gordon',
    'role': 'Office Manager',
    'image': 'walter-gordon-office-manager.jpg',
  },
  {
    'name': 'Angela Lopez',
    'role': 'Social Media Manager',
    'image': 'angela-lopez-social-media-manager.jpg',
  },
  {
    'name': 'Scott Estrada',
    'role': 'Developer',
    'image': 'scott-estrada-developer.jpg',
  },
  {
    'name': 'Barbara Ramos',
    'role': 'Graphic Designer',
    'image': 'barbara-ramos-graphic-designer.jpg',
  },
];

const teamContainer = document.querySelector('.team-container');

for (let i = 0; i< team.length; i++){
  teamContainer.innerHTML += '<div class="team-card"><div class="card-image"><img src="img/' + team[i].image + '"/></div><div class="card-text"><h3>' + team[i].name + '</h3><p>' + team[i].role + '</p></div></div>';
}


let nomeCognome = '';
let ruolo = '';
let immagine = '';

const addMember = document.getElementById("addMemberButton");

addMember.addEventListener('click', 
function add() {
        nomeCognome = document.getElementById('name').value;
        ruolo = document.getElementById('role').value;
        immagine = document.getElementById('image').value;

let newComponent = {
  'name' : nomeCognome,
  'role' : ruolo,
  'image' : immagine,
};

team.push(newComponent);
teamContainer.innerHTML += '<div class="team-card"><div class="card-image"><img src="' + newComponent.image + '"/></div><div class="card-text"><h3>' + newComponent.name + '</h3><p>' + newComponent.role + '</p></div></div>';

document.getElementById('name').value = '';
document.getElementById('role').value = '';
document.getElementById('image').value = '';
} 
);









