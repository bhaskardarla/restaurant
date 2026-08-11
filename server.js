import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

const menuItems = [
  { id: 1, name: 'Tandoori Paneer Skewers', price: 14, description: 'Smoky paneer, bell peppers, mint chutney, and pickled onions.' },
  { id: 2, name: 'Coastal Prawn Curry', price: 24, description: 'Coconut curry, curry leaves, turmeric rice, and lime.' },
  { id: 3, name: 'Hyderabadi Dum Biryani', price: 21, description: 'Slow-cooked basmati rice, saffron, fried onions, and raita.' },
];

const restaurant = {
  name: 'Saffron Table',
  phone: '(555) 019-2845',
  address: '42 Market Street, Downtown',
  hours: 'Tue–Sun, 11:30 AM–10:00 PM',
  privateDining: true,
};

const reservations = [];

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'restaurant-backend' });
});

app.get('/api/restaurant', (req, res) => {
  res.json(restaurant);
});

app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

app.get('/api/reservations', (req, res) => {
  res.json(reservations);
});

app.post('/api/reservations', (req, res) => {
  const { name, phone, date, time, guests } = req.body;

  if (!name || !phone || !date || !time || !guests) {
    return res.status(400).json({ message: 'Name, phone, date, time, and guests are required.' });
  }

  const guestCount = Number(guests);

  if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 20) {
    return res.status(400).json({ message: 'Guests must be a whole number between 1 and 20.' });
  }

  const reservation = {
    id: reservations.length + 1,
    name: String(name).trim(),
    phone: String(phone).trim(),
    date,
    time,
    guests: guestCount,
    createdAt: new Date().toISOString(),
  };

  reservations.push(reservation);

  return res.status(201).json({ message: 'Reservation request received.', reservation });
});

app.listen(port, () => {
  console.log(`Restaurant backend listening on http://localhost:${port}`);
});
