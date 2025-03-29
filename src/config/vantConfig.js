// 1. 引入你需要的组件
import { Button, Icon, Tabbar, TabbarItem, Swipe, SwipeItem, RollingText, Grid, GridItem, Badge, Uploader, Watermark, Image as VanImage } from 'vant';

export function vant(app) {
	app.use(Button);
	app.use(Icon);
	app.use(Tabbar);
	app.use(TabbarItem);
  app.use(Swipe)
  app.use(SwipeItem)
  app.use(RollingText)
  app.use(Grid)
  app.use(GridItem)
  app.use(Badge)
  app.use(Uploader)
  app.use(Watermark)
  app.use(VanImage)
}

