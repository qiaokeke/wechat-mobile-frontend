<template>
    <div>
        <flexbox orient="vertical">
            <flexbox-item v-for="n of 20">
                <flexbox orient="vertical">
                    <flexbox-item>
                        <flexbox justify="space-between">
                            <span>活动ID:</span>
                            <span style="margin-left:10px">当天活动</span>
                            <span>订单状态：</span>
                        </flexbox>
                        <grid :clos="2">
                            <grid-item style="width:36%;height:150px">
                                <img style="width:100%;height:100%" src="https://render.bitstrips.com/v2/cpanel/5b7bff30-d7cc-4141-9f91-d77fa135057f-4d9bdedc-ec6a-413d-bb8d-96d4eee1dc22-v1.png?transparent=1&palette=1">
                            </grid-item>
                            <grid-item style="width:64%;height:150px">
                                <flexbox orient="vertical">
                                    <flexbox-item>
                                        <span>领取时间:</span>
                                    </flexbox-item>
                                    <flexbox-item>
                                        <span>订单编号:</span>
                                    </flexbox-item>
                                    <flexbox-item>
                                        <span>奖励：</span>
                                    </flexbox-item>
                                </flexbox>
                            </grid-item>
                        </grid>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { Grid, GridItem, Flexbox, FlexboxItem, XProgress, XButton } from 'vux'
export default {
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

