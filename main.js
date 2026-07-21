  document.getElementById('year').textContent = new Date().getFullYear();

  const words = ["well-read.", "disciplined.", "technically excellent.", "dangerously ambitious."];
  const el = document.getElementById('typed');
  let wi = 0, ci = 0, deleting = false;

  function tick(){
    const word = words[wi];
    if(!deleting){
      el.textContent = word.slice(0, ++ci);
      if(ci === word.length){ deleting = true; setTimeout(tick, 1400); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if(ci === 0){ deleting = false; wi = (wi+1) % words.length; }
    }
    setTimeout(tick, deleting ? 40 : 65);
  }
  tick();