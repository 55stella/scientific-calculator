class Calculator{
     expression =''
     result =''
     equal =false
    
     clear(){
         this.expression = ''
         this.result =''


     }
     append(val ='', prepend =false,){
         if(prepend){
             if(this.expression[0]=== '-'){
                 this.expression =this.expression.slice(1)// removes the negative sign
                 
             }else{
                //  console.log(this.expression)
                 this.expression =`${val}${this.expression}`// adds the - value
                //  console.log(this.expression)
                //  console.log(val)// adds the negative sign
            
             }
             
         }else{
             if(this.equal && isNaN(val)){
                //  console.log(isNaN(val))
                //  console.log(this.equal)
                //  console.log(val)// if isNAN, it implies that 
                 this.expression =this.result + val// anytime equal to is active 
                 // value is not a number make expression value and result ie 50 +
                //  console.log(val)
                //  console.log(this.result)
                //  console.log(this.expression)
                 this.equal =false
             }else if(this.equal && !isNaN(val)){
                 console.log(this.equal)
                 console.log(!isNaN(val))
                console.log(val)
                 this.expression =val
                 this.equal =false// the equal to sign is very much active here so we need to deactivate it asap
                 
             }else{
                this.expression +=val
                // console.log(val)
                // console.log(this.expression)

             }

         }
         
     }

     delete(){
         this.expression =this.expression.slice(0,-1)
     }
     compute(){
         this.equal=true
         try{
             this.result=eval(this.expression)

         }catch(e){
              this.result ='Synthax Error'
         }
             
     }

    } 
    
    const calculator =new Calculator()// creates  calculator object.
    const numBtn =document.querySelectorAll('.numpad button')
    const display = document.querySelector('.screen')
    numBtn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            if(btn.innerText ==='='){
                calculator.compute()
                // calculator.result =eval(calculator.expression)
                display.innerText =calculator.result// there is no result without compute
                calculator.clear
            }else if(btn.innerText==='C'){
                calculator.clear()
                // calculator.expression =''
                // calculator.result =''
                display.innerText = ''
            }else if(btn.innerText ==='+/-'){
                calculator.append('-', true)
                display.innerHTML =calculator.expression// manipulating the dom to affect the current change in expression

            }else if(btn.innerText ==='x'){
                calculator.append('*')
                display.innerHTML =calculator.expression
            } else{
                calculator.append(btn.innerText)
                display.innerText = calculator.expression
            }

        })
    })


             
         
     
    
