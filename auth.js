function getUsers() {
  const data = localStorage.getItem('zoo_users');
  if (!data) {
    const defaults = [
      { nama: 'Budi', username: 'budi', password: '12345' }
    ];
    localStorage.setItem('zoo_users', JSON.stringify(defaults));
    return defaults;
  }
  return JSON.parse(data);
}

function saveUsers(users) {
  localStorage.setItem('zoo_users', JSON.stringify(users));
}

function doLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errEl = document.getElementById('error-msg');

  if (!username || !password) {
    errEl.textContent = 'Username dan password tidak boleh kosong.';
    errEl.style.display = 'block';
    return;
  }

  const users = getUsers();
  const found = users.find(u => u.username === username && u.password === password);

  if (!found) {
    errEl.textContent = 'Username atau password salah.';
    errEl.style.display = 'block';
    return;
  }

  localStorage.setItem('zoo_logged', JSON.stringify({ nama: found.nama, username: found.username }));
  window.location.href = 'index.html';
}

function doRegister() {
  const nama = document.getElementById('nama').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const konfirmasi = document.getElementById('konfirmasi').value.trim();
  const errEl = document.getElementById('error-msg');
  const sucEl = document.getElementById('success-msg');

  errEl.style.display = 'none';
  sucEl.style.display = 'none';

  if (!nama || !username || !password || !konfirmasi) {
    errEl.textContent = 'Semua kolom harus diisi.';
    errEl.style.display = 'block';
    return;
  }

  if (password !== konfirmasi) {
    errEl.textContent = 'Password dan konfirmasi tidak cocok.';
    errEl.style.display = 'block';
    return;
  }

  const users = getUsers();
  if (users.find(u => u.username === username)) {
    errEl.textContent = 'Username sudah digunakan.';
    errEl.style.display = 'block';
    return;
  }

  users.push({ nama, username, password });
  saveUsers(users);

  sucEl.textContent = 'Akun berhasil dibuat! Silakan login.';
  sucEl.style.display = 'block';

  setTimeout(() => {
    window.location.href = 'login.html';
  }, 1500);
}

function logout() {
  localStorage.removeItem('zoo_logged');
}
