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
      invitedUsers:[
        1672145106,
        332379403,
        991744789,
        224842284,
        1303171256,
        770025611,
        2042140632,
        2107043937,
        202813980,
        1867884694,
        1796618714,
        1304504626,
        1918601541,
        858782910,
        1567911000,
        50613750,
        1223811439,
        702457992,
        2056331188,
        112487738,
        135651389,
        1867205068,
        621714900,
        785443178,
        186503857,
        1159030310,
        744249424,
        1835175579,
        1075420295,
        1543402896,
        375733676,
        152256688,
        988186908,
        2104007993,
        835544432,
        616333900,
        454960392,
        991375778,
        43596702,
        1903222884,
        169626340,
        935323889,
        107890458,
        1171051566,
        803092846,
        2112282229,
        144624000,
        640055822,
        259058111,
        1159764032,
        1896617275,
        1157558777,
        409259160,
        832267819,
        181466831,
        1841664312,
        1006431065,
        512277940,
        1781521302,
        1166227634,
        1561891656,
        891639726,
        1170781823,
        1739613540,
        281883186,
        395635265,
        1462677108,
        379879195,
        998350738,
        272429003,
        407617356,
        805953213,
        188268078,
        1685110470,
        870995929,
        807271946,
        613551512,
        1683166804,
        332488389,
        14695715,
        1587110119,
        1504721615,
        391408388,
        991046483,
        826327367,
        977343904,
        837700580,
        960553759,
        1843052904,
        708880390,
        1291098211,
        67346387,
        989706147,
        461335629,
        1144449102,
        1047479833,
        494283267,
        1145001076,
        520546538,
        2124897383,
        497610894,
        1016188771,
        1157967956
      ],
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
