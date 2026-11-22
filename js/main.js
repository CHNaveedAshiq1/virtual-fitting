/* VIRTUAL FIT, spatial try-on logic */
const CATS = {
  tops: { label: 'Tops', sizes: ['XS','S','M','L','XL'], products: [
    { name:'Essential White Tee', price:55, img:'img/prod-tee.webp', tag:'Core cotton', model:'img/model-base.webp', modelAlt:'Model wearing the Essential White Tee with black trousers', colors:[['White','#f4f4f2'],['Black','#1c1d20'],['Lilac','#b9a7e6']] },
    { name:'Striped Oxford Shirt', price:105, img:'img/prod-shirt.webp', tag:'Slim fit', model:'img/model-base.webp', modelAlt:'Model in the base studio look, striped shirt featured beside her', colors:[['Blue stripe','#5b84c4'],['White','#f4f4f2'],['Navy','#22335c']] },
    { name:'Lilac Zip Hoodie', price:89, img:'img/prod-hoodie.webp', tag:'Soft fleece', model:'img/model-outerwear.webp', modelAlt:'Model wearing a hooded jacket over a white tee', colors:[['Lilac','#8d6fc7'],['Purple','#5e3fae'],['Grey','#9aa1a9']] },
    { name:'Studio Layer Tee', price:64, img:'img/prod-jacket-torso.webp', tag:'Layered look', model:'img/model-outerwear.webp', modelAlt:'Model wearing a layered studio look with a hooded jacket', colors:[['White','#f4f4f2'],['Blue','#3b6fe0'],['Purple','#6c4bd8']] },
  ]},
  bottoms: { label: 'Bottoms', sizes: ['28','30','32','34','36'], products: [
    { name:'Tailored Black Trouser', price:92, img:'img/prod-trouser.webp', tag:'Straight leg', model:'img/model-base.webp', modelAlt:'Model wearing tailored black trousers with a white tee', colors:[['Black','#1c1d20'],['Charcoal','#3c4046'],['Navy','#22335c']] },
    { name:'Indigo Straight Jean', price:78, img:'img/prod-jeans.webp', tag:'Washed denim', model:'img/model-base.webp', modelAlt:'Model in the base studio look, indigo jeans featured beside her', colors:[['Indigo','#2e4a73'],['Black','#1c1d20'],['Stone','#b9ac96']] },
    { name:'Studio Trouser, Red Accent', price:96, img:'img/prod-redbag-held.webp', tag:'Lookbook pair', model:'img/model-accessories.webp', modelAlt:'Model wearing black trousers and red sneakers, holding a red barrel bag', colors:[['Black','#1c1d20'],['Grey','#9aa1a9']] },
    { name:'Court Trouser Set', price:88, img:'img/prod-whiteshoe-on.webp', tag:'With sneakers', model:'img/model-base.webp', modelAlt:'Model wearing black trousers and white sneakers', colors:[['Black','#1c1d20'],['Navy','#22335c']] },
  ]},
  outerwear: { label: 'Outerwear', sizes: ['S','M','L','XL'], products: [
    { name:'Down Hooded Jacket', price:145, img:'img/prod-jacket-torso.webp', tag:'Two tone shell', model:'img/model-outerwear.webp', modelAlt:'Model wearing the purple and blue Down Hooded Jacket', colors:[['Purple and blue','#6c4bd8'],['Black','#1c1d20'],['Red','#d92b2b']] },
    { name:'Purple Hooded Jacket', price:128, img:'img/prod-hoodie.webp', tag:'Featherlight', model:'img/model-outerwear.webp', modelAlt:'Model wearing a purple hooded jacket over a white tee', colors:[['Purple','#7a4fc0'],['Lilac','#b9a7e6'],['Navy','#22335c']] },
    { name:'Blue Shell Jacket', price:118, img:'img/model-outerwear.webp', tag:'Rain ready', model:'img/model-outerwear.webp', modelAlt:'Model wearing the blue and purple shell jacket', colors:[['Blue','#3b6fe0'],['Purple','#6c4bd8'],['Black','#1c1d20']] },
    { name:'Layered Studio Coat', price:156, img:'img/prod-hoodie.webp', tag:'Limited', model:'img/model-outerwear.webp', modelAlt:'Model wearing the layered studio outerwear look', colors:[['Lilac','#b9a7e6'],['Grey','#9aa1a9']] },
  ]},
  shoes: { label: 'Shoes', sizes: ['40','41','42','43','44'], products: [
    { name:'Court White Sneaker', price:95, img:'img/prod-whiteshoe.webp', tag:'Clean leather', model:'img/model-base.webp', modelAlt:'Model wearing white Court sneakers with black trousers', colors:[['White','#f4f4f2'],['Grey','#9aa1a9']] },
    { name:'Velocity Red Runner', price:110, img:'img/prod-redshoe.webp', tag:'Race knit', model:'img/model-accessories.webp', modelAlt:'Model wearing red Velocity runners, holding a red barrel bag', colors:[['Red','#d92b2b'],['Black','#1c1d20'],['White','#f4f4f2']] },
    { name:'Red Runner, On Foot', price:104, img:'img/prod-redshoe-on.webp', tag:'Street shot', model:'img/model-accessories.webp', modelAlt:'Close view of the red runners on the model', colors:[['Red','#d92b2b'],['Crimson','#a31616']] },
    { name:'White Sneaker, On Foot', price:90, img:'img/prod-whiteshoe-on.webp', tag:'Everyday pair', model:'img/model-base.webp', modelAlt:'Close view of the white sneakers on the model', colors:[['White','#f4f4f2'],['Stone','#b9ac96']] },
  ]},
  accessories: { label: 'Accessories', sizes: ['One size'], products: [
    { name:'Red Barrel Bag', price:85, img:'img/prod-redbag.webp', tag:'Weekend carry', model:'img/model-accessories.webp', modelAlt:'Model holding the red barrel bag, wearing red sneakers', colors:[['Red','#d92b2b'],['Black','#1c1d20']] },
    { name:'Quilted Chain Bag', price:120, img:'img/prod-blackbag.webp', tag:'Evening piece', model:'img/model-accessories.webp', modelAlt:'Model in the studio look, quilted chain bag featured beside her', colors:[['Black','#1c1d20'],['Red','#d92b2b']] },
    { name:'Barrel Bag, In Hand', price:92, img:'img/prod-redbag-held.webp', tag:'As carried', model:'img/model-accessories.webp', modelAlt:'Model carrying the red barrel bag in one hand', colors:[['Red','#d92b2b'],['Navy','#22335c']] },
    { name:'Hard-Shell Carry-On', price:135, img:'img/prod-redbag.webp', tag:'Travel ready', model:'img/model-accessories.webp', modelAlt:'Model with the red travel bag in the studio', colors:[['Red','#d92b2b'],['Black','#1c1d20'],['Grey','#9aa1a9']] },
  ]},
};

