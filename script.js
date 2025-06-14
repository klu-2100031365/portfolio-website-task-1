document.getElementById('contactForm').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all the fields!');
    e.preventDefault();
  } else if (!email.includes('@')) {
    alert('Enter a valid email address!');
    e.preventDefault();
  }
});
