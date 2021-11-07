
  function clearEmployeesPlaceholder() {
    document.getElementById(PLACEHOLDER).innerHTML = '';
 }
 


 function showEmployees(employees) {
    clearEmployeesPlaceholder();
    const ul = document.createElement("ul");
   
    for (let employee of employees) {
		if (employee.managerRef) {
 let manager = findById(employee.managerRef);
 const managerSpan = document.createElement("span");
 const managerSelect = document.createElement("select");
 fillSelect(managerSelect, getEmployeesOptions(), 	employee.managerRef);
 managerSelect.addEventListener('change',
  () => employee.managerRef=managerSelect.value);
 managerSpan.innerHTML = " <b>Руководитель:</b> ";
 li.appendChild(managerSpan);
 li.appendChild(managerSelect);
}
     const li = document.createElement("li");
     ul.appendChild(li);
     li.innerHTML = employee.name+" "+employee.surname;
     const removeButton = document.createElement("button");
     removeButton.innerHTML = "Удалить";
     removeButton.addEventListener('click',
      () => removeEmployeeUI(employee.id));
     li.appendChild(removeButton);
     
    }
    document.getElementById(PLACEHOLDER).appendChild(ul);
   }


   function runUI() {
    showEmployees(DATA.employees);
 }

 function addEmployeeUI() {
	let errorHTML = "";
 const name = document.getElementById("name").value;
 if (name=="") {
  errorHTML += "- Имя сотрудника должно быть задано<br>";
 }
 const surname = document.getElementById("surname").value;
 if (surname=="") {
  errorHTML += "- Фамилия сотрудника должна быть задана<br>";
 }
	document.getElementById("addEmployeeFormErrorMessage")
 		.innerHTML = errorHTML;
	if (errorHTML.length != 0) return;

	addEmployee(name, surname);
 showEmployees(DATA.employees);
}

   
 
function removeEmployeeUI(id) {
    removeEmployee(id);
    showEmployees(DATA.employees);
   }

   
   function removeEmployee(id) {
    let index = 0;
    for (let e of DATA.employees) {
     if (e.id===id) break;
     index++;
    }
    DATA.employees.splice(index, 1);
   }
   

   function fillSelect(select, values, selectedValue) {
    for (let val of values) {
     const option = document.createElement("option");
     option.text = val.text;
     option.value = val.value;
     if (selectedValue==option.value) option.selected=true;
     select.appendChild(option);
    }
   }
   function getEmployeesOptions() {
    let options = [];
    for (let e of DATA.employees) {
     options.push({text:e.name+' '+e.surname, value:e.id});
    }
    return options;
   }

   
