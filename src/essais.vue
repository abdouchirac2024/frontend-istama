<!-- essais.vue -->
<template>
  <div>
    <Header />
    
    <div class="main-container">
      <div class="background-text">
        <h2><span class="easy">Easy-</span><span class="way">Way</span></h2>
      </div>

      <div class="taxi-image">
        <img src="@/assets/images/carmain.png" alt="Taxi Image">
      </div>
    </div>

    <!-- home section -->
    <div class="home-container">
      <div class="home-content">
        <div class="inner-content">
          <h3>best in city</h3>
          <h2>trusted cab service in county</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil deserunt odio repellendus dolorum suscipit excepturi placeat facilis dignissimos officiis aut nam, delectus possimus rerum consequatur similique! Deserunt, vitae. Officiis?</p>
          <a href="#" class="booknow">book now</a>
        </div>
        <div class="inner-content">
          <div class="contact-form">
            <div class="form-heading">
              <h1>book a cab</h1>
            </div>
            <div class="form-fields">
              <input type="text" placeholder="name">
              <input type="text" placeholder="phone">
              <input type="text" placeholder="when">
              <input type="text" placeholder="date">
              <input type="text" placeholder="start">
              <input type="text" placeholder="end">
            </div>
            <div class="submit">
              <a href="#">Submit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- home section ended -->

    <!-- our tariff -->
    <div class="main-tariff">
      <h1>our <span>tarrif</span></h1>
      <div class="inner-tarrif">
        <div class="tarrif-container">
          <div class="inner-box">
            <img src="@/assets/images/image1.png" alt="Economy Class">
            <h2>economy class</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illum officia fugiat, autem facere iste repellendus omnis nemo dolore</p>
            <h3>price: $3 /-</h3>
            <a href="#">order now</a>
          </div>
        </div>

        <div class="tarrif-container">
          <div class="inner-box">
            <img src="@/assets/images/image1.png" alt="Economy Class">
            <h2 class="heading-yellow">economy class</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illum officia fugiat, autem facere iste repellendus omnis nemo dolore</p>
            <h3 class="yellw-section">price: $3 /-</h3>
            <a href="#" class="btn-yellow">order now</a>
          </div>
        </div>

        <div class="tarrif-container">
          <div class="inner-box">
            <img src="@/assets/images/image1.png" alt="Economy Class">
            <h2>economy class</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illum officia fugiat, autem facere iste repellendus omnis nemo dolore</p>
            <h3>price: $3 /-</h3>
            <a href="#">order now</a>
          </div>
        </div>
      </div>
    </div>
    <!-- our tariff ended -->

    <!-- fast booking -->
    <div class="fast-booking">
      <h1 class="fast-hading">we do best</h1>
      <h2>than you wish</h2>
      <div class="inner-fast">
        <div class="booking-content">
          <div class="icon-fast">
            <span><i class="fas fa-star"></i></span>
          </div>
          <div class="inner-fast-text">
            <h1>fast booking</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis asperiores adipisci, totam volu</p>
          </div>
        </div>
        <div class="booking-content">
          <div class="icon-fast">
            <span><i class="fas fa-map-marker-alt"></i></span>
          </div>
          <div class="inner-fast-text">
            <h1>fast booking</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis asperiores adipisci, totam volu</p>
          </div>
        </div>
        <div class="booking-content">
          <div class="icon-fast">
            <span><i class="fas fa-map-marker-alt"></i></span>
          </div>
          <div class="inner-fast-text">
            <h1>fast booking</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis asperiores adipisci, totam volu</p>
          </div>
        </div>
        <div class="booking-content">
          <div class="icon-fast">
            <span><i class="fas fa-map-marker-alt"></i></span>
          </div>
          <div class="inner-fast-text">
            <h1>fast booking</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis asperiores adipisci, totam volu</p>
          </div>
        </div>
      </div>
    </div>
    <!-- fast booking end -->

    <!-- testimonials -->
    <div class="testimonials">
      <h1 class="heading-test">happy clients</h1>
      <div class="main-testimonials">
        <div class="inner-test">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis fugit magnam esse, amet adipisci eaque dolore explicabo quidem laudantium ad, enim, obcaecati optio? Harum porro delectus accusamus assumenda ullam.</p>
          <div class="clients">
            <img src="@/assets/images/jhon.png" alt="Client Image">
            <h1>jhone doe</h1>
          </div>
        </div>
        <div class="inner-test">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis fugit magnam esse, amet adipisci eaque dolore explicabo quidem laudantium ad, enim, obcaecati optio? Harum porro delectus accusamus assumenda ullam.</p>
          <div class="clients">
            <img src="@/assets/images/jhon.png" alt="Client Image">
            <h1>jhone doe</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- testimonials end -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'; // Assurez-vous du bon chemin d'importation

export default {
  name: "EssaisView",
  components: {
    Header
  }
};
</script>

<style scoped>
@import "@/styles/style.css";
</style>
