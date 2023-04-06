export async function createPerson(name, age) {
  const response = await fetch(`/person/create?name=${name}&age=${age}`, {
    method: 'POST',
  });
  const data = await response.json();
  return data;
}

export async function readPerson(name) {
  const response = await fetch(`/person/read?name=${name}`, {
    method: 'GET',
  });
  const data = await response.json();
  return data;
}

export async function updatePerson(name, age) {
  const response = await fetch(`/person/update?name=${name}&age=${age}`, {
    method: 'PUT',
  });
  const data = await response.json();
  return data;
}

export async function deletePerson(name) {
  const response = await fetch(`/person/delete?name=${name}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

export async function readAllPeople() {
  const response = await fetch(`/person/all`, {
    method: 'GET',
  });
  const data = await response.json();
  return data;
}
