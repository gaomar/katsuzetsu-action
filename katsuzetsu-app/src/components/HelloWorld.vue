<template>
  <v-container>
    <v-layout
      text-center
      wrap
      v-show="target === 'top'"
    >
      <v-flex
        xs12
        mb-10
      >
        <h3 class="display-3 font-weight-bold mb-10">
        </h3>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-10">
          滑舌チェックしよう！
        </h1>
        <v-btn large color="success" @click="start">スタート</v-btn>
      </v-flex>
    </v-layout>
    <v-layout
      text-center
      wrap
      v-show="target === 'katsuzetsu'"
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
    <v-layout
      text-center
      column
      align-center
      v-show="target === 'congratulation'"
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
  data () {
    return {
      target: 'top'
    }
  },
  created () {
    var me = this
    const callbacks = {
      onUpdate(data) {
        if ('katsuzetsu' in data) {
          me.target = data.katsuzetsu.target
          me.seikai = data.katsuzetsu.seikai
          me.yomi = data.katsuzetsu.yomi
        }
      },
    }
    interactiveCanvas.ready(callbacks)
  },
  methods: {
    start () {
      interactiveCanvas.sendTextQuery('スタート');
    }
  }
}
</script>