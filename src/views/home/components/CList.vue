<template>
    <div>
        <flexbox orient="vertical">
            <flexbox-item v-for="task in preheatTasks">
                <grid :clos="2">
                    <grid-item style="width:36%;height:150px">
                        <img style="width:100%;height:100%" v-bind:src="task.tgiftPicUrl">
                    </grid-item>
                    <grid-item style="width:64%;height:150px">
                        <flexbox orient="vertical">
                            <flexbox-item>
                                <span>押款：{{task.tchargeAmout}}，礼品:{{task.tgift}}</span>
                            </flexbox-item>
                            <flexbox-item>
                                <span>奖励：{{task.treward}}</span>
                            </flexbox-item>
                            <flexbox-item style="margin-top:20px">
                                <flexbox>
                                    <flexbox-item>
                                        <x-progress :percent="task.tprecent"></x-progress>
                                        <span>进度：{{task.tprogress}}/{{task.ttotal}}</span>
                                    </flexbox-item>
                                    <flexbox-item>
                                        <x-button type="primary" text="立即抢" @click.native.prevent="handleClick"></x-button>
                                    </flexbox-item>
                                </flexbox>
                            </flexbox-item>
                        </flexbox>
                    </grid-item>
                </grid>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { getPreheatTasks } from '@/api/task/task'
import { Grid, GridItem, Flexbox, FlexboxItem, XProgress, XButton } from 'vux'
export default {
  data () {
    return {
      preheatTasks: null
    }
  },
  components: {
    Grid,
    GridItem,
    Flexbox,
    FlexboxItem,
    XProgress,
    XButton
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      getPreheatTasks().then(response => {
        const data = response.data
        this.preheatTasks = data
      })
    },
    handleClick () {
      this.$router.push({ path: '/detail' })
    }
  }

}
</script>

