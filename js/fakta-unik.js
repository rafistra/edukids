document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
  
  generate = () => {
    var faktas = {
      "Jepang": 'Penduduk Jepang mengonsumsi ikan paling banyak dibanding negara lainnya di dunia dan makan sambil bersuara bukanlah hal yang tidak sopan di Negara Matahari Terbit ini. Fakta unik lainnya, ada sekitar 50.000 penduduk Jepang yang berusia lebih dari 100 tahun dan orang Jepang berhasil memproduksi semangka berbentuk kubus agar mudah disimpan di lemari es.',
      "Yunani": 'Fakta unik tentang Yunani adalah keju Feta dianggap sebagai keju nasional Yunani. Selain itu bahasa Yunani sudah digunakan selama 3.000 tahun dan merupakan salah satu bahasa tertua di dunia. Fakta lainnya, pohon zaitun sudah tumbuh di Yunani sejak 6.000 tahun yang lalu dan Yunani memproduksi 300.000 ton minyak zaitun setiap tahunnya.',
      "Mesir": 'Banyak fakta unik tentang Mesir, terutama mesir pada zaman dahulu. Di antaranya, penduduk Mesir zaman dahulu menyembah ribuan dewa-dewi dan orang yang meninggal dimakamkan dengan cara dijadikan mumi. Selain itu, fakta menarik lainnya adalah kertas, pena, gembok dan pasta gigi diciptakan oleh orang-orang mesir zaman dahulu.'
    };
  
    var countries = Object.keys(faktas);
    var country = countries[Math.floor(Math.random() * countries.length)];
    var fakta = faktas[country]
  
    document.querySelector("#fakta-unik").textContent = fakta;
    document.querySelector("#country").textContent = country;
  
  }
  