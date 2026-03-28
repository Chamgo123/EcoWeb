<template>
  <div class="mapa-container">
    <header class="map-header">
      <h1>Centros de Reciclaje en México</h1>
      <p>Explora los puntos de acopio disponibles en la República en 2026.</p>
    </header>

    <div class="map-layout">
      <aside class="points-list">
        <div v-for="punto in puntosMexico" :key="punto.id" 
             :class="['point-item', { active: seleccionado === punto.id }]"
             @click="seleccionado = punto.id">
          <h3>{{ punto.nombre }}</h3>
          <p>📍 {{ punto.ciudad }}, {{ punto.estado }}</p>
          <span class="tag">{{ punto.materiales }}</span>
        </div>
      </aside>

      <div class="map-visual">
        <div class="map-placeholder">
          <p v-if="seleccionado">Visualizando: {{ getPuntoNombre }}</p>
          <p v-else>Selecciona un punto para ver su ubicación exacta</p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.307374!2d-103.3918!3d20.6719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQwJzE4LjgiTiAxMDPCsDIzJzMwLjUiVw!5e0!3m2!1ses!2smx!4v1625600000000!5m2!1ses!2smx" 
            width="100%" height="90%" style="border:0; border-radius: 15px;" 
            allowfullscreen="" loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seleccionado: 1,
      puntosMexico: [
        { id: 1, nombre: 'Eco-Park CDMX', ciudad: 'Coyoacán', estado: 'CDMX', materiales: 'Electrónicos, Vidrio' },
        { id: 2, nombre: 'Recicladora del Norte', ciudad: 'Monterrey', estado: 'Nuevo León', materiales: 'Metales, Plástico' },
        { id: 3, nombre: 'Punto Verde Occidente', ciudad: 'Guadalajara', estado: 'Jalisco', materiales: 'Papel, Cartón' },
        { id: 4, nombre: 'Centro de Acopio Sureste', ciudad: 'Mérida', estado: 'Yucatán', materiales: 'PET, Aluminio' },
        { id: 5, nombre: 'Baja Recicla', ciudad: 'Tijuana', estado: 'Baja California', materiales: 'Multimaterial' }
      ]
    }
  },
  computed: {
    getPuntoNombre() {
      const p = this.puntosMexico.find(x => x.id === this.seleccionado);
      return p ? p.nombre : '';
    }
  }
}
</script>

<style scoped>
.mapa-container { max-width: 1200px; margin: 0 auto; padding: 40px 20px; }
.map-header { text-align: center; margin-bottom: 40px; }
.map-layout { display: grid; grid-template-columns: 350px 1fr; gap: 30px; height: 600px; }
.points-list { overflow-y: auto; padding-right: 10px; }
.point-item { background: white; padding: 20px; border-radius: 15px; margin-bottom: 15px; cursor: pointer; border-left: 6px solid #eee; transition: 0.3s; }
.point-item:hover { background: #f9f9f9; }
.point-item.active { border-left-color: #2d5a27; background: #f0f7ef; }
.tag { font-size: 0.7rem; background: #e8f5e9; color: #2d5a27; padding: 4px 8px; border-radius: 5px; font-weight: bold; }
.map-visual { background: #eee; border-radius: 20px; padding: 20px; }
</style>