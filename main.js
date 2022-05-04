window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

    /* I added the form to use the id for new task form new task input and tasks */


	form.addEventListener('submit', (e) => {
		e.preventDefault();

         /* submit the form to stop it refresh the page */
		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');
         /* created a div element and included the classlist for task below */

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');
         

		task_el.appendChild(task_content_el);

         /* excute the task onto the page after submission */

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');
         /* the element will appear on the page after submission after entering on the 
         input text */

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
         
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';
      /*  added the edit button on the task element*/
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';
        

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
         /* added the text edit and delete on the actions element  */

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';
         /* at this point i can add as many task i want */

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});
         /* this code above is for the edit and delete, i used the if statement 
         on edit element with the inner text equal to edit i used lowercase to auto match
          and added log save so i can edit and save the inner text    */

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
             /*  i used task delete element and added list element and remoce the task element 
             on the page so i add edit and delete the inner text */
		});
	});
});