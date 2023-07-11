#  andvxs
> 基于andvx改写了form-create-designer部分，后续参考form-create-desinger做一些修改调整
基于 [ant design vue](https://next.antdv.com/docs/vue/introduce-cn) 扩展一些组件

vue3 + antdv + vuex 


## npm
```
npm i andvxs
```

目前只做按需引入
```
import xxx from "andvxs/xxx";
```

如需把组件全局引入请自行在main.js处理
``` 
import { createApp } from 'vue'
import doFcDesigner from "andvxs/components/doFcDesigner";
...

const app = createApp(App)
app.component('a-table', doFcDesigner);
...
```

