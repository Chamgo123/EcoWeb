<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo">🌿 <span>Eco</span>Web</div>
      <div class="nav-links">
        <router-link to="/" class="nav-item">Inicio</router-link>
        <router-link to="/guia" class="nav-item">Guía de Reciclaje</router-link>
        <router-link to="/mapa" class="nav-item">Puntos</router-link>
        <a href="#mapa" class="nav-item">Puntos</a>
        
        <router-link to="/guia" class="btn-cta">¡Empezar a Reciclar!</router-link>
      </div>
    </nav>

    <main class="main-content">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <p>&copy; 2026 EcoWeb - Proyecto de Conciencia Ambiental</p>
    </footer>
  </div>
</template>

<style>
/* Estilos Globales */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

:root {
  --primary: #2D5A27;
  --accent: #8BC34A;
  --dark: #1A1A1A;
  --light: #F9FBFA;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body { 
  font-family: 'Inter', sans-serif; 
  background: var(--light); 
  color: var(--dark); 
}

/* Estilos del Header */
.navbar { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 15px 8%; 
  background: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.logo { font-weight: 800; font-size: 1.5rem; }
.logo span { color: var(--primary); }

.nav-links { display: flex; align-items: center; gap: 25px; }

.nav-item { 
  text-decoration: none; 
  color: var(--dark); 
  font-weight: 500;
  transition: color 0.3s;
}

.nav-item:hover, .router-link-active { 
  color: var(--primary); 
}

/* El botón del Header */
.btn-cta { 
  background: var(--primary); 
  color: white; 
  border: none; 
  padding: 12px 24px; 
  border-radius: 50px; 
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s, background 0.3s;
}

.btn-cta:hover { 
  background: var(--accent);
  transform: scale(1.05);
}

.main-content {
  min-height: 80vh; /* Para que el footer siempre esté abajo */
}

.footer {
  text-align: center;
  padding: 40px;
  background: #eee;
  font-size: 0.9rem;
  color: #777;
}
</style>