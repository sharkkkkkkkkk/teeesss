type Translations = {
    [key in 'id' | 'en']: {
        nav: {
            home: string;
            products: string;
            specs: string;
            advantages: string;
            contact: string;
        };
        hero: {
            badge: string;
            title: string;
            subtitle: string;
            cta_primary: string;
            cta_secondary: string;
            organic_title: string;
            organic_desc: string;
        };
        advantages: {
            title: string;
            subtitle: string;
            items: {
                eco: { title: string; desc: string };
                energy: { title: string; desc: string };
                logistics: { title: string; desc: string };
                qc: { title: string; desc: string };
            };
        };
        products: {
            title: string;
            subtitle: string;
            download_btn: string;
            tabs: {
                shisha: string;
                bbq: string;
            };
            shisha: {
                badge: string;
                title: string;
                desc: string;
                features: string[];
            };
            bbq: {
                badge: string;
                title: string;
                desc: string;
                features: string[];
            };
        };
        specs: {
            title: string;
            desc: string;
            table: {
                col_param: string;
                col_shisha: string;
                col_bbq: string;
                rows: {
                    moisture: string;
                    ash: string;
                    volatile: string;
                    carbon: string;
                    calorific: string;
                };
            };
        };
        contact: {
            title: string;
            desc: string;
            office: string;
            port: string;
            form: {
                title: string;
                subtitle: string;
                company: string;
                country: string;
                email: string;
                qty: string;
                message: string;
                submit: string;
            };
        };
    };
};

