<template>
  <div id="app">

    <nav class="navbar">
      <div class="navbar-logo">
        🌐 Coleção Virtual
      </div>
      <div class="navbar-links">
        <router-link to="/">🏠 Início</router-link>
        <router-link to="/album">🎴 Meu Álbum</router-link>
      </div>
    </nav>

    <router-view />

  </div>
</template>

<script>
export default {
  name: 'App'
  
}
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8fafc; /* Fundo alinhado com o componente do Álbum */
}


.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #0f172a, #1e293b); /* Azul escuro premium */
  padding: 15px 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.navbar-logo {
  font-size: 22px;
  font-weight: 800;
  color: #fbbf24; 
  letter-spacing: 1px;
}

.navbar-links {
  display: flex;
  gap: 20px;
}

.navbar-links a {
  color: #f8fafc;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.navbar-links a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}


.navbar-links a.router-link-exact-active {
  background-color: #fbbf24;
  color: #0f172a;
}
</style>