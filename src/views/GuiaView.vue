<template>
  <div class="guia-container">
    <header class="guia-header">
      <h1>Guía de Clasificación</h1>
      <p>Aprende a identificar dónde depositar cada residuo rápidamente.</p>
      
      <div class="search-box">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Ej: plástico, papel, manzana..."
          class="search-input"
        />
        <span class="search-icon">🔍</span>
      </div>
    </header>

    <div class="cards-grid">
      <div 
        v-for="item in filteredResiduos" 
        :key="item.id" 
        :class="['card', item.clase]"
      >
        <div class="icon">{{ item.icon }}</div>
        <h3>{{ item.titulo }}</h3>
        <p>{{ item.descripcion }}</p>
        <span class="contenedor">{{ item.contenedor }}</span>
      </div>
    </div>

    <div v-if="filteredResiduos.length === 0" class="no-results">
      <p>No encontramos información sobre ese material. ¡Prueba con otro!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuiaView',
  data() {
    return {
      searchQuery: '',
      // Lista de datos centralizada
      residuos: [
        { id: 1, titulo: 'Orgánicos', icon: '🍎', descripcion: 'Restos de comida, frutas, verduras y cascarones.', contenedor: 'Contenedor Verde', clase: 'card-organico', keywords: 'comida fruta verdura' },
        { id: 2, titulo: 'Envases y Plásticos', icon: '🧴', descripcion: 'Botellas PET, envases de detergente y bolsas limpias.', contenedor: 'Contenedor Azul', clase: 'card-plastico', keywords: 'botella pet pvc' },
        { id: 3, titulo: 'Papel y Cartón', icon: '📦', descripcion: 'Hojas, revistas, cajas de cartón y periódicos.', contenedor: 'Contenedor Gris', clase: 'card-papel', keywords: 'hoja revista caja' },
        { id: 4, titulo: 'Vidrio', icon: '🍾', descripcion: 'Botellas de bebidas, frascos de conservas y perfumes.', contenedor: 'Contenedor Transparente', clase: 'card-vidrio', keywords: 'cristal frasco botella' }
      ]
    }
  },
  computed: {
    // Lógica mágica del buscador
    filteredResiduos() {
      const query = this.searchQuery.toLowerCase();
      return this.residuos.filter(item => {
        return item.titulo.toLowerCase().includes(query) || 
               item.descripcion.toLowerCase().includes(query) ||
               item.keywords.toLowerCase().includes(query);
      });
    }
  }
}
</script>

<style scoped>
/* Reutilizamos los estilos anteriores y agregamos el buscador */
.guia-container { max-width: 1100px; margin: 0 auto; padding: 40px 20px; }
.guia-header { text-align: center; margin-bottom: 50px; }

/* Estilos del Buscador */
.search-box {
  position: relative;
  max-width: 500px;
  margin: 30px auto 0;
}
.search-input {
  width: 100%;
  padding: 15px 20px 15px 45px;
  border-radius: 50px;
  border: 2px solid #e0e0e0;
  font-size: 1rem;
  transition: border-color 0.3s;
  outline: none;
}
.search-input:focus { border-color: #2d5a27; }
.search-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
}

/* Grid y Cards */
.cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; }
.card { background: white; padding: 30px; border-radius: 15px; text-align: center; box-shadow: 0 10px 20px rgba(0,0,0,0.05); transition: 0.3s; border-top: 8px solid #ccc; }
.card:hover { transform: translateY(-5px); }
.contenedor { display: inline-block; padding: 5px 15px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; color: white; margin-top: 15px; }

/* Colores Dinámicos */
.card-organico { border-top-color: #4CAF50; } .card-organico .contenedor { background: #4CAF50; }
.card-plastico { border-top-color: #2196F3; } .card-plastico .contenedor { background: #2196F3; }
.card-papel { border-top-color: #9E9E9E; } .card-papel .contenedor { background: #9E9E9E; }
.card-vidrio { border-top-color: #00BCD4; } .card-vidrio .contenedor { background: #00BCD4; }

.no-results { text-align: center; padding: 50px; color: #888; }
</style>