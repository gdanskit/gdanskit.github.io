window.onload = () => {
    setTimeout(() => {
        const playSound = () => {
            const audio = new Audio('https://gdanskit.github.io/bells.wav');
            for (let i = 0; i >3; i++) {
            audio.play();
            }
        }

        
        const createBtn = document.querySelector('#create_link');
        const assigneColumn = document.querySelector('.headerrow-assignee');
        const dontDisplayAssignee = false;
        let reloadTime = 30000;
        const dashboard = document.getElementById('dashboard-content');


        createBtn.addEventListener('click', () => {
            clearInterval(reloadInterval);

            setTimeout(() => {
                const cancelLink = document.querySelector('a.cancel');
                const createTaskBtn = document.querySelector('#create-issue-submit');

                createTaskBtn.addEventListener('click', () => {
                    reloadInterval = setInterval(() => window.location.reload(), reloadTime);
                });

                cancelLink.addEventListener('click', () => {
                    reloadInterval = setInterval(() => window.location.reload(), reloadTime);
                    console.log('cancel');
                });
            }, 3000)

        });

        const checkNewTasks = () => {

            const [...assignments] = document.querySelectorAll('td.assignee');

            const newTasks = [];

            for (const assignment of assignments) {
                if (assignment.textContent.trim() === 'Nie przypisano') {
                    newTasks.push(assignment);
                    playSound();
                }
                if (dontDisplayAssignee) {
                    assignment.style.display = 'none';
                    assigneColumn.style.display = 'none';
                }
            }
            if (newTasks.length > 0) {
                document.title = `(${newTasks.length}) ${document.title}`
            } else {
                return;
            };
        }

        const lastReloadTime = () => {
            const currentTime = new Date();
            const dateElement = document.createElement('p');
            dateElement.innerHTML = `Ostatnie odświeżenie: 
            ${currentTime.getDate() < 10 ? '0' + (currentTime.getDate()) : currentTime.getDate()}.${currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1}.${currentTime.getFullYear()}
            ${currentTime.getHours() < 10 ? '0' + (currentTime.getHours()) : currentTime.getHours()}:${currentTime.getMinutes() < 10 ? '0' + (currentTime.getMinutes()) : currentTime.getMinutes()}:${currentTime.getSeconds() < 10 ? '0' + (currentTime.getSeconds()) : currentTime.getSeconds()}`;
            dateElement.style.textAlign = 'center';
            dashboard.appendChild(dateElement);
        }

        checkNewTasks();
        lastReloadTime();

        const reloadInterval = setInterval(() => window.location.reload(), reloadTime);
    }, 500);
}
