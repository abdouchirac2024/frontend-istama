<script setup>
import { onMounted } from "vue";
import jQuery from "jquery/dist/jquery.min.js";

onMounted(() => {
  // Utilisation de jQuery pour le chargement de la page
  $(document).ready(function () {
    // Cacher le préchargeur après un délai
    if ($('.loader-wrap').length) {
      $('.loader-wrap').delay(1000).fadeOut(500);
    }

    // Gérer la fermeture du préchargeur lors du clic sur le bouton de fermeture
    if ($(".preloader-close").length) {
      $(".preloader-close").on("click", function () {
        $('.loader-wrap').delay(200).fadeOut(500);
      });
    }
  });
});
</script>







<template>
  <div class="loader-wrap">
    <div class="preloader">
      <div id="btnClose" class="preloader-close">
        <i class="bi bi-x-lg"></i>
      </div>
      <div id="handle-preloader" class="handle-preloader">
        <div class="animation-preloader">
          <div class="spinner"></div>
          <div class="txt-loading">
            <span data-text-preloader="3" class="letters-loading"> 3 </span>
            <span data-text-preloader="A" class="letters-loading"> A </span>
            <span data-text-preloader="I" class="letters-loading"> I </span>
            <span data-text-preloader="L" class="letters-loading"> L </span>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
