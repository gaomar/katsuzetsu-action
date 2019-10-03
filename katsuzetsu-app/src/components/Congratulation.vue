<template>
  <v-container>
    <v-layout
      text-center
      column
      align-center
    >
      <v-flex
        xs12
        mb-10
      >
        <h3 class="display-3 font-weight-bold mb-10">
        </h3>
      </v-flex>

      <img alt="congratulation" src="../assets/congratulation.png">
      <v-btn large color="success" @click="start">スタート</v-btn>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    start () {
      interactiveCanvas.sendTextQuery('スタート');
    }
  }
}
</script>