<template>
  <div class="info-container">
    <section class="info-hero">
      <h1>Nuestro Compromiso</h1>
      <p>EcoWeb nació como un proyecto escolar para resolver la falta de información clara sobre el reciclaje en nuestra comunidad.</p>
    </section>

    <div class="info-grid">
      <div class="info-card">
        <div class="number">01</div>
        <h3>La Problemática</h3>
        <p>Más del 60% de los residuos que terminan en vertederos podrían haber sido reciclados si se hubieran separado correctamente.</p>
      </div>

      <div class="info-card">
        <div class="number">02</div>
        <h3>Nuestra Misión</h3>
        <p>Facilitar el acceso a guías interactivas y puntos de acopio reales para que reciclar sea un hábito, no una tarea difícil.</p>
      </div>

      <div class="info-card">
        <div class="number">03</div>
        <h3>El Equipo</h3>
        <p>Desarrollado con pasión por un equipo enfocado en tecnología y sostenibilidad.</p>
      </div>
    </div>

    <section class="cta-bottom">
      <h2>¿Listo para marcar la diferencia?</h2>
      <router-link to="/guia" class="btn-main">Ir a la Guía Ahora</router-link>
    </section>
  </div>
</template>

<style scoped>
.info-container { max-width: 1000px; margin: 0 auto; padding: 60px 20px; }
.info-hero { text-align: center; margin-bottom: 80px; }
.info-hero h1 { font-size: 3rem; color: #2d5a27; margin-bottom: 20px; }
.info-hero p { font-size: 1.3rem; color: #666; max-width: 700px; margin: 0 auto; }

.info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; }
.info-card { 
  background: white; 
  padding: 40px; 
  border-radius: 20px; 
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  position: relative;
}
.number { 
  font-size: 4rem; 
  font-weight: 800; 
  color: #e8f5e9; 
  position: absolute; 
  top: 10px; 
  right: 20px; 
  z-index: 1;
}
.info-card h3 { position: relative; z-index: 2; margin-bottom: 15px; color: #1a1a1a; }
.info-card p { position: relative; z-index: 2; color: #555; line-height: 1.6; }

.cta-bottom { 
  margin-top: 100px; 
  text-align: center; 
  background: #2d5a27; 
  padding: 60px; 
  border-radius: 30px; 
  color: white; 
}
.cta-bottom h2 { margin-bottom: 30px; }
.btn-main { 
  background: white; 
  color: #2d5a27; 
  padding: 15px 40px; 
  border-radius: 50px; 
  text-decoration: none; 
  font-weight: 700;
  display: inline-block;
}
</style>