<template>
  <div class="menu">
    <b-menu>
      <b-menu-list label="Menu">
        <b-menu-item icon="information-outline" label="Info"></b-menu-item>
        <b-menu-item
          icon="settings"
          :active="isActive"
          :expanded="isActive"
          @click="isActive = !isActive"
        >
          <template slot="label" slot-scope="props">
            Administrator
            <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
          </template>
          <b-menu-item icon="account" label="Users"></b-menu-item>
          <b-menu-item icon="cellphone-link">
            <template slot="label">
              Devices
              <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                <b-icon icon="dots-vertical" slot="trigger"></b-icon>
                <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
              </b-dropdown>
            </template>
          </b-menu-item>
        </b-menu-item>
        <b-menu-item icon="account" label="My Account">
          <b-menu-item label="Account data"></b-menu-item>
          <b-menu-item label="Addresses"></b-menu-item>
        </b-menu-item>
      </b-menu-list>
      <b-menu-list label="Actions">
        <b-menu-item label="Logout"></b-menu-item>
      </b-menu-list>
    </b-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style lang="scss" scoped>
.menu {
  background-color: beige;
  margin: 2%;
  padding: 0.5rem;
}
</style>