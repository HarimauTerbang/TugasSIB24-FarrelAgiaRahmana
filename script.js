let headerImage = document.getElementById("header_Image");

function zoomOut(){
  headerImage.style.transform = "scale(1.1)";
  headerImage.style.transition = "transform 0.5s ease-in-out";
}

setTimeout(zoomOut, 100);


// PRODUCT API
document.addEventListener("DOMContentLoaded", getData);

function getData() {
  fetch('https://crudcrud.com/api/815e2dae163b4d9ba18e82516c7f54fe')
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
  const container = document.getElementById('data-container');
  container.innerHTML = ''; 
  
  if (data && data.length > 0) {
    const ul = document.createElement('ul');
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = JSON.stringify(item); 
      ul.appendChild(li);
    });
    container.appendChild(ul);
  } else {
    container.textContent = 'No data available';
  }
}


  