<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo">🌿 <span>Eco</span>Web</div>
      <div class="nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#guia">Guía</a>
        <a href="#mapa">Puntos</a>
        <button class="btn-cta">¡Participar!</button>
      </div>
    </nav>

    <header class="hero">
      <div class="hero-content">
        <h1>Pequeñas acciones, <br> <span class="highlight">grandes cambios.</span></h1>
        <p>Aprende a separar tus residuos de forma correcta y descubre puntos de reciclaje cerca de tu comunidad.</p>
        <div class="hero-btns">
          <router-link to="/guia" class="btn-primary">Explorar Guía</router-link>
          <button class="btn-secondary">Ver Mapa</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="image-card">
          <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=500" alt="Reciclaje">
        </div>
      </div>
    </header>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

:root {
  --primary: #2D5A27;
  --accent: #8BC34A;
  --dark: #1A1A1A;
  --light: #F9FBFA;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body { font-family: 'Inter', sans-serif; background: var(--light); color: var(--dark); line-height: 1.6; }

.navbar { display: flex; justify-content: space-between; align-items: center; padding: 20px 8%; background: white; }
.logo { font-weight: 800; font-size: 1.5rem; color: var(--dark); }
.logo span { color: var(--primary); }
.nav-links a { margin: 0 15px; text-decoration: none; color: var(--dark); font-weight: 500; }
.btn-cta { background: var(--primary); color: white; border: none; padding: 10px 20px; border-radius: 50px; cursor: pointer; }

.hero { display: grid; grid-template-columns: 1fr 1fr; padding: 80px 8%; align-items: center; gap: 40px; }
.badge { background: #E8F5E9; color: var(--primary); padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; }
h1 { font-size: 4rem; line-height: 1.1; margin: 20px 0; font-weight: 800; }
.highlight { color: var(--primary); }
p { font-size: 1.1rem; color: #555; margin-bottom: 30px; }

.hero-btns button { padding: 15px 30px; border-radius: 8px; border: none; font-weight: 600; cursor: pointer; margin-right: 15px; }
.btn-primary { background: var(--primary); color: white; }
.btn-secondary { background: #E0E0E0; color: var(--dark); }

.image-card img { width: 100%; border-radius: 20px; shadow: 20px 20px 60px #bebebe; }
</style>