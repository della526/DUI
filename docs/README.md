# Hello VuePress
### 快速开始

#### 1.安装组件库
```bash
npm install della-ui
```

#### 2.引用组件库
```javascript
// 全部引入
import 'della-ui/dist/css/index.css';
import DUI from'della-ui'
Vue.use(DUI);

// 按需引入
import 'della-ui/dist/card.css';
import { Card } from'della-ui'
Vue.use(Card);
```
