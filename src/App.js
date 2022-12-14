import logo from './logo.svg';
import './App.css';
function App() {
   function Button(){
    let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
 "/"];

 let generated=document.getElementById("generated");
 let gen=document.getElementById("gen");
 let input=document.getElementById("set-length")
  let value=input.value;
  if(value===""){
    alert("Password Length cannot be empty")
  }else if(value>20){
    alert("The length cannot be greater then 20")
  }else{
    generated.textContent="";
    gen.textContent="";
    for(let i=0;i<value;i++){
     let RandomNumberOne=Math.floor(Math.random()*characters.length)
      generated.textContent+=characters[RandomNumberOne];
     console.log("The Generated text is:"+generated.textContent);
   
     let RandomNumberTwo=Math.floor(Math.random()*characters.length)
    
       gen.textContent+=characters[RandomNumberTwo]
  }
 
 }
 
   }
   function SetLength(){
    let myinput=document.getElementById('set-length')
    let length=myinput.value;
    if(length===""){
      alert("the length cannot be empty")
    }else if(length>20){
      alert("the password length cannot be grater then 20")
    }else{
      alert("The Password Length is set to "+length);
    }
   
   }
   
 
  
  return (
    <>
      <div className='container'>
        <div className='content'>
          <div className='headings'>
            <p className='p1'>Generate a</p>
            <p className='p2'>random Password</p>
            <div className='insecure'>
              <p>Never Use an insecure password again.</p>
            </div>
            <input  type="text"id="set-length"placeholder="Enter Password Length"/>
             <button onClick={SetLength} id="length_btn">Set length</button>
            <button onClick={Button} id="btn" className='btn'>Generate passwords</button>
            
            <div className='g'>
            
            <p  id="generated" className='generated'></p>
            <p id="gen"className='gen'></p>

            </div>
            
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
