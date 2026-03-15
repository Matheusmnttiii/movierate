// ====== DATA BASE (demonstração) ======
const MOVIES = [
  { id:"m1", title:"Interestelar", year:2014, genres:["Ficção", "Aventura"], rating:8.6, runtime:"2h 49m", desc:"Uma equipe de astronautas viaja através de um buraco de minhoca perto de Júpiter em busca de um novo lar para a humanidade.", director:"Christopher Nolan", cast:["Matthew McConaughey","Anne Hathaway","Jessica Chastain"], providers:["Netflix","Prime Video"], poster:"https://image.tmdb.org/t/p/w500/rAiY0QJUx8oTBYV9u5Ky4pTD6D1.jpg" },
  { id:"m2", title:"O Poderoso Chefão", year:1972, genres:["Drama","Crime"], rating:9.2, runtime:"2h 55m", desc:"A saga da família Corleone e as escolhas que moldam poder e lealdade no mundo do crime organizado.", director:"Francis Ford Coppola", cast:["Marlon Brando","Al Pacino","James Caan"], providers:["Paramount+","Prime Video"], poster:"https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1cjexvx.jpg" },
  { id:"m3", title:"Homem-Aranha: Aranhaverso", year:2018, genres:["Animação","Ação"], rating:8.4, runtime:"2h 20m", desc:"Miles Morales descobre o multiverso e precisa se tornar o herói que pode ser para salvar seu mundo.", director:"Bob Persichetti", cast:["Shameik Moore","Hailee Steinfeld"], providers:["Netflix","Prime Video"], poster:"https://image.tmdb.org/t/p/w500/ViCeybv442E57yI2Kin1BRW8A3.jpg" },
  { id:"m4", title:"A Origem", year:2010, genres:["Ficção","Ação"], rating:8.8, runtime:"2h 28m", desc:"Uma tecnologia de invasão de sonhos abre portas perigosas para o roubo de ideias e segredos corporativos.", director:"Christopher Nolan", cast:["Leonardo DiCaprio","Joseph Gordon-Levitt","Ellen Page"], providers:["Max","Prime Video"], poster:"https://image.tmdb.org/t/p/w500/9gk7adHYeDMuGJo9UfLu5psDccJ.jpg" },
  { id:"m5", title:"Parasita", year:2019, genres:["Drama","Suspense"], rating:8.6, runtime:"2h 12m", desc:"Duas famílias, dois mundos — e um choque social que vai explodir em conflito inevitável.", director:"Bong Joon-ho", cast:["Song Kang-ho","Lee Sun-kyun","Cho Yeo-jeong"], providers:["Prime Video"], poster:"https://image.tmdb.org/t/p/w500/iywBs9SnflwLf3eQqJHSbFQvH1M.jpg" },
  { id:"m6", title:"Toy Story", year:1995, genres:["Animação","Aventura"], rating:8.3, runtime:"1h 21m", desc:"Quando um novo brinquedo chega, um cowboy cansado descobre o verdadeiro significado da amizade.", director:"John Lasseter", cast:["Tom Hanks","Tim Allen"], providers:["Disney+"], poster:"https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBBTta8yyWF.jpg" },
  { id:"m7", title:"Mad Max: Estrada da Fúria", year:2015, genres:["Ação","Aventura"], rating:8.1, runtime:"2h 0m", desc:"Um deserto brutal, uma fuga desesperada e uma estrada que testa os limites da sobrevivência.", director:"George Miller", cast:["Tom Hardy","Charlize Theron"], providers:["Max"], poster:"https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67EP.jpg" },
  { id:"m8", title:"Whiplash", year:2014, genres:["Drama","Música"], rating:8.5, runtime:"1h 47m", desc:"Disciplina extrema, pressão psicológica e obsessão: o preço por tentar ser extraordinário.", director:"Damien Chazelle", cast:["Miles Teller","J.K. Simmons"], providers:["Prime Video"], poster:"https://image.tmdb.org/t/p/w500/4J0ER4IuIUG01JwibzaL288DwlU.jpg" },
  { id:"m9", title:"Cidade de Deus", year:2002, genres:["Drama","Crime"], rating:8.9, runtime:"2h 10m", desc:"A história crua do crime, sobrevivência e redenção em uma comunidade do Rio de Janeiro.", director:"Fernando Meirelles", cast:["Alexandre Rodrigues","Leandro Firmino"], providers:["Globoplay"], poster:"https://image.tmdb.org/t/p/w500/dTXbqSwFiAl00e0B0rnMVnBV3e2.jpg" },
  { id:"m10", title:"Matrix", year:1999, genres:["Ficção","Ação"], rating:8.7, runtime:"2h 16m", desc:"Um hacker descobre que a realidade é uma simulação controlada por máquinas inteligentes.", director:"Lana Wachowski, Lilly Wachowski", cast:["Keanu Reeves","Laurence Fishburne","Carrie-Anne Moss"], providers:["Max"], poster:"https://image.tmdb.org/t/p/w500/fw02ONlDx5XBsnN8pVapoMceKNi.jpg" },
  { id:"m11", title:"O Senhor dos Anéis: A Sociedade do Anel", year:2001, genres:["Aventura","Fantasia"], rating:8.8, runtime:"3h 28m", desc:"Uma jornada épica começa para destruir o Um Anel e salvar a Terra Média da escuridão.", director:"Peter Jackson", cast:["Elijah Wood","Ian McKellen","Orlando Bloom"], providers:["Prime Video"], poster:"https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnP9GSVDxs49.jpg" },
  { id:"m12", title:"Her", year:2013, genres:["Drama","Romance"], rating:8.0, runtime:"2h 6m", desc:"Um homem desenvolve um relacionamento improvável com uma IA sofisticada, questionando a natureza do amor.", director:"Spike Jonze", cast:["Joaquin Phoenix","Scarlett Johansson"], providers:["Prime Video"], poster:"https://image.tmdb.org/t/p/w500/CfUhBV8NW2lLPZOxoNE8J8M7n8f.jpg" },
  { id:"m13", title:"Oppenheimer", year:2023, genres:["Drama","História"], rating:8.1, runtime:"3h 0m", desc:"A história fascinante do cientista que desenvolveu a bomba atômica e seus dilemas morais.", director:"Christopher Nolan", cast:["Cillian Murphy","Robert Downey Jr."], providers:["Netflix"], poster:"https://image.tmdb.org/t/p/w500/8Gxv8kSTe7R0neSours4ekLqxc5.jpg" },
  { id:"m14", title:"Pulp Fiction", year:1994, genres:["Crime","Drama"], rating:8.9, runtime:"2h 34m", desc:"Histórias entrelaçadas de criminosos, gângsteres e personagens perdidos em Los Angeles.", director:"Quentin Tarantino", cast:["John Travolta","Uma Thurman","Samuel L. Jackson"], providers:["Prime Video"], poster:"https://image.tmdb.org/t/p/w500/d5iIlW_szoJf8kzS33BrrJkyDpe.jpg" },
  { id:"m15", title:"Schindler's List", year:1993, genres:["Drama","História"], rating:9.0, runtime:"3h 15m", desc:"Um empresário alemão tenta salvar seus empregados judeus durante o Holocausto.", director:"Steven Spielberg", cast:["Liam Neeson","Ralph Fiennes"], providers:["Prime Video"], poster:"https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNek5h1KX5f76.jpg" },
  { id:"m16", title:"Gladiador", year:2000, genres:["Ação","Drama"], rating:8.5, runtime:"2h 35m", desc:"Um general romano é traído e escravizado, lutando como gladiador para se vingar.", director:"Ridley Scott", cast:["Russell Crowe","Joaquin Phoenix"], providers:["Prime Video"], poster:"https://image.tmdb.org/t/p/w500/DvKwT2p8nFCOMR39jXZJWU1VrK1.jpg" },
  { id:"m17", title:"Inception", year:2010, genres:["Ficção","Ação"], rating:8.8, runtime:"2h 28m", desc:"Um ladrão que rouba segredos corporativos através da tecnologia de compartilhamento de sonhos.", director:"Christopher Nolan", cast:["Leonardo DiCaprio","Marion Cotillard"], providers:["Max"], poster:"https://image.tmdb.org/t/p/w500/9gk7adHYeDMuGJo9UfLu5psDccJ.jpg" },
  { id:"m18", title:"A Vida é Bela", year:1997, genres:["Drama","Comédia"], rating:8.6, runtime:"1h 56m", desc:"Um pai usa humor e imaginação para proteger seu filho dos horrores da guerra.", director:"Roberto Benigni", cast:["Roberto Benigni","Nicoletta Braschi"], providers:["Prime Video"], poster:"https://image.tmdb.org/t/p/w500/7kLKGymMETuNsiwyJgzX5Z3yXW5.jpg" },
  { id:"m19", title:"Duna", year:2021, genres:["Ficção","Aventura"], rating:8.0, runtime:"2h 36m", desc:"Um jovem herda uma missão cósmica e se vê envolvido em uma guerra por um planeta desértico.", director:"Denis Villeneuve", cast:["Timothée Chalamet","Oscar Isaac","Zendaya"], providers:["Max"], poster:"https://image.tmdb.org/t/p/w500/n9fKyUX4bprz9J3OEqWFnxiQjUJ.jpg" },
  { id:"m20", title:"O Iluminado", year:1980, genres:["Terror","Drama"], rating:8.4, runtime:"2h 26m", desc:"Um escritor e sua família ficam isolados em um hotel de montanha durante o inverno, com consequências sinistras.", director:"Stanley Kubrick", cast:["Jack Nicholson","Shelley Duvall"], providers:["Prime Video"], poster:"https://image.tmdb.org/t/p/w500/uc3QVyCy0MxdHtNnzY31abYi7sJ.jpg" }
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
        <div class="posterMini" style="background-image: url('${m.poster}');background-size: cover;background-position: center;"></div>
        <div class="card__body">
          <div class="card__title">
            <h4>${m.title}</h4>
            <span class="badge">${badge}</span>
          </div>
          <div class="meta">${m.year} • ${m.runtime}</div>
          <div class="card__rating">⭐ ${m.rating}</div>
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
  mMeta.textContent = `${movie.year} • ${movie.runtime} • Nota: ${movie.rating}/10`;
  mDesc.textContent = movie.desc;

  // poster
  document.getElementById("mPoster").style.backgroundImage = `url('${movie.poster}')`;

  // providers
  mProviders.innerHTML = movie.providers.map(p => `<span class="prov">${p}</span>`).join("");

  // director e cast
  const directorEl = document.getElementById("mDirector");
  const castEl = document.getElementById("mCast");
  if(directorEl) directorEl.textContent = movie.director;
  if(castEl) castEl.textContent = movie.cast.join(", ");

  // stars
  renderStars();

  // fav/watched
  syncChips();

  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modal.classList.remove("is-open");
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
document.addEventListener("click", (e)=>{
  if(e.target && e.target.matches("[data-close]")) closeModal();
});
window.addEventListener("keydown", (e)=>{
  if(e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

// About toast
document.getElementById("openAbout").addEventListener("click", ()=>{
  toast("MovieRate: busca + filtros + favoritos + avaliação (LocalStorage).");
});

// Init
render();
