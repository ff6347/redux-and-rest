import store from './lib/store';
import { getItems, postItem, incrementId } from './lib/actions';

document.addEventListener('DOMContentLoaded',function() {

  console.log('DOMContentLoaded');
  // this will update the view in index.html
  // anytime the state changes
  const render = () =>{
    if (store.getState().loading === true){
      // make the body flash in tomato when loading
      document.querySelector('body').style.backgroundColor = '#ff6347';
    } else {
      document.querySelector('body').style.backgroundColor = '#ffffff';

    }
    document.querySelector('#target').innerHTML = '\n' + JSON.stringify(store.getState(),null,2);
  };
  store.subscribe(render);
  render(); // we need to call it once to make the state visible

  // get all the buttons and add some event listeners
  // when clicked dispatch the actions defined in
  // lib/actions.js
  document.querySelector('#get-all').addEventListener('click', ()=>{
    console.log('Clicked get all');
    store.dispatch(getItems());
  });
  // post the the text in the  textarea to the DB
  document.querySelector('#post-item').addEventListener('click', ()=>{
    let area =document.querySelector('#in-body');
    // @ts-ignore
    let txt = area.value;
    console.log(`clicked post item with text ${txt}`);
    store.dispatch(postItem({id: String(store.getState().id), body:txt}));
    store.dispatch(incrementId());

    // @ts-ignore
    area.value = '';
  });
});
