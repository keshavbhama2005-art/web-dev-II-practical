        document.addEventListener('DOMContentLoaded', () => {
            const fetchBtn = document.getElementById('fetch-btn');
            const resultDiv = document.getElementById('result');

            fetchBtn.addEventListener('click', () => {
                fetch('https://jsonplaceholder.typicode.com/posts/1')
                    .then(response => response.json())
                    .then(data => {
                        resultDiv.textContent = JSON.stringify(data, null, 2);
                    })
                    .catch(error => {
                        resultDiv.textContent = 'Error fetching data: ' + error;
                    });
            });
        });