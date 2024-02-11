document.get
// let username = document.getElementById('username');
// let password = document.getElementById('password');
// let form = document.querySelector('form');

//     form.addEventListener('submit', (e) => {
//         // e.preventDefault();

//         if (username.value != 'null' && username.value != " ") {
//             console.log(username.value);
//             form.submit();
//         }
//         else {
//             console.log('Form didnt pass');
//         }
//     }

//     )

//Operations

let balance = document.getElementById("airtime-bal");

let top_up = document.getElementById("top-up-amt");

let recharge = document.getElementById("recharge-btn");

//Balance Check

let bal_details = document.getElementById("bal-details");
let data_bal_details = document.getElementById("data-bal-details");

//Airtime recharge

recharge.addEventListener("click", () => {
  let current_bal = Number(balance.innerText);
  balance.innerHTML = current_bal + Number(top_up.value);
  bal_details.innerHTML = balance.innerHTML;
}); 

//Buy Data

let data_bal = document.getElementById("data-bal");
let data_plan_choice = document.getElementById("data-plan-choice");
let purchase_data_btn = document.getElementById("purchase-data-btn");
let error_div = document.getElementById("error-div");
error_div.style.fontSize = "12px";
error_div.style.color = "red";
let error_div2 = document.getElementById("error-div2");
error_div2.style.fontSize = "12px";
error_div2.style.color = "red";

purchase_data_btn.addEventListener("click", () => {
  let plan = Number(data_plan_choice.value);
  let current_data_bal = Number(data_bal.innerText);
  let current_bal = Number(balance.innerText);

  if (plan == 1) {
    if (current_bal >= 200) {
      data_bal.innerHTML = current_data_bal + 250;
      balance.innerHTML = current_bal - 200;
      bal_details.innerHTML = balance.innerHTML;
      data_bal_details.innerHTML = data_bal.innerHTML;
    } else {
      error_div.innerHTML = `You do not have enough balance. 
            Please recharge or borrow airtime`;
    }
  } else if (plan == 2) {
    if (current_bal >= 1000) {
      data_bal.innerHTML = current_data_bal + 1024;
      balance.innerHTML = current_bal - 1000;
      bal_details.innerHTML = balance.innerHTML;
      data_bal_details.innerHTML = data_bal.innerHTML;

    } else {
      error_div.innerHTML = `You do not have enough balance. 
            Please recharge or borrow airtime`;
    }
  } else if (plan == 3) {
    if (current_bal >= 7000) {
      data_bal.innerHTML = current_data_bal + 7000;
      balance.innerHTML = current_bal - 7000;
      bal_details.innerHTML = balance.innerHTML;
      data_bal_details.innerHTML = data_bal.innerHTML;
    } else {
      error_div.innerHTML = `You do not have enough balance. 
            Please recharge or borrow airtime`;
    }
  } else {
    error_div.innerHTML = "Please select one of the three options!";
  }
});

//Borrow Airtime

let borrow_airtime_option = document.getElementById('borrow-airtime-option');
let borrow_airtime_btn = document.getElementById('borrow-airtime-btn');

borrow_airtime_btn.addEventListener('click', () => {
    let current_bal = Number(balance.innerHTML);
    let borrow_option = Number(borrow_airtime_option.value);

    if (current_bal <= 0) {
        if (borrow_option == 1) {
            balance.innerHTML = current_bal - 2000;
            bal_details.innerHTML = balance.innerHTML;
        }
        else if (borrow_option == 2) {
            balance.innerHTML = current_bal - 1000;
            bal_details.innerHTML = balance.innerHTML;
        }
        else if (borrow_option == 3) {
            balance.innerHTML = current_bal - 500;
            bal_details.innerHTML = balance.innerHTML;
        }
        else {
            error_div2.innerHTML = "Please select one of the three options!"
        }
    }
    else {
        error_div2.innerHTML = "You cant borrow, you still have airtime"
    }
})

//Borrow Data

let borrow_data_option = document.getElementById('borrow-data-option');
let borrow_data_btn = document.getElementById('borrow-data-btn');

borrow_data_btn.addEventListener('click', () => {
    let current_bal = Number(balance.innerHTML);
    let borrow_option_data = Number(borrow_data_option.value);
  let current_data_bal = Number(data_bal.innerText);

    if (current_bal <= 0) {
        if (borrow_option_data == 1) {
            data_bal.innerHTML = current_data_bal + 250;
      balance.innerHTML = current_bal - 200;
      bal_details.innerHTML = balance.innerHTML;
      data_bal_details.innerHTML = data_bal.innerHTML;
        }
        else if (borrow_option_data == 2) {
            balance.innerHTML = current_bal - 1000;
            bal_details.innerHTML = balance.innerHTML;
        }
        else if (borrow_option_data == 3) {
            balance.innerHTML = current_bal - 500;
            bal_details.innerHTML = balance.innerHTML;
        }
        else {
            error_div2.innerHTML = "Please select one of the three options!"
        }
    }
    else {
        error_div2.innerHTML = "You cant borrow data, you still have airtime to purchase"
    }
})