/* Detail copy for every product card: what it is, fabric and make, how it is made or styled, fit */
const DETAILS = {
  'Essential White Tee': { about:'The core white t-shirt the whole studio wardrobe is built around. Plain, heavy and cut to sit clean under jackets and hoodies.', fabric:'Core cotton jersey, 220 gsm, with 5 percent elastane so the collar keeps its shape. Pre shrunk and garment dyed.', make:'Cut and sewn with a ribbed collar, taped shoulder seams and a straight hem. Styled here with the Tailored Black Trouser and Court White Sneaker.', fit:'Regular fit, true to size' },
  'Striped Oxford Shirt': { about:'A slim striped Oxford shirt with a button down collar, made to be worn tucked or loose over a tee.', fabric:'Cotton Oxford weave with fine blue striping. The fabric is woven, not printed, so the stripes never fade out.', make:'Single needle stitching, mother of pearl style buttons and a curved hem. Styled open over the Essential White Tee for the layered studio look.', fit:'Slim fit, size up for a relaxed fit' },
  'Lilac Zip Hoodie': { about:'A soft zip hoodie in lilac fleece, with a two way zip and a lined hood. The layering piece of the tops rail.', fabric:'Brushed fleece, 80 percent cotton and 20 percent recycled polyester, with ribbed cuffs and hem.', make:'Panelled hood with drawcord tips in metal, kangaroo pocket split by the zip. Styled zipped halfway over the white tee, as shown on the model.', fit:'Relaxed fit, dropped shoulder' },
  'Studio Layer Tee': { about:'A layered look tee built as one piece: a white base tee with a short second layer at the hem and sleeve, so the layered outfit needs no styling.', fabric:'Two weights of cotton jersey, a firm base layer and a lighter floating layer, joined at the shoulder and side seams.', make:'The layers are cut separately and joined before the final wash, so they hang as one garment. Styled under the Down Hooded Jacket.', fit:'Regular fit with a longer back hem' },
  'Tailored Black Trouser': { about:'A straight leg black trouser with a clean tailored waist, the bottom half of the base studio look.', fabric:'Wool blend twill with a small amount of stretch, a half lining at the front and taped inner seams.', make:'Hook and bar closure, slanted pockets and a pressed crease. Styled with the Essential White Tee and Court White Sneaker.', fit:'Straight leg, regular rise' },
  'Indigo Straight Jean': { about:'A straight indigo jean in washed denim, cut like a classic five pocket and softened before it reaches the rail.', fabric:'12 oz cotton denim, stone washed for softness with the indigo tone kept deep at the seams.', make:'Five pocket build, chain stitched hems and a button fly. Styled with the Striped Oxford Shirt tucked at the front.', fit:'Straight fit, true to size' },
  'Studio Trouser, Red Accent': { about:'The lookbook version of the studio trouser: black, straight, and shot with the red accessories so the colour story of the set can be seen in one look.', fabric:'Same wool blend twill as the Tailored Black Trouser, with a smooth matte finish that photographs flat.', make:'Pressed crease and a clean hem with no break. Styled with the Velocity Red Runner and the Red Barrel Bag carried in hand.', fit:'Straight leg, regular rise' },
  'Court Trouser Set': { about:'A trouser and sneaker pairing sold as one set: the black court trouser cut slightly cropped so the white sneaker shows in full.', fabric:'Cotton twill with stretch, garment washed so the black stays soft rather than shiny.', make:'Cropped just above the ankle with a clean taped hem. Styled as the set is sold, with the White Sneaker, On Foot.', fit:'Tapered fit, cropped leg' },
  'Down Hooded Jacket': { about:'The two tone hooded jacket in purple and blue, the hero outerwear piece. Warm, light and cut to layer over hoodies.', fabric:'Matte nylon shell with a recycled down fill, a water resistant finish and a soft tricot lining at the chin and pockets.', make:'Baffled panels are filled and stitched in sections so the down stays even. Styled zipped over the Studio Layer Tee, hood down.', fit:'Regular fit, layers over a hoodie' },
  'Purple Hooded Jacket': { about:'A featherlight purple hooded jacket for mild weather, packing into its own pocket when the studio warms up.', fabric:'Featherlight ripstop nylon with a light synthetic fill at the body and unlined sleeves for easy movement.', make:'Two way zip, elastic cuffs and an adjustable hood cord. Styled over the Essential White Tee with the hood up or down.', fit:'Regular fit, true to size' },
  'Blue Shell Jacket': { about:'A rain ready blue shell jacket with sealed seams, made for wet commutes and shot here in its purple and blue studio colourway.', fabric:'Three layer shell fabric, waterproof and breathable, with taped seams and a matte finish.', make:'Storm flap over the zip, adjustable cuffs and hem, and a peaked hood. Styled closed over the Lilac Zip Hoodie.', fit:'Regular fit with room to layer' },
  'Layered Studio Coat': { about:'The limited layered studio coat: a long clean coat body with a short inner jacket layer visible at the front, one garment that reads as two.', fabric:'Bonded wool blend outer with a smooth lining, and a lighter quilted inner layer in a contrast tone.', make:'The inner layer is stitched in at the shoulder and zip line, so it never shifts. Styled open over the white tee and black trouser.', fit:'Long relaxed fit, below the knee' },
  'Court White Sneaker': { about:'A clean white court sneaker in smooth leather, the shoe the base studio look is photographed in.', fabric:'Full grain leather upper, leather lined, on a cushioned rubber cupsole with a padded collar.', make:'Stitched cupsole, tonal laces and a spare pair in the box. Styled with the Tailored Black Trouser, hem resting on the shoe.', fit:'True to size, regular width' },
  'Velocity Red Runner': { about:'A red race knit runner with a light foam sole, the brightest shoe on the rail and the colour anchor of the accessories look.', fabric:'One piece engineered knit upper with a breathable mesh toe, on a moulded foam midsole.', make:'Knit is woven to shape with almost no offcuts, then bonded to the sole. Styled with black trousers so the red carries the look.', fit:'Snug race fit, consider half a size up' },
  'Red Runner, On Foot': { about:'The Velocity runner photographed on foot, so the knit, the sole height and the way it sits with a trouser hem can be judged before ordering.', fabric:'Engineered knit upper and foam midsole, the same build as the Velocity Red Runner.', make:'Shown worn with the Studio Trouser, Red Accent, hem just above the ankle. The on foot shot is the truest guide to its shape.', fit:'Snug race fit, consider half a size up' },
  'White Sneaker, On Foot': { about:'The Court sneaker photographed on foot with the cropped court trouser, the everyday pairing the set was designed around.', fabric:'Smooth leather upper, leather lining and a cushioned rubber cupsole, the same build as the Court White Sneaker.', make:'Shown worn with the Court Trouser Set. The cropped hem is cut to land exactly where this shoe begins.', fit:'True to size, regular width' },
  'Red Barrel Bag': { about:'A red barrel bag for weekends: one round main compartment, two carry handles and a shoulder strap, sized for two days of clothes.', fabric:'Grape leather look outer with a wipe clean finish, a cotton twill lining and metal feet at the base.', make:'The barrel shape is built over a firm frame so it stands open while packing. Styled carried in hand with the red runners, as on the model.', fit:'One size, 38 litre main compartment' },
  'Quilted Chain Bag': { about:'A black quilted bag on a chain strap, the evening piece of the accessories rail. Small, structured and worn on the shoulder or across the body.', fabric:'Soft quilted outer with a padded feel, suede effect lining and a metal chain strap with a leather shoulder section.', make:'Quilting is stitched panel by panel before the bag is assembled. Styled on the shoulder with the studio evening look.', fit:'One size, fits phone, card case and keys' },
  'Barrel Bag, In Hand': { about:'The red barrel bag photographed as carried, in one hand at the model\u2019s side, so its real size against the body is clear.', fabric:'Same firm framed build as the Red Barrel Bag, with reinforced handles rated for a full weekend load.', make:'Shown carried, not staged on a shelf. Handle drop is sized to clear a coat sleeve, and the shoulder strap detaches.', fit:'One size, 38 litre main compartment' },
  'Hard-Shell Carry-On': { about:'A red hard shell carry on sized for overhead lockers, with a firm shell that protects what is inside when the bag is stacked.', fabric:'Polycarbonate hard shell with a scratch resistant texture, a fabric lined interior and compression straps inside.', make:'The shell is moulded in two halves and fitted with four spinner wheels and a telescopic handle. Styled beside the model in the travel look.', fit:'One size, cabin dimensions 55 x 35 x 20 cm' },
};

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGsap = typeof window.gsap !== 'undefined' && !reduced;
let cat = 'tops', selIdx = 0, size = 'M', colorIdx = 0, bag = 0, frontIsA = true;

