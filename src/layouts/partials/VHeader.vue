<template>
    <header class="navbar navbar-expand-md navbar-dark bd-navbar">
        <nav class="container-fluid flex-wrap flex-md-nowrap" aria-label="Main navigation">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbat-content" aria-controls="main-navbat-content" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="main-navbat-content">
                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
export default {
    name: "v-header"
};
</script>
