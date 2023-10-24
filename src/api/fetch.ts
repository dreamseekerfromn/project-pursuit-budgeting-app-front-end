const URL = import.meta.env.VITE_BASE_URL;

// Index/Get all
export async function getAllSpending() {
  return await fetch(`${URL}/spending`).then((res) => {
    return res.json();
  });
}

// index/Get one
export async function getOneSpending(id:string) {
  return await fetch(`${URL}/spending/${id}`).then((res) => res.json());
}

// Create
export async function createSpending(item:object) {
  return await fetch(`${URL}/spending/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

// Update
export async function updateSpending(id:string, item:object) {
  return await fetch(`${URL}/spending/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

// Delete
export async function destroySpending(id:string) {
  return await fetch(`${URL}/spending/${id}`, {
    method: "DELETE",
  });
}

// Index/Get all
export async function getAllIncome() {
  return await fetch(`${URL}/income`).then((res) => {
    return res.json();
  });
}

// index/Get one
export async function getOneIncome(id:string) {
  return await fetch(`${URL}/income/${id}`).then((res) => res.json());
}

// Create
export async function createIncome(item:object) {
  return await fetch(`${URL}/income/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

// Update
export async function updateIncome(id:string, item:object) {
  return await fetch(`${URL}/income/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

// Delete
export async function destroyIncome(id:string) {
  return await fetch(`${URL}/income/${id}`, {
    method: "DELETE",
  });
}