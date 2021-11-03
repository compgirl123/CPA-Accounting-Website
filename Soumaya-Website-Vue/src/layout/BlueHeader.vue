<template>
  <div class ='header'>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info" class ='totalnavbar'>
    <b-navbar-brand href="#">fb</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.totalnavbar{
  padding:12px;
  margin-left:22px;
  background-color: #006fba!important;
}
.header {
  text-align: center;
  width: 100%;
  background-color: #006fba!important;
}
.testa{
  text-align: right;
}
.navbar navbar-dark bg-dark navbar-expand-lg{
   margin:0px;
 }
 .bg-info{
   background-color: #006fba!important;
 }

 .ml-auto{
   margin-left:auto;
 }
.navbar-dark .navbar-toggler{
  border-color: #006fba!important;
}
</style>
