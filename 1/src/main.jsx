import { autorun } from 'mobx';
import Store from './store';
import { initRouter } from './router';

const store = new Store();
initRouter((name, params) => store.updateRoute(name, params));

const $root = document.getElementById('app');
autorun(() => {
  const { route, currentRoute } = store;
  const { name, params } = route;

  $root.innerHTML = `
    <nav class="menu">
      <a href="#/" class="${currentRoute.root ? 'router-link-active' : ''}">最新</a>
      <a href="#/items" class="${currentRoute.items} ? 'router-link-active' : ''}">一覧</a>
      <a href="#/add" class="${currentRoute.add ? 'router-link-active' : ''}">追加</a>
    </nav>
    <div class="contents">
      <p>現在のルート: ${name}</p>
    </div>
  `;

  console.log(`route changed to ${name} with ${JSON.stringfy(params)}`);
});
