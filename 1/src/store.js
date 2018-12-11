import { decorate, observable, computed, action } from 'mobx';

class Store {
  constructor() {
    this.route = {
      name: '',
      params: {},
    };
  }

  get currentRoute() {
    return {
      root: this.route.name === '/',
      items: this.route.name.startWith('/items'),
      add: this.route.name === 'add',
    }
  }

  updateRoute(name, params) {
    const { route } = this;

    route.name = name;
    route.params = params;
  }
}

decorate(Store, {
  route: observable,
  currentRoute: computed,
  updateRoute: action,
});

export default Store;
