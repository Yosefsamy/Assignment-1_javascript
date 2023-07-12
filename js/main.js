            //                        &   S  T  A  R  T  &                        //


                    // ~ p r o b l e m 1 ~ //

/* var number=Number(window.prompt("please enter number"));
 console.log(number); */

                    // ~ p r o b l e m 1 ~ //

                    // ~ p r o b l e m 2 ~ //

/* var number=Number(window.prompt("Please Enter Number"));

if(number%3==0 && number%4==0)
 {
    console.log("Yes");
 }

 else{
   console.log("No");
}  */

                    // ~ p r o b l e m 2 ~ //

                    // ~ p r o b l e m 3 ~ //

/* var number1=Number(window.prompt("Enter The First Number"));
var number2=Number(window.prompt("Enter The Second Number"));

if(number1>number2)
{
    console.log(number1);
}

else if(number2>number1)
{
    console.log(number2);
}

else if(number1==number2)
{
    console.log("Two Numbers Are Equal");
}

else
{
    console.log("Invalid Input");
} */

                    // ~ p r o b l e m 3 ~ //

                    // ~ p r o b l e m 4 ~ //

/* var number=Number(window.prompt("Enter The Number"));

if(number<0)
{
   console.log("negative");
}

else if(number>0)
{
   console.log("positive");
}

else if(number==0)
{
   console.log("Number Is Zero");
}

else
{
  console.log("Invalid Input");
} */

                    // ~ p r o b l e m 4 ~ //

                    // ~ p r o b l e m 5 ~ //

/* var number1=Number(window.prompt("Enter The First Number"));
var number2=Number(window.prompt("Enter The Second Number"));
var number3=Number(window.prompt("Enter The Third Number"));

if( (number1>number2) && (number1>number3) )
{
    console.log("Max element = ",number1);

    if(number2>number3)
    {
        console.log("Min element = ",number3);
    }

    else
    {
        console.log("Min element = ",number2);
    }
}

else if( (number2>number1) && (number2>number3) )
{
    console.log("Max element = ",number2);

    if(number1>number3)
    {
        console.log("Min element = ",number3);
    }

    else
    {
        console.log("Min element = ",number1);
    }
}

else{

    console.log("Max element = ",number3);

    if(number1>number2)
    {

        console.log("Min element = ",number2);
    }

    else
    {

        console.log("Min element = ",number1);
    }
} */

                    // ~ p r o b l e m 5 ~ //

                    // ~ p r o b l e m 6 ~ //

/* var number=Number(window.prompt("Enter The Number ,Please"));

if(number%2)    // ^ if( number % 2 == 1 )   Truthy values  ^
{
    console.log("odd");
}

else
{
    console.log("even");
} */

                    // ~ p r o b l e m 6 ~ //


                    // ~ p r o b l e m 8 ~ //

/* var word = window.prompt("Enter The Character");
if (
  word == "a" ||
  word == "A" ||
  word == "E" ||
  word == "e" ||
  word == "I" ||
  word == "i" ||
  word == "O" ||
  word == "o" ||
  word == "U" ||
  word == "u"
)

{
  console.log("vowel");
}

else {
  console.log("Consonant");
} */

                 // ~ p r o b l e m 8 ~ //


                 // ~ p r o b l e m 9 ~ //

/* var number=(window.prompt("Enter The Number ,Please"));

for(var i=1 ; i<=number ; i++)
{
    console.log(i);
} */

                  // ~ p r o b l e m 9 ~ //


                  // ~ p r o b l e m 10 ~ //

/* var number=(window.prompt("Enter The Number ,Please"));

for(var i=1 ; i<=12 ; i++)
{
    console.log(number*i);
} */

                 // ~ p r o b l e m 10 ~ //


                 // ~ p r o b l e m 11 ~ //

 /* var number=Number((window.prompt("Enter The Number ,Please")));

for(var i=1 ; i<number ; i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
} */

                 // ~ p r o b l e m 11 ~ //


                  // ~ p r o b l e m 12 ~ //

/* var number=Number(window.prompt("Enter The First Number"));
var power=Number(window.prompt("Enter The Second Number"));
var result=1;

for(var i=0 ; i<power ; i++)
{
    result*=number;
}

console.log(result); */

                  // ~ p r o b l e m 12 ~ //


                  // ~ p r o b l e m 12 ~ //

/* var subject ,sum=0;
for(var i=0 ; i<5 ; i++)
{
    subject=Number(window.prompt("Enter Marks of five subjects:"));
    sum+=subject;
}

console.log(sum)
var average=sum/5;
console.log(average);

var percentage= (sum/500) * 100;  // & Assume the actual total = 500  &
console.log(percentage); */

                  // ~ p r o b l e m 12 ~ //


                  // ~ p r o b l e m 13 ~ //

/* var month=Number(window.prompt("Month Number: "));

if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12  )
{
    console.log("Days in Month: 31");
}

else if(month==4 || month==6 || month==9 || month==11)
{
    console.log("Days in Month: 30");
}

else if(month==2)
{
    console.log("Days in Month: 28")
}

else
{
    console.log("Wrong Month Number")
} */

                  // ~ p r o b l e m 13 ~ //


                   // ~ p r o b l e m 14 ~ //

