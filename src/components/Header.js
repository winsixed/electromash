import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header role="banner" className="bg-gray-100">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center text-xl font-bold"><span role="img" aria-label="logo">🔧</span><span className="ml-2">Электромашсервис</span></Link>
        <button
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          aria-controls="nav-menu"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2"/></svg>
          <span className="sr-only">{open ? 'Закрыть меню' : 'Открыть меню'}</span>
        </button>
        <nav
          id="nav-menu"
          role="navigation"
          aria-label="Main menu"
          className={`${open ? 'block opacity-100 scale-100' : 'hidden opacity-0 scale-95'} transition-transform duration-200 md:block md:opacity-100 md:scale-100`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
            <li><Link href="#about" className="text-gray-800 hover:text-blue-500">О компании</Link></li>
            <li><Link href="#products" className="text-gray-800 hover:text-blue-500">Продукция</Link></li>
            <li><Link href="#contacts" className="text-gray-800 hover:text-blue-500">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
