<template>
    <header>
      <a href="#" class="logo">
        <h2><span class="easy">Easy-</span><span class="way">Way</span></h2>
      </a>
      <div id="menu-bars" :class="{ 'fa-times': isMenuActive }" class="fas fa-bars" @click="toggleMenu"></div>
      <nav class="navbar" :class="{ active: isMenuActive }" ref="mynav">
        <router-link to="/" @click.native="closeMenu">Accueil</router-link>
      <router-link to="/services" @click.native="closeMenu">Services</router-link>
      <router-link to="/tariffs" @click.native="closeMenu">Tariffs</router-link>
      <router-link to="/apropos" @click.native="closeMenu">A Propos</router-link>
        <button class="btn-login" @click="goToLogin">Inscription</button>
      </nav>
    </header>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: "Header",
    setup() {
      const router = useRouter();
      const isMenuActive = ref(false);
  
      const toggleMenu = () => {
        isMenuActive.value = !isMenuActive.value;
      };
  
      const closeMenu = () => {
        isMenuActive.value = false;
      };
  
      const goToLogin = () => {
        router.push('/login').then(() => {
          window.location.reload(); // Recharger la page après la redirection
        });
      };
  
      return {
        isMenuActive,
        toggleMenu,
        closeMenu,
        goToLogin
      };
    }
  }
  </script>
  
  <style scoped>
  @import "@/styles/style.css";
  @import "@/assets/fontawesome/css/all.min.css";
  
  header {
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #333;
    color: #fff;
    width: 100%;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  }
  
  header .logo {
    font-size: 2rem;
    font-weight: bold;
  }
  
  header #menu-bars {
    font-size: 2rem;
    cursor: pointer;
    display: none;
  }
  
  header #menu-bars.fa-times {
    content: '\f00d'; /* FontAwesome icon for close (cancel) */
  }
  
  header .navbar {
    display: flex;
    gap: 1.5rem;
  }
  
  header .navbar a,
  header .navbar .btn-login {
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;
  }
  
  header .navbar a:hover,
  header .navbar .btn-login:hover {
    color: #fff; /* Same white color on hover */
  }
  
  header .navbar .btn-login {
    background: blue;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
  }
  
  .background-text h2 {
    font-size: 3rem;
    font-weight: bold;
  }
  
  .easy {
    color: white;
  }
  
  .way {
    color: blue;
  }
  
  @media (max-width: 768px) {
    header #menu-bars {
      display: block;
    }
  
    header .navbar {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: #333;
      flex-direction: column;
      align-items: center;
      display: none;
      transition: transform 0.3s ease-in-out;
    }
  
    header .navbar.active {
      display: flex;
      transform: translateY(0);
    }
  
    header .navbar a,
    header .navbar .btn-login {
      padding: 1rem 0;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #444;
    }
  
    header .navbar a:hover,
    header .navbar .btn-login:hover {
      background-color: #444; /* Darker background on hover */
      color: #fff; /* Consistent white color */
    }
  
    header .navbar .btn-login {
      background: #0044cc; /* Consistent blue color for the button */
      padding: 1rem;
      border-radius: 0.5rem;
      width: 90%; /* Slightly narrower on mobile for better spacing */
    }
  }
  </style>
  