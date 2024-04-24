<script setup>

</script>

<template>
  <div class="container-fluid hero-bg text-light d-flex flex-column">
    <div class="py-lg-2 py-4 row justify-content-center align-items-center" style="height: 50px;">
        <div class="col-sm-10 col-11">
            <div class="row align-items-center">
                <div class="col">
                    <span class="fs-1 fw-bold d-flex gap-2 align-items-center">
                        <i class="mdi mdi-radio-tower"></i>TOWER
                    </span>
                </div>
                <div class="col justify-content-end align-items-center d-flex gap-lg-5 gap-3">
                    <button class="btn navlink fw-light fs-6">About</button>
                    <button class="btn navlink fw-light fs-6">Login</button>
                </div>
            </div>

        </div>
    </div>
    <div class="row justify-content-center align-items-center flex-grow-1">
        <div class="col-lg-10 col-xl-9 col-xxl-7 col-12">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg col-md-8 col-10 order-2 order-lg-1 text-center text-lg-start">
                    <h2>Event Management done&nbsp;right</h2>
                    <p>Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Tower. Events&nbsp;are happening every day. Browse events and join the fun.</p>
                    <div class="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
                        <button class="btn btn-bg px-4">Browse Events</button>
                        <button class="btn btn-secondary px-4">Join Tower</button>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 col-md-8 col-9 order-1 order-lg-2 mb-lg-0 mb-5">
                    <img src="../assets/img/card.png" alt="" class="img-fluid w-100" style="object-fit: contain;">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .navlink,.navlink:hover {
        border: none;
        text-transform: uppercase;
        color: var(--bs-light);
        border-radius: unset;
        padding: unset;
    }
</style>
