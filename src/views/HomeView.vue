<template>
  <div class="home-container">
    <section class="hero-section">
      <div class="hero-content">
        <span class="badge">Ecológico & Sostenible</span>
        <h1>Transforma tus residuos en <span class="green-text">oportunidades</span>.</h1>
        <p>
          Únete a la comunidad de EcoWeb y descubre cómo pequeñas acciones diarias 
          pueden generar un impacto positivo en el planeta. Aprende, localiza y recicla.
        </p>
        <div class="hero-actions">
          <router-link to="/guia" class="btn-main">Comenzar Guía</router-link>
          <a href="#info" class="btn-sub">Saber más</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Naturaleza y Reciclaje">
      </div>
    </section>

    <section id="info" class="benefits-grid">
      <div class="benefit-card">
        <div class="b-icon">🌎</div>
        <h3>Educa</h3>
        <p>Conoce la clasificación correcta de cada material.</p>
      </div>
      <div class="benefit-card">
        <div class="b-icon">📍</div>
        <h3>Ubica</h3>
        <p>Encuentra centros de acopio cercanos a tu comunidad.</p>
      </div>
      <div class="benefit-card">
        <div class="b-icon">🌱</div>
        <h3>Impacta</h3>
        <p>Reduce tu huella de carbono con mejores hábitos.</p>
      </div>
    </section>
    <section class="fun-fact-section">
      <div class="fact-card">
        <div class="fact-content">
          <span class="fact-label">💡 Sabías que...</span>
          <h2>Reciclar una sola **lata de aluminio** ahorra energía suficiente para hacer funcionar un televisor durante **3 horas**.</h2>
          <p>Imagina lo que podemos lograr si toda tu colonia se une al movimiento.</p>
        </div>
        <div class="fact-decor">🌱</div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;
  gap: 50px;
}

.hero-content {
  flex: 1;
}

.badge {
  background: #e8f5e9;
  color: #2d5a27;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
}

h1 {
  font-size: 3.8rem;
  line-height: 1.1;
  margin: 25px 0;
  font-weight: 800;
  color: #1a1a1a;
}

.green-text {
  color: #2d5a27;
}

p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 40px;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 15px;
}

.btn-main {
  background: #2d5a27;
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}

.btn-main:hover {
  background: #3e7a36;
  transform: translateY(-2px);
}

.btn-sub {
  background: #f0f0f0;
  color: #333;
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
}

.hero-image {
  flex: 1;
}

.hero-image img {
  width: 100%;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* Benefits Grid */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 60px 0;
  border-top: 1px solid #eee;
}

.benefit-card {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 20px;
  transition: 0.3s;
}

.benefit-card:hover {
  background: #f9fdf9;
}

.b-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.benefit-card h3 {
  margin-bottom: 10px;
  color: #1a1a1a;
}

/* Responsividad para móviles */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 40px 0;
  }
  h1 { font-size: 2.5rem; }
  .benefits-grid { grid-template-columns: 1fr; }
  p { margin: 0 auto 30px; }
  .hero-actions { justify-content: center; }
}
.fun-fact-section {
  padding: 60px 0;
}
.fact-card {
  background: linear-gradient(135deg, #2d5a27 0%, #4caf50 100%);
  color: white;
  padding: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
}
.fact-content { max-width: 70%; position: relative; z-index: 2; }
.fact-label { font-weight: 800; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9; }
.fact-card h2 { font-size: 2rem; margin: 15px 0; line-height: 1.3; }
.fact-decor {
  font-size: 10rem;
  position: absolute;
  right: -20px;
  bottom: -40px;
  opacity: 0.1;
  transform: rotate(-15deg);
}
</style>