<template>
  <div class="side-bar-com">
    <div class="my-info border-bottom">
      <div class="avatar-wrapper">
        <img :src="require('@/assets/img/avatar.jpg')" alt="avatar">
      </div>
      <div class="abstract">
        <div class="my-name">Choke</div>
        <div class="my-desc">Share Everythings</div>
        <div class="blog-state">
          <router-link
            :to="it.route"
            class="state-item border-right"
            v-for="it in stateList"
            :key="it.name"
          >
            <div class="item-total">{{it.total}}</div>
            <div class="item-name">{{it.name}}</div>
          </router-link>
        </div>
      </div>
    </div>

    <ul class="route-list border-bottom">
      <li v-for="it in routeList" :key="it.name">
        <router-link :to="it.route">
          <i :class="it.icon"></i>
          {{it.name}}
        </router-link>
      </li>
    </ul>

    <div class="my-links">
      <div class="title">
        <i class="el-icon-link"></i>
        友情链接
      </div>
      <a
        v-for="it in linkList"
        :key="it.name"
        :href="it.link"
        target="blank"
        class="link-item"
      >{{it.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeList: [
        {
          name: "主页",
          icon: "el-icon-s-home",
          route: "/"
        },
        {
          name: "标签",
          icon: "el-icon-s-management",
          route: "/tags"
        },
        {
          name: "存档",
          icon: "el-icon-s-cooperation",
          route: "/archive"
        },
        {
          name: "关于",
          icon: "el-icon-user-solid",
          route: "/about"
        },
        {
          name: "搜索",
          icon: "el-icon-search",
          route: "/"
        }
      ],
      stateList: [
        {
          name: "Posts",
          total: 18,
          route: "/"
        },
        {
          name: "Tags",
          total: 4,
          route: "/tags"
        }
      ],
      linkList: [
        {
          name: "chokeeey",
          link: "https://www.baidu.com"
        },
        {
          name: "chunkfang",
          link: "http://www.chuckfang.top/"
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
.side-bar-com {
  .my-info {
    padding: 0 21px;
    padding-bottom: 28px;
    margin-bottom: 24px;

    .avatar-wrapper {
      height: 0;
      padding-bottom: 110px;
      margin-bottom: 20px;
      background: #ddd;
      overflow: hidden;
    }

    .abstract {
      .my-name {
        font-size: 16px;
        font-weight: 600;
        color: #000;
        margin-bottom: 6px;
      }

      .my-desc {
        color: #999;
        margin-bottom: 24px;
      }

      .blog-state {
        display: flex;
        margin: 0 -16px;

        .state-item {
          padding: 0 16px;

          &:hover {
            .item-name {
              color: #000;
            }
          }

          &:last-child {
            border: none;
          }

          .item-total {
            font-weight: 600;
            font-size: 15px;
            color: #333;
            margin-bottom: 4px;
          }

          .item-name {
            color: #999;
            transition: all 0.2s;
          }
        }
      }
    }
  }

  .route-list {
    text-align: center;
    padding: 0 8px 0 0px;
    padding-bottom: 28px;
    margin-bottom: 24px;

    li {
      padding: 8px 0;

      &:last-child {
        i {
          font-weight: 900;
        }
      }

      a {
        font-size: 16px;
        letter-spacing: 4px;
        color: #999;
        transition: all 0.2s;

        &:hover {
          color: #222;
        }

        i {
          margin-right: 2px;
          font-size: 18px;
        }
      }
    }
  }

  .my-links {
    text-align: center;
    padding: 0 8px 0 0px;

    .title {
      font-size: 15px;
      color: #777;
      margin-bottom: 16px;
      transform: translateX(-2px);
    }

    .link-item {
      color: #999;
      cursor: pointer;
      transition: all 0.2s;
      display: block;
      padding: 6px 0;
      font-size: 14px;

      &:hover {
        color: #000;
        text-decoration: underline;
      }
    }
  }
}
</style>
