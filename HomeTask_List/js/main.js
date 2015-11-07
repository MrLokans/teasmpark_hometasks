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
                // console.log(data);
            },
        });

        $.get("http://localhost:8080/users/Andrew", function() {
            alert("somthing");
        }).
            done(function(){
                alert(2);
            })
            .fail(function(e){
                console.log(e);
            });
        // todoList.append($('<li>'+todoInput.val() + '</li>'));
    });
});