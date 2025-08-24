# Davo Systems

The on-chain coordination layer for robotics.

## 🚀 Features

- **Instant Settlement**: Lightning-fast transaction processing
- **Cross-chain Robotics**: Seamless coordination across blockchain networks
- **Smart Contract Integration**: Automated robotic operations
- **Real-time Monitoring**: Live tracking of robotic systems
- **Waitlist System**: Join the future of robotics coordination

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion 2
- **UI Components**: Radix UI, Lucide React
- **Database**: Drizzle ORM, PostgreSQL
- **Rate Limiting**: Upstash Redis
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/davosys.git
   cd davosys
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   UPSTASH_REDIS_REST_URL=your_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_redis_token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:8000](http://localhost:8000)

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/davosys.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:
- `DATABASE_URL`: Your PostgreSQL connection string
- `UPSTASH_REDIS_REST_URL`: Your Redis URL
- `UPSTASH_REDIS_REST_TOKEN`: Your Redis token

## 📁 Project Structure

```
davosys/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (Radix)
│   ├── AuroraBackground.tsx
│   ├── FeatureCard.tsx
│   └── WaitlistForm.tsx
├── lib/                  # Utility libraries
│   ├── db.ts            # Database configuration
│   ├── ratelimit.ts     # Rate limiting
│   └── utils.ts         # Utility functions
├── public/              # Static assets
└── drizzle/             # Database schema
```

## 🎨 Design Features

- **Responsive Design**: Works on all devices
- **Smooth Animations**: Framer Motion 2 powered
- **Modern UI**: Clean, professional interface
- **Accessibility**: WCAG compliant components
- **Performance**: Optimized for speed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: [davosys.vercel.app](https://davosys.vercel.app)
- **GitHub**: [github.com/yourusername/davosys](https://github.com/yourusername/davosys)
- **X (Twitter)**: [@Davosystems](https://x.com/Davosystems)

## 📞 Contact

- **Email**: compangauthier@gmail.com
- **LinkedIn**: [www.linkedin.com/in/gauthiercompan](https://www.linkedin.com/in/gauthiercompan)

---

Built with ❤️ by the Davo Systems team
