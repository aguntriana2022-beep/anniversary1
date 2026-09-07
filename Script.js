let tanggal = "";

function tekan(angka) {
  if (tanggal.length < 8) {
    tanggal += angka;

    document.getElementById("display").innerText =
      "•".repeat(tanggal.length);
  }
}

function hapus() {
  tanggal = tanggal.slice(0, -1);

  document.getElementById("display").innerText =
    "•".repeat(tanggal.length);
}

function cekTanggal() {

  // NANTI KITA GANTI DENGAN TANGGAL JADIAN KALIAN

  if (tanggal === "22022022") {
    tampilkanAnniversary();
} else {
    alert("Hmm... tanggalnya salah 😝");
}
}
function tampilkanAnniversary() {

  document.body.innerHTML = `
    <div class="anniversary">

      <div class="heart">❤️</div>

      <h1>Happy Anniversary</h1>

      <h2>Sayangku 💕</h2>

      <p class="tanggal">
        22 Februari 2022
      </p>

      <img src="foto/foto1.jpg" alt="Foto kita">

      <p class="pesan">
        Nggak terasa ya, kita sudah sejauh ini.
        Terima kasih sudah tetap bersamaku sampai hari ini ❤️
      </p>

      <button onclick="mulaiKejutan()">
        BUKA KEJUTAN 💕
      </button>

    </div>
  `;
}

function mulaiKejutan() {

  document.body.innerHTML = `
    <div class="game">

      <h1>Tangkap Hatiku ❤️</h1>

      <p>Tangkap 10 hati yang jatuh!</p>

      <h2>❤️ <span id="skor">0</span> / 10</h2>

      <div id="arena"></div>

    </div>
  `;

  mulaiJatuh();
}
let skor = 0;

function mulaiJatuh() {

  let hati = document.createElement("div");

  hati.innerText = "❤️";
  hati.className = "hati";

  hati.style.left =
    Math.random() * 85 + "%";

  document.getElementById("arena").appendChild(hati);

  hati.addEventListener("click", function() {

    skor++;

    document.getElementById("skor").innerText = skor;

    hati.remove();

    if (skor >= 10) {
      menangGame();
    } else {
      mulaiJatuh();
    }

  });

  setTimeout(function() {
    if (hati.parentElement) {
      hati.remove();

      if (skor < 10) {
        mulaiJatuh();
      }
    }
  }, 4000);
}
function menangGame() {

  document.body.innerHTML = `
    <div class="selesai">

      <div class="big-heart">❤️</div>

      <h1>Level 1 Selesai! 🎉</h1>

      <p>
        Kamu berhasil menangkap semua hatiku ❤️
      </p>

      <button onclick="levelDua()">
        LANJUT 💕
      </button>

    </div>
  `;
}
function levelDua() {

  document.body.innerHTML = `
    <div class="puzzle-page">

      <h1>Susun Foto Kita 🧩❤️</h1>

      <p>Susun potongan foto sampai kembali seperti semula.</p>

      <div id="puzzle"></div>

      <p id="pesanPuzzle"></p>

    </div>
  `;

  buatPuzzle();
}
let posisiPuzzle = [];

function buatPuzzle() {

  posisiPuzzle = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  // Mengacak potongan foto
  posisiPuzzle.sort(() => Math.random() - 0.5);

  tampilkanPuzzle();
}

function tampilkanPuzzle() {

  let puzzle = document.getElementById("puzzle");

  puzzle.innerHTML = "";

  posisiPuzzle.forEach((nomor, posisi) => {

    let potongan = document.createElement("div");

    potongan.className = "potongan";

    potongan.style.backgroundImage =
      "url('foto/fotopazel.jpg')";

    potongan.style.backgroundPosition =
      `${(nomor % 3) * 50}% ${Math.floor(nomor / 3) * 50}%`;

    potongan.onclick = function() {
      klikPuzzle(posisi);
    };

    puzzle.appendChild(potongan);

  });
}
let pilihanPertama = null;

