<template>
  <q-page class="flex flex-center">
    <div class="w-1/2 flex space-y-2">
      <div class="w-full">توکن ربات را وارد کنید</div>
      <q-input v-model="token" class="w-full" outlined/>
      <q-btn class="text-white" color="primary" label="ورود" @click="login"/>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      token: ''
    }
  },
  mounted() {
    if (this.$q.localStorage.has('token')) {
      this.$router.replace({name: 'index'})
    }
  },
  methods: {
    /*
    {
        "requested_following_ids": [],
        "has_unread_notifications": true,
        "actionable_notifications_count_by_type": {},
        "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MzMyMjE0NzE1MzcsImp0aSI6IjU1ZDgwODBlNjY1NDQ4NTdhOTY4YzBmYzQzMWYwODRmIiwidXNlcl9pZCI6NTUzNjg5ODF9.387zCaBrowx9JjYYAuYi_9hQluLHCRTafRDQgOdwMBU",
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg1NDcxODM3LCJqdGkiOiI4NGYzMDRjOTA2ZjE0ZDQ4OGYxNmVhZmJkNzM4ODUwMSIsInVzZXJfaWQiOjU1MzY4OTgxfQ.3xD3b79DG2MucTHY2wVB1fDcUhZMH94T8t_SSjNk1rI",
        "notifications_enabled": false,
        "user_profile": {
            "user_id": 505002620,
            "name": "لازمی حسن",
            "photo_url": "https://d14u0p1qkech25.cloudfront.net/505002620_95d92657-985e-41c9-aa32-7362a6a2c074_thumbnail_250x250",
            "username": "hassannnnnn_1"
        },
        "following_ids": [
            634262026,
            1376144907,

        ],
        "blocked_ids": [
            4747733,
            43852735,
            128022471,

        ],
        "eligible_for_topics_upsell": null,
        "can_toggle_message_requests": true,
        "is_admin": false,
        "email": "gepiwo3288@anlubi.com",
        "is_under_18": false,
        "phone_number": "+6281343649136",
        "enable_sound_effect": true,
        "pubnub_token": "p0F2AkF0GmR2QTFDdHRsGSdgQ3Jlc6VEY2hhbqF4GXBlcnNpc3RlbnQudXNlci41MDUwMDI2MjABQ2dycKBDc3BjoEN1c3KgRHV1aWSgQ3BhdKVEY2hhbqBDZ3JwoENzcGOgQ3VzcqBEdXVpZKBEbWV0YaBDc2lnWCC5OGty1-lE0IxRpIxIhA1vZcT3BXTFqiK0rvRYJA_e6g==",
        "pubnub_origin": "clubhouse.pubnubapi.com",
        "can_delete_contacts": true,
        "user_settings": {
            "contact_upload_enabled": true,
            "follower_requests_enabled": false
        },
        "is_ambassador": false,
        "feature_flags": [
            "ENABLE_NAME_GAME_INVITE_SCREEN_ANDROID",
            "ENABLE_WAVES_NETWORKING_SERVICE",
            "ENABLE_PAGINATOR_NETWORKING_SERVICE",
            "ENABLE_PAYMENT_CLUBHOUSE_SERVICE",
            "ENABLE_FOLLOW_REQUESTS",
            "ENABLE_PHONE_NUMBER_CONTACT_HASH_UPLOAD",
            "DISABLE_PHONE_NUMBER_UPLOAD",
            "ENABLE_WHITEOUT",
            "SOCIAL_CLUB_CHAT_REACTIONS",
            "SOCIAL_CLUB_CHAT_REACTIONS_DRAWER",
            "HIDE_EVENTS_TAB_NAV_V2",
            "NEW_MESSAGES_BUTTON",
            "ENABLE_SOCIAL_CLUBS",
            "ENABLE_SOCIAL_CLUBS_CREATION",
            "ENABLE_SOCIAL_CLUB_LEAVE_SURVEY",
            "ENABLE_SOCIAL_CLUB_MULTIPLE_ADMINS",
            "ENABLE_SOCIAL_CLUB_RECOMMENDATIONS",
            "ENABLE_UNCAPPED_INVITE_LINKS",
            "INVITE_CONTACT_TO_SOCIAL_CLUB",
            "ENABLE_BACKCHANNEL",
            "BACKCHANNEL_PAGINATION",
            "IOS_BACKCHANNEL_PAGINATION_V2",
            "ENABLE_REPORT_ROOM_HALLWAY",
            "ENABLE_MULTI_STEP_INCIDENT_REPORT_V2",
            "ENABLE_NSFW",
            "ENABLE_WAVES",
            "ENABLE_CONTACT_SYNC",
            "ENABLE_BACKEND_DRIVEN_ROOM_SHARE_PERMISSIONS",
            "ENABLE_BACKEND_DRIVEN_PING_BAR",
            "ENABLE_CHANNEL_SHARE_SHEET",
            "ENABLE_NATIVE_SHARING",
            "ENABLE_REPLAYS",
            "ENABLE_SAVED_REPLAYS",
            "ENABLE_GAME_SETTINGS",
            "ENABLE_CHANNEL_CHAT",
            "ENABLE_EVOLVE_SOCIAL_CHANNELS",
            "ENABLE_NEW_ROOM_DETAILS",
            "ENABLE_TOPICS_V2",
            "DISABLE_AMPLITUDE",
            "ENABLE_CLUBHOUSE_SERVICE_FOR_BULLETIN",
            "DISABLE_CHANNEL_APP_NAV",
            "ENABLE_AUDIO_SPATIALIZATION",
            "ENABLE_MEDIA_VOLUME_IN_BLUETOOTH",
            "ENABLE_SUGGEST_USERNAME",
            "ENABLE_PROFILE_EPOXY",
            "ENABLE_INFRA_NETWORKING_SERVICE",
            "ENABLE_TOPICS_NETWORKING_SERVICE",
            "ENABLE_CONTACTS_IN_SUGGESTED_SPEAKERS",
            "ENABLE_HOUSE_REPORTING",
            "ENABLE_HOUSE_MEMBER_BANNING",
            "ENABLE_HOUSE_MEMBERSHIP_V2",
            "ENABLE_SOCIAL_CLUB_RECOMMENDATIONS_NEAR_YOU",
            "ENABLE_PINNED_SOCIAL_CLUBS",
            "SIMPLIFIED_BACKCHANNEL_IOS"
        ],
        "experiments": {
            "exp-demo-client-side-experiment": {
                "behavior": "treatment",
                "log": "treatment"
            },
            "exp-notification-permission-nux": {
                "behavior": "updated_notification_permission_nux",
                "log": "updated_notification_permission_nux"
            },
            "exp-hallway-highlight-first-cell": {
                "behavior": "highlight_first_cell",
                "log": "highlight_first_cell"
            },
            "exp-audio-spatialization-stage-size": {
                "behavior": "70",
                "log": null
            },
            "exp-audio-spatialization-stage-slots": {
                "behavior": "15",
                "log": "15"
            },
            "exp-audio-spatialization-rotation-speed": {
                "behavior": "0.01",
                "log": "0.01"
            },
            "exp-create-public-channel-title-upsell": {
                "behavior": "no_upsell",
                "log": null
            },
            "auto-exp-plus-room-menu": {
                "behavior": "none",
                "log": null
            },
            "auto-exp-explore-refresh": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-new-composer-i-o-s": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-reshare-icon": {
                "behavior": "enabled",
                "log": "enabled"
            },
            "auto-exp-share-profile-on-bio-update": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-keep-stale-notifs-on-launch": {
                "behavior": "disabled",
                "log": null
            },
            "auto-exp-event-in-composer": {
                "behavior": "enabled",
                "log": "enabled"
            },
            "auto-exp-leave-channel-club-upsell-v2": {
                "behavior": "disabled",
                "log": null
            },
            "auto-exp-onboarding-contact-permission-legal-disclosure": {
                "behavior": "enabled",
                "log": "enabled"
            },
            "auto-exp-share-club-from-channel": {
                "behavior": "disabled",
                "log": null
            },
            "auto-exp-show-invited-count-on-profile": {
                "behavior": "disabled",
                "log": null
            },
            "auto-exp-room-permalinks-ios-v2": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-remove-only-stale-channel-notifs-ios": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-saved-replay-hallway-entry-point-android": {
                "behavior": "disabled",
                "log": null
            },
            "auto-exp-invite-to-room-from-audience": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-start-room-from-club": {
                "behavior": "disabled",
                "log": null
            },
            "auto-exp-share-club-from-channel-v2": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-auth-contacts-after-reinstall": {
                "behavior": "disabled",
                "log": null
            },
            "auto-exp-show-wave-in-backchannel-composer-android": {
                "behavior": "enabled",
                "log": "enabled"
            },
            "auto-exp-share-channel-screenshot": {
                "behavior": "disabled",
                "log": null
            },
            "auto-exp-copy-link-on-room-creation": {
                "behavior": "disabled",
                "log": null
            },
            "auto-exp-search-button-in-ping-bar": {
                "behavior": "disabled",
                "log": null
            },
            "auto-exp-n-u-g-add-menu-icon-to-each-step": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-n-u-g-add-menu-icon-to-each-step-i-o-s": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-copy-link-when-creating-public-room": {
                "behavior": "disabled",
                "log": null
            },
            "auto-exp-ping-bar-s-m-s-urgency": {
                "behavior": "disabled",
                "log": null
            },
            "auto-exp-edge-stories-limit-amount-shown-android": {
                "behavior": "0",
                "log": null
            },
            "auto-exp-split-contact-sync-toggle-android": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-house-setting-reorganization": {
                "behavior": "disabled",
                "log": null
            },
            "auto-exp-explore-houses-rename-join-button": {
                "behavior": "enabled",
                "log": "enabled"
            },
            "auto-exp-new-room-composer": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-improved-minical-ios": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-prominent-sharing": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-native-reshares": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-prominent-club-invite-link": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-twitter-names-in-channel-share-ios": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-twitter-shares-in-room-chat": {
                "behavior": "enabled",
                "log": null
            },
            "auto-exp-mix-contacts-in-ping-bar": {
                "behavior": "enabled",
                "log": null
            }
        },
        "has_unread_user_profile_actions": false,
        "blockchain_config": {},
        "connected_wallets": [],
        "is_onboarding": false,
        "success": true
    }
    */
    login() {
      this.$q.localStorage.set('token', this.token)

      const data = {
        return_blocked_ids: true,
        timezone_identifier: "Asia/Tehran",
        return_following_ids: true
      }
      this.$store.dispatch('main/me', data).then(response => {
        console.log(response.data)
        this.$store.commit('main/SET_STATE', {key: 'profile', value: response.data})
        this.$router.replace({name: 'index'})
      }).catch(error => {
        console.log(error)
        this.$q.localStorage.remove('token')
      })
    }
  }
}
</script>
