import React, {useEffect} from 'react'

let App=()=>{
  
  
  let out={
    width:'18em',
    height:'fitContent',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    margin:'10% auto',
    border:'1px solid black'
  }
  let inp={
    
    width:'85%',
    height:'3em',
    margin:'4px',
    backgroundColor:'white',
    borderRadius:'2px',
    color:'black',
    overflowX:'scroll',
    textAlign:'center',
    verticalAlign:'middle',
    padding:'1em auto',
    fontSize:'large'
  }
  let r={
    display:'flex',
    justifyContent:'spaceBetween'
  }
  let b={
    width:'5em',
    height:'4em',
    margin:'4px',
    fontWeight:'bold'
  }
 function col(){
  var l=Math.floor(Math.random() * 10);
  var c=["#fc8c03", "#fca503", "#fce703", "#d2fc03", "#62fc03", "#03fcfc", "#0388fc", "#fc030f", "#fc6203"];
  document.getElementById("bod").style.backgroundColor=c[l];
  document.getElementById("hd").style.color=c[l];
 }
 let o={
height:"2em",
width:'100%',
backgroundColor:'black',
color:'white',
padding:'10px',
fontWeight:'bold'
 }
 useEffect(() => {

   return () => {
    
    var arr=document.querySelectorAll('button');
    
    for (let i = 0; i < arr.length; i++) {
      arr[i].addEventListener('click', function() {
        col();
        if(arr[i].value===''){       
          document.getElementById('in').value=arr[i].value;  
        }
        else if(arr[i].value==='='){
          document.getElementById('in').value= eval(document.getElementById('in').value);
        }
        else{
        
        document.getElementById('in').value+=arr[i].value;
        }   
      });
     }
  
     document.getElementById('in').addEventListener("keydown", function(event){
      col();
      if(event.key==='=' || event.key==='Enter'){
        document.getElementById('in').value=eval(document.getElementById('in').value);
        event.preventDefault();
      }
      
    })
    
   }
 }, [])
 
    return (
    <div>
      <div id="hd" style={o}>
      T-calculator
    </div>
   <div id="bod" style={out}>
    
    <div style={r}>
     
      <button style={b} type="button" value=''>C</button>
      <textarea id="in" style={inp}></textarea>
    </div> 
    <div style={r}>
    <button style={b} type="button" value='1'>1</button>
    <button style={b} type="button" value='2'>2</button>
    <button style={b} type="button" value='3'>3</button>
    <button style={b} type="button" value='/'>/</button>
    </div>
    <div style={r}>
    <button style={b} type="button" value='4'>4</button>
    <button style={b} type="button" value='5'>5</button>
    <button style={b} type="button" value='6'>6</button>
    <button style={b} type="button" value='-'>-</button>
    </div>
    <div style={r}>
    <button style={b} type="button" value='7'>7</button>
    <button style={b} type="button" value='8'>8</button>
    <button style={b} type="button" value='9'>9</button>
    <button style={b} type="button" value='+'>+</button>
    </div>
    <div style={r}>
    <button style={b} type="button" value='.'><strong>.</strong></button>
    <button style={b} type="button" value='0'>0</button>
    <button style={b} type="button" value='='>=</button>
    <button style={b} type="button" value='*'>*</button>
    </div>
   </div>
   </div>
  )
}
export default App