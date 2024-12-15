$(document).ready(function() {
    // Función para actualizar el contador de tareas
    function updateTaskCount() {
        const count = $('#taskList li').length;
        $('#taskCount').text(count);
    }

    // Añadir nueva tarea
    $('#addTask').click(function() {
        const taskText = $('#taskInput').val().trim();
        if (taskText) {
            $('#taskList').append(`
                <li>${taskText}<button class="delete-btn">Eliminar</button></li>
            `);
            $('#taskInput').val('');
            updateTaskCount();
        }
    });

    // Permitir añadir tarea con Enter
    $('#taskInput').keypress(function(e) {
        if (e.which === 13) {
            $('#addTask').click();
        }
    });

    // Eliminar tarea
    $('#taskList').on('click', '.delete-btn', function() {
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
            updateTaskCount();
        });
    });

    // Resaltar tareas
    $('#highlightTasks').click(function() {
        $('#taskList li').toggleClass('highlighted');
    });

    // Marcar/Desmarcar tareas como completadas
    $('#toggleComplete').click(function() {
        $('#taskList li').toggleClass('completed');
    });

    // Marcar tarea individual como completada
    $('#taskList').on('click', 'li', function(e) {
        if (!$(e.target).hasClass('delete-btn')) {
            $(this).toggleClass('completed');
        }
    });
});
