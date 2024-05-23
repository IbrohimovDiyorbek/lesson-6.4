fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(date => createCards(date))
    .catch(error => console.error('Error fetching date:', error));
function createCards(users) {
    const container = document.getElementById('user-cards-container');

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';

        const name = document.createElement('h2');
        name.textContent = user.name;

        const username = document.createElement('p');
        username.textContent = `Username: ${user.username}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${user.email}`;

        card.appendChild(name);
        card.appendChild(username);
        card.appendChild(email);

        container.appendChild(card);
    })
}