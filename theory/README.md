## Theory

```
const arr = [10,12,15,21];

for(var i = 0; i < arr.length; i++){
    setTimeout(function() {
        console.log(arr[i]>13?`Good: ${arr[i]}`: `Bad: ${arr[i]}`);
    }, 3000);
}
```

Переменная var i - глобальная область видимости, при вызове i равна 4.


```bash
# Result
Bad: undefined
Bad: undefined
Bad: undefined
Bad: undefined
```

### Вариант №1
```
const arr = [10,12,15,21];

for(let i = 0; i < arr.length; i++){
    setTimeout(function() {
        console.log(arr[i]>13?`Good: ${arr[i]}`: `Bad: ${arr[i]}`);
    }, 3000);
}
```
Переменная let i - блочная область видимости.

```bash
# Result
Bad: 10
Bad: 12
Good: 15
Good: 21
```

### Вариант №2
```
const arr = [10,12,15,21];

arr.forEach(item=>{
    setTimeout(()=>{
        console.log(item>13?`Good: ${item}`: `Bad: ${item}`);
    }, 3000);
});
```


```bash
# Result
Bad: 10
Bad: 12
Good: 15
Good: 21
```