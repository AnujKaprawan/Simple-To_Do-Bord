function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  function drop(event, listId) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    const newList = document.getElementById(listId);
    newList.appendChild(draggedElement);
    draggedElement.setAttribute('contenteditable', 'true'); // Make the dropped note editable
  }

  function generateNote() {
    const note = document.createElement('div');
    note.className = 'note draggable';
    note.setAttribute('draggable', 'true');
    note.id = 'note-' + Math.random().toString(36).substr(2, 9);
    note.textContent = 'Sample Note';
    note.setAttribute('contenteditable', 'true'); // Make the generated note editable
    note.addEventListener('dragstart', drag);
    document.getElementById('todoList').appendChild(note);
  }