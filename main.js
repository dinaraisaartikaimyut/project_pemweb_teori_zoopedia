<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Kategori Hewan - Zoopedia</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <div class="navbar">
    <div class="logo"><span class="z">Zoo</span><span class="p">pedia</span></div>
    <nav>
      <a href="index.html">Beranda</a>
      <a href="kategori.html" class="active">Kategori</a>
      <a href="kuis.html">Kuis</a>
    </nav>
    <div class="user-info">
      Halo, <span class="uname" id="nama-user">Pengguna</span>
      <button class="btn-logout" onclick="logout()">Keluar</button>
    </div>
  </div>

  <div class="page-header">
    <h2>Kategori Hewan</h2>
    <p>Pilih kategori untuk menjelajahi hewan-hewan beserta info uniknya</p>
  </div>

  <div class="section">
    <div class="kategori-grid">

      <div class="kategori-card">
        <div class="kat-banner">🦁</div>
        <div class="kat-info">
          <h3>Mamalia</h3>
          <p>Hewan berdarah panas yang menyusui anaknya dan bernapas dengan paru-paru. Contoh: Singa, Gajah, Lumba-lumba, Kelelawar, Paus Biru, Rubah.</p>
        </div>
      </div>

      <div class="kategori-card">
        <div class="kat-banner">🦎</div>
        <div class="kat-info">
          <h3>Reptil</h3>
          <p>Hewan melata berdarah dingin dengan kulit bersisik. Berkembang biak dengan bertelur. Contoh: Komodo, Buaya, Piton, Bunglon, Penyu, Iguana.</p>
        </div>
      </div>

      <div class="kategori-card">
        <div class="kat-banner">🐸</div>
        <div class="kat-info">
          <h3>Amfibi</h3>
          <p>Hewan yang bisa hidup di darat dan air. Kulit lembap dan bisa bernapas lewat kulit. Contoh: Katak Pohon, Kodok Tebu, Salamander, Katak Dart, Caecilian.</p>
        </div>
      </div>

      <div class="kategori-card">
        <div class="kat-banner">🦅</div>
        <div class="kat-info">
          <h3>Burung</h3>
          <p>Hewan berbulu bersayap dan berparuh. Berdarah panas dan berkembang biak dengan bertelur. Contoh: Elang Harpy, Pinguin, Merak, Burung Hantu, Kakaktua, Kolibri.</p>
        </div>
      </div>

      <div class="kategori-card">
        <div class="kat-banner">🐟</div>
        <div class="kat-info">
          <h3>Ikan</h3>
          <p>Hewan air yang bernapas dengan insang dan bergerak menggunakan sirip. Contoh: Hiu Paus, Ikan Buntal, Ikan Badut, Piranha, Coelacanth.</p>
        </div>
      </div>

      <div class="kategori-card">
        <div class="kat-banner">🦋</div>
        <div class="kat-info">
          <h3>Serangga</h3>
          <p>Hewan berkaki enam dengan tubuh berbuku-buku. Kelompok hewan paling beragam di Bumi. Contoh: Kupu-kupu Monarch, Lebah Madu, Semut, Kumbang Goliath, Nyamuk.</p>
        </div>
      </div>

    </div>
  </div>

  <script src="main.js"></script>
</body>
</html>
