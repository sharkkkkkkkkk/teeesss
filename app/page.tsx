'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ship, Leaf, Flame, Globe, Menu, X, ArrowRight, CheckCircle2, Factory, ShieldCheck } from "lucide-react";
import { dict } from "@/lib/dictionary";

type Lang = 'id' | 'en';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>('id');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const t = dict[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-orange-500 fill-orange-500" />
            <span className="text-xl font-bold tracking-tight text-slate-900">IndoCharcoal <span className="text-orange-500">Export</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#beranda" className="hover:text-orange-500 transition-colors">{t.nav.home}</a>
            <a href="#produk" className="hover:text-orange-500 transition-colors">{t.nav.products}</a>
            <a href="#spesifikasi" className="hover:text-orange-500 transition-colors">{t.nav.specs}</a>
            <a href="#keunggulan" className="hover:text-orange-500 transition-colors">{t.nav.advantages}</a>
            <Button asChild variant="default" className="ml-4 bg-slate-900 hover:bg-slate-800">
              <a href="#kontak">{t.nav.contact}</a>
            </Button>
            <div className="flex items-center gap-1 border-l pl-4 ml-2">
              <button
                onClick={() => setLang('id')}
                className={`font-bold transition-colors ${lang === 'id' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
              >
                ID
              </button>
              <span className="text-slate-300">/</span>
              <button
                onClick={() => setLang('en')}
                className={`font-bold transition-colors ${lang === 'en' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 bg-white space-y-4">
            <a href="#beranda" className="block text-sm font-medium" onClick={toggleMenu}>{t.nav.home}</a>
            <a href="#produk" className="block text-sm font-medium" onClick={toggleMenu}>{t.nav.products}</a>
            <a href="#spesifikasi" className="block text-sm font-medium" onClick={toggleMenu}>{t.nav.specs}</a>
            <a href="#keunggulan" className="block text-sm font-medium" onClick={toggleMenu}>{t.nav.advantages}</a>
            <a href="#kontak" className="block text-sm font-medium text-orange-500" onClick={toggleMenu}>{t.nav.contact}</a>
            <div className="flex gap-4 pt-2 border-t">
              <button onClick={() => { setLang('id'); toggleMenu(); }} className={lang === 'id' ? 'font-bold text-slate-900' : 'text-slate-500'}>Bahasa Indonesia</button>
              <button onClick={() => { setLang('en'); toggleMenu(); }} className={lang === 'en' ? 'font-bold text-slate-900' : 'text-slate-500'}>English</button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="beranda" className="relative py-20 md:py-32 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1626084478177-3312e7534438?q=80&w=1931&auto=format&fit=crop')] bg-cover bg-center"></div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-0"></div>

          <div className="container px-4 md:px-6 relative z-10 grid gap-6 md:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-orange-500/10 text-orange-400 border-orange-500/20 px-3 py-1">
                {t.hero.badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                {t.hero.title}
              </h1>
              <p className="text-lg text-slate-400 max-w-[600px] leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                  {t.hero.cta_primary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white bg-transparent">
                  {t.hero.cta_secondary}
                </Button>
              </div>
            </div>
            {/* Visual Abstract - Generated Image */}
            <div className="hidden md:flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-800/50 backdrop-blur-sm">
                <Image
                  src="/hero-image.png"
                  alt="Briket Arang Kelapa Premium"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500/20 p-2 rounded-full">
                      <Flame className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{t.hero.organic_title}</h4>
                      <p className="text-xs text-slate-400">{t.hero.organic_desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keunggulan Kami */}
        <section id="keunggulan" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{t.advantages.title}</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">{t.advantages.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4 text-green-600">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{t.advantages.items.eco.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{t.advantages.items.eco.desc}</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-600">
                    <Flame className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{t.advantages.items.energy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{t.advantages.items.energy.desc}</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                    <Ship className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{t.advantages.items.logistics.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{t.advantages.items.logistics.desc}</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4 text-purple-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{t.advantages.items.qc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{t.advantages.items.qc.desc}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Produk Section (Tabs) */}
        <section id="produk" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{t.products.title}</h2>
                <p className="text-slate-500">{t.products.subtitle}</p>
              </div>
              <Button variant="outline">{t.products.download_btn}</Button>
            </div>

            <Tabs defaultValue="shisha" className="w-full">
              <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
                <TabsTrigger value="shisha">{t.products.tabs.shisha}</TabsTrigger>
                <TabsTrigger value="bbq">{t.products.tabs.bbq}</TabsTrigger>
              </TabsList>

              <TabsContent value="shisha" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border">
                  <div className="order-2 md:order-1 space-y-4">
                    <Badge>{t.products.shisha.badge}</Badge>
                    <h3 className="text-2xl font-bold text-slate-900">{t.products.shisha.title}</h3>
                    <p className="text-slate-600">
                      {t.products.shisha.desc}
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      {t.products.shisha.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-1 md:order-2 bg-slate-100 rounded-xl h-64 md:h-96 relative overflow-hidden flex items-center justify-center">
                    <Image
                      src="/shisha-product.png"
                      alt="Shisha Charcoal"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="bbq" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border">
                  <div className="order-2 md:order-1 space-y-4">
                    <Badge variant="secondary">{t.products.bbq.badge}</Badge>
                    <h3 className="text-2xl font-bold text-slate-900">{t.products.bbq.title}</h3>
                    <p className="text-slate-600">
                      {t.products.bbq.desc}
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      {t.products.bbq.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500" /> {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-1 md:order-2 bg-slate-100 rounded-xl h-64 md:h-96 relative overflow-hidden flex items-center justify-center">
                    <Image
                      src="/bbq-product.png"
                      alt="BBQ Charcoal"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Spesifikasi Teknis */}
        <section id="spesifikasi" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">{t.specs.title}</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-slate-600">
                  {t.specs.desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg border">
                    <div className="text-3xl font-bold text-slate-900">7200+</div>
                    <div className="text-sm text-muted-foreground">Calorific Value (kcal/kg)</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border">
                    <div className="text-3xl font-bold text-slate-900">&lt;2.5%</div>
                    <div className="text-sm text-muted-foreground">Ash Content</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border">
                    <div className="text-3xl font-bold text-slate-900">&lt;5%</div>
                    <div className="text-sm text-muted-foreground">Moisture</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border">
                    <div className="text-3xl font-bold text-slate-900">80%</div>
                    <div className="text-sm text-muted-foreground">Fixed Carbon</div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-sm text-left text-slate-600">
                  <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                    <tr>
                      <th scope="col" className="px-6 py-4">{t.specs.table.col_param}</th>
                      <th scope="col" className="px-6 py-4">{t.specs.table.col_shisha}</th>
                      <th scope="col" className="px-6 py-4">{t.specs.table.col_bbq}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b hover:bg-slate-50">
                      <th scope="row" className="px-6 py-4 font-medium text-slate-900">{t.specs.table.rows.moisture}</th>
                      <td className="px-6 py-4">Max 5.0%</td>
                      <td className="px-6 py-4">Max 6.0%</td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-slate-50">
                      <th scope="row" className="px-6 py-4 font-medium text-slate-900">{t.specs.table.rows.ash}</th>
                      <td className="px-6 py-4">Max 2.5% (White)</td>
                      <td className="px-6 py-4">Max 4.0% (Cream)</td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-slate-50">
                      <th scope="row" className="px-6 py-4 font-medium text-slate-900">{t.specs.table.rows.volatile}</th>
                      <td className="px-6 py-4">12% - 14%</td>
                      <td className="px-6 py-4">13% - 15%</td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-slate-50">
                      <th scope="row" className="px-6 py-4 font-medium text-slate-900">{t.specs.table.rows.carbon}</th>
                      <td className="px-6 py-4">Min 80%</td>
                      <td className="px-6 py-4">Min 75%</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <th scope="row" className="px-6 py-4 font-medium text-slate-900">{t.specs.table.rows.calorific}</th>
                      <td className="px-6 py-4">7200 - 7500 kcal/kg</td>
                      <td className="px-6 py-4">7000 - 7200 kcal/kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section id="kontak" className="py-20 md:py-32 bg-slate-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <Globe className="h-12 w-12 text-orange-500" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.contact.title}</h2>
                <p className="text-slate-400 text-lg">
                  {t.contact.desc}
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <Factory className="h-6 w-6 text-orange-500" />
                    <div>
                      <h4 className="font-semibold">{t.contact.office}</h4>
                      <p className="text-slate-400 text-sm">Jl. ABCDE, Surabaya, Jawa Timur, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Ship className="h-6 w-6 text-orange-500" />
                    <div>
                      <h4 className="font-semibold">{t.contact.port}</h4>
                      <p className="text-slate-400 text-sm">Tanjung Perak Port (SUB) / Tanjung Emas (SRG)</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-white text-slate-900">
                <CardHeader>
                  <CardTitle>{t.contact.form.title}</CardTitle>
                  <CardDescription>{t.contact.form.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">{t.contact.form.company}</Label>
                      <Input id="company" placeholder="PT. Global Import..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">{t.contact.form.country}</Label>
                      <Input id="country" placeholder="Contoh: Saudi Arabia" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.form.email}</Label>
                    <Input id="email" type="email" placeholder="email@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="qty">{t.contact.form.qty}</Label>
                    <Input id="qty" type="number" placeholder="Min. 18 Ton (1x20ft)" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.form.message}</Label>
                    <Textarea id="message" placeholder="..." />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold">{t.contact.form.submit}</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-slate-400 text-sm">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2026 IndoCharcoal Export. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
