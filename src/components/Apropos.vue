<template>
    <Header />
    <div class="about-page">
      <div class="container">
        <h1 class="main-title">À propos de Easy-Way</h1>
  
        <div class="content-grid">
          <!-- Image Covoiturage Section (à gauche) -->
          <div class="image-section">
            <img
              src="@/assets/images/covoiturage.webp"
              alt="Image Covoiturage"
              class="feature-image"
            />
          </div>
  
          <!-- Text Section (à droite) -->
          <div class="text-section">
            <h2>Notre Mission</h2>
            <p>
              Chez Easy-Way, nous nous engageons à transformer le paysage du transport urbain.
              Notre plateforme innovante connecte les conducteurs aux passagers, favorisant
              une communauté de voyage responsable et économique.
            </p>
  
            <!-- Nos Engagements Section -->
            <h2>Nos Engagements</h2>
            <div class="engagement-grid">
              <div
                class="engagement-block"
                v-for="engagement in engagements"
                :key="engagement.title"
              >
                <h3>{{ engagement.title }}</h3>
                <p>{{ engagement.description }}</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- CTA Section -->
        <div class="cta-section">
          <h2>Rejoignez la révolution du covoiturage</h2>
          <p>
            Ensemble, créons un avenir de transport plus durable et connecté.
            Rejoignez la communauté Easy-Way dès aujourd'hui !
          </p>
          <a href="#" @click.prevent="copyEmail" class="cta-button">Contactez-nous</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Header from '@/components/Header.vue'; // Assurez-vous du bon chemin d'importation
  
  const engagements = ref([
    {
      title: "Simplicité",
      description: "Une interface intuitive pour des trajets sans tracas."
    },
    {
      title: "Sécurité",
      description: "Voyagez en toute confiance grâce à notre système de vérification."
    },
    {
      title: "Économie",
      description: "Réduisez vos coûts de transport en partageant les frais."
    },
    {
      title: "Écologie",
      description: "Contribuez à un environnement plus sain en réduisant les émissions."
    }
  ]);
  
  const copyEmail = () => {
    navigator.clipboard.writeText('contact@easyway.com')
      .then(() => alert('Adresse e-mail copiée !'))
      .catch(err => console.error('Erreur lors de la copie :', err));
  };
  </script>
  
  <style scoped>
  .about-page {
    background-color: #f0f4f8;
    padding: 4rem 0;
    font-family: 'Arial', sans-serif;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .main-title {
    font-size: 2.5rem;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
  }
  
  .main-title::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #3498db;
    margin: 1rem auto 0;
  }
  
  .content-grid {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .image-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .feature-image {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }
  
  .image-section:hover .feature-image {
    transform: scale(1.05);
  }
  
  .text-section {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .text-section h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .engagement-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .engagement-block {
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .engagement-block:hover {
    transform: translateY(-10px);
    background-color: #e8f0fe;
  }
  
  .engagement-block h3 {
    color: #3498db;
    margin-bottom: 0.5rem;
  }
  
  .cta-section {
    background-color: #3498db;
    color: white;
    padding: 3rem;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  }
  
  .cta-section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .cta-section p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    display: inline-block;
    background-color: white;
    color: #3498db;
    padding: 0.75rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #2c3e50;
    color: white;
  }
  
  @media (max-width: 768px) {
    .content-grid {
      flex-direction: column;
    }
  
    .engagement-grid {
      flex-direction: column;
    }
  }
  </style>
  