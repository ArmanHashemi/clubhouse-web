<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="flex justify-between">
        <q-btn
          aria-label="Menu"
          dense
          flat
          icon="menu"
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <!--        <q-toggle v-model="darkMode" label="dark mode"/>-->
        <q-btn flat icon-right="exit_to_app" label="خروج" @click="logout"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
      show-if-above
    >
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data() {
    return {
      leftDrawerOpen: false,
      darkMode: this.$store.state.main.theme === 'dark',
    }
  },
  created() {
    this.subsGroup = this.$emitter.group(
      this.$emitter.listen('change-theme', (theme) => {
        console.log(theme)
      })
    )
  },
  destroyed() {
    this.subsGroup.unsubscribe()
  },
  methods: {
    logout() {
      this.$q.localStorage.remove('token')
      this.$router.replace({name: 'login'})
    }
  },
  watch: {
    darkMode(val) {
      console.log(val)
      if (val) {
        this.$store.commit('main/SET_STATE', {key: 'theme', value: 'dark'})
        this.$q.localStorage.set('theme', 'dark')
      } else {
        this.$store.commit('main/SET_STATE', {key: 'theme', value: 'light'})
        this.$q.localStorage.set('theme', 'light')
      }
      this.changeTheme()
    }
  }

}
</script>
