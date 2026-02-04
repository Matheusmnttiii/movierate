// ====== DATA BASE (demonstração) ======
const MOVIES = [
  { id:"m1", title:"Interestelar", year:2014, genres:["Ficção", "Aventura"], desc:"Uma equipe viaja além da nossa galáxia em busca de um novo lar para a humanidade.", providers:["Netflix","Prime Video"] },
  { id:"m2", title:"O Poderoso Chefão", year:1972, genres:["Drama","Crime"], desc:"A saga da família Corleone e as escolhas que moldam poder e lealdade.", providers:["Paramount+","Prime Video"] },
  { id:"m3", title:"Homem-Aranha: Aranhaverso", year:2018, genres:["Animação","Ação"], desc:"Miles Morales descobre o multiverso e precisa se tornar o herói que pode ser.", providers:["Netflix","Prime Video"] },
  { id:"m4", title:"A Origem", year:2010, genres:["Ficção","Ação"], desc:"Uma tecnologia de invasão de sonhos abre portas — e riscos — dentro da mente humana.", providers:["Max","Prime Video"] },
  { id:"m5", title:"Parasita", year:2019, genres:["Drama","Suspense"], desc:"Duas famílias, dois mundos — e um choque social impossível de ignorar.", providers:["Prime Video"] },
  { id:"m6", title:"Toy Story", year:1995, genres:["Animação","Aventura"], desc:"Brinquedos ganham vida e aprendem sobre amizade, ciúmes e coragem.", providers:["Disney+"] },
  { id:"m7", title:"Mad Max: Estrada da Fúria", year:2015, genres:["Ação","Aventura"], desc:"Um deserto brutal, uma fuga desesperada e uma estrada que não perdoa.", providers:["Max"] },
  { id:"m8", title:"Whiplash", year:2014, genres:["Drama","Música"], desc:"Disciplina extrema, pressão e obsessão: o preço por ser extraordinário.", providers:["Prime Video"] },
  { id:"m9", title:"Cidade de Deus", year:2002, genres:["Drama","Crime"], desc:"A história do crime e da sobrevivência em uma comunidade do Rio.", providers:["Globoplay"] },
  { id:"m10", title:"Matrix", year:1999, genres:["Ficção","Ação"], desc:"Realidade simulada, escolhas e uma verdade que muda tudo.", providers:["Max"] },
  { id:"m11", title:"O Senhor dos Anéis: A Sociedade do Anel", year:2001, genres:["Aventura","Fantasia"], desc:"Uma jornada épica começa para destruir o Um Anel.", providers:["Prime Video"] },
  { id:"m12", title:"Her", year:2013, genres:["Drama","Romance"], desc:"Um relacionamento improvável com uma IA revela carência e conexão.", providers:["Prime Video"] }
];

// ====== STORAGE ======
const KEY = "movierate:v1";
function loadState(){
  try{
    const raw = localStorage.getItem(KEY);
    if(!raw) return { ratings:{}, favs:{}, watched:{} };
    const parsed = JSON.parse(raw);
    return {
      ratings: parsed.ratings || {},
      favs: parsed.favs || {},
      watched: parsed.watched || {}
    };
  }catch{
    return { ratings:{}, favs:{}, watched:{} };
  }
}
function saveState(){
  localStorage.setItem(KEY, JSON.stringify(state));
}
let state = loadState();

// ====== HELPERS ======
function toast(msg){
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(()=> el.hidden = true, 1800);
}

function uniq(arr){ return [...new Set(arr)]; }
function starsText(n){ return "★".repeat(n) + "☆".repeat(5-n); }

// ====== DOM ======
const grid = document.getElementById("grid");
const empty = document.getElementById("empty");

const q = document.getElementById("q");
const genre = document.getElementById("genre");
const minRating = document.getElementById("minRating");
const sort = document.getElementById("sort");

const statTotal = document.getElementById("statTotal");
const statFav = document.getElementById("statFav");
const statRated = document.getElementById("statRated");

const clearData = document.getElementById("clearData");

let view = "todos"; // todos | favoritos

document.querySelectorAll(".segBtn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".segBtn").forEach(b=>b.classList.remove("is-active"));
    btn.classList.add("is-active");
    view = btn.dataset.view || "todos";
    render();
  });
});

// Genres select init
const allGenres = uniq(MOVIES.flatMap(m => m.genres)).sort((a,b)=>a.localeCompare(b,"pt-BR"));
for(const g of allGenres){
  const opt = document.createElement("option");
  opt.value = g;
  opt.textContent = g;
  genre.appendChild(opt);
}

// Filters handlers
[q, genre, minRating, sort].forEach(el=>{
  el.addEventListener("input", render);
  el.addEventListener("change", render);
});

clearData.addEventListener("click", ()=>{
  if(confirm("Resetar avaliações e favoritos?")){
    state = { ratings:{}, favs:{}, watched:{} };
    saveState();
    render();
    toast("Dados resetados");
  }
});

