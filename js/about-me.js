"use strict";

function get_bars(){
  var bars = '';
  for (let skill in arguments){
    bars = bars +  '<div class="bar" style="width: ' + arguments[skill][1]  + '%;">' + arguments[skill][0] + '</div>';
  }
  return bars;
}

function get_two_rows(){
  var training = '';
  for (let course in arguments){
    training += '<div class="flex-container space-between"><p>'+ arguments[course][0] + '</p><p>' + arguments[course][1] + '</p></div>';
  }
  return training;
}

var info = [
  {
    'name':'Training',
    'description': get_two_rows(['Technician in micro-computer systems and networks', '2015'],
                                ['Database Administrator', '2016'],
                                ['Senior Technician in Web Application Development',  'Nowadays'],
                                ['Ethical Hacking',  'Nowadays']
                                ),
  },
  {
    'name':'Experiences',
    'description': get_two_rows(
                              ['Technician and FullStack Developer in Odoo ERP', 'PCBOX'],
                              ['FullStack Developer', 'UAH'],
                              ['Oficial WebPage of HoneyCON', 'HoneySEC']

    ),
  },
  {
    'name':'Skills',
    'description': get_bars(['HTML5 CSS3 JS6', 90],
                              ['Bootstrap', 90],
                              ['Python', 100],
                              ['GNU/Linux', 80],
                              ['Databases', 70],
                              ['PHP', 60],
                              ['Ruby', 50],
                              ['Java', 15],
                              ['C++', 10]
                            ) + 'I am a self-taught person and I had learn almost everything by myself'
  },
  {
    'name': 'Awards',
    'description': get_two_rows(
                  ['Third of Castilla la Mancha in Web Design CLM Skills', '2016'],
                  ['Selected as Young Talent for CiberCamp', '2016']
    )
  },
  {
    'name':'Contact',
    'description': 'Twitter: @elchicodepython'
  },
];

function write(info){
  var new_text = '<h1>' + info.name + '</h1>';
  new_text += '<p>' + info.description + '</p>';
  text.innerHTML = new_text;
}

function load_buttons(){
  for (let button_idx in info){
    let new_button = document.createElement('button');
    new_button.innerHTML = info[button_idx].name;
    new_button.setAttribute('idx', button_idx);
    new_button.addEventListener('click', function(){ write(info[new_button.getAttribute('idx')]);});
    buttons.appendChild(new_button);
  }
}
