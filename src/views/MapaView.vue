<template>
  <div class="mapa-container">
    <header class="map-header">
      <h1>Puntos de Acopio</h1>
      <p>Localiza los centros de reciclaje más cercanos a tu ubicación.</p>
    </header>

    <div class="map-layout">
      <aside class="points-list">
        <div class="point-item active">
          <h3>Centro Comunitario "Verde Vivo"</h3>
          <p>📍 Av. Principal #123</p>
          <span class="tag">Plástico, Papel, Vidrio</span>
        </div>
        <div class="point-item">
          <h3>Eco-Punto San Marcos</h3>
          <p>📍 Calle Roble #45</p>
          <span class="tag">Pilas y Electrónicos</span>
        </div>
      </aside>

      <div class="map-visual">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.307374!2d-103.3918!3d20.6719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQwJzE4LjgiTiAxMDPCsDIzJzMwLjUiVw!5e0!3m2!1ses!2smx!4v1625600000000!5m2!1ses!2smx" 
          width="100%" 
          height="100%" 
          style="border:0; border-radius: 20px;" 
          allowfullscreen
          loading="lazy">
        </iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mapa-container { max-width: 1200px; margin: 0 auto; padding: 40px 20px; }
.map-header { text-align: center; margin-bottom: 40px; }
.map-layout { display: grid; grid-template-columns: 350px 1fr; gap: 30px; height: 500px; }

.points-list { overflow-y: auto; display: flex; flex-direction: column; gap: 15px; }
.point-item { 
  background: white; 
  padding: 20px; 
  border-radius: 15px; 
  border-left: 5px solid #ddd; 
  cursor: pointer;
  transition: 0.3s;
}
.point-item.active { border-left-color: #2d5a27; background: #f0f7ef; }
.point-item h3 { font-size: 1.1rem; margin-bottom: 5px; }
.point-item p { font-size: 0.9rem; color: #666; }
.tag { 
  display: inline-block; 
  margin-top: 10px; 
  font-size: 0.75rem; 
  background: #eee; 
  padding: 4px 10px; 
  border-radius: 10px; 
}

.map-visual { background: #e0e0e0; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
</style>