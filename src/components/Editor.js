import React, { useEffect } from 'react'
import codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';

const Editor = () => {
   
  useEffect(()=>{
   
    async function init(){
         codemirror.fromTextArea(document.getElementById("realtimeEditor"), {
           mode : {name:'javascript', json: true},
           theme:'dracula',
           autoCloseTags : true,
           autoCloseBrackets: true,
           lineNumbers: true,
         });   
    }
    init()

  },[])

  return (
    <textarea id="realtimeEditor"></textarea>
  )

}

export default Editor;