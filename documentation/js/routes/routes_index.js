var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"users","loadChildren":"./modules/user.module#UserModule"},{"path":"order","loadChildren":"./modules/order.module#OrderModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/order-routing.module.ts","module":"OrderRoutingModule","children":[{"path":"","component":"OrderContainerComponent"}],"kind":"module"}],"module":"OrderModule"}]},{"path":"","redirectTo":"/users","pathMatch":"full"},{"path":"**","pathMatch":"full","component":"NotFoundComponent"}],"kind":"module"}]}
