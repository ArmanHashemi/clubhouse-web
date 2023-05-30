<template>
  <q-page>
    <div class="flex w-full h-full p-2 space-y-2">
      <user-profile/>
      <join-channel/>
    </div>
  </q-page>
</template>

<script>
import UserProfile from "components/UserProfile";
import JoinChannel from "components/JoinChannel";

export default {
  name: 'PageIndex',
  components: {JoinChannel, UserProfile},
  data() {
    return {}
  },
  methods: {

  }
}
</script>
