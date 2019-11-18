<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card mt-5">
          <div class="card-header">
            <h4>Vlam-Sys Login</h4>
          </div>
          <div class="card-body">
            <div class="alert alert-danger rounded-0" v-if="errors.invalid">{{ errors.invalid }}</div>
            <p class="text-muted">Selamat datang di aplikasi Vlam-Sys. Silahkan masukkan username dan password</p>
            
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text rounded-0">
                  <i class="cui-user"></i>
                </span>
              </div>
              <input class="form-control" :class="{ 'is-invalid' : errors.email }" type="email" placeholder="Email" v-model="data.email" @keyup="clearError">
              <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend rounded-0">
                <span class="input-group-text rounded-0">
                  <i class="cui-https"></i>
                </span>
              </div>
              <input class="form-control" :class="{ 'is-invalid' : errors.password }" type="password" placeholder="Password" v-model="data.password" @keyup="clearError">
              <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }} </div>
            </div>
            <b-button variant="primary" squared  :disabled="isLoading" @click.prevent="postLogin">
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
        email: '',
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
  }
}
</script>