/* var subject, grade, sum=0;

for(var i=0 ; i<5 ; i++)
{
    subject=Number(window.prompt("Enter Marks of five subjects:"));
    sum+=subject;
}

var percentage= (sum/500) * 100;         // ? Assume the actual total = 500  ?

if(percentage >= 90)
{
    grade='A';
}

else if(percentage >= 80)
{
    grade='B';
}

else if(percentage >= 70)
{
    grade='C';
}

else if(percentage >= 60)
{
    grade='D';
}

else if(percentage >= 40)
{
    grade='E';
}

else
{
    grade='F'
}

console.log("Percentage >= " , percentage , ": Grade ", grade);  */

                     // ~ p r o b l e m 14 ~ //



     //  ********************************   Using Switch Case    *******************************

                    // ~ p r o b l e m 15 ~ //

/* var month=Number(window.prompt("Month Number: "));

switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Days in Month: 31");
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Days in Month: 30");
        break;

    case 2:
        console.log("Days in Month: 28");
        break;

    default :
        console.log("Wrong Month Number");

} */

                    // ~ p r o b l e m 15 ~ //


                    // ~ p r o b l e m 16 ~ //

/* var word=window.prompt("Enter The Character");

switch(word){
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
        console.log("vowel");
        break;



    default :
        console.log("Consonant");

}   */

                    // ~ p r o b l e m 16 ~ //


                    // ~ p r o b l e m 17 ~ //

/* var number1=Number(window.prompt("Enter First Number ,Please"));
var number2=Number(window.prompt("Enter Second Number ,Please"));
var condition = "wrong";
if(number1>number2)
{
    condition="true";
}

else if (number2>number1)
{
    condition="false";
}

else if (number1==number2)
{
    condition="equal";
}

switch (condition){
    case "true":
        console.log(number1);
        break;

    case "false":
        console.log(number2);
        break;

        case "equal":
        console.log("Two Numbers Are Equal");
        break;

    default:
        console.log("Invalid Input");

} */

// * Another Solution But I Think First Is Best  *

/* var number1=Number(window.prompt("Enter First Number ,Please"));
var number2=Number(window.prompt("Enter Second Number ,Please"));
var condition = false;
if(number1>number2)
{
    condition=true;
}

switch (condition){
    case true:
        console.log(number1);
        break;

    default:
        console.log(number2);
} */

// * Another Solution *

/* var number1=Number(window.prompt("Enter First Number ,Please"));
var number2=Number(window.prompt("Enter Second Number ,Please"));

switch (true) {
    case (number1>number2):
        console.log(number1);
        break;

    case (number2>number1):
        console.log(number2);
        break;

    case (number1==number2):
        console.log("Two Numbers Are Equal");
        break;

    default:
        console.log("Invalid Input");
}  */

                    // ~ p r o b l e m 17 ~ //


                    // ~ p r o b l e m 18 ~ //

/* var number=Number(window.prompt("Enter The Number ,Please"));

switch(true){
    case (number%2==0):
        console.log("even");
        break;

    default:
        console.log("odd")

}  */

// * Another Solution *

/* var number=Number(window.prompt("Enter The Number ,Please"));
var condition =false;    // ^    Boolean Value    ^

if(number%2==0){
    condition=true;     // ^    Boolean Value     ^
}

switch (condition){
    case true:
        console.log("even");
        break;

    default:
        console.log("odd")
} */

                    // ~ p r o b l e m 18 ~ //


                     // ~ p r o b l e m 19 ~ //

/* var number=Number(window.prompt("Enter The Number ,Please"));

switch(true){
    case (number>0):
        console.log("positive");
        break;

    case (number<0):
        console.log("negative");
        break;

    case (number==0):
        console.log("Number Is Zero");
        break;

    default:
        console.log("Invalid Input");

}  */

// * Another Solution *

/* var number=Number(window.prompt("Enter The Number ,Please"));
var condition ="negative";
if(number>0)
{
    condition="positive";
}

else if (number==0)
{
    condition="zero"
}

switch (condition){
    case "positive":
        console.log("positive");
        break;

    case "negative":
        console.log("negative");
        break;

    case "zero":
        console.log("Number Is Zero");
        break;

    default:
        console.log("Invalid Input");

}  */

                      // ~ p r o b l e m 19 ~ //


                      // ~ p r o b l e m 20 ~ //

/* var number1=Number(window.prompt("Enter First Number ,Please"));
var operator=window.prompt("Enter Arithmetic Operation , Please ( 1: + , 2: - , 3: * , 4: / , 5: % 6: Exit )")
var number2=Number(window.prompt("Enter Second Number ,Please"));

switch (operator){

    case '+':
    case '1':
        console.log(" the sum is : " , number1+number2);
        break;

    case '-':
    case '2':
        console.log(" the subtraction is : " , number1-number2);
        break;

    case '*':
    case '3':
        console.log(" the multiplication is : " , number1*number2);
        break;

    case '/':
    case '4':
            console.log(" the division is : " , number1/number2);
            break;

    case '%':
    case '5':
            console.log(" the remainder of the division is : " , number1%number2);
            break;
    case '6':
        break

    default:
        console.log("Wrong choice, try again");
}  */

                      // ~ p r o b l e m 20 ~ //


                //                        &   E     N     D  &                        //





