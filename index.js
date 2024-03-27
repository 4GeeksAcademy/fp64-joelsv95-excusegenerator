function main(){
  const guilty = getGuilty();
  const action = getAction();
  const target = getTarget();
  const when = getWhen();

  const message = getMessage(guilty,action,target,when);
  printMessage(message);
}


const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const getGuilty = () => {
  const who = ['the dog', 'my grandma', 'his turtle', 'my bird']
  return getRandomElement(who);
}
const getAction = () => {
  const action = ['ate', 'peed', 'crushed', 'broke'];
 return getRandomElement(action);
}
const getTarget = () => {
  let what = ['my homework', 'my phone', 'the car'];
  return getRandomElement(what);
}
const getWhen = () => {
  const when = ['before the class', 'right on time', 'when I finished', 'during my lunch'];
 return getRandomElement(when);
}
const getMessage = (guilty, action, target, when) => {
  return `${guilty} ${action} ${target} ${when}`;
}
const printMessage = (message) => {
  console.log(message);
}

main();
