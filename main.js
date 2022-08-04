(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){t(1,arguments);var o=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===o?new Date(e.getTime()):"number"==typeof e||"[object Number]"===o?new Date(e):("string"!=typeof e&&"[object String]"!==o||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function n(e){t(1,arguments);var n=o(e);return n.setHours(0,0,0,0),n}function i(e,o){t(2,arguments);var i=n(e),c=n(o);return i.getTime()===c.getTime()}e.d({},{l:()=>l});const c=(()=>{const e=document.querySelector(".newTodoForm"),o=document.querySelector(".todos-container"),n=document.querySelector(".editTodoContainer"),c=document.querySelector("#content");function r(){e.childNodes.forEach((e=>{"text"===e.type&&(e.value="")})),e.classList.add("inactive"),l.closeTodoForm()}function d(){n.innerHTML=""}return{loadToday:function(e){o.innerHTML="",e.filter((e=>{console.log(function(e){return t(1,arguments),i(e,Date.now())}(e.dueDate))}))},loadProjectsPage:function(e){c.innerHTML="";const t=e.map((e=>e.project));[...new Set(t)].forEach((t=>{let o=e.filter((e=>{if(e.project===t)return e}));const n=document.createElement("div");n.classList.add("projectContainer");const i=document.createElement("div");i.textContent=t,n.appendChild(i),o.forEach((e=>{const t=document.createElement("div");t.textContent=e.title,t.classList.add("projectTodos"),n.appendChild(t)})),c.appendChild(n)}))},clearScreen:function(){r(),d(),o.innerHTML="",c.innerHTML=""},openNewTodoForm:function(){e.classList.remove("inactive"),n.innerHTML=""},closeNewTodoForm:r,loadHome:function(e){o.innerHTML="";let t=0;e.forEach((e=>{o.innerHTML+=`\n            <div class="todo" data-id="${t}">\n                <p>${e.title}</p>\n                <p>Due: ${e.dueDate}</p>\n                <input type="button" value="Edit" class="editTodoBtn">\n                <input type="button" value="Delete" class="deleteTodoBtn">\n            </div>\n            `,t++}))},openEditTodo:function(e,t){o.innerHTML="",r(),n.innerHTML=`\n            <div class="editTodo" data-id="${t}">\n                <input type="text" value="${e.title}" class="editTitleInput">\n                <input type="text" value="${e.description}" class="editDescriptionInput">\n                <input type="date" value="${e.dueDate}" class="editDueDateInput"> \n                <select name="priority" id="priority" class="editPriorityInput">\n                    <option ${"low"==e.priority?"selected":""} value="low">Low</option>\n                    <option ${"mid"==e.priority?"selected":""} value="mid">Mid</option>\n                    <option ${"high"==e.priority?"selected":""} value="high">High</option>\n                </select>\n                <input type="text" value="${e.project}" class="editProjectInput">\n                <input type="button" value="Save" class="saveEditBtn">\n                <input type="button" value="Cancel" class="cancelEditBtn">\n            </div>\n            `},closeEditTodo:d}})(),r=function(e){const t=e.target.classList[0];"addBookBtn"===t?l.addTodo():"closeTodoForm"===t&&UI.closeNewTodoForm()},d=function(e){const t=e.target.classList[0];let o=e.target.parentNode.dataset.id;"deleteTodoBtn"===t?l.deleteTodo(o):"editTodoBtn"===t&&l.editTodo(o)},a=function(e){let t=e.target.parentNode.dataset.id;const o=e.target.classList[0];if("cancelEditBtn"===o)l.cancelEditTodo();else if("saveEditBtn"===o){const e=document.querySelector(".editTitleInput").value,o=document.querySelector(".editDescriptionInput").value,n=document.querySelector(".editDueDateInput").value,i=document.querySelector(".editPriorityInput").value,c=document.querySelector(".editProjectInput").value;l.saveEditTodo(t,e,o,n,i,c)}};function u(e,t,o,n,i){this.title=e,this.description=t,this.dueDate=o,this.priority=n,this.project=i}u.prototype.updateTodo=function(e,t,o,n,i){this.title=e,this.description=t,this.dueDate=o,this.priority=n,this.project=i};const l=(()=>{let e=[];const t=document.querySelector(".newBookBtn"),o=document.querySelector(".newTodoForm"),n=document.querySelector(".todos-container"),i=document.querySelector(".editTodoContainer"),l=document.querySelector("#title"),s=document.querySelector("#description"),p=document.querySelector("#duedate"),m=document.querySelector("#priority"),T=document.querySelector("#project"),v=document.querySelector(".navProjects"),y=document.querySelector(".navHome"),f=document.querySelector(".navToday");return t.addEventListener("click",c.openNewTodoForm),o.addEventListener("click",r),n.addEventListener("click",d),i.addEventListener("click",a),v.addEventListener("click",(function(){c.clearScreen(),c.loadProjectsPage(e)})),y.addEventListener("click",(function(){c.clearScreen(),c.loadHome(e)})),f.addEventListener("click",(function(){c.clearScreen(),c.loadToday(e)})),function(){const t=new u("Titel1","Beschreibung 1",new Date(1995,11,17),"Wichtig","Project1"),o=new u("Titel2","Beschreibung 1",new Date(2022,7,4),"Wichtig1","Project2"),n=new u("Titel3eins","Beschreibung 1",new Date(1995,11,17),"Wichtig2","Project3"),i=new u("Titel4eins","Beschreibunsg 1",new Date(1995,11,17),"Wichtig2","Project1");e.push(t),e.push(o),e.push(n),e.push(i),c.loadHome(e)}(),{addTodo:function(){if(!l.value)return void alert("You have to fill in a title!");const t=new u(l.value,s.value,p.value,m.value,T.value);e.push(t),c.loadHome(e),c.closeNewTodoForm()},deleteTodo:function(t){e.splice(t,1),c.loadHome(e)},editTodo:function(t){c.openEditTodo(e[t],t)},cancelEditTodo:function(){c.closeEditTodo(),c.loadHome(e)},saveEditTodo:function(t,o,n,i,r,d){e[t].updateTodo(o,n,i,r,d),c.closeEditTodo(),c.loadHome(e)},closeTodoForm:function(){c.loadHome(e)}}})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXBFUixXQUNJLElBQUl1QixFQUFXL0QsTUFFWCxZQURBOEUsTUFBTSxnQ0FHVixNQUFNQyxFQUFVLElBQUl6QixFQUFLUyxFQUFXL0QsTUFBT2dFLEVBQWlCaEUsTUFBT2lFLEVBQWFqRSxNQUFPa0UsRUFBY2xFLE1BQU9tRSxFQUFhbkUsT0FDekhRLEVBQU1vRSxLQUFLRyxHQUNYLFdBQVl2RSxHQUNaLG9CQUNKLEVBMkRpQnFDLFdBckRqQixTQUFvQmIsR0FDaEJ4QixFQUFNd0UsT0FBT2hELEVBQU8sR0FDcEIsV0FBWXhCLEVBQ2hCLEVBa0Q2QnNDLFNBaEQ3QixTQUFrQmQsR0FDZCxlQUFnQnhCLEVBQU13QixHQUFRQSxFQUNsQyxFQThDdUNlLGVBNUN2QyxXQUNJLGtCQUNBLFdBQVl2QyxFQUNoQixFQXlDdUQ2QyxhQXRDdkQsU0FBc0JyQixFQUFPeUIsRUFBVUMsRUFBZ0JDLEVBQVlDLEVBQWFDLEdBQzVFckQsRUFBTXdCLEdBQU93QixXQUFXQyxFQUFVQyxFQUFnQkMsRUFBWUMsRUFBYUMsR0FDM0Usa0JBQ0EsV0FBWXJELEVBQ2hCLEVBa0NxRUosY0F6RHJFLFdBQ0ksV0FBWUksRUFDaEIsRUF5REgsRUF0R2tCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9iaW5kRXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHsgYXBwIH0gZnJvbSAnLi9pbmRleC5qcydcbmltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcblxuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gICAgXG4gICAgLy8gY2FjaGUgZG9tXG4gICAgY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1RvZG9Gb3JtXCIpXG4gICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBlZGl0VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFRvZG9Db250YWluZXJcIilcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5cbiAgICBmdW5jdGlvbiBvcGVuTmV3VG9kb0Zvcm0oKSB7XG4gICAgICAgIG5ld1RvZG9Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgZWRpdFRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZU5ld1RvZG9Gb3JtKCkge1xuICAgICAgICAvLyBjbGVhciBpbnB1dCBmaWVsZHMgYWZ0ZXIgY2xvc2luZ1xuICAgICAgICBuZXdUb2RvRm9ybS5jaGlsZE5vZGVzLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICAgICAgaWYoZWxlLnR5cGUgIT09IFwidGV4dFwiKSByZXR1cm47XG4gICAgICAgICAgICBlbGUudmFsdWUgPSBcIlwiO1xuICAgICAgICB9KVxuICAgICAgICBuZXdUb2RvRm9ybS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIGFwcC5jbG9zZVRvZG9Gb3JtKCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkSG9tZSh0b2Rvcykge1xuICAgICAgICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgdG9kb3NDb250YWluZXIuaW5uZXJIVE1MICs9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kb1wiIGRhdGEtaWQ9XCIke2luZGV4fVwiPlxuICAgICAgICAgICAgICAgIDxwPiR7dG9kby50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+RHVlOiAke3RvZG8uZHVlRGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkVkaXRcIiBjbGFzcz1cImVkaXRUb2RvQnRuXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkRlbGV0ZVwiIGNsYXNzPVwiZGVsZXRlVG9kb0J0blwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVG9kYXkodG9kb3MpIHtcbiAgICAgICAgdG9kb3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IHRvZGF5VG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlzVG9kYXkodG9kby5kdWVEYXRlKSk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAvLyB0b2RvID0+IHtcbiAgICAgICAgLy8gICAgIHRvZG9zQ29udGFpbmVyLmlubmVySFRNTCArPVxuICAgICAgICAvLyAgICAgYFxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzcz1cInRvZG9cIiBkYXRhLWlkPVwiJHtpbmRleH1cIj5cbiAgICAgICAgLy8gICAgICAgICA8cD4ke3RvZG8udGl0bGV9PC9wPlxuICAgICAgICAvLyAgICAgICAgIDxwPkR1ZTogJHt0b2RvLmR1ZURhdGV9PC9wPlxuICAgICAgICAvLyAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJFZGl0XCIgY2xhc3M9XCJlZGl0VG9kb0J0blwiPlxuICAgICAgICAvLyAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJEZWxldGVcIiBjbGFzcz1cImRlbGV0ZVRvZG9CdG5cIj5cbiAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgYFxuICAgICAgICAvLyAgICAgaW5kZXgrKztcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZVRvZG9zKCkge1xuICAgICAgICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5FZGl0VG9kbyh0b2RvLCBpbmRleCkge1xuICAgICAgICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjbG9zZU5ld1RvZG9Gb3JtKCk7XG4gICAgICAgIGVkaXRUb2RvQ29udGFpbmVyLmlubmVySFRNTCA9IFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRUb2RvXCIgZGF0YS1pZD1cIiR7aW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3RvZG8udGl0bGV9XCIgY2xhc3M9XCJlZGl0VGl0bGVJbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0b2RvLmRlc2NyaXB0aW9ufVwiIGNsYXNzPVwiZWRpdERlc2NyaXB0aW9uSW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7dG9kby5kdWVEYXRlfVwiIGNsYXNzPVwiZWRpdER1ZURhdGVJbnB1dFwiPiBcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHlcIiBjbGFzcz1cImVkaXRQcmlvcml0eUlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gJHsodG9kby5wcmlvcml0eSA9PSBcImxvd1wiKSA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9IHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gJHsodG9kby5wcmlvcml0eSA9PSBcIm1pZFwiKSA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9IHZhbHVlPVwibWlkXCI+TWlkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gJHsodG9kby5wcmlvcml0eSA9PSBcImhpZ2hcIikgPyBcInNlbGVjdGVkXCIgOiBcIlwifSB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3RvZG8ucHJvamVjdH1cIiBjbGFzcz1cImVkaXRQcm9qZWN0SW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU2F2ZVwiIGNsYXNzPVwic2F2ZUVkaXRCdG5cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ2FuY2VsXCIgY2xhc3M9XCJjYW5jZWxFZGl0QnRuXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZUVkaXRUb2RvKCkge1xuICAgICAgICBlZGl0VG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRQcm9qZWN0c1BhZ2UodG9kb3MpIHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiOyAgIFxuICAgICAgICBsZXQgdG9kb3NXaXRoU2FtZVByb2plY3Q7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVzID0gdG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdG9kby5wcm9qZWN0O1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCB1bmlxUHJvamV0cyA9IFsuLi5uZXcgU2V0KHByb2plY3ROYW1lcyldO1xuXG4gICAgICAgIHVuaXFQcm9qZXRzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgdG9kb3NXaXRoU2FtZVByb2plY3QgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB7XG4gICAgICAgICAgICAgICAgaWYodG9kby5wcm9qZWN0ID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Q29udGFpbmVyXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuXG4gICAgICAgICAgICB0b2Rvc1dpdGhTYW1lUHJvamVjdC5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VG9kby50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRvZG8uY2xhc3NMaXN0LmFkZChcInByb2plY3RUb2Rvc1wiKVxuICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRvZG8pXG4gICAgICAgICAgICB9KSBcblxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjbGVhclNjcmVlbigpIHtcbiAgICAgICAgY2xvc2VOZXdUb2RvRm9ybSgpO1xuICAgICAgICBjbG9zZUVkaXRUb2RvKCk7XG4gICAgICAgIGhpZGVUb2RvcygpO1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuXG5cbiAgICByZXR1cm4geyBsb2FkVG9kYXksIGxvYWRQcm9qZWN0c1BhZ2UsIGNsZWFyU2NyZWVuLCBvcGVuTmV3VG9kb0Zvcm0sIGNsb3NlTmV3VG9kb0Zvcm0sIGxvYWRIb21lLCBvcGVuRWRpdFRvZG8sIGNsb3NlRWRpdFRvZG8gfVxufSkoKTtcblxuZXhwb3J0IHsgVUkgfSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB7IGFwcCB9IGZyb20gJy4vaW5kZXguanMnXG5cbmV4cG9ydCBjb25zdCBiaW5kRXZlbnQgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIG5ld1RvZG9Gb3JtKGUpIHtcbiAgICAgICAgY29uc3QgZXZlbnRDbGFzcyA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXTtcbiAgICAgICAgLy8gYWRkIG5ldyBib29rIGJ1dHRvblxuICAgICAgICBpZihldmVudENsYXNzID09PSBcImFkZEJvb2tCdG5cIikge1xuICAgICAgICAgICAgYXBwLmFkZFRvZG8oKTtcbiAgICAgICAgLy8gY2FuY2VsIGJ1dHRvblxuICAgICAgICB9IGVsc2UgaWYoZXZlbnRDbGFzcyA9PT0gXCJjbG9zZVRvZG9Gb3JtXCIpIHtcbiAgICAgICAgICAgIFVJLmNsb3NlTmV3VG9kb0Zvcm0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZG8oZSkge1xuICAgICAgICBjb25zdCBldmVudENsYXNzID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdO1xuICAgICAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG5cbiAgICAgICAgaWYoZXZlbnRDbGFzcyA9PT0gXCJkZWxldGVUb2RvQnRuXCIpIHtcbiAgICAgICAgICAgIGFwcC5kZWxldGVUb2RvKGluZGV4KVxuICAgICAgICB9IGVsc2UgaWYoZXZlbnRDbGFzcyA9PT0gXCJlZGl0VG9kb0J0blwiKSB7XG4gICAgICAgICAgICBhcHAuZWRpdFRvZG8oaW5kZXgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlZGl0VG9kbyhlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgZXZlbnRDbGFzcyA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXTtcbiAgICAgICAgaWYoZXZlbnRDbGFzcyA9PT0gXCJjYW5jZWxFZGl0QnRuXCIpIHtcbiAgICAgICAgICAgYXBwLmNhbmNlbEVkaXRUb2RvKCk7XG4gICAgICAgIH0gZWxzZSBpZihldmVudENsYXNzID09PSBcInNhdmVFZGl0QnRuXCIpIHtcbiAgICAgICAgICAgY29uc3QgZWRpdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRUaXRsZUlucHV0XCIpLnZhbHVlO1xuICAgICAgICAgICBjb25zdCBlZGl0RGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdERlc2NyaXB0aW9uSW5wdXRcIikudmFsdWU7XG4gICAgICAgICAgIGNvbnN0IGVkaXREdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXREdWVEYXRlSW5wdXRcIikudmFsdWU7XG4gICAgICAgICAgIGNvbnN0IGVkaXRQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0UHJpb3JpdHlJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFByb2plY3RJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgICAgYXBwLnNhdmVFZGl0VG9kbyhpbmRleCwgZWRpdFRpdGxlSW5wdXQsIGVkaXREZXNjcmlwdGlvbklucHV0LCBlZGl0RHVlRGF0ZUlucHV0LCBlZGl0UHJpb3JpdHlJbnB1dCwgZWRpdFByb2plY3RJbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBuZXdUb2RvRm9ybSwgdG9kbywgZWRpdFRvZG8gfVxufSkoKTsiLCJpbXBvcnQgeyBVSSB9IGZyb20gJy4vVUkuanMnO1xuaW1wb3J0IHsgYmluZEV2ZW50IH0gZnJvbSAnLi9iaW5kRXZlbnQnO1xuXG5cbmZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDsgXG5cbn0gICAgXG5cblRvZG8ucHJvdG90eXBlLnVwZGF0ZVRvZG8gPSBmdW5jdGlvbihuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5LCBuZXdQcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBuZXdQcm9qZWN0O1xufVxuXG5cblxuXG5leHBvcnQgY29uc3QgYXBwID0gKCgpID0+IHtcblxuICAgIC8vIHN0b3JlcyBldmVyeSB0b2RvXG4gICAgbGV0IHRvZG9zID0gW107ICAgIFxuICAgIFxuICAgIC8vIGNhY2hlIGRvbVxuICAgIGNvbnN0IG5ld0Jvb2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld0Jvb2tCdG5cIik7XG4gICAgY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1RvZG9Gb3JtXCIpO1xuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvcy1jb250YWluZXJcIik7XG4gICAgY29uc3QgZWRpdFRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRUb2RvQ29udGFpbmVyXCIpXG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpXG4gICAgY29uc3QgZHVlZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVkYXRlXCIpXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIilcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RcIilcblxuICAgIGNvbnN0IG5hdlByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZQcm9qZWN0c1wiKTtcbiAgICBjb25zdCBuYXZIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZIb21lXCIpO1xuICAgIGNvbnN0IG5hdlRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZUb2RheVwiKTtcblxuICAgIC8vIGFkZCBldmVudHNcbiAgICBuZXdCb29rQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5vcGVuTmV3VG9kb0Zvcm0gKVxuICAgIG5ld1RvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBiaW5kRXZlbnQubmV3VG9kb0Zvcm0pXG4gICAgdG9kb3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJpbmRFdmVudC50b2RvKVxuICAgIGVkaXRUb2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBiaW5kRXZlbnQuZWRpdFRvZG8pXG4gICAgbmF2UHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBbGxQcm9qZWN0cylcbiAgICBuYXZIb21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkSG9tZSk7XG4gICAgbmF2VG9kYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRUb2RheSlcblxuXG4gICAgLy8gZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gYWRkVG9kbygpIHtcbiAgICAgICAgaWYoIXRpdGxlSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgdG8gZmlsbCBpbiBhIHRpdGxlIVwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkdWVkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQudmFsdWUsIHByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgICAgIHRvZG9zLnB1c2gobmV3VG9kbylcbiAgICAgICAgVUkubG9hZEhvbWUodG9kb3MpXG4gICAgICAgIFVJLmNsb3NlTmV3VG9kb0Zvcm0oKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZVRvZG9Gb3JtKCkge1xuICAgICAgICBVSS5sb2FkSG9tZSh0b2RvcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvKGluZGV4KSB7XG4gICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIFVJLmxvYWRIb21lKHRvZG9zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlZGl0VG9kbyhpbmRleCkge1xuICAgICAgICBVSS5vcGVuRWRpdFRvZG8odG9kb3NbaW5kZXhdLCBpbmRleClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxFZGl0VG9kbygpIHtcbiAgICAgICAgVUkuY2xvc2VFZGl0VG9kbygpO1xuICAgICAgICBVSS5sb2FkSG9tZSh0b2Rvcyk7XG4gICAgfVxuIFxuICAgIFxuICAgIGZ1bmN0aW9uIHNhdmVFZGl0VG9kbyhpbmRleCwgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSwgbmV3UHJvamVjdCkge1xuICAgICAgICB0b2Rvc1tpbmRleF0udXBkYXRlVG9kbyhuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5LCBuZXdQcm9qZWN0KTtcbiAgICAgICAgVUkuY2xvc2VFZGl0VG9kbygpO1xuICAgICAgICBVSS5sb2FkSG9tZSh0b2Rvcyk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IGR1bW15VG9kbzEgPSBuZXcgVG9kbyhcIlRpdGVsMVwiLCBcIkJlc2NocmVpYnVuZyAxXCIsIG5ldyBEYXRlKDE5OTUsMTEsMTcpLCBcIldpY2h0aWdcIiwgXCJQcm9qZWN0MVwiKVxuICAgICAgICBjb25zdCBkdW1teVRvZG8yID0gbmV3IFRvZG8oXCJUaXRlbDJcIiwgXCJCZXNjaHJlaWJ1bmcgMVwiLCBuZXcgRGF0ZSgyMDIyLCA3LCA0KSwgXCJXaWNodGlnMVwiLCBcIlByb2plY3QyXCIpXG4gICAgICAgIGNvbnN0IGR1bW15VG9kbzMgPSBuZXcgVG9kbyhcIlRpdGVsM2VpbnNcIiwgXCJCZXNjaHJlaWJ1bmcgMVwiLCBuZXcgRGF0ZSgxOTk1LDExLDE3KSwgXCJXaWNodGlnMlwiLCBcIlByb2plY3QzXCIpXG4gICAgICAgIGNvbnN0IGR1bW15VG9kbzQgPSBuZXcgVG9kbyhcIlRpdGVsNGVpbnNcIiwgXCJCZXNjaHJlaWJ1bnNnIDFcIiwgbmV3IERhdGUoMTk5NSwxMSwxNyksIFwiV2ljaHRpZzJcIiwgXCJQcm9qZWN0MVwiKVxuICAgICAgICB0b2Rvcy5wdXNoKGR1bW15VG9kbzEpXG4gICAgICAgIHRvZG9zLnB1c2goZHVtbXlUb2RvMilcbiAgICAgICAgdG9kb3MucHVzaChkdW1teVRvZG8zKVxuICAgICAgICB0b2Rvcy5wdXNoKGR1bW15VG9kbzQpXG4gICAgICAgIFxuICAgICAgICBVSS5sb2FkSG9tZSh0b2Rvcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0FsbFByb2plY3RzKCkge1xuICAgICAgICBVSS5jbGVhclNjcmVlbigpO1xuICAgICAgICBVSS5sb2FkUHJvamVjdHNQYWdlKHRvZG9zKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgICAgICBVSS5jbGVhclNjcmVlbigpO1xuICAgICAgICBVSS5sb2FkSG9tZSh0b2Rvcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRvZGF5KCkge1xuICAgICAgICBVSS5jbGVhclNjcmVlbigpO1xuICAgICAgICBVSS5sb2FkVG9kYXkodG9kb3MpO1xuICAgIH1cblxuXG4gICAgaW5pdCgpO1xuICAgIFxuXG4gICAgcmV0dXJuIHthZGRUb2RvLCBkZWxldGVUb2RvLCBlZGl0VG9kbywgY2FuY2VsRWRpdFRvZG8sIHNhdmVFZGl0VG9kbywgY2xvc2VUb2RvRm9ybX1cblxufSkoKTtcblxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJleHBvcnRzIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicmVxdWlyZWRBcmdzIiwicmVxdWlyZWQiLCJhcmdzIiwibGVuZ3RoIiwiVHlwZUVycm9yIiwidG9EYXRlIiwiYXJndW1lbnQiLCJhcmd1bWVudHMiLCJhcmdTdHIiLCJ0b1N0cmluZyIsIkRhdGUiLCJnZXRUaW1lIiwiY29uc29sZSIsIndhcm4iLCJFcnJvciIsInN0YWNrIiwiTmFOIiwic3RhcnRPZkRheSIsImRpcnR5RGF0ZSIsImRhdGUiLCJzZXRIb3VycyIsImlzU2FtZURheSIsImRpcnR5RGF0ZUxlZnQiLCJkaXJ0eURhdGVSaWdodCIsImRhdGVMZWZ0U3RhcnRPZkRheSIsImRhdGVSaWdodFN0YXJ0T2ZEYXkiLCJuZXdUb2RvRm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvZG9zQ29udGFpbmVyIiwiZWRpdFRvZG9Db250YWluZXIiLCJjb250ZW50IiwiY2xvc2VOZXdUb2RvRm9ybSIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwiZWxlIiwidHlwZSIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwIiwiY2xvc2VUb2RvRm9ybSIsImNsb3NlRWRpdFRvZG8iLCJpbm5lckhUTUwiLCJsb2FkVG9kYXkiLCJ0b2RvcyIsImZpbHRlciIsInRvZG8iLCJsb2ciLCJub3ciLCJpc1RvZGF5IiwiZHVlRGF0ZSIsImxvYWRQcm9qZWN0c1BhZ2UiLCJwcm9qZWN0TmFtZXMiLCJtYXAiLCJwcm9qZWN0IiwiU2V0IiwidG9kb3NXaXRoU2FtZVByb2plY3QiLCJwcm9qZWN0Q29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsInByb2plY3RUaXRsZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJwcm9qZWN0VG9kbyIsInRpdGxlIiwiY2xlYXJTY3JlZW4iLCJvcGVuTmV3VG9kb0Zvcm0iLCJyZW1vdmUiLCJsb2FkSG9tZSIsImluZGV4Iiwib3BlbkVkaXRUb2RvIiwiZGVzY3JpcHRpb24iLCJwcmlvcml0eSIsImJpbmRFdmVudCIsImUiLCJldmVudENsYXNzIiwidGFyZ2V0IiwiYWRkVG9kbyIsIlVJIiwicGFyZW50Tm9kZSIsImRhdGFzZXQiLCJpZCIsImRlbGV0ZVRvZG8iLCJlZGl0VG9kbyIsImNhbmNlbEVkaXRUb2RvIiwiZWRpdFRpdGxlSW5wdXQiLCJlZGl0RGVzY3JpcHRpb25JbnB1dCIsImVkaXREdWVEYXRlSW5wdXQiLCJlZGl0UHJpb3JpdHlJbnB1dCIsImVkaXRQcm9qZWN0SW5wdXQiLCJzYXZlRWRpdFRvZG8iLCJUb2RvIiwidGhpcyIsInVwZGF0ZVRvZG8iLCJuZXdUaXRsZSIsIm5ld0Rlc2NyaXB0aW9uIiwibmV3RHVlRGF0ZSIsIm5ld1ByaW9yaXR5IiwibmV3UHJvamVjdCIsIm5ld0Jvb2tCdG4iLCJ0aXRsZUlucHV0IiwiZGVzY3JpcHRpb25JbnB1dCIsImR1ZWRhdGVJbnB1dCIsInByaW9yaXR5SW5wdXQiLCJwcm9qZWN0SW5wdXQiLCJuYXZQcm9qZWN0cyIsIm5hdkhvbWUiLCJuYXZUb2RheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdW1teVRvZG8xIiwiZHVtbXlUb2RvMiIsImR1bW15VG9kbzMiLCJkdW1teVRvZG80IiwicHVzaCIsImluaXQiLCJhbGVydCIsIm5ld1RvZG8iLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9