//1.函数泛型
const getArrayGen = <T>(value: T, timers: number = 2): T[] => {
    return new Array(timers).fill(value);
}
// 使用的时候传入对应的数值类型即可
console.log(getArrayGen<number>(4))
console.log(getArrayGen<string>('qwe', 3))
console.log(getArrayGen<object>({ name: 'asan', sex: 'man' }, 1))

///2. 类型别名
type getArray2 = <T extends string>(arg: T, timers: number) => T[]
let getArr2: getArray2 = (arg: string, times: number) => {
    return new Array(times).fill(arg)
}
console.log(getArr2('12', 2));
///3. 使用接口定义泛型函数
interface IGetArray {
    <T>(arg: T, time: number): T[],
}
let getArr3: IGetArray = (arg: any, time: number) => {
    return new Array(time).fill(arg)
}
console.log(getArr3('12', 2));
interface IGenSetAll<T,K> {
    add(param: T, color: number): T[],
    update(id:K): K[]
}

class Gen<T,K> implements IGenSetAll<T,K>{
    constructor(){

    }
    add(param: T, color: number): T[] {
        throw new Error("Method not implemented.");
    }
    update(id: K): K[] {
        throw new Error("Method not implemented.");
    }

}
let user = new Gen()
user.add('123',3)

type Print = <T>(arg: T) => T
const printFn:Print = function logs(arg){
    return arg
}
printFn<string>('123')

//约束接口
interface API {
    '/book/detail': {
        id: number,
    },
    '/book/comment': {
        id: number
        comment: string
    }
}


function request<T extends keyof API>(url: T, obj: API[T]) {
    return '123'
}

request('/book/comment', {
    id: 1,
    comment: '非常棒！'
})