function klikPuzzle(posisi) {

  if (pilihanPertama === null) {

    pilihanPertama = posisi;

  } else {

    // Tukar dua potongan
    let sementara = posisiPuzzle[pilihanPertama];

    posisiPuzzle[pilihanPertama] =
      posisiPuzzle[posisi];

    posisiPuzzle[posisi] =
      sementara;

    pilihanPertama = null;

    tampilkanPuzzle();

    cekPuzzle();
  }
}
function cekPuzzle() {

  let benar = true;

  for (let i = 0; i < posisiPuzzle.length; i++) {

    if (posisiPuzzle[i] !== i) {
      benar = false;
      break;
    }

  }

  if (benar) {

    document.getElementById("pesanPuzzle").innerHTML = `
      🎉 Puzzle selesai! ❤️<br>
      Ternyata foto kita memang paling indah kalau lengkap.
      <br><br>
      <button onclick="levelTiga()">LANJUT 💕</button>
    `;

  }
}
let pertanyaanSekarang = 0;
let skorGame3 = 0;

const pertanyaan = [
  {
    soal: "Tanggal jadian kita kapan? ❤️",
    pilihan: [
      "22 Februari 2022",
      "14 Februari 2022",
      "22 Januari 2022",
      "20 Februari 2022"
    ],
    benar: 0
  },

  {
    soal: "Siapa yang pertama kali ngajak ngobrol? 😆",
    pilihan: [
      "Aku",
      "Kamu",
      "Teman kita",
      "Lupa 😝"
    ],
    benar: 0
  },

  {
    soal: "Apa yang paling aku suka dari kamu? ❤️",
    pilihan: [
      "Senyummu",
      "Semuanya",
      "Cara kamu perhatian",
      "Rahasia 🤭"
    ],
    benar: 1
  },

  {
    soal: "Kalau kita jalan, aku paling suka... 🥰",
    pilihan: [
      "Makan bareng",
      "Foto-foto",
      "Ngobrol berdua",
      "Semuanya"
    ],
    benar: 3
  },

  {
    soal: "Apakah aku masih sayang kamu sampai sekarang? ❤️",
    pilihan: [
      "Iya ❤️",
      "Nggak",
      "Mungkin",
      "Banget ❤️❤️❤️"
    ],
    benar: 3
  }
];

