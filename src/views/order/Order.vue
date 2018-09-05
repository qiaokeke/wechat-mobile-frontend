<template>
    <div style="height:100%;">
        <view-box ref="viewBox">
            <flexbox orient="vertical">
                <flexbox-item>
                    <tab :line-width="1" :animate="false">
                        <tab-item :selected="cSelected === item" v-for="item in orderItems" @on-item-click="cSelected=item">{{item}}</tab-item>
                    </tab>
                </flexbox-item>
                <flexbox-item v-if="cSelected === orderItems[0]">
                    <all-list></all-list>
                </flexbox-item>
                <flexbox-item v-if="cSelected === orderItems[1]">
                    <submit-list></submit-list>
                </flexbox-item>
                <flexbox-item v-if="cSelected === orderItems[2]">
                    <confirm-list></confirm-list>
                </flexbox-item>
                <flexbox-item v-if="cSelected === orderItems[3]">
                    <refund-list></refund-list>
                </flexbox-item>
                <flexbox-item v-if="cSelected === orderItems[4]">
                    <finish-list></finish-list>
                </flexbox-item>
            </flexbox>
        </view-box>
    </div>
</template>

<script>
import { ViewBox, Flexbox, FlexboxItem, Tab, TabItem } from 'vux'
import AllList from './components/AllList'
import SubmitList from './components/SubmitList'
import ConfirmList from './components/ConfirmList'
import RefundList from './components/RefundList'
import FinishList from './components/FinishList'

export default {
  data () {
    return {
      cSelected: '全部',
      orderItems: ['全部', '待提交', '待确认', '待返款', '已完成'],
      orderComponents: [
        '<all-list></all-list>',
        '<all-list></all-list>',
        '<all-list></all-list>',
        '<all-list></all-list>',
        '<all-list></all-list>'
      ]
    }
  },
  components: {
    ViewBox,
    Tab,
    TabItem,
    Flexbox,
    FlexboxItem,
    AllList,
    SubmitList,
    ConfirmList,
    RefundList,
    FinishList
  }
}
</script>

