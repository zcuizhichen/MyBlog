<template>
  <div class="post-page">
    <post-header :post="post"/>
    <div v-html="post.content"></div>
    <post-follow/>
    <post-skip :post="post"/>
    <post-comment :post="post"/>
  </div>
</template>

<script>
import post from "./post.js";
import PostHeader from "./components/PostHeader";
import PostFollow from "./components/PostFollow";
import PostSkip from "./components/PostSkip";
import PostComment from "./components/PostComment";

export default {
  components: {
    PostHeader,
    PostFollow,
    PostSkip,
    PostComment
  },

  data() {
    return {
      post
    };
  }
};
</script>

<style lang="stylus">
.post-content {
  line-height: 20px;
  font-size: 15px;
  text-indent: 2em;
  color: #333333;
  font-weight: 300;
}

.post-content > table, .post-content > table tr th, .post-content > table tr td {
  border: 1px solid #e7e8e9;
}

.post-content table {
  border-collapse: collapse;
}

.post-content blockquote {
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  margin-left: 2em;
  margin-right: 2em;
  padding-left: 0;
  padding-right: 0;
}

.post-content blockquote p {
  margin-top: 10px;
  margin-bottom: 10px;
  color: #666666;
}

.post-content a {
  text-decoration: none;
  color: #4990E2;
}

.post-content p {
  color: #404040;
  font-size: 14px;
  line-height: 30px;
  text-indent: 2em;
  letter-spacing: 1px;
}

.post-content p img {
  width: 80%;
}

.post-content ul, .post-content ol {
  padding-left: 2em;
}

.post-content ul li, .post-content ol li {
  list-style: none;
  color: #404040;
  font-size: 14px;
  line-height: 30px;
  text-indent: 2em;
  letter-spacing: 1px;
  margin-bottom: 5px;
  margin-top: 5px;
}

.post-content ul li:before, .post-content ol li:before {
  content: '• ';
}

.post-content pre {
  text-indent: 0;
  padding: 10px;
}

.post-content pre code {
  color: white;
  line-height: 175%;
}

.post-content h1 {
  color: #333333;
  margin-top: 20px;
  margin-bottom: 20px;
}

.post-content h2 {
  color: #333333;
  margin-top: 20px;
  margin-bottom: 20px;
}

.post-content h3 {
  color: #333333;
  margin-top: 20px;
  margin-bottom: 20px;
}

.post-content h4 {
  color: #333333;
  margin-top: 20px;
  margin-bottom: 20px;
}

.post-content h5 {
  color: #333333;
  margin-top: 20px;
  margin-bottom: 20px;
}

.post-content h6 {
  color: #333333;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
