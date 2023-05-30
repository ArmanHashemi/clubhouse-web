<template>
  <div class="w-full flex bg-white p-2 rounded-xl items-center">
    <img :src="$store.state.main.profile.user_profile.photo_url" class="w-32 h-32 rounded-full">
    <div class="flex-1 flex px-2">
      <div class="w-full flex items-center">
        <span>نام : </span>
        <span class="text-xl text-bold">{{ $store.state.main.profile.user_profile.name }}</span>
      </div>
      <div class="w-full flex items-center">
        <span>نام کاربری : </span>
        <span class="text-xl text-bold">{{ $store.state.main.profile.user_profile.username }}</span>
      </div>
      <div class="w-full flex items-center">
        <span>آیدی کاربر : </span>
        <span class="text-xl text-bold">{{ $store.state.main.profile.user_profile.user_id }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile"
}
</script>

<style scoped>

</style>
