        // Fungsi untuk menambahkan pop up sebelum masuk kedalam program
        alert("Hi! Selamat datang diprogram kalkulator sederhana");
        
        // Fungsi untuk menambahkan nilai ke layar kalkulator
        function appendToDisplay(value) {
          document.getElementById("display").value += value; // Menambahkan nilai ke dalam elemen input display
        }
      
        // Fungsi untuk membersihkan layar kalkulator
        function clearDisplay() {
          document.getElementById("display").value = ""; // Mengosongkan nilai di elemen input display
        }
      
        // Fungsi untuk menghapus karakter terakhir pada layar kalkulator
        function backspace() {
          let display = document.getElementById("display");
          display.value = display.value.slice(0, -1); // Menghapus karakter terakhir dari string di display
        }
      
        // Fungsi untuk menghitung persentase
        function calculatePercentage() {
          let display = document.getElementById("display");
          try {
            display.value = eval(display.value) / 100; // Membagi nilai di layar dengan 100
          } catch (error) {
            display.value = "Error"; // Menampilkan "Error" jika terjadi kesalahan dalam evaluasi
          }
        }
      
        // Fungsi untuk menghitung hasil dari ekspresi matematika di layar
        function calculate() {
          try {
            document.getElementById("display").value = eval(document.getElementById("display").value); // Evaluasi ekspresi matematika
          } catch (error) {
            document.getElementById("display").value = "Error"; // Menampilkan "Error" jika ada kesalahan
          }
        }
      
        // Event listener untuk menangkap input dari keyboard
        document.addEventListener("keydown", function (event) {
          const validKeys = "0123456789+-*/()."; // Karakter yang diperbolehkan kecuali '%'
          const display = document.getElementById("display");
      
          if (validKeys.includes(event.key)) {
            appendToDisplay(event.key); // Tambahkan karakter ke layar
          } else if (event.key === "Enter") {
            calculate(); // Hitung hasil ekspresi
          } else if (event.key === "Backspace") {
            backspace(); // Hapus karakter terakhir
          } else if (event.key === "Escape") {
            clearDisplay(); // Bersihkan layar
          } else if (event.key === "%") {
            calculatePercentage(); // Jalankan fungsi persentase jika '%' ditekan
          }
        });