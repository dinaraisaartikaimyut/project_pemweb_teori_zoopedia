const soalKuis = [
  {
    pertanyaan: 'Ikan Hiu harus terus bergerak agar tidak tenggelam dan mati.',
    gambar: '🦈',
    jawaban: 'mitos',
    penjelasan: 'Ini MITOS! Tidak semua hiu harus terus bergerak. Beberapa spesies hiu seperti hiu nurse bisa diam di dasar laut dan tetap bernapas menggunakan otot insang mereka.'
  },
  {
    pertanyaan: 'Bunglon mengubah warna tubuhnya untuk berkomunikasi dan mengatur suhu tubuh, bukan hanya untuk kamuflase.',
    gambar: '🦎',
    jawaban: 'fakta',
    penjelasan: 'Ini FAKTA! Penelitian menunjukkan bahwa perubahan warna bunglon lebih banyak digunakan untuk komunikasi antar sesama bunglon dan mengatur suhu, bukan sekadar bersembunyi dari predator.'
  },
  {
    pertanyaan: 'Gajah adalah satu-satunya hewan selain manusia yang diketahui memiliki ritual kematian.',
    gambar: '🐘',
    jawaban: 'fakta',
    penjelasan: 'Ini FAKTA! Gajah terbukti melakukan perilaku berkabung. Mereka mendekati jasad anggota keluarga, menyentuhnya dengan belalai, dan bahkan membawa tulang belulang dengan mereka selama bertahun-tahun.'
  },
  {
    pertanyaan: 'Burung Hantu bisa memutar kepalanya penuh 360 derajat.',
    gambar: '🦉',
    jawaban: 'mitos',
    penjelasan: 'Ini MITOS! Burung Hantu hanya bisa memutar kepalanya sekitar 270 derajat, bukan 360 derajat penuh. Leher mereka punya 14 tulang vertebra (manusia hanya 7) yang memungkinkan rotasi besar tersebut.'
  },
  {
    pertanyaan: 'Katak bisa menyerap air melalui kulitnya tanpa perlu minum.',
    gambar: '🐸',
    jawaban: 'fakta',
    penjelasan: 'Ini FAKTA! Katak tidak minum air menggunakan mulut mereka. Mereka menyerap air langsung melalui kulit yang tipis dan lembap, terutama melalui area khusus di perut yang disebut "drinking patch".'
  }
];

let currentSoal = 0;
let skor = 0;
let sudahJawab = false;

function tampilSoal() {
  const soal = soalKuis[currentSoal];
  document.getElementById('soal-img').textContent = soal.gambar;
  document.getElementById('soal-pertanyaan').textContent = soal.pertanyaan;
  document.getElementById('soal-num').textContent = `${currentSoal + 1} / ${soalKuis.length}`;
  document.getElementById('btn-mitos').disabled = false;
  document.getElementById('btn-fakta').disabled = false;
  sudahJawab = false;
}

function jawab(pilihan) {
  if (sudahJawab) return;
  sudahJawab = true;

  document.getElementById('btn-mitos').disabled = true;
  document.getElementById('btn-fakta').disabled = true;

  const soal = soalKuis[currentSoal];
  const benar = pilihan === soal.jawaban;

  if (benar) skor++;

  const snackbar = document.getElementById('snackbar');
  snackbar.className = 'snackbar ' + (benar ? 'benar' : 'salah');
  document.getElementById('sb-icon').textContent = benar ? '✅' : '❌';
  document.getElementById('sb-status').textContent = benar
    ? 'Benar! Itu ' + soal.jawaban.toUpperCase() + '.'
    : 'Salah! Jawaban yang benar adalah ' + soal.jawaban.toUpperCase() + '.';
  document.getElementById('sb-penjelasan').textContent = soal.penjelasan;

  // ganti teks tombol kalau ini soal terakhir
  const isLast = (currentSoal === soalKuis.length - 1);
  document.getElementById('sb-next').textContent = isLast ? 'Lihat Hasil →' : 'Soal berikutnya →';

  snackbar.classList.add('show');
}

function lanjut() {
  const snackbar = document.getElementById('snackbar');
  snackbar.classList.remove('show');

  setTimeout(() => {
    currentSoal++;
    if (currentSoal < soalKuis.length) {
      tampilSoal();
    } else {
      tampilHasil();
    }
  }, 300);
}

function tampilHasil() {
  document.getElementById('kuis-topbar').style.display = 'none';
  document.getElementById('soal-box').style.display = 'none';

  const hasilBox = document.getElementById('hasil-box');
  hasilBox.classList.add('show');

  const salah = soalKuis.length - skor;
  document.getElementById('stat-benar').textContent = skor;
  document.getElementById('stat-salah').textContent = salah;

  let pesan, sub;
  if (skor === soalKuis.length) {
    pesan = '🎉 Sempurna!';
    sub = 'Luar biasa! Kamu menjawab semua soal dengan benar!';
  } else if (skor >= 3) {
    pesan = '👍 Bagus!';
    sub = 'Kamu cukup tahu tentang dunia hewan. Terus belajar ya!';
  } else {
    pesan = '📖 Terus Belajar!';
    sub = 'Masih banyak fakta seru tentang hewan yang bisa kamu pelajari!';
  }
  document.getElementById('hasil-pesan').textContent = pesan;
  document.getElementById('hasil-sub').textContent = sub;

}

tampilSoal();
