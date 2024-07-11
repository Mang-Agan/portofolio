# Gunakan image resmi Apache versi terbaru sebagai base image
FROM httpd:latest

# Salin file HTML, CSS, dan aset statis ke dalam direktori yang ditentukan


# Tidak perlu mengekspos port karena port 80 (default Apache) sudah di-expose secara default

# CMD tidak diperlukan karena Apache container akan secara otomatis menjalankan server webnya
