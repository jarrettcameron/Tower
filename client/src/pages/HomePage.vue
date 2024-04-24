<script setup>
import { ref } from 'vue';


    const categories = ref([
        {
            name: 'All',
            filterValue: 'all',
            icon: 'infinity',
            color: '#32ce49'
        },
        {
            name: 'Concerts',
            filterValue: 'concerts',
            icon: 'guitar-electric',
            color: '#eb1e55'
        },
        {
            name: 'Conventions',
            filterValue: 'convention',
            icon: 'account-group',
            color: '#6f32fc'
        },
        {
            name: 'Sports',
            filterValue: 'sports',
            icon: 'soccer',
            color: '#2a57f7'
        },
        {
            name: 'Digital',
            filterValue: 'digital',
            icon: 'monitor',
            color: '#f07d11'
        }
    ])

</script>

<template>
  <div class="container-fluid bg-gradient hero text-white d-flex flex-column">
    <div class="row justify-content-center align-items-center flex-grow-1">
        <div class="col-lg-10 col-xl-9 col-xxl-7 col-12">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg col-md-8 col-10 order-2 order-lg-1 text-center text-lg-start">
                    <h2>Event Management done&nbsp;right</h2>
                    <p>Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Tower. Events&nbsp;are happening every day. Browse events and join the fun.</p>
                    <div class="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
                        <button class="btn btn-bg px-4 text-white">Browse Events</button>
                        <button class="btn btn-secondary px-4 text-white">Join Tower</button>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 col-md-8 col-9 order-1 order-lg-2 mb-lg-0 mb-5">
                    <img src="../assets/img/card.png" alt="" class="img-fluid w-100" style="object-fit: contain;">
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="p-5 row justify-content-center">
        <div class="col-10">
            <h2>How Tower works</h2>
        </div>
        <div class="col-9 mt-3">
            <div class="row gap-4">
                <div class="col bg-info p-4 rounded d-flex gap-3 align-items-start">
                    <i class="text-success fs-3 mdi mdi-magnify"></i>
                    <div class="mt-2">
                        <h5>Discover events you're interested in</h5>
                        <p class="text-dark">Browse through community hosted events for all the things you love</p>
                    </div>
                </div>
                <div class="col bg-info p-4 rounded d-flex gap-3 align-items-start">
                    <i class="text-success fs-3 mdi mdi-plus"></i>
                    <div class="mt-2">
                        <h5>Start an event to invite your friends</h5>
                        <p class="text-dark mb-1">Create your own Tower event, and draw from a community of millions</p>
                        <button class="btn text-success border-0 p-0">Create an event</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="p-5 pt-3 row justify-content-center">
        <div class="col-10">
            <h2>Explore top categories</h2>
        </div>
        <div class="col-9 mt-3">
            <div class="row gap-3">
                <div class="btn col-md col-6 bg-info p-4 rounded gap-3 text-center" v-for="category in categories" :key="category.name">
                    <i class="mdi fs-2 d-block" :class="`mdi-${category.icon}`" :style="`color: ${category.color};`"></i>
                    <h5>{{ category.name }}</h5>
                </div>
            </div>
        </div>
    </div>
    <div class="p-5 pt-3 row justify-content-center">
        <div class="col-10">
            <h2>Upcoming events</h2>
        </div>
        <div class="col-9 mt-3">
            <div class="row gap-3">
                <div class="btn col-md col-6 bg-info p-4 rounded gap-3 text-center">

                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
