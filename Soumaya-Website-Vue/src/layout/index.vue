<template>
  <div id="app">
    <BlueAppHeader></BlueAppHeader>
    <WhiteAppHeader></WhiteAppHeader>
    <div class="wrapper">
      <transition name="fade">
       <!-- <router-view></router-view>-->
      </transition>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import BlueAppHeader from './BlueHeader.vue'
import WhiteAppHeader from './WhiteHeader.vue'
import AppFooter from './Footer.vue'

export default {
  name: 'AASTSERVICES',
  components: {
    BlueAppHeader,
    WhiteAppHeader,
    AppFooter
  }
}
</script>s
