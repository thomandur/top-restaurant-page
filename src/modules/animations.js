const animations = (el, initialPos, x, y) => {
  if(el.id === 'circle-1'){
    el.style.left = `${initialPos.left + (x / 30)}px`;
    el.style.top = `${initialPos.top + (y / 30)}px`;
  }else if(el.id === 'circle-2'){
    el.style.left = `${initialPos.left - (x / 25)}px`;
    el.style.top = `${initialPos.top - (y / 16)}px`;
  }
}

export default animations;