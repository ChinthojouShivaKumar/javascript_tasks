 //converting minutes in to seconds
        var minute = prompt("enter minutes to display seconds")

        function minutes(minute) {
        return minute*60
        }
        minutes(minute)

        console.log("the minutes"+minute+" as "+minutes(minute) + " in seconds")

// sum of numbers

        function sum(a,b) {
            return a+b
            
        }
        sum(2,3)
        console.log("the sum of given input is " +sum(2,3))

        // increment of numbers using input in functions

        var number1 = prompt("enter input")

        var number = parseInt(number1)
        function incrementNumber(number) {

            for (let i=number1; i<10; i++) {
            console.log(i)
            }
        }
        console.log(incrementNumber(number))

   // calculating age in days using input as years

     
        function ageInYears(){
            var ageInYear = prompt("enter person age in years to display output of your age in days")
            
           
            var days = ageInYear*365
            
            console.log("the age of "+ageInYear+" years person have in "+days+ " days.")

        }
        ageInYears()

    // voltage and current 

        var voltage = prompt("enter voltage volts")
        var current = prompt("enter current in amps")

        function power(voltage, current) {
            var power = voltage*current
            console.log("the units of power in"+voltage+"volts and "+ current+ " in amperes has"+ power +"volt-amp")
        }
        power(voltage,current)

//either one of condition is true

function checkBool(a,b) {
    if(a+b==10 || a==10|| b==10){
        console.log("true")
    }
    else{
        console.log("false")
    }
}   
checkBool(15)

// string something joined with space

var strName = "something"

function string(a){
    
    var a = a.toString()

    var b = a+" "+strName
    
    console.log(b)
}
string(42)

// finding true or false taking an argment as string

function strNames(a,b) {
    
    if(a=="shiva") {
        if(b="kumar"){
            console.log("true")
        }
        
    }
    else{
        console.log('false')
    }
}
strNames("shiva","kumar")

// reversing string case uppertolower and lowertoupper

var a = "Hello Birthday"

var a1 = a[0].toLowerCase()+(a.slice(1,6).toUpperCase())
var a2 = a[6].toLowerCase()+(a.slice(7,15).toUpperCase())

console.log(a1+a2)

//checking Datatype with input and using function with argument
var a = 100;
var b = "shiva"

function check(a){
console.log(typeof(a))
console.log(typeof(b))
}
check(a)

//finding greatest number using terinary operator

var a = 4
var b = 8
var c = 2

let greatest = (a>b)&&(a>c)?a:(b>c)?b:c;
console.log(greatest)

// finding vowels and their count
var a ="celebration"

var count=0

var str =''

for(let i=0;i<a.length;i++){
       let b = a[i]
       
        if(b=="a"||b=="e"||b=="i"||b=="o"||b=="u"){
             str+=b+' '
             count++
    }
}
alert(str+"are the vowels in "+a+" and the count of number of vowels are " +count)
