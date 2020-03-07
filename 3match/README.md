# 3 Match (Три в ряд)

## Для нормальной работы требуется:
[JQuery v3.3.1](3match/js/jquery.min.js) и [jCanvas v21.0.1](3match/js/jcanvas.min.js)

## Использование:
### 1) Если еще не подключили, то подключите JQuery и jCanvas
```html
<script src="https://astet-gag.github.io/blob/master/3match/js/jquery.min.js"></script>
<script src="https://astet-gag.github.io/blob/master/3match/js/jcanvas.min.js"></script>
```
### 2) Создайте "Холст" на котором будет отрисовываться игра
```html
<canvas id="3matchGameBox"></canvas>
```
### 3) После подключения вставьте данный код:
```html
<script src="https://astet-gag.github.io/blob/master/3match/js/main.js"></script>
<script>
      //var customSprites_3match = 'img/sprites.png';
      //var customTableSize_3match = [9,10];
      
      $('#3matchGameBox').on('3match_gameOver',function(){
        alert('Game Over');
      }).on('3match_updateScore',function(e,data){
        $('#3matchScore').text('Score: '+data.score);
      }).on('3match_updateCombo',function(e,combo){
        //
      }).on('3match_gameEnd',function(e,data){
        alert('Game Over\nYour Score: '+data.score);
      });
</script>
```

***Что мы имеем по итогу:***
```js
var customSprites_3match = 'img/sprites.png';
```
> Заменяем стандартный файл текстур на свой (Скачать для редактирования можно [ТУТ](3match/img/sprites.png))

```js
var customTableSize_3match = [9,10];
```
> Устанавливаем свои размеры игрового поля (по умолчанию 10х10)

```js
var customNumberOfTiles_3match = 5;
```
> Устанавливаем свое количество генерируемых цветов "плиток" (по умолчанию 7)

```js
$('#3matchGameBox').on('3match_gameOver',function(){
  //Закончились ходы, игра окончена
}).on('3match_updateScore',function(e,data){
  //Счет игрока обновился
}).on('3match_updateCombo',function(e,combo){
  //У игрока собралось больше 1 комбинации за 1 ход, количество очков за ход будет умножаться на сумму комбо
}).on('3match_gameEnd',function(e,data){
  //Игрок закончил игру
});
```
> Обрабатываем события в игре

***Передаваемые с событиями данные:***

`combo` - целое число

`data` - массив данных `['score':целое число]`
