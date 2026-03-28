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
  <section class="faq-section">
  <h2 class="faq-title">Preguntas Frecuentes</h2>
  <div class="faq-grid">
    <div class="faq-item">
      <h4>¿Debo lavar los envases antes de reciclarlos?</h4>
      <p>Sí. Restos de comida o líquidos pueden contaminar otros materiales y hacer que todo el lote sea rechazado.</p>
    </div>
    <div class="faq-item">
      <h4>¿Qué materiales NO se pueden reciclar en EcoWeb?</h4>
      <p>Por ahora no aceptamos unicel (EPS), cerámica, papel carbón o espejos rotos debido a la complejidad de su proceso.</p>
    </div>
    <div class="faq-item">
      <h4>¿Cómo reporto un nuevo centro de acopio?</h4>
      <p>Puedes usar el botón "Participar" en el menú principal para enviarnos la ubicación y validarla.</p>
    </div>
    <div class="faq-item">
      <h4>¿El servicio tiene algún costo?</h4>
      <p>No, EcoWeb es una plataforma gratuita impulsada por estudiantes para el beneficio de la comunidad mexicana.</p>
    </div>
  </div>
</section>
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
.faq-section { margin-top: 80px; padding-top: 60px; border-top: 1px solid #eee; }
.faq-title { text-align: center; margin-bottom: 40px; color: #2d5a27; }
.faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
.faq-item { background: #f9fdf9; padding: 25px; border-radius: 15px; }
.faq-item h4 { color: #1a1a1a; margin-bottom: 10px; font-size: 1.1rem; }
.faq-item p { color: #666; font-size: 0.95rem; line-height: 1.5; }

/* Ajuste móvil */
@media (max-width: 768px) {
  .faq-grid { grid-template-columns: 1fr; }
}
</style>