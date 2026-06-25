import{j as e}from"./ui-B8HeZKV4.js";import{X as n,x as c}from"./app-qiiAnkyN.js";import{L as m,u as x}from"./useFlashMessages-Cs_UGCpN.js";import{a as g,u as p,B as b}from"./use-favicon-BE4htyJ_.js";import{j as h}from"./helpers-NZ1GFG32.js";import{C as u}from"./cookie-consent-j8mOTtVG.js";function j({children:s,title:t,description:o}){const{settings:a,getPrimaryColor:i}=g(),{adminAllSetting:d}=n().props;p();const l=a.themeMode==="dark"?a.logo_light||a.logo_dark:a.logo_dark||a.logo_light,r=i();return e.jsxs("div",{className:"min-h-screen bg-gray-50 relative overflow-hidden",children:[e.jsx("style",{children:`
                .bg-primary {
                    background-color: ${r} !important;
                    color: white !important;
                }
                .bg-primary:hover {
                    background-color: ${r}dd !important;
                }
                .border-primary {
                    border-color: ${r} !important;
                }
                .text-primary {
                    color: ${r} !important;
                }
                .dark .bg-primary {
                    background-color: ${r} !important;
                    color: white !important;
                }
                .dark .bg-primary:hover {
                    background-color: ${r}dd !important;
                }
            `}),e.jsxs("div",{className:"absolute inset-0",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 dark:from-slate-900 dark:via-slate-800 dark:to-stone-900"}),e.jsx("div",{className:"absolute inset-0 opacity-70 dark:opacity-30",style:{backgroundImage:`radial-gradient(circle at 30% 70%, ${r} 1px, transparent 1px)`,backgroundSize:"80px 80px"}})]}),e.jsx("div",{className:"absolute top-6 right-6 z-10 md:block hidden",children:e.jsx(m,{})}),e.jsx("div",{className:"flex items-center justify-center min-h-screen p-6",children:e.jsxs("div",{className:"w-full max-w-md",children:[e.jsx("div",{className:"text-center mb-8",children:e.jsx("div",{className:"relative lg:inline-block lg:px-6",children:e.jsx(c,{href:route("dashboard"),className:"inline-block",children:l?e.jsx("img",{src:h(l),alt:a.titleText||"Logo",className:"w-auto mx-auto max-h-28 object-contain drop-shadow-sm"}):e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("img",{src:"/asyxgrouplogo.png",alt:"Asyx Group Company LTD",className:"w-auto max-h-28 object-contain drop-shadow-sm"}),e.jsx("span",{className:"text-lg font-bold text-gray-800 tracking-wide",children:"Asyx Group Company LTD"})]})})})}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 rounded-tl-md",style:{borderColor:r}}),e.jsx("div",{className:"absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 rounded-br-md",style:{borderColor:r}}),e.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg lg:p-8 p-4 lg:pt-5 shadow-sm",children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("h1",{className:"text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-1.5",children:t}),e.jsx("div",{className:"w-12 h-px mx-auto mb-2.5",style:{backgroundColor:r}}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-sm",children:o})]}),s]})]}),e.jsx("div",{className:"text-center mt-6",children:e.jsx("div",{className:"inline-flex items-center space-x-2 bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-md px-4 py-2 border border-gray-200 dark:border-slate-700",children:e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:a.footerText||"© 2026 AccountGo. All rights reserved."})})})]})}),e.jsx(u,{settings:d||{}})]})}function C({children:s,title:t,description:o,...a}){return x(),e.jsx(b,{children:e.jsx(j,{title:t,description:o,...a,children:s})})}export{C as A};
