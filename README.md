# Ellie's Hair & Beauty — Full Stack Web App

A premium hair and beauty salon website inspired by Geetanjali Salon, built with **Next.js (frontend)** and **Node.js/Express (backend)**.

---

## 📁 Project Structure

```
ellies-hairbeauty/
├── frontend/                    # Next.js App
│   ├── public/
│   ├── src/
│   │   ├── app/                 # Next.js 14 App Router pages
│   │   │   ├── layout.jsx       # Root layout (Navbar + Footer)
│   │   │   ├── page.jsx         # Homepage
│   │   │   ├── services/        # Services listing page
│   │   │   ├── gallery/         # Photo gallery with filter
│   │   │   ├── booking/         # Appointment booking form
│   │   │   ├── about/           # About us & team page
│   │   │   └── contact/         # Contact form + info
│   │   ├── components/
│   │   │   ├── layout/          # Navbar, Footer
│   │   │   └── sections/        # Hero, Services, About, Testimonials, CTA
│   │   ├── lib/
│   │   │   └── api.js           # API utility functions
│   │   └── styles/
│   │       └── globals.css      # Tailwind + custom styles
│   ├── .env.example
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── backend/                     # Node.js/Express API
    ├── src/
    │   ├── server.js            # Entry point
    │   ├── routes/              # Express routers
    │   │   ├── services.js
    │   │   ├── booking.js
    │   │   ├── gallery.js
    │   │   └── contact.js
    │   ├── controllers/         # Route handlers
    │   │   ├── servicesController.js
    │   │   ├── bookingController.js
    │   │   ├── galleryController.js
    │   │   └── contactController.js
    │   ├── models/
    │   │   └── services.js      # Services data
    │   └── middleware/
    │       └── validation.js    # express-validator middleware
    ├── .env.example
    └── package.json
```

---

## 🚀 Getting Started

### 1. Clone / Extract the project

### 2. Setup Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev       # Runs on http://localhost:5000
```

### 3. Setup Frontend
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev       # Runs on http://localhost:3000
```

---

## 🌐 API Endpoints

| Method | Endpoint               | Description                   |
|--------|------------------------|-------------------------------|
| GET    | /api/health            | Health check                  |
| GET    | /api/services          | Get all service categories    |
| GET    | /api/services/:slug    | Get services by category slug |
| GET    | /api/gallery           | Get all gallery images        |
| GET    | /api/gallery/:category | Get images by category        |
| POST   | /api/bookings          | Create a booking              |
| GET    | /api/bookings          | List all bookings             |
| GET    | /api/bookings/:id      | Get booking by ID             |
| PATCH  | /api/bookings/:id/status | Update booking status       |
| POST   | /api/contact           | Submit contact message        |

---

## 🎨 Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Lucide React icons
- Google Fonts (Playfair Display, Cormorant Garamond, Jost)

**Backend:**
- Node.js
- Express.js
- express-validator
- CORS
- dotenv

---

## 📄 Pages

| Route       | Description                           |
|-------------|---------------------------------------|
| `/`         | Homepage with hero, services, about   |
| `/services` | Full service menu with pricing        |
| `/gallery`  | Filterable photo gallery              |
| `/booking`  | Appointment booking form              |
| `/about`    | Story, values & team                  |
| `/contact`  | Contact form + salon info             |

---

## 🔄 Next Steps (Production Upgrades)

- Add MongoDB/PostgreSQL database for bookings & messages
- Integrate Stripe for deposits/payments
- Add authentication for admin dashboard
- Email notifications via Nodemailer/Resend
- Deploy frontend to Vercel, backend to Railway/Render
