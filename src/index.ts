// string, boolean, number...
let x: number = 10

x = 25

console.log(x)

//-INFERENCIA 
let y = 12

//-ANNOTATION
let z: number = 12

//-TIPOS BASICOS
let firstName: string = "Ingrid"
let age: number = 18
const isAdmin: boolean = true 

//String != string

console.log( typeof firstName)

//-OBJECT
const myNumbers: number[] = [1, 2, 3]

console.log(myNumbers)
console.log(myNumbers.length)
//console.log(myNumbers.toUpperCase())
console.log(firstName.toUpperCase())

myNumbers.push(5)

console.log(myNumbers)

//-TUPLAS -> TUPLE
let myTuple: [number, string, string[]]

myTuple = [5, "teste", ["a", "b"]]

//myTuble = [true, false, true]

console.log(myTuple)

//-OBJECT LITERALS -> {PROP: VALUE}
const user: {name: string, age:number} = {
  name: "Ingrid",
  age: 18
}

console.log(user)
console.log(user.name)

//user.job = "Desenvolvedora"

//-ANY -> utilizado raramente, pois vai contra a 'filisofia' do typescript
let a:any = 0

a = "teste"
a = true
a = 2
a = []

//-UNION TYPE
let id: string | number = "10"

id = 200

// id = true
// id = []

//-TYPE ALIAS
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "00001"
const shirId: myIdType = 123

//-ENUM
//--tamanho roupas(size: Medio, size: Pequeno)
enum Size {
  P = "Pequeno",
  M = "Medio",
  G = "Grande"
}

const roupa = {
  name: "Jaqueta",
  size: Size.M
}

console.log(roupa)

//LITERAL TYPES
let teste: "autenticado" | null

//teste = "outro valor"
teste = "autenticado"
teste = null

//FUNCOES
function sum(a: number, b: number ) {
  return a + b
}

console.log(sum(12, 12))
//console.log(sum("12", true))

function sayHelloTo(name: string): string {
  return `Hello ${name}`
}

console.log(sayHelloTo("Ingrid"))

function logger(msg: string): void {
  console.log(msg)
}

logger("Teste!")

function greeting(name: string, greet?: string) {
  if(greet) {
    console.log(`Ola ${greet} ${name}`)
    return
  } 
    console.log(`Ola ${name}`)
}

greeting("Ingrid")
greeting("Pedro", "Sir")

//INTERFACES
interface MathFunctionsParams {
  n1: number,
  n2: number
}

function sumNumbers(nums: MathFunctionsParams) {
  return nums.n1 + nums.n2
}

console.log(sumNumbers({n1:1, n2:2}))

function multiplayNumbers(nums: MathFunctionsParams) {
  return nums.n1 * nums.n2
}

const someNumbers: MathFunctionsParams = {
  n1: 5,
  n2: 10
}

console.log(multiplayNumbers(someNumbers))