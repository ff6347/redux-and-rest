/**
 *
 * @param {*} next
 */
const request = next => (option) => {
  const xhr = new XMLHttpRequest();
  // open the connection of type
  // POST or GET
  //  on the route we passed in lib/middle-ware.js
  xhr.open(option.reqType, option.route, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  // what to do if we succseed or fail
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE){
      if (xhr.status=== 200){
        // success we got an answer with status 200
        // dispatch an actoin with its content
        // follow this action to
        // lib/reducers/items.js
        // the response for the POST request actually
        // lands on neverland…
        return next({
          type:`${option.type}_RECEIVED`,
          body: JSON.parse(xhr.responseText)
        });
      } else {
        // we count any other status then 200 as error
        // so we dispatch and error message for that
        // follow it to
        // lib/reducers/error.js
        return next({
          type:`${option.type}_ERROR`,
          error: {
            message: JSON.parse(xhr.responseText),
            status: xhr.status
          },
        });
      }
    }
  };
  // if we have a body
  if (option.body !== undefined){
    console.log('send with body');
    // send it
    // this is POST
    console.log(option.body);
    xhr.send(JSON.stringify(option.body));
  } else {
    // if we have no body we are making a GET request
    xhr.send();
  }
};

export default request;
