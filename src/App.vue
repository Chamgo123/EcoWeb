<template>
    <div id="app">
        <nav class="navbar">
            <div class="logo">EcoWeb</div>
            <div class="menu">
                <a href="#">Inicio</a>
                <a href="#">Guia</a>
                <a href="#">Mapa</a>
                <button class="btn-primary">Iniciar Sesión</button>
            </div>
        </nav>
        
        <header class="hero">
            <div class="hero-content">
                <h1>Pequeñas acciones,<br>grandes cambios.</h1>
                <p>Aprende a clasificar tus residuos y encuentra puntos de reciclaje cerca de ti.</p>
                <div class="actions">
                <a href="#" class="btn-primary">Empezar ahora</a>
                <a href="#" class="btn-secondary">Saber más</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="@/assets/hero-illustration.png" alt="Reciclaje Consciente">
            </div>
            </header>
        </div>
        </template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 20px 5%;
  align-items: center;
}
.hero {
  display: flex;
  align-items: center;
  padding: 60px 5%;
  gap: 40px;
}
.hero-content h1 {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 20px;
}
/* Estilos adicionales para simular la cuadrícula de la plantilla */
</style>