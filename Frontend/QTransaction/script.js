document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const response = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });
    const result = await response.json();
    alert(JSON.stringify(result, null, 2));
  });
  
  document.getElementById('transaction-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const user_id = document.getElementById('user_id').value;
    const amount = document.getElementById('amount').value;
    const type = document.getElementById('type').value;
    const response = await fetch('/transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id, amount, type }),
    });
    const result = await response.json();
    alert(JSON.stringify(result, null, 2));
  });
  