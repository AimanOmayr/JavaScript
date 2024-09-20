// document.getElementById('signupForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value

//     document.getElementById('displayName').textContent = name;
//     document.getElementById('displayEmail').textContent = email;
//     document.getElementById('displayPassword').textContent = password;

//     document.getElementById('displayData').classList.remove('hidden');

//     document.getElementById('signupForm').reset();

// })

// Question 2

document.getElementById('readMore').addEventListener('click', function () {
    let fullDescription = document.getElementById('fullDescription');
    if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
        fullDescription.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        fullDescription.style.display = 'none';
        this.textContent = 'Read More';
    }
})
document.getElementById('readMore').addEventListener('click', function () {
    let menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        menu.style.display = 'none';
        this.textContent = 'Read More';
    }
})

    // Question 3

    document.getElementById("studentForm").addEventListener('submit', function (e) {
            e.preventDefault()
            var name1 = document.getElementById("name1").value
            var age = document.getElementById("age").value
            var className = document.getElementById("class").value
        
            var table = document.getElementById("studentTable").querySelector("tbody")
            var newTr = table.insertRow();
        
            var td1 = newTr.insertCell(0)
            var td2 = newTr.insertCell(1)
            var td3 = newTr.insertCell(2)
            var td4 = newTr.insertCell(3)
        
            td1.innerHTML = name1
            td2.innerHTML = age
            td3.innerHTML = className
            td4.innerHTML = `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`
        
            document.getElementById("studentForm").reset()
        })
        
        function deleteRow(button) {
            var tr = button.parentNode.parentNode
            tr.parentNode.removeChild(tr)
        }
        
        function editRow(button) {
            var tr = button.parentNode.parentNode
        
            var index = tr.rowIndex - 1
            var name1 = tr.cells[0].innerHTML
            var age = tr.cells[1].innerHTML
            var className = tr.cells[2].innerHTML
        
            document.getElementById("editIndex").value = index
            document.getElementById("editName").value = name
            document.getElementById("editAge").value = age
            document.getElementById("editClass").value = className
        
            document.getElementById("editFormContent").classList.remove("hidden")
        }
        document.getElementById("editForm").addEventListener("submit", function (e) {
            e.preventDefault()
        
            var index = document.getElementById("editIndex").value
            var name = document.getElementById("editName").value
            var age = document.getElementById("editAge").value
            var className = document.getElementById("editClass").value
        
            var table = document.getElementById("studentTable").querySelector("tbody")
            var tr = table.rows[index]
        
            tr.cells[0].innerHTML = name1
            tr.cells[1].innerHTML = age
            tr.cells[2].innerHTML = className
        
            document.getElementById("editFormContent").classList.add("hidden")
        })
        