function levelTiga() {

  pertanyaanSekarang = 0;
  skorGame3 = 0;

  tampilkanPertanyaan();
}
function tampilkanPertanyaan() {

  let data = pertanyaan[pertanyaanSekarang];

  document.body.innerHTML = `
    <div class="quiz">

      <p class="nomor">
        Pertanyaan ${pertanyaanSekarang + 1}
        / ${pertanyaan.length}
      </p>

      <h1>Seberapa Kenal Kamu? 💕</h1>

      <div class="soal">
        ${data.soal}
      </div>

      <div id="pilihan"></div>

    </div>
  `;

  let pilihan = document.getElementById("pilihan");

  data.pilihan.forEach((jawaban, index) => {

    let tombol = document.createElement("button");

    tombol.innerText = jawaban;

    tombol.onclick = function() {
      jawab(index);
    };

    pilihan.appendChild(tombol);
  });
}
function jawab(index) {

  let data = pertanyaan[pertanyaanSekarang];

  if (index === data.benar) {
    skorGame3++;
  }

  pertanyaanSekarang++;

  if (pertanyaanSekarang < pertanyaan.length) {

    setTimeout(() => {
      tampilkanPertanyaan();
    }, 300);

  } else {

    setTimeout(() => {
      selesaiGame3();
    }, 300);
  }
}
function selesaiGame3() {

  let pesan = "";

  if (skorGame3 === 5) {
    pesan = "Wahhh kamu benar semua! 😭❤️ Kamu benar-benar kenal aku!";
  } else if (skorGame3 >= 3) {
    pesan = "Lumayan 😆❤️ Berarti kamu masih hafal tentang kita.";
  } else {
    pesan = "Yahhh 😝 Harus lebih sering mengingat kenangan kita!";
  }

  document.body.innerHTML = `
    <div class="selesai">

      <div class="big-heart">❤️</div>

      <h1>Game 3 Selesai!</h1>

      <h2>${skorGame3} / ${pertanyaan.length}</h2>

      <p>${pesan}</p>

      <button onclick="memoryKita()">
        LIHAT MEMORY KITA 📸
      </button>

    </div>
  `;
}
function memoryKita() {

  document.body.innerHTML = `
    <div class="memory">

      <h1>Memory Kita ❤️</h1>

      <p class="subtitle">
        Beberapa momen yang selalu ingin aku ingat.
      </p>

      <div class="memory-card">

        <img src="foto/foto1.jpg">

        <h2>Awal dari semuanya ❤️</h2>

        <p>
          22 Februari 2022.
          Hari dimana cerita kita dimulai.
        </p>

      </div>

      <div class="memory-card">

        <img src="foto/fotohari.jpg">

        <h2>Hari-hari bersama 🥰</h2>

        <p>
          Banyak hal yang sudah kita lewati
          bersama sampai hari ini.
        </p>

      </div>

      <div class="memory-card">

        <img src="foto/fotoberdua.jpg">

        <h2>Dan masih terus berlanjut... 💕</h2>

        <p>
          Semoga masih banyak cerita dan
          kenangan yang bisa kita buat bersama.
        </p>

      </div>

      <button onclick="pesanTerakhir()">
        ADA SATU HAL LAGI ❤️
      </button>

    </div>
  `;
}
function pesanTerakhir() {
  document.body.innerHTML = `
    <div class="ending">

      <p class="finally">❤️ Finally...</p>

      <div class="foto-ending">
        <img src="foto/fotoberdua.jpg" alt="Foto kita">
      </div>

      <h1>Untuk Kamu...</h1>
      <div class="surat">

  <p>
    Hallaw sayanggggg ❤️
    Happy Anniversary yaa yang ke 1.493 hari,
    213 minggu, 49 bulan, 4 tahun.
    Ga kerasa yaa kita uda sejauhh inii sama-sama.
  </p>

  <p>
    Banyak banget hall yang udah kita laluin bareng-barenggg.
    Makasii buat selama iniii sudaa mau berjuang bareng akuu,
    makasih udah nerima aku.
    Susahh seneng kita jalaninn bareng-bareng.
  </p>

  <p>
    Aku pengen banget kamu kaya giniii terus.
    Kamuu jangan berubahh yaaa!!
    Aku gamau kamu berubahhh,
    karna kita suda sejauhh inii nglewatinn
    rintangan-rintangan yang cukupp beratt.
  </p>

  <p>
    Aku beruntung banget bisa kenall sama orang sebaikk kamuuu.
    Aku ga pernah nyesell ketemuu kamuuuu.
    Kamu jangan cari kebahagiaan di orang lain ya!!
    Cukup di aku ajaaaa hehe ❤️
  </p>

  <p>
    Pokoonyaa akuu berterimakasiii karena kitaa
    bisa bertahan sejauhh iniiii.
    Mungkin kalo aku ga kenal kamu,
    aku ga bakal tau rasanya di sayangg
    sesayangg ini sama kamuuuu.
  </p>

  <p>
    Makasii buat kesabaran yang kamu punyaaa,
    makasiii jugaa selalu ada buat akuuuu.
    Aku pengenn truss sama kamuuu,
    gamau tauu pokonyaa kamu harus sama akuuuu.
  </p>

  <p>
    Your presence in my life is more colorful,
    and I have become a better person than before.....
  </p>

  <p>
    Kamuu tauu kan?
    Kalo kamu ituu rumahh akuuuu,
    tempat pulangg akuuu.
    Kaloo aku gada kamuu, aku pulang dmanaa??
    Aku ga punya rumah lagi selain kamυυυυυυυ 🥺🤍
  </p>

  <p>
    Remain the most important person in my life,
    yes, I love you forever.
    Like I love my mother. 🤍🤍🤍
  </p>

  <p class="love">
    I lovee moreeee sayangkuuuu ❤️❤️❤️
    <br><br>
    Love you,
    Resa Sri Fitria 🤍
  </p>

</div>
      <button class="music-button" onclick="putarMusik()">
        ▶ Putar lagu kita 🎵
      </button>

      <audio id="lagu" loop>
        <source src="musik/lagu.mp3" type="audio/mpeg">
      </audio>

      <p id="statusMusik"></p>

      <div class="tanggal-ending">
        22 • 02 • 2022 — ∞
      </div>
<p class="pesan-akhir">
  semoga kamu ga bilang alay, hehe🥰🥰🥰
</p>
    </div>
    `;

  let lagu = document.getElementById("lagu");
  lagu.play();
}
function putarMusik() {
  let lagu = document.getElementById("lagu");
  let tombol = document.querySelector(".music-button");
  let status = document.getElementById("statusMusik");

  if (lagu.paused) {
    lagu.play();
    tombol.innerText = "⏸ Jeda lagu";
    status.innerText = "🎵 Untuk kita... ❤️";
  } else {
    lagu.pause();
    tombol.innerText = "▶ Lanjutkan lagu";
    status.innerText = "";
  }
}