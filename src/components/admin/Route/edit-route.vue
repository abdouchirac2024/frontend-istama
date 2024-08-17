<template>

  <!--Voici le code complet pour la mise à jour de la route sans rechargement de la page ni redirection, en utilisant les données  -->
    <div>
    
  
      <div class="modal fade" tabindex="-1" aria-labelledby="editRouteModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editRouteModalLabel">Modifier une route existante</h5>
              <button type="button" class="btn-close" @click="closeModal" aria-label="Fermer"></button>
            </div>
  
            <div class="modal-body">
              <form @submit.prevent="updateRoute">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label">Nom de la route</label>
                      <input type="text" class="form-control" v-model="route.name" required />
                    </div>
                  </div>
  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label">Point de départ</label>
                      <input type="text" class="form-control" v-model="route.from" required />
                    </div>
                  </div>
  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label">Destination</label>
                      <input type="text" class="form-control" v-model="route.to" required />
                    </div>
                  </div>
  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label">Coût (FCA)</label>
                      <input type="number" class="form-control" v-model="route.cost" required />
                    </div>
                  </div>
  
                  <div class="form-group mb-0">
                    <div class="flex modal-footer" style="justify-content: space-between">
                      <button type="button" class="btn btn-secondary" @click="closeModal">Annuler</button>
                      <button type="submit" class="btn btn-primary">Modifier</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>





<script setup>
import { ref } from "vue";
import { useToast } from 'vue-toastification';
import ds from '../../../Services/DataService';

const route = ref({
  name: "",
  from: "",
  to: "",
  cost: 200,
});

const toast = useToast();
let routeId; // Déclarez la variable routeId

const openModal = (id) => {
    console.log('Open Modal with ID:', id);
    routeId = id;
    $(".modal").modal("show");
  };

  const updateRoute = async () => {
    try {
      // Log the route ID before sending the request
      console.log('Route ID before update:', routeId);

      if (isNaN(route.value.cost)) {
        throw new Error('Valeur de coût invalide');
      }

      const updatedRoute = await ds.put(`/api/routes/${routeId}`, {
        name: route.value.name,
        from: route.value.from,
        to: route.value.to,
        cost: route.value.cost,
      });

      // Log the updated data
      console.log('updatedRoute:', updatedRoute);

      // Update the local route data
      route.value.name = updatedRoute.name;
      route.value.from = updatedRoute.from;
      route.value.to = updatedRoute.to;
      route.value.cost = updatedRoute.cost;

      // Log the route data after the update
      console.log('route after update:', route.value);

      closeModal();
      toast.success('Route modifiée avec succès !', { icon: true, theme: 'bubble', timeout: 5000 });
    } catch (error) {
      console.error("Erreur lors de la modification de la route :", error);
      toast.error('Erreur lors de la modification de la route', { icon: true, theme: 'bubble', timeout: 5000 });
    }
  };


</script>

