(this.webpackJsonpfoodiary_v2=this.webpackJsonpfoodiary_v2||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),r=a.n(i),c=a(11),o=a.n(c),s=a(65),d=a(12),l=a(9),u=a(108),m=a(144),x=a(163),h=a(109),p=a(146),j=a(161),f=a(147),b=a(148),g=a(149),O=a(145),v=a(140),w=a(16),y=a.n(w),C=Object(v.a)({paper:{margin:"50px auto",minHeight:"calc(100vh - 100px)",width:"100%",maxWidth:"1800px",display:"flex",justifyContent:"flex-end",backgroundImage:"url(https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/12/orange-chicken-recipe.jpg?fit=1200%2C879&ssl=1)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center","@media (max-width:1450px)":{margin:"0px auto",minHeight:"100vh"}},inner:{marginRight:"0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"white",width:"35%","@media (max-width:1280px)":{width:"45%"},"@media (max-width:960px)":{width:"100%"}},avatar:{backgroundColor:"#58d68d"},loginTitle:{fontSize:"4.5rem","@media (max-width:960px)":{fontSize:"2rem",marginTop:"8px"}},form:{marginTop:"20px",width:"100%"},input:{"& label.Mui-focused":{color:"#58d68d"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#58d68d"},"&.Mui-focused fieldset":{borderColor:"#58d68d"}}},button:{fontSize:"1rem",backgroundColor:"#58d68d",padding:"10px 0px","&:hover":{backgroundColor:"#58d68d"}},progress:{color:"#58d68d"},error:{fontSize:"0.8rem",color:"red"},link:{fontSize:"0.8rem",color:"black","&:hover":{color:"#85929e"}}}),N=function(e){var t=C(),a=Object(i.useState)(""),r=Object(l.a)(a,2),c=r[0],o=r[1],s=Object(i.useState)(""),d=Object(l.a)(s,2),v=d[0],w=d[1],N=Object(i.useState)(""),S=Object(l.a)(N,2),k=S[0],I=S[1],B=Object(i.useState)(!1),T=Object(l.a)(B,2),z=T[0],D=T[1];return Object(n.jsx)(u.a,{className:t.paper,children:Object(n.jsxs)(m.a,{component:"div",maxWidth:"md",className:t.inner,children:[Object(n.jsx)(x.a,{className:t.avatar,children:Object(n.jsx)(O.a,{})}),Object(n.jsx)(h.a,{variant:"h1",className:t.loginTitle,children:"Login"}),Object(n.jsx)("form",{noValidate:!0,className:t.form,children:Object(n.jsxs)(p.a,{container:!0,spacing:2,direction:"column",justify:"center",children:[Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoFocus:!0,className:t.input,onChange:function(e){return o(e.target.value)}})}),Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",className:t.input,onChange:function(e){return w(e.target.value)}})}),Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsxs)(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(t){t.preventDefault(),D(!0);var a={email:c,password:v};y.a.post("/login",a).then((function(t){localStorage.setItem("AuthToken","Bearer ".concat(t.data.token)),localStorage.setItem("AuthTokenTime",(new Date).getTime()),D(!1),e.history.push("/")})).catch((function(e){I(e.response.data.general),D(!1)}))},className:t.button,disabled:z||!c||!v,children:["Sign In",z&&Object(n.jsx)(b.a,{size:20,thickness:6,className:t.progress})]})}),k&&Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{variant:"body2",className:t.error,children:k})}),Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsx)(g.a,{href:"signup",variant:"body2",className:t.link,children:"Don't have an account? Sign Up"})})]})})]})})},S=Object(v.a)({paper:{margin:"50px auto",minHeight:"calc(100vh - 100px)",width:"100%",maxWidth:"1800px",display:"flex",justifyContent:"flex-end",backgroundImage:"url(https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/12/orange-chicken-recipe.jpg?fit=1200%2C879&ssl=1)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center","@media (max-width:1450px)":{margin:"0px auto",minHeight:"100vh"}},inner:{marginRight:"0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"white",width:"35%","@media (max-width:1280px)":{width:"45%"},"@media (max-width:960px)":{width:"100%"}},avatar:{backgroundColor:"#58d68d"},signTitle:{fontSize:"4.5rem","@media (max-width:960px)":{fontSize:"2rem",marginTop:"8px"}},form:{marginTop:"20px",width:"100%"},input:{"& label.Mui-focused":{color:"#58d68d"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#58d68d"},"&.Mui-focused fieldset":{borderColor:"#58d68d"}}},button:{fontSize:"1rem",backgroundColor:"#58d68d",padding:"10px 0px","&:hover":{backgroundColor:"#58d68d"}},progress:{color:"#58d68d"},link:{fontSize:"0.8rem",color:"black","&:hover":{color:"#85929e"}}}),k=function(e){var t=S(),a=Object(i.useState)(""),r=Object(l.a)(a,2),c=r[0],o=r[1],s=Object(i.useState)(""),d=Object(l.a)(s,2),v=d[0],w=d[1],C=Object(i.useState)(""),N=Object(l.a)(C,2),k=N[0],I=N[1],B=Object(i.useState)(""),T=Object(l.a)(B,2),z=T[0],D=T[1],M=Object(i.useState)(""),W=Object(l.a)(M,2),A=W[0],H=W[1],F=Object(i.useState)({}),L=Object(l.a)(F,2),P=L[0],q=L[1],R=Object(i.useState)(!1),E=Object(l.a)(R,2),G=E[0],V=E[1];return Object(n.jsx)(u.a,{className:t.paper,children:Object(n.jsxs)(m.a,{component:"div",maxWidth:"md",className:t.inner,children:[Object(n.jsx)(x.a,{className:t.avatar,children:Object(n.jsx)(O.a,{})}),Object(n.jsx)(h.a,{variant:"h1",className:t.signTitle,children:"Sign up"}),Object(n.jsx)("form",{noValidate:!0,className:t.form,children:Object(n.jsxs)(p.a,{container:!0,spacing:2,children:[Object(n.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",helperText:P.username,error:!!P.username,className:t.input,onChange:function(e){return o(e.target.value)}})}),Object(n.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(j.a,{variant:"outlined",required:!0,type:"number",fullWidth:!0,id:"goal",label:"Goal",name:"goal",helperText:P.goal,error:!!P.goal,className:t.input,onChange:function(e){return H(e.target.value)}})}),Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",helperText:P.email,error:!!P.email,className:t.input,onChange:function(e){return w(e.target.value)}})}),Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",helperText:P.password,error:!!P.password,className:t.input,onChange:function(e){return I(e.target.value)}})}),Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirmPassword",helperText:P.confirmPassword,error:!!P.confirmPassword,className:t.input,onChange:function(e){return D(e.target.value)}})}),Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsxs)(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(t){t.preventDefault(),V(!0);var a={username:c,email:v,goal:A,password:k,confirmPassword:z};y.a.post("/signup",a).then((function(t){console.log(t),localStorage.setItem("AuthToken","".concat(t.data.token)),V(!1),e.history.push("/")})).catch((function(e){q(e.response.data),V(!1)}))},className:t.button,disabled:G||!v||!z||!k||!c||!A,children:["Sign Up",G&&Object(n.jsx)(b.a,{size:20,className:t.progress})]})}),Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsx)(g.a,{href:"login",variant:"body2",className:t.link,children:"Already have an account? Sign in"})})]})})]})})},I=a(150),B=Object(v.a)((function(){return{icon:{fontSize:32,cursor:"pointer",transition:"color .3s ease","&:hover":{color:"#58d68d"}}}})),T=function(e){var t=e.logout,a=B();return Object(n.jsx)(I.a,{className:a.icon,onClick:t})},z=Object(v.a)({header:{backgroundColor:"white",height:"70px",minHeight:"70px",maxHeight:"70px",padding:"0px 30px",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:"0px 5px 8px -9px rgba(133, 146, 158, 0.95)"},link:{color:"#85929e",fontSize:"3rem",fontWeight:"700","@media (max-width:960px)":{fontSize:"2rem"},"& span":{color:"#58d68d"}}}),D=function(e){var t=e.logout,a=z();return Object(n.jsxs)("header",{className:a.header,children:[Object(n.jsxs)(g.a,{href:"/",variant:"h1",underline:"none",className:a.link,children:["Foo",Object(n.jsx)("span",{children:"diary"})]}),Object(n.jsx)(T,{logout:t})]})},M=a(39),W=a(21),A=a(151),H=a(67),F=a(152),L=Object(v.a)((function(){return{container:{flexBasis:"20%",padding:"7px",minHeight:"100%","@media (max-width:1450px)":{flexBasis:"33.333%"},"@media (max-width:960px)":{flexBasis:"50%"},"@media (max-width:650px)":{flexBasis:"100%"},"@media (min-height: 1000px)":{maxHeight:"50%",minHeight:"50%"}},noneContainer:{display:"none"},card:{height:"100%",minHeight:"100%"},button:{width:"100%",height:"100%"},icon:{fontSize:128,color:"#58d68d"},rippleVisible:{color:"#58d68d",borderRadius:"none"}}})),P=function(e){var t=e.handleClick,a=e.expanded,i=L();return Object(n.jsx)("div",{className:a?i.noneContainer:i.container,children:Object(n.jsx)(A.a,{onClick:t,elevation:2,square:!0,className:i.card,children:Object(n.jsx)(H.a,{className:i.button,TouchRippleProps:{classes:{root:i.rippleVisible}},children:Object(n.jsx)(F.a,{className:i.icon})})})})},q=a(153),R=a(154),E=a(155),G=a(156),V=a(158),J=a(157),Y=a(162),U=Object(v.a)({container:{display:"flex",flexDirection:"column",borderBottom:"1px solid #e0e3e6"},inner:{display:"flex",justifyContent:"space-between",alignItems:"center"},content:{flex:"1",display:"flex",alignItems:"center"},title:{marginLeft:"10px",fontSize:"1rem","@media (max-width:960px)":{fontSize:"0.9rem"},flex:"1"},image:{width:"100px",height:"100px",borderRadius:"50%",flex:"0 0 100px"}}),_=function(e){var t=e.dish,a=e.addToCard,r=U(),c=t.image,o=t.title,s=Object(i.useState)(!1),d=Object(l.a)(s,2),u=d[0],m=d[1];return Object(n.jsxs)(A.a,{className:r.container,elevation:0,square:!0,children:[Object(n.jsxs)("div",{className:r.inner,children:[Object(n.jsxs)(q.a,{className:r.content,children:[c?Object(n.jsx)(R.a,{className:r.image,image:c,title:o}):null,Object(n.jsx)(h.a,{className:r.title,variant:"body2",color:"textSecondary",component:"p",children:o})]}),Object(n.jsxs)(E.a,{disableSpacing:!0,children:[Object(n.jsx)(G.a,{onClick:function(){return a({title:o,calories:t.nutrition.nutrients[0].amount,id:Object(Y.a)(),image:c})},"aria-label":"add to card",children:Object(n.jsx)(F.a,{})}),Object(n.jsx)(G.a,{onClick:function(){m(!u)},"aria-expanded":u,"aria-label":"show more",children:Object(n.jsx)(J.a,{})})]})]}),Object(n.jsx)(V.a,{in:u,timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(q.a,{children:Object(n.jsx)(h.a,{children:t.summary.replace(/(<([^>]+)>)/gi,"")})})})]})},K=Object(v.a)({dishList:{width:"100%",flex:"1",overflowY:"scroll"},mobileList:{marginLeft:"14px",flexBasis:"50%",maxHeight:"100%",display:"flex",flexDirection:"column",alignItems:"center","@media (max-width:960px)":{marginLeft:"0px",flexBasis:"100%"}},searchContainer:{width:"100%",padding:"10px 5px",display:"flex",alignItems:"center"},searchField:{flex:"1","& label.Mui-focused":{color:"#58d68d"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#58d68d"},"&.Mui-focused fieldset":{borderColor:"#58d68d"}}},searchIcon:{marginLeft:"5px",transition:"all .3s ease-in-out","&:hover":{backgroundColor:"#58d68d",color:"white"}},listButtonContainer:{width:"99.9%",display:"flex"},listButton:{flex:"1",padding:"10px 20px",transition:"all .4s ease-in-out",borderRadius:"0px",backgroundColor:"#58d68d",color:"white","&:hover":{backgroundColor:"#58d68d"},"@media (max-width:960px)":{fontSize:"0.7rem"}},noDisplay:{"@media (max-width:960px)":{display:"none"}},noButtonDisplay:{display:"none"}}),Q=function(e){var t=e.addToCard,a=e.showMenu,r=e.menu,c=Object(i.useState)(""),o=Object(l.a)(c,2),s=o[0],d=o[1],m=K(),x=Object(i.useContext)(oe);return Object(n.jsxs)(u.a,{className:"".concat(m.mobileList," ").concat(r?"":m.noDisplay),elevation:3,square:!0,children:[Object(n.jsx)("div",{className:m.searchContainer,children:Object(n.jsx)(j.a,{id:"outlined-search",label:"Search field",type:"search",className:m.searchField,variant:"outlined",onChange:function(e){return function(e){d(e.target.value)}(e)}})}),Object(n.jsx)("div",{className:m.dishList,children:s&&s.length>0?x.map((function(e){return e.title.toLowerCase().indexOf(s)+1&&e.summary?Object(n.jsx)(_,{addToCard:t,dish:e},e.id):null})):x.map((function(e){return e.summary?Object(n.jsx)(_,{addToCard:t,dish:e},e.id):null}))}),Object(n.jsx)("div",{className:"".concat(m.listButtonContainer," ").concat(r?"":m.noButtonDisplay),children:Object(n.jsx)(f.a,{className:m.listButton,onClick:function(){return a()},children:"Close Menu"})})]})},X=Object(v.a)({container:{flexBasis:"20%",height:"100%",maxHeight:"100%",padding:"7px","@media (max-width: 1450px)":{flexBasis:"33.333%"},"@media (max-width: 960px)":{flexBasis:"50%"},"@media (max-width: 650px)":{flexBasis:"100%"},"@media (min-height: 1000px)":{maxHeight:"50%"}},card:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",background:"linear-gradient(0deg, #8ae2af 0%, rgba(255,255,255,1) 25%)","@media (max-width:960px)":{background:"linear-gradient(0deg, #8ae2af 0%, rgba(255,255,255,1) 35%)"}},cardImage:{flex:"1 0 150px",width:"100%",maskImage:"linear-gradient(180deg, black 70%, transparent 100%)"},cardDay:{flex:"0 0 60px",display:"flex",alignItems:"center",justifyContent:"center"},dayName:{fontSize:"2rem",fontWeight:"700","@media (max-width:960px)":{fontSize:"1.6rem",padding:"10px 0"}},cardContent:{width:"100%",flex:"1 0 80px",padding:"0 16px",display:"flex",alignItems:"center",justifyContent:"center"},cardTitle:{textAlign:"center",fontSize:"1rem","@media (max-width:960px)":{fontSize:"0.95rem"}},cardActions:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",flex:"0 0 100px"},cardCalories:{textAlign:"center",fontSize:"1rem","@media (max-width:960px)":{fontSize:"0.95rem"}},cardButtons:{marginLeft:"0px !important",width:"80%",display:"flex",justifyContent:"space-evenly"},cardButton:{width:"100px",padding:"5px 20px",transition:"all .4s ease-in-out",borderColor:"#58d68d",borderRadius:"0px","&:hover":{color:"white",backgroundColor:"#58d68d"},"@media (max-width:960px)":{fontSize:"0.7rem"}}}),Z=function(e){var t=e.card,a=e.deleteCard,i=e.expandCard,r=e.expanded,c=e.setId,o=e.sum,s=X(),d=t.day,l=t.dishes,u=t.id,m=t.goal;return Object(n.jsx)("div",{className:s.container,children:Object(n.jsxs)(A.a,{elevation:2,square:!0,className:s.card,children:[Object(n.jsx)(R.a,{className:s.cardImage,image:l.length>0?l[0].image:null,title:l.length>0?l[0].title:null}),Object(n.jsx)("div",{className:s.cardDay,children:Object(n.jsx)(h.a,{variant:"h2",className:s.dayName,children:d})}),Object(n.jsx)(q.a,{className:s.cardContent,children:Object(n.jsxs)(h.a,{variant:"h6",color:"textSecondary",component:"p",className:s.cardTitle,children:[l.length>0?Object(n.jsx)("span",{children:l[0].title}):null,function(e){return e.length>2?" and ".concat(e.length-1," more dishes in your menu"):2===e.length?" and 1 more dish in your menu":1===e.length?" in your menu":"Add dishes to your menu"}(l)]})}),Object(n.jsxs)(E.a,{className:s.cardActions,children:[Object(n.jsxs)(h.a,{variant:"h6",component:"p",className:s.cardCalories,children:["Total calories: ",o(l)," / ",m]}),Object(n.jsxs)("div",{className:s.cardButtons,children:[Object(n.jsx)(f.a,{variant:"outlined",className:s.cardButton,onClick:function(){i(u),r||c(u)},children:"Open"}),Object(n.jsx)(f.a,{variant:"outlined",className:s.cardButton,onClick:function(){return a(u)},children:"Delete"})]})]})]})})},$=a(159),ee=Object(v.a)({expandedContainer:{flexBasis:"100%",minHeight:"100%",display:"flex"},expandedCard:{flex:"1",background:"white",display:"flex",flexDirection:"column"},cardDay:{flex:"0 0 60px",display:"flex",alignItems:"center",justifyContent:"center"},dayName:{fontSize:"2rem",fontWeight:"700","@media (max-width:960px)":{fontSize:"1.6rem",padding:"10px 0"}},expandedCardContent:{flex:"1"},cardItem:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"5px"},cardItemImage:{width:"50px",height:"50px"},cardItemContent:{display:"flex",alignItems:"center","& p":{marginLeft:"15px"}},cardItemTitle:{fontSize:"1rem","@media (max-width:960px)":{fontSize:"0.9rem"}},cardActions:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",flex:"0 0 100px"},cardCalories:{textAlign:"center",fontSize:"1rem","@media (max-width:960px)":{fontSize:"0.8rem"}},cardButtons:{marginLeft:"0px !important",width:"80%",display:"flex",justifyContent:"space-evenly"},cardButton:{width:"100px",padding:"5px 20px",transition:"all .4s ease-in-out",borderColor:"#58d68d",borderRadius:"0px","&:hover":{color:"white",backgroundColor:"#58d68d"},"@media (max-width:960px)":{fontSize:"0.7rem",width:"120px"}},cardDeleteButton:{display:"flex","@media (max-width:960px)":{display:"none"}},cardMenuButton:{display:"none","@media (max-width:960px)":{display:"flex"}}}),te=function(e){var t=e.card,a=e.deleteCard,i=e.deleteFromCard,r=e.expanded,c=e.expandCard,o=e.setId,s=e.sum,d=e.showMenu,l=ee(),u=t.day,m=t.dishes,p=t.id,j=t.goal;return Object(n.jsx)("div",{className:l.expandedContainer,children:Object(n.jsxs)(A.a,{elevation:2,square:!0,className:l.expandedCard,children:[Object(n.jsx)("div",{className:l.cardDay,children:Object(n.jsx)(h.a,{variant:"h2",className:l.dayName,children:u})}),Object(n.jsx)(q.a,{className:l.expandedCardContent,children:m.map((function(e,t){return Object(n.jsxs)("div",{className:l.cardItem,children:[Object(n.jsxs)("div",{className:l.cardItemContent,children:[Object(n.jsx)(x.a,{src:e.image,alt:"Image of a ".concat(e.title),className:l.cardItemImage}),Object(n.jsx)(h.a,{variant:"h6",color:"textSecondary",component:"p",className:l.cardItemTitle,children:e.title})]}),Object(n.jsx)(G.a,{onClick:function(){return i(e.id,p)},"aria-label":"delete dish",children:Object(n.jsx)($.a,{})})]},t)}))}),Object(n.jsxs)(E.a,{className:l.cardActions,children:[Object(n.jsxs)(h.a,{variant:"h6",component:"p",className:l.cardCalories,children:["Total calories: ",s(m)," / ",j]}),Object(n.jsxs)("div",{className:l.cardButtons,children:[Object(n.jsx)(f.a,{variant:"outlined",className:l.cardButton,onClick:function(){c(p),r&&o(null)},children:"Close"}),Object(n.jsx)(f.a,{variant:"outlined",className:"".concat(l.cardButton," ").concat(l.cardDeleteButton),onClick:function(){return a(p)},children:"Delete"}),Object(n.jsx)(f.a,{variant:"outlined",className:"".concat(l.cardButton," ").concat(l.cardMenuButton),onClick:function(){return d()},children:"Show Menu"})]})]})]})})},ae=function(e){var t=e.card,a=e.deleteCard,r=e.deleteFromCard,c=e.expandCard,o=e.expanded,s=e.menu,d=e.showMenu,u=Object(i.useState)(null),m=Object(l.a)(u,2),x=m[0],h=m[1],p=function(e){var t=0;return e.map((function(e){return t+=e.calories})),Math.round(t)};return o?x===t.id?Object(n.jsx)(te,{card:t,deleteFromCard:r,sum:p,deleteCard:a,expandCard:c,expanded:o,setId:h,showMenu:d,menu:s}):null:Object(n.jsx)(Z,{sum:p,setId:h,card:t,deleteCard:a,expandCard:c,expanded:o})},ne=Object(v.a)({container:{height:"70px",maxHeight:"70px",minHeight:"70px",display:"flex",justifyContent:"center",alignItems:"center"},inner:{display:"flex",justifyContent:"center",alignItems:"center"},input:{maxWidth:"150px","& .MuiInputBase-root":{"&:before":{border:"none"},"& input":{appearance:"textfield",textAlign:"center",fontWeight:"700",lineHeight:"1.2",fontSize:"3rem","@media (max-width:960px)":{fontSize:"2rem"},"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":{appearance:"none"}}},"& .MuiInput-underline:hover:before":{border:"none"},"& .MuiInput-underline:after":{border:"none"}},goal:{cursor:"pointer",fontSize:"3rem",fontWeight:"700","@media (max-width:960px)":{fontSize:"2rem"}},goalButton:{fontSize:"1rem",borderColor:"#58d68d",width:"100px",padding:"5px 20px",transition:"all .4s ease-in-out","&:hover":{color:"white",backgroundColor:"#58d68d",borderRadius:"0px"},"@media (max-width:960px)":{fontSize:"0.8rem",padding:"5px 40px"}}}),ie=function(e){var t=e.goal,a=e.submitGoal,r=e.changeGoal,c=ne(),o=Object(i.useState)(!1),s=Object(l.a)(o,2),d=s[0],u=s[1],x=Object(i.useState)(""),p=Object(l.a)(x,2),b=p[0],g=p[1];return Object(n.jsx)("div",{className:c.container,children:d?Object(n.jsxs)(m.a,{maxWidth:"xs",className:c.inner,children:[Object(n.jsx)(j.a,{error:!!b,id:"goalInput",type:"number",defaultValue:t,helperText:b,className:c.input,autoFocus:!0,onChange:function(e){e.target.value?g(r(e.target.value)):g("Enter your goal"),console.log("error",b)}}),Object(n.jsx)(f.a,{onClick:function(){a(),u(!1)},variant:"outlined",disabled:!!b,className:c.goalButton,children:"save"})]}):Object(n.jsx)(h.a,{variant:"h2",onClick:function(){return u(!0)},className:c.goal,children:t})})},re=Object(v.a)({container:{display:"flex",flexDirection:"column",paddingBottom:"24px",flexWrap:"wrap"},inner:{display:"flex",flexGrow:"1",width:"100%",maxHeight:"calc(100vh - 164px)",justifyContent:"flex-start","@media (min-width:1980px)":{maxWidth:"1800px"},"@media (max-width:960px)":{justifyContent:"center"}},cards:{display:"flex",flexFlow:"row wrap",justifyContent:"flex-start",flexBasis:"100%",maxHeight:"calc(100vh - 164px)"},expandedCards:{display:"flex",flexFlow:"row wrap",justifyContent:"flex-start",flexBasis:"50%",maxHeight:"calc(100vh - 164px)","@media (max-width:960px)":{flexBasis:"100%"}},noDisplay:{display:"none"}}),ce=function(){var e=re(),t=Object(i.useState)({}),a=Object(l.a)(t,2),r=a[0],c=a[1],o=Object(i.useState)(0),s=Object(l.a)(o,2),d=s[0],u=s[1],x=Object(i.useState)(!1),h=Object(l.a)(x,2),p=h[0],j=h[1],f=Object(i.useState)(!1),b=Object(l.a)(f,2),g=b[0],O=b[1],v=Object(i.useState)(""),w=Object(l.a)(v,2),C=w[0],N=w[1];Object(i.useEffect)((function(){S()}),[c,u]);var S=function(){y.a.get("/user").then((function(e){c((function(t){return e.data.userCredentials.cards})),u((function(t){return e.data.userCredentials.goal}))}))},k=function(e){var t=new Date(e.date),a=new Date;return t.getDate()===a.getDate()&&t.getMonth()===a.getMonth()&&t.getYear()===a.getYear()},I=function(e){switch(e.getDay()){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return"New day"}},B=function(e){var t=Object.values(r).filter((function(t){return p&&(j(!1),N("")),t.id!==e}));y.a.post("/user",{cards:Object(W.a)({},t)}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),c((function(e){return Object(W.a)({},t)}))},T=function(e,t){console.log(e,t);var a=Object.values(r).map((function(a){return a.id===t&&(a.dishes=a.dishes.filter((function(t){return t.id!==e}))),a}));y.a.post("/user",{cards:Object(W.a)({},a)}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),c((function(e){return Object(W.a)({},a)}))},z=function(e){p?(N(""),j(!p)):(N(e),j(!0))},D=function(){O(!g)};return Object(n.jsxs)(m.a,{component:"main",maxWidth:"xl",className:e.container,children:[Object(n.jsx)(ie,{goal:d,submitGoal:function(){y.a.post("/user",{goal:d}).then((function(){var e=Object.values(r).map((function(e){return k(e)&&(e.goal=d),e}));c((function(t){return e}))})).then((function(){y.a.post("/user",{cards:Object(W.a)({},r)}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},changeGoal:function(e){var t=0;return Object.values(r).map((function(e){return k(e)&&e.dishes.map((function(e){return t+=e.calories})),e})),t<Number(e)?(u(e),""):"too small goal"}}),Object(n.jsxs)("div",{className:e.inner,children:[Object(n.jsxs)("div",{className:p?"".concat(e.expandedCards," ").concat(g?e.noDisplay:""):e.cards,children:[Object(n.jsx)(P,{expanded:p,handleClick:function(){var e;Object.values(r).map((function(t){return e=!(!k(t)||e)})),e?alert("You already have one card for today"):(y.a.post("/user",{cards:Object(W.a)(Object(W.a)({},r),{},Object(M.a)({},"card ".concat(Object(Y.a)()),{day:I(new Date),dishes:[],id:Object(Y.a)(),date:new Date,goal:d}))}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),c((function(e){return Object(W.a)(Object(W.a)({},e),{},Object(M.a)({},"card ".concat(Object(Y.a)()),{day:I(new Date),dishes:[],id:Object(Y.a)(),date:new Date,goal:d}))})))}}),Object.values(r).reverse().map((function(e){return Object(n.jsx)(ae,{menu:g,card:e,deleteCard:B,deleteFromCard:T,expandCard:z,showMenu:D,expanded:p},e.id)}))]}),p?Object(n.jsx)(Q,{addToCard:function(e){var t=!1,a=0;if(Object.values(r).map((function(t){return t.id===C?(console.log(t.day),t.dishes.map((function(e){return a+=e.calories})),a+=e.calories,t):t})),Math.round(a)>d)alert("This dish have much more calories than your goal");else{var n=Object.values(r).map((function(a){return a.id===C&&(a.dishes.push(e),t=!0),a}));t&&(y.a.post("/user",{cards:Object(W.a)({},n)}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),c((function(e){return Object(W.a)({},n)})))}},showMenu:D,menu:g}):null]})]})},oe=r.a.createContext(null),se=function(e){var t=Object(i.useState)([]),a=Object(l.a)(t,2),r=a[0],c=a[1];!function(e){var t=localStorage.getItem("AuthToken"),a=localStorage.getItem("AuthTokenTime"),n=(new Date).getTime();(null===t||function(e,t){var a=(e-t)/1e3;return a/=60,Math.abs(Math.round(a))}(n,a)>=60)&&(e.push("/login"),window.location.reload())}(e.history);var o=localStorage.getItem("AuthToken");y.a.defaults.headers.common={Authorization:"".concat(o)},Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("DishMenuItems"));e?c(e):s()}),[]);var s=function(){y.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=70bf437e2d094f64bac4878ca64e33fc&number=50&instructionsRequired=true&addRecipeNutrition=true&diet=Whole30&sort=random&type=main course,side dish,breakfast,soup,dessert").then((function(e){localStorage.setItem("DishMenuItems",JSON.stringify(e.data.results)),c(e.data.results)})).catch((function(e){console.log(e)}))};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(oe.Provider,{value:r,children:[Object(n.jsx)(D,{logout:function(){localStorage.removeItem("AuthToken"),e.history.push("/login")}}),Object(n.jsx)(ce,{})]})})},de=a(160),le=Object(v.a)({app:{height:"100vh",display:"flex",flexDirection:"column","& main":{display:"flex",flexGrow:"1",justifyContent:"center",alignItems:"center"}}}),ue=function(){var e=le();return Object(n.jsxs)(s.a,{children:[Object(n.jsx)(de.a,{}),Object(n.jsx)("div",{className:e.app,children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/login",component:N}),Object(n.jsx)(d.a,{exact:!0,path:"/signup",component:k}),Object(n.jsx)(d.a,{exact:!0,path:"/",component:se})]})})]})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,164)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};a(105),a(106);o.a.render(Object(n.jsx)(ue,{}),document.getElementById("root")),me()}},[[107,1,2]]]);
//# sourceMappingURL=main.d492d063.chunk.js.map