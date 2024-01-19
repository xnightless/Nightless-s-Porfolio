// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Get the "My Skills" link
  const skillsLink = document.querySelector('a[href="#skills"]');

  // Get the skills table
  const skillsTable = document.getElementById('skillsTable');

  // Initially hide the table
  skillsTable.style.display = 'none';

  // Add a click event listener to the "My Skills" link
  skillsLink.addEventListener('click', function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Toggle the visibility of the skills table
    if (skillsTable.style.display === 'none') {
      skillsTable.style.display = 'table'; // Show the table
    } else {
      skillsTable.style.display = 'none'; // Hide the table
    }
  });
});
