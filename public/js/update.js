'use strict';

const arrayData = (arrChildren) => {
  let dataClient = [];
  for (let i = 0; i < arrChildren.length; i++) {
    dataClient.push(arrChildren[i].textContent);
  }
  return dataClient;
}

function clientUpdate(id) {
  const row = document.getElementById(`client-${id}`);
  const dataClient = arrayData(row.children);

  const template = `
    <form id="form-update-${dataClient[0]}" action="/client-update/${dataClient[0]}" method="POST">
      <th scope="row">${dataClient[0]}</th>
      <td><input type="text" form="form-update-${dataClient[0]}" value="${dataClient[1]}" name="first_name"></td>
      <td><input type="text" form="form-update-${dataClient[0]}" value="${dataClient[2]}" name="last_name"></td>
      <td><input type="email" form="form-update-${dataClient[0]}" value="${dataClient[3]}" name="email"></td>
      <td><input type="number" form="form-update-${dataClient[0]}" value="${dataClient[4]}" name="telephone"></td>
      <td>
        <div class="container d-flex justify-content-around">
          <input type="submit" form="form-update-${dataClient[0]}" class="btn btn-warning" value="Save">
        </div>
      </td>
    </form>
  `;
  row.innerHTML = template;
  return;
}

function accountUpdate(id) {
  const row = document.getElementById(`account-${id}`);
  console.log(row);
  const dataClient = arrayData(row.children);

  const template = `
    <form id="form-update-${dataClient[0]}" action="/account-update/${dataClient[0]}" method="POST">
      <th scope="row">${dataClient[0]}</th>
      <td><input type="number" form="form-update-${dataClient[0]}" value="${dataClient[1]}" name="account_no"></td>
      <td><input type="number" form="form-update-${dataClient[0]}" value="${dataClient[2]}" name="client_id"></td>
      <td><input type="number" form="form-update-${dataClient[0]}" value="${dataClient[3]}" name="balance"></td>
      <td><input type="number" form="form-update-${dataClient[0]}" value="${dataClient[4]}" name="type"></td>
      <td>
        <div class="container d-flex justify-content-around">
          <input type="submit" form="form-update-${dataClient[0]}" class="btn btn-warning" value="Save">
        </div>
      </td>
    </form>
  `;
  row.innerHTML = template;
  return;
}

function transactionUpdate(id) {
  const row = document.getElementById(`transaction-${id}`);
  console.log(row);
  const dataClient = arrayData(row.children);

  const template = `
    <form id="form-update-${dataClient[0]}" action="/transaction-update/${dataClient[0]}" method="POST">
      <th scope="row">${dataClient[0]}</th>
      <td><input type="number" form="form-update-${dataClient[0]}" value="${dataClient[1]}" name="account_ori"></td>
      <td><input type="number" form="form-update-${dataClient[0]}" value="${dataClient[2]}" name="account_des"></td>
      <td><input type="number" form="form-update-${dataClient[0]}" value="${dataClient[3]}" name="amount"></td>
      <td><input type="number" form="form-update-${dataClient[0]}" value="${dataClient[4]}" name="transaction_type"></td>
      <td><input type="text" form="form-update-${dataClient[0]}" value="${dataClient[5]}" name="trans_date"></td>
      <td>
        <div class="container d-flex justify-content-around">
          <input type="submit" form="form-update-${dataClient[0]}" class="btn btn-warning" value="Save">
        </div>
      </td>
    </form>
  `;
  row.innerHTML = template;
  return;
}

function accountTypeUpdate(id) {
  const row = document.getElementById(`account-type-${id}`);
  console.log(row);
  const dataClient = arrayData(row.children);

  const template = `
    <form id="form-update-${dataClient[0]}" action="/account-type-update/${dataClient[0]}" method="POST">
      <th scope="row">${dataClient[0]}</th>
      <td><input type="text" form="form-update-${dataClient[0]}" value="${dataClient[1]}" name="name"></td>
      <td><input type="text" form="form-update-${dataClient[0]}" value="${dataClient[2]}" name="description"></td>
      <td>
        <div class="container d-flex justify-content-around">
          <input type="submit" form="form-update-${dataClient[0]}" class="btn btn-warning" value="Save">
        </div>
      </td>
    </form>
  `;
  row.innerHTML = template;
  return;
}

function transactionTypeUpdate(id) {
  const row = document.getElementById(`transaction-type-${id}`);
  console.log(row);
  const dataClient = arrayData(row.children);

  const template = `
    <form id="form-update-${dataClient[0]}" action="/transaction-type-update/${dataClient[0]}" method="POST">
      <th scope="row">${dataClient[0]}</th>
      <td><input type="text" form="form-update-${dataClient[0]}" value="${dataClient[1]}" name="name"></td>
      <td><input type="text" form="form-update-${dataClient[0]}" value="${dataClient[2]}" name="description"></td>
      <td>
        <div class="container d-flex justify-content-around">
          <input type="submit" form="form-update-${dataClient[0]}" class="btn btn-warning" value="Save">
        </div>
      </td>
    </form>
  `;
  row.innerHTML = template;
  return;
}