const $ = id => document.getElementById(id);
const leftEl = $('cardsLeft'), rightEl = $('cardsRight');

function cardHTML(p, i){
  return `<img src="${p.img}" alt="${p.name} product photo" loading="lazy">
    <span class="pc-body"><span><h3>${p.name}</h3><span class="pc-tag">${p.tag}</span></span><span class="pc-price">$${p.price}</span></span>`;
}
function renderCards(animate){
  const list = CATS[cat].products;
  leftEl.innerHTML = ''; rightEl.innerHTML = '';
  list.forEach((p, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'pcard ' + (i % 2 ? 'float-b' : 'float-a') + (i === selIdx ? ' is-selected' : '');
    b.dataset.depth = i % 2 ? 14 : 10;
    b.setAttribute('aria-pressed', i === selIdx ? 'true' : 'false');
    b.innerHTML = cardHTML(p, i);
    b.addEventListener('click', () => { selectProduct(i, true); openDetail(); });
    (i < 2 ? leftEl : rightEl).appendChild(b);
  });
  if (animate && hasGsap){
    gsap.fromTo('.pcard', {opacity:0, y:26, rotateY:38, scale:.92}, {opacity:1, y:0, rotateY:0, scale:1, duration:.65, ease:'back.out(1.6)', stagger:.08, clearProps:'rotateY,scale'});
  }
}
function setModel(src, alt){
  const front = frontIsA ? $('modelA') : $('modelB');
  const back = frontIsA ? $('modelB') : $('modelA');
  if (front.getAttribute('src') === src){ return; }
  back.src = src; back.alt = alt; back.removeAttribute('aria-hidden');
  back.classList.add('cross'); front.classList.add('cross');
  back.style.opacity = '1'; front.style.opacity = '0';
  front.setAttribute('aria-hidden','true');
  frontIsA = !frontIsA;
  if (hasGsap) gsap.fromTo(back, {scale:1.045}, {scale:1, duration:.6, ease:'power2.out'});
}
function renderBar(){
  const c = CATS[cat], p = c.products[selIdx];
  $('barCat').textContent = c.label;
  $('barName').textContent = p.name;
  $('barPrice').textContent = '$' + p.price;
  $('chipImg').src = p.img; $('chipName').textContent = p.name;
  if (!c.sizes.includes(size)) size = c.sizes[Math.min(2, c.sizes.length - 1)];
  $('sizes').innerHTML = c.sizes.map(s => `<button type="button" class="size-btn${s === size ? ' is-active' : ''}" data-size="${s}">${s}</button>`).join('');
  $('sizes').querySelectorAll('.size-btn').forEach(b => b.addEventListener('click', () => {
    size = b.dataset.size; $('sizeVal').textContent = size;
    $('sizes').querySelectorAll('.size-btn').forEach(x => x.classList.toggle('is-active', x === b));
    if (hasGsap) gsap.fromTo('#productBar', {scale:.985}, {scale:1, duration:.4, ease:'back.out(2)'});
  }));
  $('sizeVal').textContent = size;
  if (colorIdx >= p.colors.length) colorIdx = 0;
  $('colors').innerHTML = p.colors.map((col, i) => `<button type="button" class="color-btn${i === colorIdx ? ' is-active' : ''}" data-i="${i}" style="background:${col[1]}" aria-label="Colour ${col[0]}" title="${col[0]}"></button>`).join('');
  $('colors').querySelectorAll('.color-btn').forEach(b => b.addEventListener('click', () => {
    colorIdx = +b.dataset.i; $('colorVal').textContent = p.colors[colorIdx][0];
    $('colors').querySelectorAll('.color-btn').forEach(x => x.classList.toggle('is-active', x === b));
    document.querySelector('.featured-chip').style.boxShadow = `0 16px 34px ${p.colors[colorIdx][1]}55`;
  }));
  $('colorVal').textContent = p.colors[colorIdx][0];
}
function selectProduct(i, animate){
  selIdx = i; colorIdx = 0;
  const p = CATS[cat].products[i];
  document.querySelectorAll('.pcard').forEach((el, j) => { el.classList.toggle('is-selected', j === i); el.setAttribute('aria-pressed', j === i ? 'true' : 'false'); });
  setModel(p.model, p.modelAlt);
  renderBar();
  if (animate && hasGsap) gsap.fromTo('#featuredChip', {y:10, opacity:.4}, {y:0, opacity:1, duration:.5, ease:'back.out(1.8)'});
}
function setCategory(next){
  if (next === cat) return;
  cat = next; selIdx = 0; colorIdx = 0;
  document.querySelectorAll('.pill').forEach(p => p.classList.toggle('is-active', p.dataset.cat === cat));
  const flip = () => { renderCards(true); const p = CATS[cat].products[0]; setModel(p.model, p.modelAlt); renderBar(); };
  if (hasGsap){
    gsap.to('.pcard', {opacity:0, y:-18, rotateY:-32, duration:.28, stagger:.04, ease:'power2.in', onComplete: flip});
  } else flip();
}
document.querySelectorAll('.pill').forEach(p => p.addEventListener('click', () => setCategory(p.dataset.cat)));

