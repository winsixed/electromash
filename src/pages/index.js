import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

export default function Home() {
  return (
    <>
      <Head><title>Электромашсервис — Промышленные электродвигатели</title></Head>
      <Header/>
      <main id="main-content">
        <section className="hero fade-in bg-gradient-to-r from-blue-100 to-white py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Промышленные электродвигатели</h1>
            <p className="mb-6">Решения для производств, монтажных организаций и инженеров</p>
            <a href="mailto:info@electromash.ru" className="btn">Запросить КП</a>
          </div>
        </section>
        <section id="about" className="section fade-in py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">О компании</h2>
            <p>ООО «Электромашсервис» — надёжный поставщик промышленных электродвигателей с индивидуальным подходом.</p>
          </div>
        </section>
        <section id="products" className="section fade-in py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Продукция</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <a href="#async" className="card"><h3 className="text-xl font-semibold mb-2">Асинхронные двигатели</h3><p>Серии А4, ДАЗО4, АК, 2АОД.</p></a>
              <a href="#dc" className="card"><h3 className="text-xl font-semibold mb-2">Двигатели постоянного тока</h3><p>Для спецтехники.</p></a>
              <a href="#generator" className="card"><h3 className="text-xl font-semibold mb-2">Генераторы</h3><p>Промышленные решения.</p></a>
            </div>
          </div>
        </section>
        <section id="contacts" className="section fade-in py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">Контакты</h2>
            <p><span aria-hidden="true">📞</span> <a href="tel:+74951234567">+7 (495) 123-45-67</a></p>
            <p><span aria-hidden="true">✉️</span> <a href="mailto:info@electromash.ru">info@electromash.ru</a></p>
            <p><span aria-hidden="true">📍</span> Казань, ул. Лаврентьева, д. 3А, офис 321</p>
          </div>
        </section>
      </main>
      <Footer/>
      <CookieBanner/>
    </>
  );
}
