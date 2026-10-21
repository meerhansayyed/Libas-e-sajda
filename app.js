// Gallery images show previously completed and delivered makhnas, not ready-made inventory.
const designs=[
{id:1,name:"Ivory Floral Border",category:"Lace & Embroidery",image:"assets/makhna-01.jpeg",desc:"An ivory makhna finished with a colourful floral border.",tags:"ivory off-white floral embroidered lace border"},
{id:2,name:"Pink Ditsy Floral",category:"Floral Prints",image:"assets/makhna-02.jpeg",desc:"Soft pink micro-florals with a neat light lace hem.",tags:"pink floral ditsy lace"},
{id:3,name:"Lilac Micro-Print",category:"Floral Prints",image:"assets/makhna-03.jpeg",desc:"A light lilac floral print with a delicate edge.",tags:"lilac lavender purple floral"},
{id:4,name:"Purple Chevron",category:"Geometric Prints",image:"assets/makhna-04.jpeg",desc:"A purple geometric pattern with contrasting lace edging.",tags:"purple chevron zig zag geometric"},
{id:5,name:"Rose Pink with Lace",category:"Solid Colours",image:"assets/makhna-05.jpeg",desc:"A solid rose-pink look with decorative lace trim.",tags:"pink rose solid lace"},
{id:6,name:"Sage Green",category:"Solid Colours",image:"assets/makhna-06.jpeg",desc:"A muted sage-green example with a clean, simple finish.",tags:"sage green plain solid"},
{id:7,name:"Floral Garden Print",category:"Floral Prints",image:"assets/makhna-07.jpeg",desc:"A floral design with a soft feel and lace detail.",tags:"floral pink red flowers"},
{id:8,name:"Purple Patterned Border",category:"Geometric Prints",image:"assets/makhna-08.jpeg",desc:"A bold purple patterned style with a decorative edge.",tags:"purple zig zag geometric"},
{id:9,name:"Dusty Rose Detail",category:"Lace & Embroidery",image:"assets/makhna-09.jpeg",desc:"A dusty-rose tone with contrasting decorative trim.",tags:"pink rose grey lace"},
{id:10,name:"Mauve Tie Style",category:"Lace & Embroidery",image:"assets/makhna-10.jpeg",desc:"A mauve satin-look style with tie details and a crochet edge.",tags:"mauve satin tie lace"},
{id:11,name:"Blue Floral",category:"Floral Prints",image:"assets/makhna-11.jpeg",desc:"A light base with small blue floral motifs and a finished border.",tags:"blue white floral"},
{id:12,name:"Dark Everyday Style",category:"Solid Colours",image:"assets/makhna-12.jpeg",desc:"A deep, understated colour for a simple everyday look.",tags:"black dark plain"},
{id:14,name:"Soft Green",category:"Solid Colours",image:"assets/makhna-14.jpeg",desc:"A muted green example for lovers of understated colours.",tags:"green sage solid"},
{id:15,name:"Plum Statement",category:"Solid Colours",image:"assets/makhna-15.jpeg",desc:"A rich plum shade with a smooth, elegant finish.",tags:"plum purple solid"},
{id:17,name:"Classic Blue Print",category:"Floral Prints",image:"assets/makhna-17.jpeg",desc:"A blue-and-white printed style with a delicate edge.",tags:"blue white print flowers"},
{id:18,name:"Monochrome Floral",category:"Floral Prints",image:"assets/makhna-18.jpeg",desc:"A neutral floral print with a timeless look.",tags:"black white grey floral"},
{id:19,name:"Floral Lace Border",category:"Lace & Embroidery",image:"assets/makhna-19.jpeg",desc:"A floral print with a prominent decorative lace hem.",tags:"floral lace border white"},
{id:20,name:"Black Floral Vine",category:"Floral Prints",image:"assets/custom-order-sample-01.jpg",desc:"An ivory base with small dark floral motifs and a delicate lace edge.",tags:"ivory black floral lace"},
{id:21,name:"Pink Printed Tie Style",category:"Floral Prints",image:"assets/custom-order-sample-02.jpg",desc:"A pink printed fabric with a white lace finish and matching ties.",tags:"pink white print tie lace"},
{id:22,name:"Rose Floral Print",category:"Floral Prints",image:"assets/custom-order-sample-03.jpg",desc:"A pale base with rose-coloured floral detailing and lace trim.",tags:"rose pink floral lace"},
{id:23,name:"Soft Pink All-Over Print",category:"Floral Prints",image:"assets/custom-order-sample-04.jpg",desc:"A soft pink all-over print finished with a fine lace border.",tags:"pink all over print lace"},
{id:24,name:"Turquoise Floral",category:"Floral Prints",image:"assets/custom-order-sample-05.jpg",desc:"A turquoise floral print with a contrasting white lace hem.",tags:"turquoise blue floral white lace"},
{id:25,name:"Black and White Vine",category:"Floral Prints",image:"assets/custom-order-sample-06.jpg",desc:"A black fabric with delicate white vine motifs and lace edging.",tags:"black white vine floral lace"},
{id:26,name:"Black Vine Lace Detail",category:"Floral Prints",image:"assets/custom-order-sample-07.jpg",desc:"A closer view of a black-and-white vine design with layered lace trim.",tags:"black white vine lace detail"},
{id:27,name:"Ivory Leaf Print",category:"Floral Prints",image:"assets/custom-order-sample-08.jpg",desc:"An ivory fabric with small warm-toned leaf motifs and a white lace border.",tags:"ivory beige brown leaf print lace"}
];
let activeCategory="All Designs";
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const WHATSAPP_NUMBER='918689968787';
function askAboutPrice(d){const message=`Assalamu Alaikum Azra Mujawar, I saw this Libas-e-Makhna sample on your website and would like to enquire about the price.\n\nSample: ${d.name}\nPlease let me know the price and whether a similar design can be made. Thank you.`;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener');}
function renderDesigns(){const list=designs.filter(d=>activeCategory==="All Designs"||d.category===activeCategory);$('#resultLabel').textContent=`PREVIOUSLY CREATED & DELIVERED · ${list.length} EXAMPLES`;$('#productGrid').innerHTML=list.map(d=>`<article class="product-card"><div class="product-photo"><img src="${d.image}" alt="Previously created makhna example: ${d.name}" loading="lazy"><span class="product-badge">PAST CREATION</span></div><div class="product-info"><div class="product-meta">${d.category}</div><h3>${d.name}</h3><p>${d.desc}</p><div class="inspiration-label">Previously made and delivered · Sample only</div><button class="add-btn" data-design="${d.id}">Ask owner for price ↗</button></div></article>`).join('');$$('[data-design]').forEach(b=>b.onclick=()=>askAboutPrice(designs.find(d=>d.id===+b.dataset.design)));}
$('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;activeCategory=b.dataset.category;$$('.filter').forEach(x=>x.classList.toggle('active',x===b));renderDesigns()});
$('#menuToggle').onclick=()=>$('#mainNav').classList.toggle('open');$$('#mainNav a').forEach(a=>a.onclick=()=>$('#mainNav').classList.remove('open'));
renderDesigns();
