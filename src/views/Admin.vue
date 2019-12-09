<template>
<div class=""> 
    <div class="columns">
      <div class="column is-3">
        <Menu/>   
      </div>
      <div class="column is-3">
        <AdminTrip/>    
      </div>
       <div class="column is-3">
            <AdminTrip/>  
      </div>
       <div class="column is-3">
            <AdminTrip/>    
      </div>
    </div>
  
</div>
</template>

<script>
import AdminTrip from '../components/Admin/AdminTrip';
import Menu from '../components/Admin/Menu';
export default {
  
  components:{
    AdminTrip,
    Menu
  }

}
</script>

<style>

</style>