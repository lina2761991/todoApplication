export const fetchAll = () =>
  fetch(`http://api.todo.com/`).then((response) => response.json());

export const create = (data = {}) =>
  fetch(`http://api.todo.com/create/task/`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data),
  }).then((response) => response.json());

export const update = (data = {}) =>
  fetch(`http://api.todo.com/update.php`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data),
  }).then((response) => response.json());

export const remove = (data = {}) =>
  fetch(`http://api.todo.com/delete.php`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data),
  }).then((response) => response.json());
