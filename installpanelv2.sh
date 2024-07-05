

# Minta input dari pengguna
read -p "Masukkan domain: " domain
read -p "Masukkan Email: " email
read -p "Masukkan Password Login: " password
read -p "Masukkan Subdomain Panel: " subdomain
read -p "Masukkan Domainnode: " domainnode

bash <(curl -s https://pterodactyl-installer.se) <<EOF
0
vallzoffcgg
anjyy
slebew
Vallz007
Asia/Jakarta
$email
$email
vallzoffc
adm
adm
$password
$subdomain
y
y
y
y
yes
A
EOF