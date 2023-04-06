const taskDropdown = document.getElementById("employee");

fetch('/employees')
  .then(response => response.json())
  .then(data => {
    data.forEach(emp => {
      const taskOption = document.createElement("option");
      taskOption.value = emp.id;
      taskOption.textContent = emp.name;
      taskDropdown.appendChild(taskOption);
    });
  });