<template>
    <v-app>
      <v-container fill-height>
        <v-main>
          <router-view></router-view>
        </v-main>
      </v-container>
    </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
};
</script>