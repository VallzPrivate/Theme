#!/bin/bash

# Minta input token dari pengguna
read -p "Masukkan token untuk menjalankan wings: " token

# Menjalankan perintah dengan menggunakan token yang dimasukkan
echo "Menjalankan perintah dengan token: $token"
$token

# Menjalankan perintah systemctl start wings
sudo systemctl start wings

echo "Layanan wings telah dimulai."
