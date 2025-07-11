# Change Tracker

A personal IT Code Change Management Tracker built with Next.js, Prisma, and Tailwind CSS, connected to a Hostinger MySQL database.

## 🚀 Features

- Submit, review, and manage code change requests
- CRUD API endpoints under `/api/changes`
- Status workflow: Pending → Approved → Implemented → Rolled Back
- Environment tagging (development, staging, production)
- Responsive UI with Tailwind CSS
- CLI-friendly Prisma migrations

## 📦 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **ORM:** Prisma (MySQL)
- **Styling:** Tailwind CSS
- **Database:** Hostinger MySQL

## 📋 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-user/change-tracker.git
   cd change-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Copy `.env.example` to `.env.local`
   - Edit `.env.local`:
     ```env
     DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME
     ```

4. **Run Prisma migrations**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## 📂 Project Structure

```
/ ────────────────────────────
├── app/                     # Next.js app router pages
│   ├── api/changes/         # CRUD API routes
│   ├── changes/create/      # New change request form
│   ├── changes/[id]/        # Detail & edit pages
│   └── page.tsx             # Home (list changes)
├── lib/
│   └── prisma.ts            # Prisma client helper
├── prisma/
│   └── schema.prisma        # Data model definitions
├── public/                  # Static assets
├── styles/                  # Global CSS (Tailwind)
├── .env.example             # Environment variables template
├── package.json             # NPM scripts & dependencies
└── README.md                # Project documentation
```

## 🤝 Contributing

1. Fork it (<https://github.com/your-user/change-tracker/fork>)
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'feat: add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---


---

# LICENSE

MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
