<template>
  <div class="container-fluid">
    <div class="row" style="height: 100vh">
      <div class="col-md-6">
        <img src="/img/brand/processor.svg" style="width: 100%; opacity: 0.5">
      </div> 
      <div class="col-md-6 bg-white" style="height: 100vh;">
        <div style="position: absolute;top: 30%; transform: translateY(-30%)">
          <div >
            <h4>Vlam-Sys Login</h4>
          </div>
          <div>
            <div class="alert alert-danger rounded-0" v-if="errors.invalid">{{ errors.invalid }}</div>
            <p class="text-muted">Selamat datang di aplikasi Vlam-Sys. Silahkan masukkan username dan password</p>
            
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text rounded-0">
                  <font-awesome-icon icon="user" />
                </span>
              </div>
              <input class="form-control" :class="{ 'is-invalid' : errors.username }" type="username" placeholder="Username" v-model="data.username" @keyup="clearError">
              <div class="invalid-feedback" v-if="errors.username">{{ errors.username[0] }}</div>
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend rounded-0">
                <span class="input-group-text rounded-0">
                  <font-awesome-icon icon="lock" />
                </span>
              </div>
              <input class="form-control" :class="{ 'is-invalid' : errors.password }" type="password" placeholder="Password" v-model="data.password" @keyup="clearError">
              <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }} </div>
            </div>
            <b-button variant="dark" squared  :disabled="isLoading" @click.prevent="postLogin">
              <b-spinner small type="grow" v-show="isLoading"></b-spinner>
              Login
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      data: {
        username: '',
        password: ''
      }
    }
  },
  created() {
    if (this.isAuth) {
      this.$router.push({ name: 'home' })
    }
  },
  computed: {
    ...mapGetters(['isAuth','isLoading']),
    ...mapState(['errors'])
  },
  methods: {
    ...mapActions('auth', ['submit']),
    ...mapActions('user',['getUserLogin']),
    ...mapMutations(['CLEAR_ERRORS','SET_LOADING']),
    postLogin() {
      this.SET_LOADING(true)
      this.submit(this.data)
      .then( () => {
        if (this.isAuth) {
          this.CLEAR_ERRORS()
          this.$router.push({ name: 'home' })
        }
      })
    },
    clearError() {
      this.CLEAR_ERRORS()
    }
  },
  destroyed() {
    this.getUserLogin()
  }
}
</script>