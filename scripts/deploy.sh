#!/bin/bash

# Davo Waitlist Site Deployment Script

echo "🚀 Deploying Davo Waitlist Site..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "❌ Error: .env.local file not found!"
    echo "Please copy env.example to .env.local and fill in your environment variables."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Your site is ready for deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Deploy to Vercel: vercel --prod"
    echo "2. Or deploy to your preferred hosting platform"
    echo ""
    echo "Don't forget to:"
    echo "- Set up your database and run migrations"
    echo "- Configure your environment variables"
    echo "- Set up your domain and SSL"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
