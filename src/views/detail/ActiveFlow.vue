<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
      <flexbox orient="vertical">
        <flexbox-item >
          <img style="width:100%;height:400px" :src="orderDetail.oGoodsPicUrl">
        </flexbox-item>
        <divider>活动id:{{orderDetail.oId}}</divider>
        <divider>温馨提示</divider>
        <flexbox-item justify="space-between">
          <grid :clos="2">
            <grid-item style="width:60%;height:150px">
              <flexbox orient="vertical">
                <flexbox-item>垫付：￥{{orderDetail.chargeAmount}}</flexbox-item>
                <flexbox-item>端口：{{orderDetail.duankou}}</flexbox-item>
                <flexbox-item>赠品说明：{{orderDetail.giftShuoming}}</flexbox-item>
              </flexbox>
            </grid-item>
            <grid-item style="width:40%;height:150px">
              <img style="width:100%;height:100%" :src="orderDetail.giftPicUrl">
            </grid-item>
          </grid>
        </flexbox-item>
        <divider>活动流程</divider>        
        <flexbox-item justify="space-between">
          <card header.title="活动流程">
            <content>
              <flow>
                <template v-for="(i, index) in steps">
                  <flow-state :title="i.title" :state="index + 1" :is-done="i.isdone"></flow-state>
                  <flow-line v-if="index != (steps.length - 1)" :is-done="i.lineDone" :tip="i.tip ? i.tip : null"></flow-line>
                </template>
              </flow>
            </content>
          </card>
        </flexbox-item>
        <flexbox-item>返款信息</flexbox-item>
        <flexbox-item>订单信息</flexbox-item>
        <flexbox-item>订单编号</flexbox-item>
        <flexbox-item>备注信息</flexbox-item>
        <flexbox-item>收款信息</flexbox-item>
      </flexbox>
    </view-box>
  </div>
</template>

<script>
import { Group, Divider, ViewBox, Flexbox, Flow, FlexboxItem, FlowState, FlowLine, Grid, GridItem, Panel, Card } from 'vux'

export default {
  data () {
    return {
      orderDetail: {
        oGoodsPicUrl: 'https://render.bitstrips.com/v2/cpanel/1f55956c-ceae-41c9-9cba-7a7a0ceea6a0-4d9bdedc-ec6a-413d-bb8d-96d4eee1dc22-v1.png?transparent=1&palette=1',
        oId: '1111dd',
        chargeAmount: '100',
        duankou: '手机淘宝',
        giftPicUrl: 'https://render.bitstrips.com/v2/cpanel/3e85117a-d59b-4726-b63d-987594b4bfd7-4d9bdedc-ec6a-413d-bb8d-96d4eee1dc22-v1.png?transparent=1&palette=1',
        giftShuoming: '赠品说明赠品说明赠品说明赠品明赠品说明赠品说明赠品说明赠品说明赠品说明赠品说明'
      },
      steps: [{
        title: '活动内容',
        isDone: true,
        lineDone: false,
        tip: '进行中'
      }, {
        title: '提交付款信息',
        isDone: true,
        lineDone: false,
        tip: ''
      }, {
        title: '等待审核',
        isDone: false,
        lineDone: false,
        tip: ''
      }, {
        title: '完成',
        isDone: false,
        lineDone: false,
        tip: ''
      }]
    }
  },
  components: {
    Flow,
    FlowState,
    FlowLine,
    ViewBox,
    Flexbox,
    FlexboxItem,
    Group,
    Divider,
    Grid,
    GridItem,
    Panel,
    Card
  }
}
</script>
