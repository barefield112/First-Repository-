import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Gage Barefield';
  greetUser(name);
  /* let num = 0;
  while (num <= 100) {
    console.log(num);
    num = num + 1;
  }*/
});
