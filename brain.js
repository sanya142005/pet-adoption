// Pet Data
const pets = [
    { name: 'Max', type: 'dog', age: 'young', description: 'Max is a 2-year-old friendly dog.' },
    { name: 'Luna', type: 'cat', age: 'adult', description: 'Luna is a 3-year-old gentle cat.' },
    { name: 'Tweety', type: 'bird', age: 'young', description: 'Tweety is a small, yellow bird.' }
];

// Pet Search Functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchValue = document.getElementById('pet-search').value.toLowerCase();
    const resultsContainer = document.getElementById('pet-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    const filteredPets = pets.filter(pet => pet.type.includes(searchValue));

    if (filteredPets.length > 0) {
        filteredPets.forEach(pet => {
            const listItem = document.createElement('li');
            listItem.textContent = `${pet.name} (${pet.type}): ${pet.description}`;
            resultsContainer.appendChild(listItem);
        });
    } else {
        resultsContainer.textContent = 'No pets found.';
    }
});

// Pet Filter by Age
function filterPetsByAge(age) {
    const resultsContainer = document.getElementById('pet-results');
    resultsContainer.innerHTML = '';

    const filteredPets = pets.filter(pet => pet.age === age);

    if (filteredPets.length > 0) {
        filteredPets.forEach(pet => {
            const listItem = document.createElement('li');
            listItem.textContent = `${pet.name} (${pet.type}): ${pet.description}`;
            resultsContainer.appendChild(listItem);
        });
    } else {
        resultsContainer.textContent = 'No pets found in this age category.';
    }
}

// Toggle Dark and Light Mode
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Dark/Light Mode';
toggleBtn.classList.add('toggle-btn');
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
});

// Donation Form Confirmation
document.getElementById('donationForm').addEventListener('submit', function(event) {
    const donationAmount = document.getElementById('donation-amount').value;
    if (donationAmount < 1) {
        event.preventDefault(); // Prevent form submission
        alert('Please enter a valid donation amount.');
    } else {
        alert(`Thank you for donating $${donationAmount}!`);
    }
});
