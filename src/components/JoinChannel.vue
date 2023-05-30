<template>
  <div class="w-full flex bg-white p-2 rounded-xl items-center space-y-2">
    <div class="w-full text-md text-bold">دعوت خودکار کاربران (invite speakers)</div>
    <q-input v-model="channel" class="w-full" outlined placeholder="شناسه رووم را وارد کنید"/>
    <q-btn color="primary" label="وارد شدن ربات به رووم" @click="joinChannel"/>
    <div class="w-full border border-1"></div>
    <div class="w-full">پس از وارد شدن ربات به رووم , خود ربات را دعوت کرده و برای قبول دعوت دکمه زیر را بفشارید</div>
    <q-btn color="primary" label="قبول دعوت"  @click="acceptInvite"/>
    <div class="w-full">اگر ربات دعوت را پذیرفت و بر روی استیج آمد ربات را مدیریتور کرده و دکمه دعوت خودکار را فشار دهید</div>
    <q-btn color="primary" label="فعال کردن دعوت خودکار"  @click="automaticInvite"/>
  </div>
</template>

<script>
export default {
  name: "JoinChannel",
  data() {
    return {
      channel: '',
      invitedUsers:[],
      allUsers:[]
    }
  },
  methods: {
    joinChannel(){
      const data = {
        channel: this.channel
      }
      this.$store.dispatch('main/joinChannel',data).then(response=>{
        console.log(response.data)
        setInterval(()=>{
          this.activePing()
        },30000)
      }).catch(error=>{
        console.log(error)
      })
    },
    activePing(){
      const data = {
        channel: this.channel,
        chanel_id: '',
      }
      this.$store.dispatch('main/activePing',data).then(response=>{
        console.log(response.data)
      }).catch(error=>{
        console.log(error)
      })
    },
    acceptInvite(){
      const data = {
        channel: this.channel,
        user_id: this.$store.state.main.profile.user_profile.user_id,
      }
      this.$store.dispatch('main/acceptSpeakerInvite',data).then(response=>{
        console.log(response.data)
      }).catch(error=>{
        console.log(error)
      })
    },
    automaticInvite(){
      setInterval(()=>{
        this._getRoomUsers()
      },30000)
      setInterval(()=>{
        this.allUsers.forEach(user=>{
          if (this.invitedUsers.indexOf(user.user_id) === -1) {
            this.invitedUsers.push(user.user_id);
            this.$store.dispatch('main/inviteToSpeak',{ channel: this.channel, user_id: user.user_id,}).then(response=>{
              console.log(response.data)
            })
          }
        })
      },35000)


    },
    _getRoomUsers(){
      const data = {
        channel: this.channel,
        channel_id: ''

      }
      this.$store.dispatch('main/get_channel',data).then(response=>{
        console.log(response.data)
        this.allUsers = []
        this.allUsers = response.data.users

      }).catch(error=>{
        console.log(error)
      })
    },
  }
}
</script>

<style scoped>

</style>
