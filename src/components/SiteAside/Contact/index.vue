<template>
  <ul class="contact-container">
    <li>
      <a href="https://github.com/02030708dw" target="_blank">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>Github</span>
      </a>
    </li>
    <li>
      <a href="mailto:2632454453@qq.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>2632454453@qq.com</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=2632454453&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>2632454453</span>
      </a>
      <div class="pop">
        <img src="https://pic.ziyuan.wang/2023/12/06/guest_9cea23cd6f29d.jpg" alt="" />
      </div>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>微信</span>
      </a>
      <div class="pop">
        <img src="https://pic.ziyuan.wang/2023/12/06/guest_897b6c5b15f70.png" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "../../Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.contact-container{
  list-style: none;
  padding: 20px;
  color: @gray;
  @itemHeight: 30px;

  li{
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;

    &:hover {
      .pop {
        transform: scaleY(1);
      }
    } 
    a {
      display: flex;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        color: #fff;
      }
    }
    
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 33px;
      margin-left: -2px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: white;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;

    img {
      width: 130px;
      height: 130px;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: white;
      bottom: -4px;
    }
  }

}
</style>
