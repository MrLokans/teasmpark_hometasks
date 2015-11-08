$(document).ready(function(){
    var todoInput = $("#new-todo");
    var todoBtn = $("#new-todo-btn");
    var todoList = $(".todos");

    var currentUser = "Anders";
    todoBtn.on("click", function(){
        var todoText = todoInput.val();
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/users/Andrew',
            data: {todoText: todoText},
            dataType: "json",
            success: function(data, textStatus){
                for(var i in data){
                    console.log(data[i]);
                }
            },
        });

        $.get("http://localhost:8080/users/Andrew", function(data) {
            console.log("I'm starting to process data " + data);
            // var tasks = $.parseJSON(data);
            console.log("tasks: " + tasks);
            todoList.empty();
            for (var i in tasks){
                console.log("GOT TASK: " + tasks[i]);
                todoList.append($('<li>'+ tasks[i] + '</li>'));
            }
            

        }).
            done(function(){
                console.log("GET done");
            })
            .fail(function(e){
                console.log("Some error occured " + e);
            });
    });
});