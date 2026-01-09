# Website-Kantor-Pengacara-MAS

Merupakan Project Magang Web Developer (Full Stack) M.A.S. Law Firm untuk membuat Website Kantor Pengacara Hukum. Project ini dibuat dengan Laravel, React.js, dan Tailwind CSS.

Link :
[lawyermas.com](https://lawyermas.com)

This Project is Powered by : M. Amar Syeban Law Firm
![M.A.S. Law Firm](./images/mas-law-firm-logo.png)

## Images

Inilah Tampilan Sederhana dari Aplikasi Layanan Hukum menggunakan Laravel :
\
\
![Lorem Ipsum](./images/tampilan-website-blog-sederhana-dengan-laravel.jpg)

Tampilan saat Lorem Ipsum :
\
\
![Lorem Ipsum](./images/lorem-ipsum.jpg)

## Proses Instalasi

Berikut ini adalah Proses Instalasi hingga Pembuatan Project ini :

Steps :

1. Lingkungan/Environment yang digunakan

Adapun Environment yang kami gunakan dalam Project ini adalah :

- XAMPP
- PHP & MySQL
- Composer

1. Persiapan Project

Pertama, buatlah direktori baru untuk proyek Anda dan masuk ke dalamnya :

> mkdir magang-web-laravel \
> cd web-blog-laravel

Kedua, Inisialisasikan Project Laravel dengan menjalankan perintah Composer :

> composer create-project laravel/laravel web-blog-laravel

2. Menjalankan Project Laravel

Ketiklah :

> php artisan serve

## Folder Structure

Adapun Struktur Folder Direktori dari Project ini adalah :

```
📁magang-web-laravel/
    ├── 📁images/                                      # Folder untuk Gambar-gambar
    ├── 📁web-blog-laravel/                            # Backend Laravel untuk API dan Dashboard
    │   ├── 📁app/
    │   │   ├── 📁Http/
    │   │   │   ├── 📁Controllers/
    │   │   │   │   └── PostController.php              # Controller untuk Postingan Blog
    │   │   ├── 📁Models/
    │   │   │   ├── Category.php                        # Model untuk tabel Kategori
    │   │   │   ├── Post.php                            # Model untuk tabel Postingan
    │   │   │   └── User.php                            # Model untuk tabel User
    │   │   ├── 📁Providers/
    │   │   └── 📁Services/
    │   ├── 📁config/
    │   ├── 📁database/
    │   │   ├── 📁factories/
    │   │   │   ├── PostFactory.php                     # Factory Postingan
    │   │   │   └── UserFactory.php                     # Factory User
    │   │   ├── 📁migrations/
    │   │   │   ├── 0001_01_01_000000_create_users_table.php         # Migration tabel User
    │   │   │   ├── 2024_12_23_164809_create_posts_table.php         # Migration tabel Postingan
    │   │   │   └── 2024_12_25_164004_create_categories_table.php    # Migration tabel Kategori
    │   │   └── 📁seeders/
    │   │       └── InventorySeeder.php                # Seeder untuk data dummy inventory
    │   ├── 📁public/
    │   │   ├── 📁css/
    │   │   │   └── style.css                          # File CSS
    │   │   └── 📁js/
    │   │       └── script.js                          # File JavaScript (Bila dibutuhkan)
    │   ├── 📁resources/
    │   │   └── 📁views/
    │   │       ├── 📁layouts/
    │   │       │   └── main.blade.php                 # Layout utama untuk Laravel Blade
    │   │       ├── partials/
    │   │       │   └── navbar.blade.php               # Layout Navbar untuk Laravel Blade
    │   │       ├── about.blade.php                    # Halaman Tentang Kami
    │   │       ├── categories.blade.php               # Halaman untuk menampilkan Daftar Kategori
    │   │       ├── cateogry.blade.php                 # Halaman untuk menampilkan Postingan pada Kategori
    │   │       ├── home.blade.php                     # Halaman Utama (Homepage)
    │   │       ├── post.blade.php                     # Halaman pada salah satu Potingan
    │   │       └── posts.blade.php                    # Halaman Potingan Artikel Blog
    │   ├── 📁routes/
    │   │   └── web.php                                # Route untuk halaman web
    │   ├── 📁storage/
    │   │── 📁tests/
    │   └── .env
    ├── 📁website-blog-ui/                             # Program Web Blog
    │   ├── 📁css/
    │   │   └── style.css                              # File CSS
    │   │── 📁js/
    │   │   └── script.js                              # File JavaScript (Bila dibutuhkan)
    │   │── 📁pages/
    │   └── index.html                                 # File HTML
    └── README.md                                      # Panduan proyek keseluruhan
```
