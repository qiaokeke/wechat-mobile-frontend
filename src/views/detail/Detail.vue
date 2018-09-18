<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
      <flexbox orient="vertical">
        <flexbox-item >
          <img style="width:100%;height:100%" :src="orderDetail.oGoodsPicUrl">
        </flexbox-item>
        <divider>活动id:{{orderDetail.oId}}</divider>
        <flexbox-item justify="space-between">
          <span>当天活动</span><span style="margin-left:10px">活动id:{{orderDetail.oId}}</span>
        </flexbox-item>
        <flexbox-item justify="space-between">
          <span>赠品信息</span>
        </flexbox-item>
        <flexbox-item justify="space-between">
          <div>活动流程</div>
          <flow>
            <template v-for="(i, index) in steps">
              <flow-state :title="i.title" :state="index + 1" :is-done="i.isdone"></flow-state>
              <flow-line v-if="index != (steps.length - 1)" :is-done="i.lineDone" :tip="i.tip ? i.tip : null"></flow-line>
            </template>
          </flow>
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
import { Group, Divider, ViewBox, Flexbox, Flow, FlexboxItem, FlowState, FlowLine } from 'vux'

export default {
  data () {
    return {
      orderDetail: {
        oGoodsPicUrl: 'https://render.bitstrips.com/v2/cpanel/1f55956c-ceae-41c9-9cba-7a7a0ceea6a0-4d9bdedc-ec6a-413d-bb8d-96d4eee1dc22-v1.png?transparent=1&palette=1',
        oId: '1111'
      },
      steps: [{
        title: '已付款',
        isDone: true,
        lineDone: true
      }, {
        title: '待接单',
        isDone: true,
        lineDone: false,
        tip: '进行中'
      }, {
        title: '待收货',
        isDone: false,
        lineDone: false
      }, {
        title: '已完成',
        isDone: false,
        lineDone: false
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
    Divider
  }
}
</script>
