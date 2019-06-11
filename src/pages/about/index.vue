<template>
  <div class="about-page">
    <AboutItem title="一句话">
      <p>Just do it !</p>
      <p>翻译：我只是个搞技术的！哭笑脸</p>
    </AboutItem>

    <AboutItem title="关于我">
      <p>一个莫名其妙的，喜欢敲代码，喜欢研究技术的，表面上高冷、不苟言笑的，</p>
      <p>偶尔又嬉皮笑脸，偶尔又特立独行的，双重性格的技术爱好者！</p>
    </AboutItem>

    <AboutItem title="兴趣方向">
      <p>前端开发（Vue、Flutter等）相关生态技术研究。</p>
    </AboutItem>

    <AboutItem title="参与社区">
      <p v-for="it in communityList" :key="it.title">
        <span class="link-titile">{{it.title}}</span>
        <a :hreg="it.link" class="link-content">{{it.link}}</a>
      </p>
    </AboutItem>

    <AboutItem title="联系我">
      <p v-for="it in contactList" :key="it.title">
        <span class="link-titile">{{it.title}}</span>
        <span class="link-content">{{it.link}}</span>
      </p>
    </AboutItem>

    <div class="about-item">
      <div class="item-title">微信公众号</div>
      <div class="qr-code-wrapper">
        <img :src="require('@/assets/img/qr-code.jpg')" alt="qr-code">
      </div>
    </div>
  </div>
</template>

<script>
import AboutItem from "./components/AboutItem";

export default {
  components: {
    AboutItem
  },

  data() {
    return {
      communityList: [
        {
          title: "知乎",
          link: "http://blog.csdn.net/huwh_"
        },
        {
          title: "掘金",
          link: "http://blog.csdn.net/huwh_"
        },
        {
          title: "CSDN博客",
          link: "http://blog.csdn.net/huwh_"
        },
        {
          title: "个人博客",
          link: "http://blog.csdn.net/huwh_"
        },
        {
          title: "作品展示",
          link: "http://blog.csdn.net/huwh_"
        }
      ],

      contactList: [
        {
          title: "Email",
          link: "cui2020@qq.com"
        },
        {
          title: "WeChat",
          link: "czc96928"
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
@import '~@/assets/css/var.styl';

.about-page {
  line-height: 24px;

  .link-titile {
    &:after {
      content: '：';
    }
  }

  .link-content {
    color: #337ab7;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .qr-code-wrapper {
    width: 240px;
    height: 240px;
    margin: 0 auto;
  }
}
</style>