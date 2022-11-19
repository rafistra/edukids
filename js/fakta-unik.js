document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
  
  generate = () => {
    var faktas = {
      "Jepang": 'Penduduk Jepang mengonsumsi ikan paling banyak dibanding negara lainnya di dunia dan makan sambil bersuara bukanlah hal yang tidak sopan di Negara Matahari Terbit ini. Fakta unik lainnya, ada sekitar 50.000 penduduk Jepang yang berusia lebih dari 100 tahun dan orang Jepang berhasil memproduksi semangka berbentuk kubus agar mudah disimpan di lemari es.',
      "Yunani": 'Fakta unik tentang Yunani adalah keju Feta dianggap sebagai keju nasional Yunani. Selain itu bahasa Yunani sudah digunakan selama 3.000 tahun dan merupakan salah satu bahasa tertua di dunia. Fakta lainnya, pohon zaitun sudah tumbuh di Yunani sejak 6.000 tahun yang lalu dan Yunani memproduksi 300.000 ton minyak zaitun setiap tahunnya.',
      "Mesir": 'Banyak fakta unik tentang Mesir, terutama mesir pada zaman dahulu. Di antaranya, penduduk Mesir zaman dahulu menyembah ribuan dewa-dewi dan orang yang meninggal dimakamkan dengan cara dijadikan mumi. Selain itu, fakta menarik lainnya adalah kertas, pena, gembok dan pasta gigi diciptakan oleh orang-orang mesir zaman dahulu.',
      "Denmark" : 'Denmark dianggap sebagai negara yang penduduknya paling bahagia di dunia walaupun harga barang-barang di Denmark cukup tinggi. Di Denmark terdapat taman bermain tertua dan nomor dua tertua di dunia yang kemudian menginspirasi Walt Disney untuk mendirikan Disneyland. Fakta unik lainnya, Denmark memiliki 3 alfabet yang tidak ada di dalam alfabet Inggris, yaitu Æ, Ø, dan Å. Ketiganya adalah huruf vokal dan ditulis setelah huruf Z dalam alfabet tersebut.',
      "Thailand" : 'Thailand adalah satu-satunya negara di Asia yang tidak pernah dijajah oleh bangsa Eropa. Negara ini memiliki beberapa rekor dunia, termasuk patung Buddha emas terbesar di dunia yang beratnya adalah 5.500 kg. Fakta unik lain tentang Thailand adalah Hari Ibu merupakan hari untuk merayakan Ratu Thailand, yang dianggap sebagai Ibu bagi bangsa tersebut.',
      "Selandia Baru" : 'Perbandingan antara penduduk dan domba adalah 1 banding 9 dan bahasa isyarat termasuk ke dalam bahasa resmi di Selandia Baru. Salah satu tempat dengan nama terpanjang di dunia terdapat di Selandia Baru, yaitu',
    };
  
    var countries = Object.keys(faktas);
    var country = countries[Math.floor(Math.random() * countries.length)];
    var fakta = faktas[country]
  
    document.querySelector("#fakta-unik").textContent = fakta;
    document.querySelector("#country").textContent = country;
  
  }
  