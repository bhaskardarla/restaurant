import React from 'react';
import { createRoot } from 'react-dom/client';
import { CalendarDays, Clock, MapPin, Phone, Star, Utensils } from 'lucide-react';
import './styles.css';

const menuItems = [
  { name: 'Tandoori Paneer Skewers', price: '$14', description: 'Smoky paneer, bell peppers, mint chutney, and pickled onions.' },
  { name: 'Coastal Prawn Curry', price: '$24', description: 'Coconut curry, curry leaves, turmeric rice, and lime.' },
  { name: 'Hyderabadi Dum Biryani', price: '$21', description: 'Slow-cooked basmati rice, saffron, fried onions, and raita.' },
];

const highlights = [
  'Seasonal chef tasting menu',
  'Family-style dining rooms',
  'Locally sourced produce',
];

function App() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#home"><Utensils size={24} /> Saffron Table</a>
        <div className="navLinks">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#reserve">Reserve</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="heroCopy">
          <p className="eyebrow">Authentic flavors • Modern hospitality</p>
          <h1>Restaurant experiences crafted for memorable evenings.</h1>
          <p className="lead">Enjoy vibrant Indian-inspired dishes, warm service, and an elegant dining room made for celebrations, date nights, and relaxed family meals.</p>
          <div className="actions">
            <a className="button primary" href="#reserve">Book a Table</a>
            <a className="button secondary" href="#menu">View Menu</a>
          </div>
        </div>
        <div className="heroCard" aria-label="Featured dish">
          <div className="rating"><Star fill="currentColor" size={18} /> 4.9 guest rating</div>
          <h2>Chef's Signature Thali</h2>
          <p>A curated platter of house favorites, fresh breads, fragrant rice, and seasonal sweets.</p>
        </div>
      </section>

      <section className="section" id="menu">
        <div className="sectionHeader">
          <p className="eyebrow">Menu highlights</p>
          <h2>Fresh from our kitchen</h2>
        </div>
        <div className="menuGrid">
          {menuItems.map((item) => (
            <article className="menuCard" key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="split section" id="about">
        <div>
          <p className="eyebrow">Our promise</p>
          <h2>Hospitality that feels personal.</h2>
          <p>From handcrafted spice blends to attentive table service, every detail is designed to make guests feel welcomed and cared for.</p>
        </div>
        <ul className="highlights">
          {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </section>

      <section className="reservation section" id="reserve">
        <div>
          <p className="eyebrow">Reservations</p>
          <h2>Plan your visit</h2>
          <p>Call us or stop by for lunch, dinner, private events, and weekend tasting menus.</p>
        </div>
        <div className="contactGrid">
          <span><Phone size={20} /> (555) 019-2845</span>
          <span><MapPin size={20} /> 42 Market Street, Downtown</span>
          <span><Clock size={20} /> Tue–Sun, 11:30 AM–10:00 PM</span>
          <span><CalendarDays size={20} /> Private dining available</span>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
