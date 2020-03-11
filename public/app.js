const problems = document.querySelector('#problems');

//create element and render category
function renderProblem(doc){
    let li = document.createElement('li');
    let category = document.createElement('span');
    let description = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    category.textContent = doc.data().category;
    description.textContent = doc.data().description;

    li.appendChild(category);
    li.appendChild(description);

    problems.appendChild(li);
}

db.collection('problems').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderProblem(doc);
    })
}); //asycnh request