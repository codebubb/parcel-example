import { BtnEvent } from './Button';

let btnElem: HTMLElement;
btnElem = document
  .getElementById('btn');
btnElem.addEventListener('click', BtnEvent);
