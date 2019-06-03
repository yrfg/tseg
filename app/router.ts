import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/users', controller.user.index)
  router.get('/users/:id', controller.user.show)
};