export const dict: Translations = {
    id: {
        nav: {
            home: "Beranda",
            products: "Produk",
            specs: "Spesifikasi Teknis",
            advantages: "Keunggulan Kami",
            contact: "Hubungi Kami",
        },
        hero: {
            badge: "Kualitas Ekspor Premium Indonesia",
            title: "Pemasok Briket Arang Batok Kelapa Kualitas Ekspor Terbaik",
            subtitle: "Menyediakan solusi energi berkelanjutan dengan standar kalori tinggi, kadar abu rendah, dan waktu pembakaran lama untuk pasar global. Mitra terpercaya Anda untuk kebutuhan briket internasional.",
            cta_primary: "Dapatkan Penawaran Harga",
            cta_secondary: "Pelajari Produk",
            organic_title: "100% Organik",
            organic_desc: "Bahan baku tempurung kelapa pilihan tanpa bahan kimia berbahaya."
        },
        advantages: {
            title: "Keunggulan Ekspor Kami",
            subtitle: "Kami memastikan setiap pengiriman memenuhi standar internasional ketat untuk menjamin kepuasan mitra bisnis kami di seluruh dunia.",
            items: {
                eco: { title: "Eco-Friendly", desc: "100% alami dari limbah tempurung kelapa, mendukung keberlanjutan lingkungan tanpa penebangan pohon." },
                energy: { title: "Energi Tinggi", desc: "Menghasilkan panas stabil hingga 7500 kcal/kg dengan waktu pembakaran lebih dari 2 jam." },
                logistics: { title: "Logistik Global", desc: "Pengalaman ekspor ke Timur Tengah, Eropa, dan Amerika dengan dokumen legalitas lengkap (MSDS, SHT)." },
                qc: { title: "Quality Control", desc: "Inspeksi ketat pada setiap tahap produksi untuk memastikan kadar abu dan air sesuai spesifikasi." }
            }
        },
        products: {
            title: "Katalog Produk",
            subtitle: "Pilihan jenis briket sesuai kebutuhan pasar Anda.",
            download_btn: "Unduh Katalog PDF",
            tabs: { shisha: "Briket Shisha / Hookah", bbq: "Briket Barbeque (BBQ)" },
            shisha: {
                badge: "Best Seller",
                title: "Premium Shisha Charcoal",
                desc: "Diformulasikan khusus untuk pengalaman Shisha terbaik. Briket ini tidak berbau, tidak mengubah rasa tembakau, dan memproduksi abu putih yang sangat sedikit.",
                features: ["Bentuk: Kubus (25x25x25mm), Hexagonal", "Abu Putih Bersih (White Ash)", "Tanpa Bau & Asap", "Durasi Bakar 90-120 Menit"]
            },
            bbq: {
                badge: "High Heat",
                title: "Professional BBQ Charcoal",
                desc: "Solusi ideal untuk restoran dan penggunaan rumah tangga. Menghasilkan panas tinggi yang konsisten untuk memanggang daging dengan sempurna.",
                features: ["Bentuk: Hexagonal dengan lubang tengah", "Panas Tinggi Stabil", "Sedikit Percikan (Low Spark)", "Durasi Bakar 3-5 Jam"]
            }
        },
        specs: {
            title: "Spesifikasi Lab",
            desc: "Produk kami telah lolos uji laboratorium independen (SGS/Intertek) untuk memastikan standar kualitas ekspor terpenuhi secara konsisten.",
            table: {
                col_param: "Parameter",
                col_shisha: "Premium Shisha",
                col_bbq: "Standard BBQ",
                rows: {
                    moisture: "Moisture Content",
                    ash: "Ash Content",
                    volatile: "Volatile Matter",
                    carbon: "Fixed Carbon",
                    calorific: "Calorific Value"
                }
            }
        },
        contact: {
            title: "Siap Bermitra?",
            desc: "Hubungi kami hari ini untuk mendapatkan penawaran harga terbaik (FOB/CNF). Tim ekspor kami siap membantu Anda 24/7.",
            office: "Pabrik & Kantor Pusat",
            port: "Port of Loading",
            form: {
                title: "Permintaan Kuotasi (RFQ)",
                subtitle: "Isi formulir di bawah untuk respon cepat maksimal 1x24 jam.",
                company: "Nama Perusahaan",
                country: "Negara Tujuan Ekspor",
                email: "Email Bisnis",
                qty: "Kuantitas Pesanan (Ton)",
                message: "Pesan Tambahan / Spesifikasi Khusus",
                submit: "Kirim Permintaan"
            }
        }
    },
    en: {
        nav: {
            home: "Home",
            products: "Products",
            specs: "Technical Specs",
            advantages: "Our Advantages",
            contact: "Contact Us",
        },
        hero: {
            badge: "Premium Indonesia Export Quality",
            title: "Best Coconut Shell Charcoal Briquette Supplier",
            subtitle: "Providing sustainable energy solutions with high calorie standards, low ash content, and long burning time for the global market. Your trusted partner for international briquette needs.",
            cta_primary: "Get a Quote",
            cta_secondary: "Learn More",
            organic_title: "100% Organic",
            organic_desc: "Selected coconut shell raw materials without harmful chemicals."
        },
        advantages: {
            title: "Our Export Advantages",
            subtitle: "We ensure every shipment meets strict international standards to guarantee satisfaction for our business partners worldwide.",
            items: {
                eco: { title: "Eco-Friendly", desc: "100% natural from coconut shell waste, supporting environmental sustainability without tree felling." },
                energy: { title: "High Energy", desc: "Generates stable heat up to 7500 kcal/kg with a burning time of over 2 hours." },
                logistics: { title: "Global Logistics", desc: "Export experience to the Middle East, Europe, and America with complete legality documents (MSDS, SHT)." },
                qc: { title: "Quality Control", desc: "Strict inspection at every production stage to ensure ash and moisture content meet specifications." }
            }
        },
        products: {
            title: "Product Catalog",
            subtitle: "Selection of briquette types according to your market needs.",
            download_btn: "Download PDF Catalog",
            tabs: { shisha: "Shisha / Hookah Briquettes", bbq: "Barbeque (BBQ) Briquettes" },
            shisha: {
                badge: "Best Seller",
                title: "Premium Shisha Charcoal",
                desc: "Specially formulated for the best Shisha experience. These briquettes are odorless, do not alter tobacco flavor, and produce very little white ash.",
                features: ["Shape: Cube (25x25x25mm), Hexagonal", "Clean White Ash", "Odorless & Smokeless", "Burn Time 90-120 Minutes"]
            },
            bbq: {
                badge: "High Heat",
                title: "Professional BBQ Charcoal",
                desc: "Ideal solution for restaurants and household use. Produces consistent high heat for grilling meat perfectly.",
                features: ["Shape: Hexagonal with center hole", "Stable High Heat", "Low Spark", "Burn Time 3-5 Hours"]
            }
        },
        specs: {
            title: "Lab Specifications",
            desc: "Our products have passed independent laboratory tests (SGS/Intertek) to ensure export quality standards are consistently met.",
            table: {
                col_param: "Parameter",
                col_shisha: "Premium Shisha",
                col_bbq: "Standard BBQ",
                rows: {
                    moisture: "Moisture Content",
                    ash: "Ash Content",
                    volatile: "Volatile Matter",
                    carbon: "Fixed Carbon",
                    calorific: "Calorific Value"
                }
            }
        },
        contact: {
            title: "Ready to Partner?",
            desc: "Contact us today to get the best price quote (FOB/CNF). Our export team is ready to assist you 24/7.",
            office: "Factory & HQ",
            port: "Port of Loading",
            form: {
                title: "Request for Quotation (RFQ)",
                subtitle: "Fill out the form below for a quick response within 24 hours.",
                company: "Company Name",
                country: "Export Destination Country",
                email: "Business Email",
                qty: "Order Quantity (Ton)",
                message: "Additional Message / Special Specs",
                submit: "Send Request"
            }
        }
    }
};
