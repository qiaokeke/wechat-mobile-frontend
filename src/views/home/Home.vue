<template>
    <div style="height:100%;">
        <view-box ref="viewBox">
            <flexbox orient="vertical">
                <flexbox-item >
                    <x-img style="height:150px;width:100%;"
                        default-src="https://render.bitstrips.com/v2/cpanel/5b7bff30-d7cc-4141-9f91-d77fa135057f-4d9bdedc-ec6a-413d-bb8d-96d4eee1dc22-v1.png?transparent=1&palette=1" 
                        src="https://render.bitstrips.com/v2/cpanel/5b7bff30-d7cc-4141-9f91-d77fa135057f-4d9bdedc-ec6a-413d-bb8d-96d4eee1dc22-v1.png?transparent=1&palette=1"
                        >
                    </x-img>
                </flexbox-item>
                <flexbox-item>
                    <tab :line-width="1" :animate="false">
                        <tab-item :selected="cSelected === item" v-for="item in homeItems" @on-item-click="cSelected=item">{{item}}</tab-item>
                    </tab>
                </flexbox-item>
                <flexbox-item v-if="cSelected === homeItems[0]">
                    <c-list></c-list>
                </flexbox-item>
                <flexbox-item v-if="cSelected === homeItems[1]">
                    <f-list></f-list>
                </flexbox-item>
            </flexbox>
            
            <divider></divider>
        </view-box>
       
    </div>
</template>

<script>
import { ViewBox, XImg, Divider, Flexbox, FlexboxItem, Tab, TabItem } from 'vux'
import CList from './components/CList'
import FList from './components/FList'
export default {
  data () {
    return {
      cSelected: '待领取',
      homeItems: ['待领取', '预热中']
    }
  },
  components: {
    CList,
    FList,
    ViewBox,
    XImg,
    Divider,
    Flexbox,
    FlexboxItem,
    Tab,
    TabItem
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
x-img {
  height: 20%;
  width: 100%;
}
</style>
