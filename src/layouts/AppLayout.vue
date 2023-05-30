<template>
  <q-layout view="lHh Lpr lFf">
    <q-ajax-bar
      ref="bar"
      color="accent"
      position="top"
      size="10px"
      skip-hijack
    />
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'AppLayout',
  watch: {
    '$store.state.main.loading': function () {
      const bar = this.$refs.bar
      if (this.$store.state.main.loading) {
        bar.start()
      } else {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }
    }
  }

}
</script>
