document.querySelectorAll('.summary-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
});

document.querySelector('.all-summary-btn').addEventListener('click', () => {
  const content = document.querySelector('.all-summary-content');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
});

function toggleSummary(content) {
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

const transcripts = [{
    title: "Interview ke-1",
    content: `Q: Halo dengan bapak siapa kalau boleh tau? 
         A: Martinus Wabiser
         Q: Untuk divisi dan penugasan dimana ya pak?
         A: SRM 66, di OUR4
         Q: Untuk tahun lahir diantara 4 ini yang mana ya pak?(menunjukkan generasi)
         A: Di Generaasi X(tahun kelahiran 1965-1980
         Q: Baik pak, sebelumnya apakah bapak sudah pernah menggunakan Digital Workspace?
         A: Ya sudah, dulu di RidgeCamp saya pakai
         Q: Untuk aksesnya sendiri bapak akses lewat mana ya?
         A: Biasanya dari komputer perusahaan
         Q: Berarti menggunakan jaringan perusahaan juga ya?/
         A: Ya
         Q: Apakah ada kendala yang dihadapi saat menggunakan komputer dan jaringan dari perusahaan tersebut?
         A: Ada, aplikasi susah dibuka karena jaringan, dan kendala yang cukup menjadi perhatian adalah ketika listrik mati
         Q: Apakah tidak menggunakan Digital Workspace yang versi mobile?
         A: Pernah install, tapi sulit dibuka dan terkadang minta login terus
         Q: Bisa diperlihatkan untuk aplikasi yang sudah dipasang pak?
         A: Oalah, saya sudah ganti HP, aplikasi itu ada di HP yang lama
         Q: Oh baik kalau begitu pak, mungkin nanti bisa di install kan, kita lanjut untuk pertanyaan selanjutnya. Sudah berapa lama menggunakan Digital Workspace ini
         A: Hmm.. dari awal diperintahkan sudah menggunakannya saya lupa pastinya tapi dulu selalu mengisi form yang ada
         Q: Biasanya mengisi form apa ya pak, yang paling sering?
         A: Biasanya CCC yang diisi
         Q: Oh begitu, jadi menurut bapak bagaiman pengisian form CCC tersebut, apakah sulit atau memang sudah memudahkan bapak sendiri sebagai pengguna
         A: Sudah  cukup memudahkan  karena sudah jelas, sesuai dengan risiko dan terkait kontrol risiko nya
         Q: Baik pak, jadi sudah cukup mudah digunakan ya, oh iya apakah bapak pernah  melakukan penarikan data di Digital Workspace?
         A: Tidak, karena tidak mengetahui caranya
         Q: Baik pak, dan dari bapak sendiri apakah memiliki saran atau hal yang  bisa diperbaiki untuk Digital Workspace ini?
         A: Tidak ada
         Q: Oke, mungkin seperti sebelumnya tadi, untuk masalah jaringan dan ReLogin yang cukup merepotkan ya
         A: Ya benar, dan juga masalah authenticator untuk login juga
         Q: Oke pak, baik terima kasih untuk interviewnya, semoga dengan masalah yang bapak hadapi ini kedepannya bisa diperbaiki untuk kebaikan bersama juga
         `,
    summary: `Responden menggunakan Digital Workspace pada komputer perusahaan dan HP
         Mengakses melalui jaringan perusahaan
         Kendala yang dihadapi meliputi masalah jaringan, listrik mati, dan sulit login pada versi mobile
         Form yang sering diisi adalah CCC
         Belum pernah menarik data dari Digital Workspace`
  },
  {
    title: "Interview ke-2",
    content: `Q: Halo pak, saya Ahmad ingin bertanya sedikit tentang penggunaan Digital Workspace, kalau boleh tau dengan bapak siapa?
         A: Iya silakan, saya Stefanus May dari SRM 700 biasanya di 66 ataupun 68
         Q: Untuk akses Digital Workspace sendiri biasanya bapak akses lewat mana?
         A: Dari komputer dan juga hp jika dilapangan
         Q: Berarti kalau dari komputer menggunakan jaringan kantor dan kalau hp dengan data internet pribadi ya
         A: Iya benar
         Q: Kalau untuk pemakaian sudah berapa ya pak?
         A: Saya mulai di Februari 2023 jadi baru menggunakannya
         Q: Oh begitu ya pak, untuk form yang sering digunakan apa saja ya pak?
         A: Biasanya safety meeting, inspeksi dan juga CCC
         Q: Jadi dalam penggunaannya apakah pernah mengalami kendala?
         A: Ketika saya menggunakan Komputer aman saja, namun ketika menggunakan HP yang sering terjadi adalah masalah jaringan
         Q: Ok baik pak, lalu menurut bapak secara keseluruhan bagaimana penilaian bapak untuk Digital Workspace?
         A: sudah bagus dan memudahkan kita sebagai pekerja dilapangan
         Q: Lalu apakah bapak pernah menarik data dari digital Workspace?
         A: Iya pernah untuk data yang diperlukan
         Q: Ok pak, lalu  apakah ada saran untuk aplikasi ini?
         A: Saran saya perlu adanya form untuk pejalan kaki karena alasan takut tertabrak ketika saat patroli, seperti mengingatkan pejalan kaki untuk tidak menggunakan telfon dijalan, selain itu juga masalah login yang berulang jika dilakukan di HP
         Q: Ok pak, ternyata masalah login  ini memang sering terjadi ya, dan tentunya masalah jaringan juga ya, baik kalau begitu pak terimakasih atas waktunya untuk interview`,
    summary: `Responden menggunakan Digital Workspace pada komputer dan HP saat di lapangan
         Penggunaan dimulai pada Februari 2023
         Form yang sering diisi: Safety Meeting, Inspeksi, dan CCC
         Kendala utama: masalah jaringan saat menggunakan HP
         Saran: Penambahan form untuk pejalan kaki dan perbaikan masalah login yang berulang`
  },
  {
    title: "Interview ke-3",
    content: `Q: Oke mas, berarti mas uda pernah pakai Digital Workspace ini ya? biasanya mas gunakan dimana ya?
         A: Biasanya di HP pribadi tapi kalau ada masalah saya kerjakan di komputer kantor
         Q: Masalah seperti apa itu mas?
         A: Biasanya masalah jaringan dan tidak bisa login, dan saya juga sudah konfirmasi kebagian safety dan akan ditanggapi memang kendala jaringan, lalu saya menggunakan komputer kantor
         Q: Oh begitu ya pak, kalau untuk penggunaannya sendiri sudah berapa lama?
         A: Sudah dari awal diperintahkan, ya sekitar 2 tahun lah
         Q: Menurut masnya, apakah digital workspace sudah memenuhi informasi yang dibutuhkan?
         A: Lumayan lengkap ya mas, sudah mempermudah ceklis juga , tidak perlu tulis dan tidak print
         Q: Oke, dan menurut mas apakah pengisiannya sulit dan memakan waktu yang lama?
         A: Tidak sulit sih mas, ga nyampe 5 menit juga
         Q: Oke, lalu form apa yang sering dipakai mas?
         A: Biasanya CCC dan Inspeksi
         Q: Dan apakah pernah menarik data dari Digital Workspace
         A: Belum pernah karena tidak tahu bagaimana caranya
         Q: Oh begitu ya mas, lalu apakah ada kendala yang sering terjadi?
         A: Jarang sih mas, biasanya error di HP, dan biasanya di HP temen yang lainnya juga error, dan kalau error seperti itu saya isi manual
         Q: Ok mas, berarti yang manual masih dipakai ya. Lalu apakah ada saran untuk kedepannya?
         A: Paling untuk masalah login untuk anak baru, karena tidak bisa buat akun sendiri dan harus menghubungi pihak ketiga untuk itu, jadi pengennya bisa sendiri
         Q: Oh begitu ya mas, tapi mungkin hal tersebut mengingat masalah keamanan data karyawan juga. Ok kalau begitu mas, terimakasih atas waktunya.`,
    summary: `Responden menggunakan Digital Workspace pada HP pribadi dan komputer kantor
            Penggunaan dimulai sekitar 2 tahun yang lalu
            Form yang sering diisi: CCC dan Inspeksi
            Kendala: error di HP, biasanya solusi adalah pengisian manual
            Saran: Mempermudah proses pembuatan akun untuk pengguna baru`
  },
  {
    title: "Interview ke-4",
    content: `Q: Baik pak, mungkin pertanyaannya dimulai dari media yang digunakan untuk akses Digital Workspace?
         A: Lebih sering pakai komputer perusahaan, karena kalau di HP sering keluar sendiri dan harus login lagi
         Q: Oh seperti itu ya pak, dan untuk pemakaian DW sendiri sudah berapa lama ya?
         A: Kurang lebih 2 tahunan
         Q: Dan menurut bapak selama pemakaian itu apakah aplikasi ini sudah memenuhi informasi yang dibutuhkan
         A: Sangat memenuhi khususnya untuk FRM nya ya, jadi kita bisa lebih mudah untuk pengisiannya
         Q: Begitu ya pak, lalu jenis form apa yang sering digunakan?
         A: Seperti CCC, Inspeksi dan juga Safety Meeting
         Q: Lalu menurut bapak apakah memakan waktu yang lama untuk pengisian formnya?
         A: Tidak lama, karena memang tidak menyulitkan
         Q: Lalu untuk kendalanya sendiri seperti apa ya pak
         A: Biasanya masalah jaringanya yang mati
         Q: Kalau mati seperti itu solusinya manual ya pak?
         A: Oh tidak kami menginput keesokan harinya atau saat ada jaringannya
         Q: Baik pak, apakah ada saran untuk kedepannya?
         A: Tidak ada
         Q: Baik pak terima kasih atas waktunya.`,
    summary: `Responden menggunakan Digital Workspace pada komputer perusahaan
         Penggunaan selama kurang lebih 2 tahun
         Form yang sering diisi: CCC, Inspeksi, dan Safety Meeting
         Tidak ada kendala dan saran yang disampaikan`
  },
  {
    title: "Interview ke-5",
    content: `Q: Permisi mbak, perkenalkan saya Ahmad mahasiswa magang di MSD, jadi saya mau interview terkait penggunaan digital workspace nih, kalau boleh tau untuk kelahiran di tahun berapa ya mbak?
         A: tahun lahir 1996
         Q: Berarti sebelumnya sudah pernah menggunakan digitawl workspace ya mbak?
         A: Ya sudah
         Q: Biasanya menggunakannya dimana dan pakai jaringan apa?
         A: Di PC kantor dan jaringan kantor
         Q: Lalu untuk penggunaannya mulai tahun berapa?
         A: Tahun lalu, eh 2 tahun lalu saat corona, 2021 kalau untuk saya sendiri
         Q:Kemudian untuk form yang sering diisi mbak, form apa ya?
         A: CCC
         Q: Untuk mengisi CCC nya sendiri makan waktu berapa lama ya mbak?
         A: Ya kira-kira 5 menit
         Q: Lalu menurut mbak untuk informasi yang ada di digital workspace sudah memenuhi atau belum seperti FRM nya
         A: Sudah memenuhi
         Q: Ok memenuhi ya mbak, oke selanjutnya untuk masalahnya, apakah sering error gitu
         A: Biasanya tergantung jaringan aja sih mas
         Q: Terus untuk alternatifnya apa ya?
         A: Alternatifnya otomatis kita menunggu ya, soalnya kita bergantung sama jaringan
         Q: Jadi gaada pengisian manual gitu mbak atau apa gitu
         A: Gaada sih, jadi kalau sudah nyala baru diisi
         Q: Jadi kalau jaringan mati seharian apakah akan diisi dikeesokan harinya?
         A: Sejauh ini ya, belum pernah sampai besok, intinya sebelum melakukan pekerjaan itu sih
         Q: Ok mbak, berarti selalu mengisi sebelumnya ya, dan untuk secara keseluruhan menurut mbak apakah digital workspace ini sudah baik atau belum?
         A: Sudah cukup baik
         Q: Ok mbak, mungkin pertanyaan terakhir, saran untuk aplikasinya sendiri seperti tampilannya yang kurang
         A: Kalau tampilan tidak ada masalah ya, namun lebih ke itu sih kearah loadingnya itu, saya kurang tahu kalau itu pengaruh dari internet atau dari webnya sendiri ya
         Q: Terus untuk narik data dari digital workspace uda pernah belum mbak?
         A: Belum, paling cuma mengisi form saja
         Q: Ok baik mbak, sepertinya cukup untuk interviewnya, terima kasih ata waktu dan sarannya`,
    summary: `Responden menggunakan Digital Workspace pada PC kantor dengan jaringan kantor
         Penggunaan dimulai sejak 2021
         Form yang sering diisi: CCC
         Kendala: tergantung pada jaringan
         Belum pernah menarik data dari Digital Workspace
         Saran: Memperbaiki loading aplikasi`
  },
  {
    title: "Interview ke-6",
    content: `Q: Perkenalkan saya Ahmad, Mahasiswa Intern di MSD, mas nya sendiri namanya siapa dan tahun kelahiran berapa
            A: Nama saya Yusron dan saya 17 Juni 1990
            Q: Ok mas Yusron, berarti untuk Digital Workspace sudah pernah dipakai ya?
            A: Digital Workspace ya kita akses tiap hari
            Q: Dari tahun berapa?
            A: Semenjak disarankan menggunakan DW kami sudah menggunakan, karena ada yang bulannya berbeda, contoh kami dulu di dmlz kita belum ke bagian hand held jadi ya setelah kita dapat hand held nya baru kita mainkan
            Q: Oo oke, biasanya tuh aksesnya dari handphone kah dari komputer kantor 
            A: Kita pakai Hand held
            Q: (Mengambil hand held)
            A: Kalau ini perusahaan juga yang nyediain ya mas?
            Q: Ya ini aset yang perusahaan kasih untuk kita, tapi tidak semua user atau semua ID bisa akses barang ini, ini kita harus submit dulu ke MIS jika kita mau akseskan. Kalau ke PC ke Laptop itu semua bisa
            A: Bedanya pakai ini(hand held) apa? 
            Q: Kalau ini kan enak mas sampeyan mau bawa ke mana-mana jika ada temuan apapun langsung bisa masuk 
            A2: Mungkin dijelasin dulu Mas Jadi kita juga harus ya kita kan ada ngambil barang kasih ke customer pemindahan barang nah jadi semua operasional warehouse itu kita harus scan pakai ini trus pindahkan di sistem, kita pakai handheld supaya langsung mobile di depan lokasi tembak gitu nah begitu. Jadi alat kerja yang utama yang di warehouse
            Q: Jadi cuma warehouse yang punya?
            A2: Enggak sih semuanya ada yang lain ya tapi kita enggak enggak tahu cuman jelas ini untuk yang scan tadi. Mungkin kalau divisi lain ada, bisa juga nah ini supaya gak banyak alat jadi kita integrasikan aja disini dibuat kerja juga buat safety digital workspace di sini juga bisa
            Q: Ok baik mas, kalau menggunakan ini apakah sering lama untuk loadingnya?
            A: Engga juga sih mas, loading lama itu disaat jaringan terganggu saja, selama jaringan itu normal tidak ada masalah.
            Q: Berarti menggunakan jaringan kantor ya?
            A: Iya benar
            Q: Oke mas, dan biasanya paling banyak yang diisi apa ya?
         A: Semuanya, safety meeting, safety talk, CCC semuanya kita isi, termasuk untuk validasi approval disini juga, inpeksi, PJO kita semua menggunakan ini
         Q: Ok mas, menurut mas sendiri apakah informasi yang ada di DW sudah memenuhi belum?
         A: Sudah sih
         Q: Dan untuk pengisiannya menurut mas lama ga?
         A: Enggak lama dia contoh pengisian safety meeting ya
         Q: Berarti masalah yang sering terjadi itu jaringan ya mas?
         A: Iya jaringan sih
         Q: Nah misal jaringannya mati, apakah ada alternatif lain?
         A: Kalau tidak ada jaringan berarti kita manual
         Q: Lalu apakah pernah ada yang pakai HP pribadi?
         A: Sejauh ini belum ada sih mas, kecuali mungkin bos-bos kami yang banyak meeting diluar, mungkin bisa tapi untuk kami-kami yang pakai ini
         Q: Ok baik mas, tadi sudah terkait kendala, sekarang mungkin saran dari mas untuk pengembangan aplikasi ini atau ada yang ingin ditambahkan
         A: Selama ini masih bagus, karena untuk warehouse sudah mencakup semuanya
         Q: Ok mas, untuk narik data dari DW sudah pernah kah mas?
         A: Kalau saya biasanya CCC dari PC sih mas, karena akan saya rubah ke PDF toh, untuk dimintakan render meeting kah atau yang lain.
         Q: Ok deh mas, paling itu aja untuk interviewnya, dan juga perangkat sudah dari perusahaan ya
         A: Iya mas, dan untuk perangkat ini juga sudah 3x pergantian dan yang ini lebih bagus lagi jaringannya
         Q: Oke baik terima kasih atas waktunya dan juga ilmu barunya mas.`,
    summary: `Responden menggunakan Digital Workspace pada komputer dan HP saat di lapangan
         Penggunaan dimulai pada Februari 2023
         Form yang sering diisi: Safety Meeting, Inspeksi, dan CCC
         Kendala utama: masalah jaringan saat menggunakan HP
         Saran: Penambahan form untuk pejalan kaki dan perbaikan masalah login yang berulang`
  }
];

const container = document.getElementById('transcripts-container');

transcripts.forEach((transcript, index) => {
  const section = document.createElement('section');
  section.classList.add('transcripts');

  const h2 = document.createElement('h2');
  h2.textContent = transcript.title;
  section.appendChild(h2);

  const p = document.createElement('p');
  p.innerHTML = `<ul>${transcript.summary.split('\n').map(line => `<li>${line}</li>`).join('')}</ul>`
  section.appendChild(p);

  const summaryDiv = document.createElement('div');
  summaryDiv.classList.add('summary');
  section.appendChild(summaryDiv);

  const summaryBtn = document.createElement('button');
  summaryBtn.classList.add('summary-btn');
  summaryBtn.textContent = 'Show Transcript';
  summaryDiv.appendChild(summaryBtn);

  const summaryContent = document.createElement('div');
  summaryContent.classList.add('summary-content');
  summaryContent.style.display = 'none';
  summaryDiv.appendChild(summaryContent);

  const summaryH3 = document.createElement('h3');
  summaryH3.textContent = 'Transcript';
  summaryContent.appendChild(summaryH3);

  const summaryP = document.createElement('p');
  summaryP.innerHTML = `${transcript.content.split('\n').map(line => `<li>${line}</li>`).join('')}</ul>`
  summaryContent.appendChild(summaryP);

  container.appendChild(section);

  summaryBtn.addEventListener('click', () => {
    toggleSummary(summaryContent);
  });
});
