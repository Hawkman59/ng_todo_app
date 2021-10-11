(self.webpackChunkng_todo_app=self.webpackChunkng_todo_app||[]).push([[6513],{6513:(t,e,o)=>{"use strict";o.r(e),o.d(e,{TodoPageModule:()=>J});var n=o(8583),i=o(8945),s=o(3679),c=o(9396),d=o(4762),r=o(3437),l=o(5197),a=o(509);function p(...t){return e=>{let o;return"function"==typeof t[t.length-1]&&(o=t.pop()),e.lift(new g(t,o))}}class g{constructor(t,e){this.observables=t,this.project=e}call(t,e){return e.subscribe(new u(t,this.observables,this.project))}}class u extends l.L{constructor(t,e,o){super(t),this.observables=e,this.project=o,this.toRespond=[];const n=e.length;this.values=new Array(n);for(let i=0;i<n;i++)this.toRespond.push(i);for(let i=0;i<n;i++)this.add((0,a.D)(this,e[i],void 0,i))}notifyNext(t,e,o){this.values[o]=e;const n=this.toRespond;if(n.length>0){const t=n.indexOf(o);-1!==t&&n.splice(t,1)}}notifyComplete(){}_next(t){if(0===this.toRespond.length){const e=[t,...this.values];this.project?this._tryProject(e):this.destination.next(e)}}_tryProject(t){let e;try{e=this.project.apply(this,t)}catch(o){return void this.destination.error(o)}this.destination.next(e)}}var h=o(9763),Z=o(639);const f=function(t){return{doneText:t}};let m=(()=>{class t{constructor(){this.update=new Z.vpe,this.delete=new Z.vpe}callParentUpdate(){this.update.emit(this.todo.id)}callParentDelete(){this.delete.emit(this.todo.id)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Z.Xpm({type:t,selectors:[["todo-item"]],inputs:{todo:"todo"},outputs:{update:"update",delete:"delete"},decls:8,vars:5,consts:[[1,"item-accordion"],[3,"ngClass"],[3,"ngModel","ngModelChange","click"],["side","end"],["color","danger",3,"click"]],template:function(t,e){1&t&&(Z.TgZ(0,"ion-item-sliding"),Z.TgZ(1,"ion-item",0),Z.TgZ(2,"ion-label",1),Z._uU(3),Z.qZA(),Z.TgZ(4,"ion-checkbox",2),Z.NdJ("ngModelChange",function(t){return e.todo.status=t})("click",function(){return e.callParentUpdate()}),Z.qZA(),Z.qZA(),Z.TgZ(5,"ion-item-options",3),Z.TgZ(6,"ion-item-option",4),Z.NdJ("click",function(){return e.callParentDelete()}),Z._uU(7,"Delete"),Z.qZA(),Z.qZA(),Z.qZA()),2&t&&(Z.xp6(2),Z.Q6J("ngClass",Z.VKq(3,f,e.todo.status)),Z.xp6(1),Z.Oqu(e.todo.text),Z.xp6(1),Z.Q6J("ngModel",e.todo.status))},directives:[i.td,i.Ie,i.Q$,n.mk,i.nz,i.w,s.JJ,s.On,i.IK,i.u8],styles:[".doneText[_ngcontent-%COMP%]{text-decoration:line-through}"]}),t})();function T(t,e){if(1&t){const t=Z.EpF();Z.TgZ(0,"todo-item",14),Z.NdJ("update",function(e){return Z.CHM(t),Z.oxw(2).updateTodoStatus(e)})("delete",function(e){return Z.CHM(t),Z.oxw(2).deleteTodo(e)}),Z.qZA()}2&t&&Z.Q6J("todo",e.$implicit)}function x(t,e){if(1&t&&(Z.TgZ(0,"div",10),Z.TgZ(1,"ion-list",11),Z.TgZ(2,"ion-item",12),Z.TgZ(3,"ion-text"),Z.TgZ(4,"h2"),Z._uU(5,"Todos"),Z.qZA(),Z.qZA(),Z.qZA(),Z.YNc(6,T,1,1,"todo-item",13),Z.qZA(),Z.qZA()),2&t){const t=Z.oxw();Z.xp6(6),Z.Q6J("ngForOf",t.todosUndone)}}function q(t,e){1&t&&Z._UZ(0,"ion-icon",23)}function A(t,e){1&t&&Z._UZ(0,"ion-icon",24)}function w(t,e){if(1&t){const t=Z.EpF();Z.TgZ(0,"todo-item",26),Z.NdJ("update",function(e){return Z.CHM(t),Z.oxw(3).updateTodoStatus(e)})("delete",function(e){return Z.CHM(t),Z.oxw(3).deleteTodo(e)}),Z.qZA()}2&t&&Z.Q6J("todo",e.$implicit)}function _(t,e){if(1&t&&(Z.TgZ(0,"div"),Z.YNc(1,w,1,1,"todo-item",25),Z.qZA()),2&t){const t=Z.oxw(2);Z.xp6(1),Z.Q6J("ngForOf",t.todosDone)}}function b(t,e){if(1&t){const t=Z.EpF();Z.TgZ(0,"div",10),Z.TgZ(1,"ion-list",15),Z.TgZ(2,"ion-item",16),Z.NdJ("click",function(){return Z.CHM(t),Z.oxw().toggleDone()}),Z.TgZ(3,"ion-grid"),Z.TgZ(4,"ion-row",17),Z.TgZ(5,"ion-col",18),Z.TgZ(6,"ion-text"),Z.TgZ(7,"h2"),Z._uU(8),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(9,"ion-col",19),Z.YNc(10,q,1,0,"ion-icon",20),Z.YNc(11,A,1,0,"ion-icon",21),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.YNc(12,_,2,1,"div",22),Z.qZA(),Z.qZA()}if(2&t){const t=Z.oxw();Z.xp6(8),Z.hij("Done (",t.todosDone.length,")"),Z.xp6(2),Z.Q6J("ngIf",!t.showDone),Z.xp6(1),Z.Q6J("ngIf",t.showDone),Z.xp6(1),Z.Q6J("ngIf",t.showDone)}}class C{constructor(t){this.store=t,this.text="",this.todosUndone=[],this.todosDone=[],this.showDone=!1,this.getTodoList()}addTodo(t){this.store.dispatch(new h.q.Add(t)).pipe().subscribe(()=>{this.getTodoList(),this.text=""})}getTodoList(){this.store.dispatch(new h.q.FetchAllUndone).pipe(p(this.todos$)).subscribe(([t,e])=>{this.todosUndone=e.todos}),this.store.dispatch(new h.q.FetchAllDone).pipe(p(this.todos$)).subscribe(([t,e])=>{this.todosDone=e.done})}updateTodoStatus(t){this.store.dispatch(new h.q.UpdateStatus(t)).pipe().subscribe(()=>{this.getTodoList()})}deleteTodo(t){this.store.dispatch(new h.q.Delete(t)).pipe().subscribe(()=>{this.getTodoList()})}toggleDone(){this.showDone=!this.showDone}}C.\u0275fac=function(t){return new(t||C)(Z.Y36(r.yh))},C.\u0275cmp=Z.Xpm({type:C,selectors:[["app-home"]],decls:16,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","content"],[1,"searchbar"],["id","todo-input","type","text","placeholder","Enter Todo ...",3,"ngModel","ngModelChange"],["id","add-todo-button",3,"click"],["name","add-outline"],["class","list",4,"ngIf"],[1,"list"],["id","undone-list",1,"list"],[1,"item-stable"],[3,"todo","update","delete",4,"ngFor","ngForOf"],[3,"todo","update","delete"],["id","done-list",1,"list"],["id","done-list-stable-elmt",1,"item-stable",3,"click"],[1,"ion-align-items-center","ion-justify-content-center"],["size","11"],["size","1"],["name","chevron-down-outline",4,"ngIf"],["name","chevron-up-outline",4,"ngIf"],[4,"ngIf"],["name","chevron-down-outline"],["name","chevron-up-outline"],["class","todo-item",3,"todo","update","delete",4,"ngFor","ngForOf"],[1,"todo-item",3,"todo","update","delete"]],template:function(t,e){1&t&&(Z.TgZ(0,"ion-header",0),Z.TgZ(1,"ion-toolbar"),Z.TgZ(2,"ion-title"),Z._uU(3," Simple Todo App "),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(4,"ion-content",1),Z.TgZ(5,"ion-header",2),Z.TgZ(6,"ion-toolbar"),Z.TgZ(7,"ion-title",3),Z._uU(8,"Simple Todo App"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(9,"div",4),Z.TgZ(10,"ion-item",5),Z.TgZ(11,"ion-input",6),Z.NdJ("ngModelChange",function(t){return e.text=t}),Z.qZA(),Z.TgZ(12,"ion-button",7),Z.NdJ("click",function(){return e.addTodo(e.text)}),Z._UZ(13,"ion-icon",8),Z.qZA(),Z.qZA(),Z.YNc(14,x,7,1,"div",9),Z.YNc(15,b,13,4,"div",9),Z.qZA(),Z.qZA()),2&t&&(Z.Q6J("translucent",!0),Z.xp6(4),Z.Q6J("fullscreen",!0),Z.xp6(7),Z.Q6J("ngModel",e.text),Z.xp6(3),Z.Q6J("ngIf",e.todosUndone.length>0),Z.xp6(1),Z.Q6J("ngIf",e.todosDone.length>0))},directives:[i.Gu,i.sr,i.wd,i.W2,i.Ie,i.pK,i.j9,s.JJ,s.On,i.YG,i.gu,n.O5,i.q_,i.yW,n.sg,m,i.jY,i.Nd,i.wI],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.list[_ngcontent-%COMP%]{margin-top:20px}.searchbar[_ngcontent-%COMP%]{margin-top:10px}#content[_ngcontent-%COMP%]{padding:20px}.list[_ngcontent-%COMP%]   .item.item-accordion.ng-hide[_ngcontent-%COMP%]{line-height:0px}.list[_ngcontent-%COMP%]   .item.item-accordion.ng-hide-add[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]   .item.item-accordion.ng-hide-remove[_ngcontent-%COMP%]{display:block!important}"]}),(0,d.gn)([(0,r.Ph)(t=>t.todos)],C.prototype,"todos$",void 0);const M=[{path:"",component:C}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=Z.oAB({type:t}),t.\u0275inj=Z.cJS({imports:[[c.Bz.forChild(M)],c.Bz]}),t})(),J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=Z.oAB({type:t}),t.\u0275inj=Z.cJS({imports:[[n.ez,s.u5,i.Pc,v]]}),t})()}}]);