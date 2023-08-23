<script setup lang="ts">
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { ref } from 'vue'
import { type Association } from '../data/interfaces/association'
import { inject } from 'vue'

const mapboxMap = ref()
const isLargeScreen = inject('isLargeScreen')

const coordinates = [-0.5805, 44.8404]

defineProps<{
  position: { long: number; lat: number }
  filteredAssociations: [Association]
  selectedAssociationId: number
}>()
</script>
<template>
  <div id="#map" class="mapContainer">
    <MapboxMap
      ref="mapboxMap"
      access-token="pk.eyJ1Ijoiamlqb3Rlc3QiLCJhIjoiY2xsbHphMXB4MWtzcDNkdDZ6dHE2MWExaiJ9.ai0X7x9VdymeSuYN0CFnIA"
      :style="[
        isLargeScreen ? { height: '500px', width: 'inherit' } : { height: '200px', width: '30%' }
      ]"
      map-style="mapbox://styles/mapbox/streets-v11"
      :center="coordinates"
      :zoom="isLargeScreen ? 12 : 10"
    >
      <div>
        <MapboxMarker
          v-for="elem in filteredAssociations"
          :key="elem.id"
          :lng-lat="[elem.coordinates.long, elem.coordinates.lat]"
          color="blue"
        />
      </div>
      <div v-if="position.long != null">
        <MapboxMarker :lng-lat="[position.long, position.lat]" color="red" />
      </div>
    </MapboxMap>
  </div>
</template>

<style scoped>
.mapContainer {
  width: 1000px;
  margin: 2rem auto;
}
</style>
