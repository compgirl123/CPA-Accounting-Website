<template>
  <div class ='header'>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <div class ='test'>
      <b-navbar-brand href="#">A.A.S.T Services</b-navbar-brand>
        </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class = 'testa'>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
       <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
         <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
      </b-collapse>
    </b-navbar>
  
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
.header {
  text-align: center;
  background-color: #ccc;
  width: 100%;
}
.test{
  text-align: center;
  padding: 25px;
}
.testa{
  text-align: right;
}
.navbar.navbar-dark.bg-dark{
    background-color: #ffffff!important; // white background
 }
 .navbar navbar-dark bg-dark navbar-expand-lg{
   margin:25px;
 }

 .navbar-dark .navbar-brand {
    color:  #006fba!important;
}
</style>
