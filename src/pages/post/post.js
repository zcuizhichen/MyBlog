export default {
    id: 1,
    title: '浅谈前端中的二进制数据类型',
    publish_timestamp: 1559838386395,
    tags: [{ id: 1, title: 'Vue' }, { id: 2, title: 'Js' }],
    pv: 1542,
    comments: [
        { id: 1, content: '作者大大那个链接又不能请求啦，能不能把文本放出来呀', username: 'article', timestamp: 1559838386395, reply_name: 'whh' },
        { id: 2, content: '作者大大那个链接又不能请求啦，能不能把文本放出来呀', username: 'article', timestamp: 1559838386395, reply_name: 'whh' }
    ],
    catalog: [{ name: '第一章', childrens: ['1节', '2节'] }],
    content: `<div class="post-content ">
                <p>本文主要对多组件单页面列表应用的代码组织实践进行总结，从而给相关应用的 Web 开发提供参考。</p>
                <h3 id="什么是多组件单页面列表应用？"><a href="#什么是多组件单页面列表应用？" class="headerlink" title="什么是多组件单页面列表应用？"></a>什么是多组件单页面列表应用？</h3><p>目前，其实多组件单页面列表应用非常常见，也是我们日常生活中使用非常高频的一个类别的应用，最典型的比如新闻信息流产品腾讯新闻、今日头条等这类新闻应用，在这类新闻应用中，往往图片、图文、视频、问答、投票等多种模块混杂排列。再简单一点的话，知乎、豆瓣甚至一些论坛以及一些购物软件，也可以归为此类应用。</p>
                <p>由于笔者在负责QQ看点搜索模块的相关内容， 因此，这里给出一个QQ看点搜索的展示图：</p>
                <p><img src="require('@/assets/img/post1.jpg')" alt=""></p>
                <p>这类应用其实有如下特点：</p>
                <ul>
                <li>属于长列表滚动，内容随着滚动不断加载，一般在用户返回之前可能积累了大量的内容，因此可能会造成一定的性能问题。</li>
                <li>模块众多，并且模块的种类和样式更新迭代快，这给我们在复用组件的选择上带来了挑战，如果我们盲目复用组件，则会造成胶水代码越来越多，如果不复用组件，那么代码量会随着业务发展线性增长，这都给我们后续的维护带来了挑战。</li>
                </ul>
                <p>当然，一般的基于 Web 的应用（实际上，QQ看点搜索并不完全是纯粹的 WebView 应用）所面临的问题这里也都会遇到。不过，上述两类问题应该算是这类应用的比较重要的问题，其实归根到底，前者是性能问题（面向用户），后者是维护问题（面向开发者）。</p>
                <p>如何解决这里的性能问题，其实已经有很多常规的方案可以借鉴了，这并不是本篇文章的重点，除了传统 Web 用到的性能优化方法，这里仅仅列举一些常规的做法：</p>
                <ul>
                <li>图片等资源的懒加载。</li>
                <li>列表虚拟滚动，即使用有限的元素，优化CSS写法等。</li>
                <li>使用跨端融合方案渲染，例如 Weex、ReactNative、Hippy 等。</li>
                </ul>
                <h3 id="多组件单页面应用的维护困境"><a href="#多组件单页面应用的维护困境" class="headerlink" title="多组件单页面应用的维护困境"></a>多组件单页面应用的维护困境</h3><p>对于这类多组件单页面应用，一般都是增量发展的，即最开始只有很个别的几个模块，随着业务越来越复杂，模块越来越多，逻辑也越来越复杂。</p>
                <p>我们一开始，肯定可以想到一个模块（即上文中灰色分割线分割的一块）是一个组件，不同组件之间抽离出公共的函数，或者采用 mixin 将公共的部分抽离，至于数据端，由于这类应用通常在深度上不复杂，直接采用 React 或者 Vue 提供的父子组件通信的方式一般就够用了。这样设计既满足组件化的思路，也能够方便的维护项目，比较适合项目的初期。</p>
                <p>但是随着项目发展，我们会发现，问题慢慢地产生了：</p>
                <ul>
                <li>单元组件非常不好界定，比如一个左图右文的图文混排组件（例如刘亦菲的热点），之后又会增加左视频右文字，和图文展示的区别不大但是加了视频的播放时长，之后又加了左视频集合右文字（例如双世宠妃第一部分），如果我们把这多类内容当作一个组件，我们的组件中就会有非常多的判断代码，那么就会有大量的代码冗余，或者设计复杂的 mixin 和工具函数。</li>
                <li>除了我们自身的问题，往往随着内容增多，后端返回的数据内容也会非常的不一致，在相似甚至相同的组件中，数据格式也不尽相同，我们需要在我们的单元组件中，来解析判断多种数据格式。</li>
                <li>第三点就是样式更新隐患，当我们的组件多了之后，如果我们对我们的组件进行更新，那么很可能需要同时更新多处（嗯，全局替换也许是个不错的主意），这也是相当有风险的，也许会无意间改动我们并不想改动的 UI。</li>
                </ul>
                <p>如果我们等项目复杂后面对这个问题，我们会发现改动前期的代码工作量比较巨大，但是这又是我们不得不做的事情，这类问题的产生，实际上主要原因是我们的组件设计规划的不合理，我们完全可以在最初的项目中，通过一定的设计规划，来规避这些问题。</p>
                <h3 id="多组件单页面应用的组件规划"><a href="#多组件单页面应用的组件规划" class="headerlink" title="多组件单页面应用的组件规划"></a>多组件单页面应用的组件规划</h3><p>既然，我们现在希望设计一套比较好的组件规划，我们就需要重新审视我们的项目，对于我们的项目而言，一个业务模块一个组件的方式，的确简单方便，但是这样粗放的组件划分原则，实际上并不能完全满足我们复杂的维护需求，反而会给我们带来困扰。</p>
                <p>经过一系列的重构和整理，目前QQ看点搜索的组件规划逻辑是这样的：</p>
                <p><img src="require('@/assets/img/post1.jpg')" alt=""></p>
                <p>这里为了方便理解，我们采取上面样例图片中比较常见的一类业务：图文混排条目（左图右文和右图左文）来进行举例，如何设计组件来让提高我们项目的可维护性。</p>
                <p>这里首先是零件层，零件层应该有如下内容：</p>
                <ul>
                <li>图片零件，定宽，定高，自带懒加载，正常情况下只需传入一个 URL 即可使用。</li>
                <li>标题组件，一行标题和两行标题可以设计成两个组件，但进行 CSS 层面的复用。</li>
                <li>描述内容组件，例如双世宠妃的两行剧集描述。</li>
                <li>元信息内容组件，例如普通图文的来源和发表时间。</li>
                <li>时长组件，视频图文中用到。</li>
                <li>带有描述性的图片组件，视频图文中用到。</li>
                <li>图标组件：可以承载图标。</li>
                </ul>
                <p>以上各个组件的内容，几乎都足够简单，只需传入一个 props 作为内容，一般情况下，组件中不能出现 if 或 switch 等逻辑。</p>
                <p>接下来是组合器部分，组合器也是零件，只不过是零件的组合，其实也可以设计的比较薄弱，从而将更多的功能在布局器中完成，但是个别的时候，有这一层会给我们带来一定的方便，这里比如：</p>
                <ul>
                <li>图标+文字的组合器标题。</li>
                </ul>
                <p>对于零件层和组合层，一般情况下都不需要有影响外部的 margin 和 padding，即如果不增加任何多余样式罗列零件层和组合层，其上下左右四边应该是互相贴合的。</p>
                <p>接下来是布局层，这里的布局层，其实可以进行多种方式的设计，根据设计不同其数目也不同，这里给出一种设计方式：</p>
                <ul>
                <li>第一种是左图右文形式，右边可以选择普通图片、普通图片+时长组件、普通图片+描述。右边可以在一行标题、两行标题、描述零件、元信息零件中任意选择和组合。</li>
                <li>第二种是右图左文形式，左边的可配置内容和上文右边相同。</li>
                </ul>
                <p>当然，这两种整合成一种也无妨。</p>
                <p>在布局层，是拥有事件能力的，但是其主要应该是绑定响应时间并且调用通过 props 传入的回调函数，其不应该自己执行事件的响应逻辑。</p>
                <p>最后是控制器层，<strong>在控制器层，除了包裹标签之外，不应该出现任何 html 标签，其也不应当引用除了布局层组件以外的更深层次的组件。控制层的主要作用是进行数据处理。</strong></p>
                <p>控制层的分类方式和上述几层稍有不同，这里，我们就不是按照 UI 来分不同的控制器了，而是按照数据或者业务来分类，因为这里我们主要是进行数据逻辑的处理，和 UI 的关系不是那么重要了（已经将 UI 的压力进行了下沉）。</p>
                <p>通过上述的做法，之后如果有新的需求增加进来，我们根据需要，在不同层级的组件增加内容就好了。</p>
                <h3 id="总结"><a href="#总结" class="headerlink" title="总结"></a>总结</h3><p>通过以上的逻辑，我们把组件划分的更加清晰明确，将 UI 展示和数据逻辑分离，并且方便我们对样式进行迭代升级。</p>
                <p>当然，这个时候你也许还会问，如果我对部分组件样式进行升级改造，怎么样防止对原有的样式无影响呢？暂时还没有好的办法，不过，我们正在做的 UI 自动化测试套件——mangosteen，可以完美解决这个问题，敬请期待。</p>
            </div>`,
    skip:
    {
        prev: { title: '构建利用Proxy和Reflect实现双向数据绑定的微框架', id: 2 },
        next: { title: '深入浏览器web渲染与优化', id: 3 },
    }
} 