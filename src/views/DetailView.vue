<template>
<nav class="navbar bg-primary">
  <div class="container-fluid">
    <RouterLink to="/" class="navbar-brand">CoffeeShop</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="d-flex justify-content-center">
    </div>
    <div class="row mt-3">
        <div class="col-md-6">
          <img :src="products.img" class="img-fluid ms-2">
        </div>
            <div class="col-md-6">
                <h1>{{ products.name }}</h1>
                <p>
                  ขนาด: S : {{ products.size.s }} บาท, M : {{ products.size.m }} บาท, L : {{ products.size.l }} บาท
                </p>

                <h4>ราคา {{products.price}} บาท</h4>
                
            </div>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router'
import {ref, onBeforeMount} from 'vue'
import product from '../data.json'

const products = ref(null)
const route = useRoute();
const {id} = route.params
onBeforeMount(() => {
  products.value = product.find(c => c.id === parseInt(id))
})
</script>
