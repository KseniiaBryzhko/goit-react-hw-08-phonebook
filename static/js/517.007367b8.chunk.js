"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[517],{3309:function(n,e,t){t.d(e,{FG:function(){return d},HS:function(){return u},II:function(){return l},SB:function(){return m},__:function(){return f}});var r,o,i,a,s,x=t(168),p=t(7686),c=t(5705),d=(0,p.Z)(c.l0)(r||(r=(0,x.Z)(["\n  padding: 30px 60px 30px 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  width: 30vw;\n  border-radius: 5px;\n  box-shadow: -10px -10px 20px 0px #fff9, -4px -4px 5px 0px #fff9,\n    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;\n  margin: 0 auto;\n  margin-bottom: 40px;\n"]))),f=p.Z.label(o||(o=(0,x.Z)(["\n  text-align: center;\n  color: #353535;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: 'Cormorant Garamond', serif;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 auto;\n"]))),l=(0,p.Z)(c.gN)(i||(i=(0,x.Z)(["\n  width: 20vw;\n  height: 24px;\n  margin-top: 10px;\n  padding: 8px;\n  font-size: 20px;\n  border: none;\n  outline: 2px solid #ffffff;\n  border-radius: 5px;\n  background-color: #ffffff;\n  color: #212121;\n  transition: all cubic-bezier(0.25s, 0.7, 0.98, 0.86) 0s;\n  &:focus {\n    outline: 2px solid #d4dae3;\n    border-radius: 5px;\n  }\n"]))),u=p.Z.button(a||(a=(0,x.Z)(["\n  outline: none;\n  padding: 10px 25px;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-block;\n  color: #353535;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: 'Cormorant Garamond', serif;\n  border: 1px solid #d4dae3;\n  border-radius: 4px;\n  z-index: 1;\n  position: relative;\n  width: 15vw;\n  margin: 0 auto;\n  margin-top: 10px;\n  &:after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    box-shadow: -10px -10px 20px 0px #fff9, -4px -4px 5px 0px #fff9,\n      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;\n    border-radius: 4px;\n    transition: all 0.3s ease;\n  }\n  &:hover {\n    color: #000;\n  }\n  &:hover:after {\n    top: 0;\n    height: 100%;\n  }\n"]))),m=(0,p.Z)(c.Bc)(s||(s=(0,x.Z)(["\n  text-align: center;\n  font-size: 16px;\n  max-width: 20vw;\n  color: red;\n  margin-top: 8px;\n"])))},5517:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,o,i,a,s,x,p,c,d,f=t(2791),l=t(9434),u=t(3634),m=function(n){return n.contacts.contacts},h=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.error},g=function(n){return n.filters},v=t(3309),w=t(5705),Z=t(6727),j=t(184),y=function(){var n=Z.Ry().shape({name:Z.Z_().matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name may contain only letters, apostrophe, dash and spaces").required(),number:Z.Z_().matches("^[+]?[(]?[0-9]{1,4}[)]?[-s.]?[0-9]{1,4}[-s.]?[0-9]{1,6}$","Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),e=(0,l.v9)(m),t=(0,l.I0)();return(0,j.jsx)(w.J9,{initialValues:{name:"",number:""},validationSchema:n,onSubmit:function(n,r){var o=n.name,i=n.number;if(e.find((function(n){return n.name.toLowerCase()===o.toLowerCase()})))return alert("".concat(o," is already in list")),void r.resetForm();t((0,u.uK)({name:o,number:i})),r.resetForm()},children:(0,j.jsxs)(v.FG,{children:[(0,j.jsxs)(v.__,{children:["Name",(0,j.jsx)(v.II,{type:"text",name:"name"}),(0,j.jsx)(v.SB,{name:"name",component:"div"})]}),(0,j.jsxs)(v.__,{children:["Number",(0,j.jsx)(v.II,{type:"tel",name:"number"}),(0,j.jsx)(v.SB,{name:"number",component:"div"})]}),(0,j.jsx)(v.HS,{type:"submit",children:"Add contact"})]})})},z=t(168),k=t(7686),C=k.Z.li(r||(r=(0,z.Z)(["\n  text-align: center;\n  color: #353535;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: 'Cormorant Garamond', serif;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),_=k.Z.button(o||(o=(0,z.Z)(["\n  outline: none;\n  padding: 10px 25px;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-block;\n  color: #353535;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: 'Cormorant Garamond', serif;\n  border: 1px solid #d4dae3;\n  border-radius: 4px;\n  z-index: 1;\n  position: relative;\n  &:after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    box-shadow: -10px -10px 20px 0px #fff9, -4px -4px 5px 0px #fff9,\n      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;\n    border-radius: 4px;\n    transition: all 0.3s ease;\n  }\n  &:hover {\n    color: #000;\n  }\n  &:hover:after {\n    top: 0;\n    height: 100%;\n  }\n"]))),I=function(n){var e=n.id,t=n.name,r=n.number,o=(0,l.I0)();return(0,j.jsxs)(C,{children:[t,": ",r,(0,j.jsx)(_,{onClick:function(){o((0,u.GK)(e))},children:"Delete"})]})},F=k.Z.ul(i||(i=(0,z.Z)(["\n  padding: 30px 60px 30px 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  width: 30vw;\n  border-radius: 5px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n"]))),G=function(){var n=(0,l.v9)(m),e=(0,l.v9)(g),t=function(){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}();return(0,j.jsx)(F,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,j.jsx)(I,{id:e,name:t,number:r},e)}))})},S=t(3165),L=k.Z.label(a||(a=(0,z.Z)(["\n  text-align: center;\n  color: #353535;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: 'Cormorant Garamond', serif;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 auto;\n"]))),A=k.Z.input(s||(s=(0,z.Z)(["\n  width: 20vw;\n  height: 24px;\n  margin: 20px auto;\n  padding: 8px;\n  font-size: 20px;\n  border: none;\n  outline: 2px solid #ffffff;\n  border-radius: 5px;\n  background-color: #ffffff;\n  color: #212121;\n  transition: all cubic-bezier(0.25s, 0.7, 0.98, 0.86) 0s;\n  &:focus {\n    outline: 2px solid #d4dae3;\n    border-radius: 5px;\n  }\n"]))),B=function(){var n=(0,l.v9)((function(n){return n.filter})),e=(0,l.I0)();return(0,j.jsxs)(L,{children:["Find contacts by name",(0,j.jsx)(A,{onChange:function(n){var t=n.target.value;e((0,S.T)(t))},value:n,type:"text",name:"filter"})]})},N=k.Z.div(x||(x=(0,z.Z)(["\n  padding: 40px;\n  font-size: 30px;\n"]))),P=k.Z.h1(p||(p=(0,z.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n"]))),q=k.Z.h2(c||(c=(0,z.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n"]))),H=k.Z.p(d||(d=(0,z.Z)(["\n  text-align: center;\n"])));function K(){var n=(0,l.I0)(),e=(0,l.v9)(h),t=(0,l.v9)(b),r=(0,l.v9)(g);return(0,f.useEffect)((function(){n((0,u.yF)())}),[n]),(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(N,{children:[(0,j.jsx)(P,{children:"Phonebook"}),(0,j.jsx)(y,{}),(0,j.jsx)(q,{children:"Contacts"}),(0,j.jsx)(B,{value:r})," ",e&&!t&&(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(H,{children:"Loading..."})})||(0,j.jsx)(G,{}),t&&(0,j.jsx)(H,{children:"Something went wrong. Please try again!"})]})})}}}]);
//# sourceMappingURL=517.007367b8.chunk.js.map