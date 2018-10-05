
function addPerson(person, fragment) {
  const el = document.createElement('div');
  // Should be able to do this with a definition list.
  el.innerHTML = `${person.firstName} ${person.lastName}`;
  fragment.appendChild(el);
}

function showPeople(people) {

  const fragment = document.createDocumentFragment();

  for(const person of people) {
    addPerson(person,fragment);
  }

  const peopleEl = document.getElementById('people');
  peopleEl.appendChild(fragment);
}

function fetchPeople() {
  fetch('/api/people.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(peopleJson) {
      showPeople(peopleJson)
    });
}

document.addEventListener("DOMContentLoaded", fetchPeople);
