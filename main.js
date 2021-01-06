//GETTING STUFF
    //Get clear, decimal, delete buttons  
    let clearBtn = document.querySelector('.clear')
    let decimalBtn = document.querySelector('.decimal')
    let deleteBtn = document.querySelector('.delete')

    //Get display area
    let calcDisplay = document.querySelector('.operations-display')

    //Get number buttons
    let numberBtns = document.querySelectorAll('.number')

    //Get operation buttons
    let operatorBtns = document.querySelectorAll('.operation')

    //Default display values
    let displayVal = '0'
    let pendingVal
    let evaluationArray = [] 

//EVENT CLICK LISTENERS 
    //Number buttons 
    numberBtns.forEach(btn => {
        btn.addEventListener('click', updateDisplay)
    })

    //Operation buttons 
    operatorBtns.forEach(btn => {
        btn.addEventListener('click', performOperation)
    })

    //Clear button 
    clearBtn.addEventListener('click', clear)

    //Delete button 
    deleteBtn.addEventListener('click', backSpace)


    //Decimal button 
    decimalBtn.addEventListener('click', addDecimal)


//FUNCTIONS  

    //Update display function 
    function updateDisplay(obj){
        //Get the number from the button clicked
        let btnText = obj.target.innerHTML
        //Clear the display value so that it is an empty string
        if(displayVal === '0'){
            displayVal = ''
        }
        //Add the number that was clicked to display 
        displayVal += btnText 
        calcDisplay.innerHTML = displayVal
    }


    //Operations function
    function performOperation(obj){
        let operator = obj.target.innerHTML 
        switch(operator){
            case '+':
                //Set the current value to another variable
                pendingVal = displayVal
                //Reset the display value to zero 
                displayVal = '0'
                calcDisplay.innerHTML = displayVal
                //Push all numbers and operations into string array 
                evaluationArray.push(pendingVal)
                evaluationArray.push('+')
                break

            case '-':
                //Set the current value to another variable
                pendingVal = displayVal
                //Reset the display value to zero 
                displayVal = '0'
                calcDisplay.innerHTML = displayVal
                //Push all numbers and operations into string array 
                evaluationArray.push(pendingVal)
                evaluationArray.push('-')
                break

            case '÷':
                //Set the current value to another variable
                pendingVal = displayVal
                //Reset the display value to zero 
                displayVal = '0'
                calcDisplay.innerHTML = displayVal
                //Push all numbers and operations into string array 
                evaluationArray.push(pendingVal)
                evaluationArray.push('/')           
                break

            case '*':
                //Set the current value to another variable
                pendingVal = displayVal
                //Reset the display value to zero 
                displayVal = '0'
                calcDisplay.innerHTML = displayVal
                //Push all numbers and operations into string array 
                evaluationArray.push(pendingVal)
                evaluationArray.push('*')
                break

            case '=':
                //Push the last number entered into DOM to array 
                evaluationArray.push(displayVal)
                //Evaluate the array string
                let quickMaths = eval(evaluationArray.join(' '))
                //Make sure the display value is a string 
                displayVal = quickMaths + ''
                //Display the value into the DOM 
                calcDisplay.innerHTML = displayVal
                //Reset the array to be empty 
                evaluationArray = []
                break
            default: 
                break
        }
    }

    //Adding decimal function 
    function addDecimal(){
        //Only add decimal if display value doesn't already have one 
        if(!displayVal.includes('.')){
            //Add decimal point to value 
            displayVal+= '.'
            //Update it in the DOM 
            calcDisplay.innerHTML = displayVal 
        }
    }

    //Deleting numbers function 
    function backSpace(){
        let displayValLength = displayVal.length
        displayVal = displayVal.slice(0, displayValLength -1)
        calcDisplay.innerHTML = displayVal 

        //Default to display 0 if empty string 
        if(displayVal == ''){
            calcDisplay.innerHTML = '0'
        }
    }


    //Clear function to reset values 
    function clear(){
        displayVal = '0'
        pendingVal = undefined 
        evaluationArray = []
        calcDisplay.innerHTML = displayVal 
    }



