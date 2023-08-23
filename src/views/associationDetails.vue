<script setup lang="ts">
import { ref } from 'vue'
import api from '../services/api'
import { type Association } from '../data/interfaces/association'
import { capitalizeFirstLetter } from '../utils'
import { inject } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isLargeScreen = inject('isLargeScreen')

const association = ref<Association>()
association.value = api.getOnebyId(parseInt(route.params.id, 10))
</script>

<template>
  <a-breadcrumb>
    <a-breadcrumb-item :style="{ paddingTop: '2rem' }"
      ><routerLink to="/"
        ><span :style="{ fontWeight: 'bold' }">Home</span></routerLink
      ></a-breadcrumb-item
    >
  </a-breadcrumb>
  <div :style="[isLargeScreen ? { padding: '0 10rem' } : { padding: '0' }]">
    <h2 v-if="association && association.name" class="title">
      {{ capitalizeFirstLetter(association.name) }}
    </h2>
    <div class="categAddressContainer">
      <p v-if="association && association.name" class="category">
        {{ capitalizeFirstLetter(association?.category) }}
      </p>
      <p>
        {{ association?.address.number }}, {{ association?.address.street }},
        {{ association?.address.postcode }} {{ association?.address.town }}
      </p>
    </div>
    <p :style="{ textAlign: 'end' }">{{ association?.phoneNumber }}</p>
    <p class="description">
      {{ association?.description }}
    </p>
  </div>
</template>

<style scoped>
p,
span {
  font-size: 18px;
}
.title {
  text-align: center;
  margin: 5rem;
}
.categAddressContainer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.description {
  margin-top: 3rem;
  line-height: 150%;
}
.category {
  padding: 5px;
  background-color: cadetblue;
  border-radius: 5px;
  color: white;
}
</style>
