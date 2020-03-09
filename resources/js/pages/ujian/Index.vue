<template>
    <div class="c-body" v-if="$can('jadwal')">
        <main class="c-main">
          <div class="container-fluid">
            <div class="fade-in">
                <router-view></router-view>
            </div>
          </div>
        </main>
    </div>
</template>
<script>
    export default {
        name: 'IndexUjian',
        created() {
            if(!this.$can('jadwal')) {
                this.$router.push('/')
            }
        }
    }
</script>