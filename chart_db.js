// [{"Name":"Alex","Queries":"25","Documents":"10"},{"Name":"Alex","Queries":"40","Documents":"20"},{"Name":"Marta","Queries":"120","Documents":"56"},{"Name":"Marta","Queries":"132","Documents":"60"}]

// 1 способ
var data; 
// Выгрузка данных из graph.php для графика
d3.json("graph.php").then(function(json) {
  data = json;

      var chart = c3.generate({
          bindto: '#chart', 
          data: {
            json: data,
            keys: {
              // x: 'Name', // it's possible to specify 'x' when category axis
              value: ['Queries', 'Documents']
            }
          },
          axis: {
            x: {
              // type: 'category'
            }
          }
      });
});

// 2 способ
// Вывод через jquery+ajax (больше подходит, когда отправляется запрос)
$(document).ready(function(){      

      var formData = new FormData(); 
 
      $.ajax({ //отправляем данные на сервер (AJAX)    
        type: "POST", //метод передачи запроса - POST
        url: "graph.php",        
        data: formData, //передаваемые данные - formData        
        contentType: false, // не устанавливать тип контента, т.к. используется FormData        
        processData: false, // не обрабатывать данные formData        
        cache: false, // отключить кэширование результатов в браузере        
        success: function(data){ //при успешном выполнении запроса          
          var $data =  JSON.parse(data); // разбираем строку JSON, полученную от сервера

          if ($data.length != 0) { 
              var chart2 = c3.generate({
                bindto: '#chart2', 
                data: {
                  json: $data,
                  keys: {
                    value: ['Queries']
                  }
                }
            });

          }
          else {
            $('#text').text("Не графика");            
          }
        },
        error: function (request) {
          console.log("Error");
        }        
      });
});

// 3 способ
var req_http = new XMLHttpRequest();
req_http.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
      var chart3 = c3.generate({
          bindto: '#chart3', 
          data: {
            json: myObj,
            keys: {
              value: ['Documents']
            }
          }
      });
  }
};
req_http.open("GET", "graph.php", true);
req_http.send();