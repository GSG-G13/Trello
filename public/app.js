const employeeList = document.getElementById("employee-list");

fetch("/list/emp/task")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((employee) => {
      const employeeRow = document.createElement("tr");
      employeeRow.innerHTML = `
        <td>${employee.emp_name}</td>
        <td>${employee.position}</td>
        <td>${employee.email}</td>
        <td>${employee.name}</td>
        <td>${employee.description}</td>
      `;
      
      employeeList.appendChild(employeeRow);
    });
  });
