import{j as e,r as f,u as h,d as g}from"./index-84a4b50f.js";import{u as j}from"./useFetchRecipes-3416525f.js";const _="_grid_1k09w_1",N="_contentCard_1k09w_27",C="_small_1k09w_32",o={grid:_,contentCard:N,small:C},y="_recipe_14we1_1",k="_recipeTitle_14we1_26",v="_imageContainer_14we1_30",d={recipe:y,recipeTitle:k,imageContainer:v};function w({recipe:s,updateRecipe:n,deleteRecipe:i}){function l(){n({...s,liked:!s.liked})}async function a(c){c.stopPropagation(),i(s._id)}return e.jsxs("div",{onClick:l,className:d.recipe,children:[e.jsx("i",{onClick:a,className:"fa-solid fa-xmark"}),e.jsx("div",{className:d.imageContainer,children:e.jsx("img",{src:s.image,alt:s.title})}),e.jsxs("div",{className:`${d.recipeTitle} d-flex flex-column justify-content-center align-items-center`,children:[e.jsx("h3",{className:"mb-10",children:s.title}),e.jsx("i",{className:`fa-solid fa-heart ${s.liked?"text-primary":""}`})]})]})}function R(){return e.jsx("div",{children:e.jsx("i",{className:"fa-solid fa-spinner"})})}const $="_searchBar_lgpa8_1",b={searchBar:$};function L({setFilter:s}){function n(i){const l=i.target.value;s(l.trim().toLowerCase())}return e.jsxs("div",{className:`d-flex flex-row justify-content-center align-item-center my-30 ${b.searchBar}`,children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass mr-15"}),e.jsx("input",{onInput:n,className:"flex-fill",type:"text",placeholder:"Rechercher"})]})}function P(){const[s,n]=f.useState(""),[i,l]=f.useState(1),[[a,c],x]=j(i);async function p(t){const r=await h(t);c(a.map(m=>m._id===r._id?r:m))}async function u(t){await g(t),c(a.filter(r=>r._id!==t))}return e.jsxs("div",{className:"flex-fill container d-flex flex-column p-20",children:[e.jsxs("h1",{className:"my-30",children:["Découvrez nos nouvelles recettes"," ",e.jsxs("small",{className:o.small,children:["- ",a.length]})]}),e.jsxs("div",{className:`card flex-fill d-flex flex-column p-20 mb-20 ${o.contentCard}`,children:[e.jsx(L,{setFilter:n}),x&&!a.length?e.jsx(R,{}):e.jsx("div",{className:o.grid,children:a.filter(t=>t.title.toLowerCase().startsWith(s)).map(t=>e.jsx(w,{recipe:t,updateRecipe:p,deleteRecipe:u},t._id))}),e.jsx("div",{className:"d-flex flex-row justify-content-center align-items-center p-20",children:e.jsx("button",{onClick:()=>l(i+1),className:"btn btn-primary",children:"Charger plus de recettes"})})]})]})}export{P as default};