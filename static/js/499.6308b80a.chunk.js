"use strict";(self.webpackChunkmy_social_site=self.webpackChunkmy_social_site||[]).push([[499],{7499:function(s,a,e){e.r(a),e.d(a,{default:function(){return D}});var t=e(2807),n={dialogs:"dialogs_dialogs__1loor",title:"dialogs_title__IjLUZ",chatlist:"dialogs_chatlist__Z0BUm",dialogwindow:"dialogs_dialogwindow__8cnUR",sendButton:"dialogs_sendButton__9wcx2"},i=(e(2791),"chat_item_chat_item__m-ufJ"),o=e(1087),l=e(184),c=function(s){return(0,l.jsx)("div",{className:i,children:(0,l.jsx)(o.OL,{to:"/Dialogs/"+s.chat_num,children:s.name})})},d="message_chat_message__q+is7",u=function(s){return(0,l.jsx)("div",{className:d,children:s.text})},r=e(3765),m=e(6139),_=e(704),g=e(5304),h=(0,_.Z)({form:"dialogAddMessageForm"})((function(s){return(0,l.jsxs)("form",{className:n.dialogwindow,onSubmit:s.handleSubmit,children:[(0,l.jsx)(m.Z,{component:r.g,name:"newMessageDataText",validate:[g.l,(0,g.D)(50)]}),(0,l.jsx)(m.Z,{component:"button",className:n.sendButton,children:"Send"})]})})),f=function(s){var a=s.usersData.map((function(s){return(0,l.jsx)(c,{name:s.name,chat_num:s.id},s.id)})),e=s.messagesData.map((function(s){return(0,l.jsx)(u,{text:s.message},s.id)}));return(0,l.jsxs)("div",{className:n.dialogs,children:[(0,l.jsxs)("div",{className:n.chatlist,children:[(0,l.jsx)("div",{className:n.title,children:"Dialogs"}),a]}),(0,l.jsxs)("div",{className:n.chat,children:[e,(0,l.jsx)(h,{onSubmit:function(a){s.addPostOnClick(a.newMessageDataText)}})]})]})},x=e(1103),j=e(7781),w=e(8687),D=(0,j.qC)((0,w.$j)((function(s){return{usersData:s.dialogs.usersData,messagesData:s.dialogs.messagesData}}),(function(s){return{addPostOnClick:function(a){s((0,t.k)(a))}}})),x.Z)(f)}}]);
//# sourceMappingURL=499.6308b80a.chunk.js.map