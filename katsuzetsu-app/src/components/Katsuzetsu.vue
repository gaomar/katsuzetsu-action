<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex
        xs12
        mb-10
      >
        <h3 class="display-3 font-weight-bold mb-10">
        </h3>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-1 font-weight-bold mb-3">
          【滑舌チェック】
        </h1>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h3 class="display-3 font-weight-bold mb-3">
        {{seikai}}
        </h3>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h5 class="display-3 font-weight-bold mb-3">
        （{{yomi}}）
        </h5>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<style>
</style>
<script>
export default {
  data () {
    return {
      seikai: '',
      yomi: ''
    }
  },
  created () {
    var me = this
    const callbacks = {
      onUpdate(data) {
        if ('katsuzetsu' in data) {
          me.seikai = data.katsuzetsu.seikai,
          me.yomi = data.katsuzetsu.yomi
        }
      },
    }
    interactiveCanvas.ready(callbacks)
  }
}
</script>