<template>
    <div>
<<<<<<< HEAD
        <li v-for="task in tasks">
            {{task.tid}}
        </li>
        <!-- <flexbox orient="vertical">
            <flexbox-item v-for="n of 20">
=======
        <flexbox orient="vertical">
            <flexbox-item v-for="task in preheatTasks">
>>>>>>> 83b072bc705c2cc351085f3bde51ca5ce9fa0468
                <grid :clos="2">
                    <grid-item style="width:36%;height:150px">
                        <!-- <img style="width:100%;height:100%" src="https://render.bitstrips.com/v2/cpanel/5b7bff30-d7cc-4141-9f91-d77fa135057f-4d9bdedc-ec6a-413d-bb8d-96d4eee1dc22-v1.png?transparent=1&palette=1"> -->
                        <img style="width:100%;height:100%">
                    </grid-item>
                    <grid-item style="width:64%;height:150px">
                        <flexbox orient="vertical">
                            <flexbox-item>
                                <span>押款：{{task.tChargeAmout}}，礼品:{{task.tGift}}</span>
                            </flexbox-item>
                            <flexbox-item>
                                <span>奖励：{{task.tReward}}</span>
                            </flexbox-item>
                            <flexbox-item style="margin-top:20px">
                                <flexbox>
                                    <flexbox-item>
                                        <x-progress percent="10"></x-progress>
                                    </flexbox-item>
                                    <flexbox-item>
                                        <x-button type="primary" text="立即抢"></x-button>
                                    </flexbox-item>
                                </flexbox>
                            </flexbox-item>
                        </flexbox>
                    </grid-item>
                </grid>
            </flexbox-item>
        </flexbox> -->
    </div>
</template>

<script>
<<<<<<< HEAD
import getPreheatTasks from '@/api/task/task'
import { Grid, GridItem, Flexbox, FlexboxItem, XProgress, XButton } from 'vux'
export default {
  computed: {
    tasks: () => {
=======
import { getPreheatTasks } from '@/api/task/task'
import { Grid, GridItem, Flexbox, FlexboxItem, XProgress, XButton } from 'vux'
export default {
  data () {
    const tasks = () => {
>>>>>>> 83b072bc705c2cc351085f3bde51ca5ce9fa0468
      getPreheatTasks().then(response => {
        const data = response.data
        alert(data)
        return data
      })
    }
<<<<<<< HEAD
=======
    return {
      preheatTasks: tasks
    }
>>>>>>> 83b072bc705c2cc351085f3bde51ca5ce9fa0468
  },
  components: {
    Grid,
    GridItem,
    Flexbox,
    FlexboxItem,
    XProgress,
    XButton
  }

}
</script>