// ====== FILTER/SORT ======
function getFiltered(){
  const term = (q.value || "").trim().toLowerCase();
  const g = genre.value || "todos";
  const min = Number(minRating.value || 0);

  let list = MOVIES.slice();

  if(view === "favoritos"){
    list = list.filter(m => !!state.favs[m.id]);
  }

  if(term){
    list = list.filter(m =>
      m.title.toLowerCase().includes(term) ||
      m.desc.toLowerCase().includes(term) ||
      m.genres.join(" ").toLowerCase().includes(term)
    );
  }

  if(g !== "todos"){
    list = list.filter(m => m.genres.includes(g));
  }

  list = list.filter(m => (state.ratings[m.id] || 0) >= min);

  // sort
  const s = sort.value || "relevancia";
  if(s === "nota_desc"){
    list.sort((a,b)=> (state.ratings[b.id]||0) - (state.ratings[a.id]||0));
  } else if(s === "nota_asc"){
    list.sort((a,b)=> (state.ratings[a.id]||0) - (state.ratings[b.id]||0));
  } else if(s === "ano_desc"){
    list.sort((a,b)=> b.year - a.year);
  } else if(s === "ano_asc"){
    list.sort((a,b)=> a.year - b.year);
  } else if(s === "titulo_asc"){
    list.sort((a,b)=> a.title.localeCompare(b.title,"pt-BR"));
  } else {
    // relevância: favorito primeiro, depois avaliados, depois título
    list.sort((a,b)=>{
      const af = state.favs[a.id] ? 1 : 0;
      const bf = state.favs[b.id] ? 1 : 0;
      if(bf !== af) return bf - af;

      const ar = state.ratings[a.id] ? 1 : 0;
      const br = state.ratings[b.id] ? 1 : 0;
      if(br !== ar) return br - ar;

      return a.title.localeCompare(b.title,"pt-BR");
    });
  }

  return list;
}

// ====== RENDER GRID ======
function render(){
  const list = getFiltered();

  // stats
  const favCount = Object.values(state.favs).filter(Boolean).length;
  const ratedCount = Object.keys(state.ratings).filter(k => (state.ratings[k]||0) > 0).length;

  statTotal.textContent = String(list.length);
  statFav.textContent = String(favCount);
  statRated.textContent = String(ratedCount);

  if(!list.length){
    grid.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  grid.innerHTML = list.map(m=>{
    const r = state.ratings[m.id] || 0;
    const fav = !!state.favs[m.id];
    const watched = !!state.watched[m.id];
    const badge = m.genres[0];

    return `
      <article class="card" data-open="${m.id}" title="Abrir detalhes">
        <div class="posterMini"></div>
        <div class="card__body">
          <div class="card__title">
            <h4>${m.title}</h4>
            <span class="badge">${badge}</span>
          </div>
          <div class="meta">${m.year} • ${m.genres.join(" / ")}</div>
          <div class="card__footer">
            <div class="starsMini">${starsText(r)}</div>
            <div class="heart">${fav ? "♥" : "♡"} ${watched ? "👁" : ""}</div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll("[data-open]").forEach(el=>{
    el.addEventListener("click", ()=>{
      openModal(el.getAttribute("data-open"));
    });
  });
}

// ====== MODAL ======
const modal = document.getElementById("modal");
const mTitle = document.getElementById("mTitle");
const mMeta = document.getElementById("mMeta");
const mDesc = document.getElementById("mDesc");
const mStars = document.getElementById("mStars");
const btnFav = document.getElementById("btnFav");
const btnWatched = document.getElementById("btnWatched");
const mProviders = document.getElementById("mProviders");

let currentId = null;

function openModal(id){
  const movie = MOVIES.find(m=>m.id===id);
  if(!movie) return;

  currentId = id;
  mTitle.textContent = movie.title;
  mMeta.textContent = `${movie.year} • ${movie.genres.join(" / ")}`;
  mDesc.textContent = movie.desc;

  // providers
  mProviders.innerHTML = movie.providers.map(p => `<span class="prov">${p}</span>`).join("");

  // stars
  renderStars();

  // fav/watched
  syncChips();

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modal.hidden = true;
  document.body.style.overflow = "";
  currentId = null;
}

function renderStars(){
  const r = state.ratings[currentId] || 0;
  mStars.innerHTML = "";
  for(let i=1;i<=5;i++){
    const b = document.createElement("button");
    b.type = "button";
    b.className = "starBtn" + (i<=r ? " is-on" : "");
    b.textContent = "★";
    b.setAttribute("aria-label", `Avaliar ${i} estrela(s)`);
    b.addEventListener("click", ()=>{
      state.ratings[currentId] = i;
      saveState();
      renderStars();
      render();
      toast(`Nota: ${i}/5`);
    });
    mStars.appendChild(b);
  }
}

function syncChips(){
  const fav = !!state.favs[currentId];
  const wat = !!state.watched[currentId];

  btnFav.classList.toggle("is-on", fav);
  btnFav.textContent = fav ? "★ Favoritado" : "☆ Favoritar";

  btnWatched.classList.toggle("is-on", wat);
  btnWatched.textContent = wat ? "👁 Visto" : "👁 Marcar como visto";
}

btnFav.addEventListener("click", ()=>{
  const next = !state.favs[currentId];
  state.favs[currentId] = next;
  saveState();
  syncChips();
  render();
  toast(next ? "Adicionado aos favoritos" : "Removido dos favoritos");
});

btnWatched.addEventListener("click", ()=>{
  const next = !state.watched[currentId];
  state.watched[currentId] = next;
  saveState();
  syncChips();
  render();
  toast(next ? "Marcado como visto" : "Desmarcado");
});

// close handlers
modal.addEventListener("click", (e)=>{
  if(e.target && e.target.matches("[data-close]")) closeModal();
});
window.addEventListener("keydown", (e)=>{
  if(e.key === "Escape" && !modal.hidden) closeModal();
});

// About toast
document.getElementById("openAbout").addEventListener("click", ()=>{
  toast("MovieRate: busca + filtros + favoritos + avaliação (LocalStorage).");
});

// Init
render();