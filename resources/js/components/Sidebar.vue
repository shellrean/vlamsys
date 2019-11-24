<template>
	   <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
      <div class="c-sidebar-brand"><img class="c-sidebar-brand-full" src="/img/brand/dki.png" height="46" alt="CoreUI Logo"><img class="c-sidebar-brand-minimized" src="/img/brand/dki.png" height="46" alt="CoreUI Logo"></div>
      <ul class="c-sidebar-nav">
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" to="/">
            <font-awesome-icon icon="tachometer-alt" class="c-sidebar-nav-icon" />
            Dashboard
          </router-link>
        </li>
        <li class="c-sidebar-nav-title" v-if="$can('read data pokok')">Data pokok</li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown">
          <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#"  v-if="$can('read akademik')">
            <font-awesome-icon icon="book-open" class="c-sidebar-nav-icon" /> Akademik
          </a>
          <ul class="c-sidebar-nav-dropdown-items">
            <li class="c-sidebar-nav-item" v-if="$can('read matpel')">
              <router-link class="c-sidebar-nav-link" to="/matpel"> <span class="c-sidebar-nav-icon"></span> Matpel</router-link>
            </li>
          </ul>
        </li>
        <li class="c-sidebar-nav-title">Ujian</li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown">
          <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
            <font-awesome-icon icon="briefcase" class="c-sidebar-nav-icon" />Soal
          </a>
          <ul class="c-sidebar-nav-dropdown-items">
            <li class="c-sidebar-nav-item">
              <router-link class="c-sidebar-nav-link" to="/banksoal" v-if="$can('create banksoal')"> <span class="c-sidebar-nav-icon"></span>Banksoal</router-link>
            </li>
          </ul>
        </li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown" v-if="$can('read jadwal')" >
          <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
            <font-awesome-icon icon="clipboard-list" class="c-sidebar-nav-icon"/>Ujian
          </a>
          <ul class="c-sidebar-nav-dropdown-items">
            <li class="c-sidebar-nav-item">
              <router-link class="c-sidebar-nav-link" to="/ujian">
                <span class="c-sidebar-nav-icon"></span> Jadwal
              </router-link>
            </li>
            <li class="c-sidebar-nav-item">
              <router-link class="c-sidebar-nav-link" :to="{ name: 'ujian.hasil' }">
                <span class="c-sidebar-nav-icon"></span> Hasil ujian
              </router-link>
            </li>
          </ul>
        </li>
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" to="/filemedia">
            <font-awesome-icon icon="folder" class="c-sidebar-nav-icon" /> File media
          </router-link>
        </li>
      </ul>
      <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-minimized"></button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('user', {
      authenticated: state => state.authenticated
    })
  },
  methods: {
    logout() {
      return new Promise((resolve, reject) => {
        localStorage.removeItem('token')
        resolve()
      })
      .then(() => {
        this.$store.state.token = localStorage.getItem('token')
        this.$router.push('/login')
      })
    }
  }
}
</script>
<style>
.c-sidebar-nav-icon {
  margin-top: -5px;
}
</style>