let toastTimer;
function toast(msg){
  const t = $('toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}
function addCurrent(){
  bag++; $('bagCount').textContent = bag;
  const btn = $('bagBtn'); btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop');
  const p = CATS[cat].products[selIdx];
  toast(`Added ${p.name}, size ${size}, ${p.colors[colorIdx][0]}, to your bag`);
}
$('addBtn').addEventListener('click', addCurrent);

/* ---------- Detail sheet (bottom sheet, page keeps running behind) ---------- */
function renderDetailOptions(){
  const c = CATS[cat], p = c.products[selIdx];
  $('detailSizes').innerHTML = c.sizes.map(s => `<button type="button" class="size-btn${s === size ? ' is-active' : ''}" data-dsize="${s}">${s}</button>`).join('');
  $('detailSizes').querySelectorAll('[data-dsize]').forEach(b => b.addEventListener('click', () => {
    size = b.dataset.dsize; renderBar(); renderDetailOptions();
  }));
  $('detailColors').innerHTML = p.colors.map((col, i) => `<button type="button" class="color-btn${i === colorIdx ? ' is-active' : ''}" data-dcolor="${i}" style="background:${col[1]}" aria-label="Colour ${col[0]}" title="${col[0]}"></button>`).join('');
  $('detailColors').querySelectorAll('[data-dcolor]').forEach(b => b.addEventListener('click', () => {
    colorIdx = +b.dataset.dcolor; renderBar(); renderDetailOptions();
    $('detailColorVal').textContent = p.colors[colorIdx][0];
  }));
  $('detailSizeVal').textContent = size;
  $('detailColorVal').textContent = p.colors[colorIdx][0];
}
function openDetail(){
  const c = CATS[cat], p = c.products[selIdx], d = DETAILS[p.name] || {};
  $('detailImg').src = p.img; $('detailImg').alt = p.name + ' product photo';
  $('detailCat').textContent = c.label + ' · ' + p.tag;
  $('detailName').textContent = p.name;
  $('detailCode').textContent = 'STYLE VF-' + cat.toUpperCase() + '-' + String(selIdx + 1).padStart(2, '0') + ' · ' + p.tag.toUpperCase();
  $('detailPrice').textContent = '$' + p.price;
  $('detailAbout').textContent = d.about || '';
  $('detailFabric').textContent = d.fabric || '';
  $('detailMake').textContent = d.make || '';
  $('detailData').innerHTML = [
    ['Category', c.label], ['Style note', p.tag], ['Fit', d.fit || ''],
    ['Sizes', c.sizes.join(', ')], ['Colours', p.colors.map(col => col[0]).join(', ')], ['Price', '$' + p.price],
  ].map(([k, v]) => `<div class="dd-row"><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  renderDetailOptions();
  const scrim = $('detailScrim'), sheet = $('detailSheet');
  scrim.hidden = false;
  const showSheet = () => { scrim.classList.add('show'); sheet.classList.add('open'); };
  requestAnimationFrame(showSheet);
  setTimeout(showSheet, 60);
  sheet.setAttribute('aria-hidden', 'false');
}
function closeDetail(){
  const scrim = $('detailScrim'), sheet = $('detailSheet');
  if (!sheet.classList.contains('open')) return;
  scrim.classList.remove('show'); sheet.classList.remove('open');
  sheet.setAttribute('aria-hidden', 'true');
  setTimeout(() => { scrim.hidden = true; }, 380);
}
$('detailBtn').addEventListener('click', openDetail);
$('detailClose').addEventListener('click', closeDetail);
$('detailScrim').addEventListener('click', closeDetail);
$('detailAdd').addEventListener('click', addCurrent);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });
$('bagBtn').addEventListener('click', () => toast(bag ? `Your bag holds ${bag} item${bag > 1 ? 's' : ''}` : 'Your bag is empty, add a look first'));

/* Parallax layers */
if (!reduced && window.matchMedia('(pointer: fine)').matches){
  const space = $('stageSpace');
  let tx = 0, ty = 0, cx = 0, cy = 0;
  $('stage').addEventListener('mousemove', e => {
    const r = space.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width - .5) * 2;
    ty = ((e.clientY - r.top) / r.height - .5) * 2;
  });
  (function loop(){
    cx += (tx - cx) * .06; cy += (ty - cy) * .06;
    document.querySelectorAll('[data-depth]').forEach(el => {
      const d = +el.dataset.depth;
      el.style.translate = `${(-cx * d).toFixed(1)}px ${(-cy * d * .6).toFixed(1)}px`;
    });
    $('fitWord').style.translate = `${(cx * 14).toFixed(1)}px 0px`;
    requestAnimationFrame(loop);
  })();
}

/* Entrance */
renderCards(false); renderBar();
if (hasGsap){
  gsap.from('.stage-top > *', {opacity:0, y:24, duration:.7, stagger:.09, ease:'power3.out'});
  gsap.from('.pcard', {opacity:0, y:34, rotateY:30, duration:.75, stagger:.09, delay:.25, ease:'back.out(1.5)', clearProps:'all'});
  gsap.from('.model-wrap', {opacity:0, scale:.94, duration:.9, delay:.15, ease:'power3.out', clearProps:'all'});
  gsap.from('#productBar', {opacity:0, y:30, duration:.7, delay:.5, ease:'back.out(1.4)', clearProps:'all'});
}
