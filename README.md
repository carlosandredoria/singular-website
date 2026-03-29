# SINGULAR — Official Website

A cyberpunk novel by André Dória.

## 🌍 The Universe Expands Daily

This website is part of the Singular universe. New entries, lore, character backgrounds, and world details are added regularly as the resistance uncovers more of Genesis Corp's secrets.

## 📚 The Book

**Singular** is a cyberpunk novel set in Macau, 2045. When Allen Wu's sister disappears into Genesis Corp's machinery, he discovers that Project Chimera—the company's god-AI—isn't just surveillance. It's a threat to humanity itself.

Available on [Amazon](https://www.amazon.com/dp/B0FNX825HX).

## 🐳 Running with Docker

```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f
```

## 🔧 Local Development

```bash
# Serve with Python
python3 -m http.server 8080

# Or use any static file server
npx serve .
```

## 🌐 Deployment

The site is designed to run as a Docker container with Traefik reverse proxy. The `docker-compose.yml` includes labels for automatic routing when Traefik is configured.

## 📁 Structure

```
singular-website/
├── index.html          # Main page
├── css/
│   └── style.css       # Cyberpunk-styled CSS
├── js/
│   └── main.js         # Dynamic universe posts
├── images/             # Author photo, etc.
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🔗 Links

- [Buy on Amazon](https://www.amazon.com/dp/B0FNX825HX)
- [Author on LinkedIn](https://www.linkedin.com/in/andredoria/)

---

*"In a city devoured by algorithms, one runner decides to fight back."*
