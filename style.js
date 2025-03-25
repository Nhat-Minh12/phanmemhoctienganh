<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colorful English Learning</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(to right, #ffafbd, #ffc3a0);
            text-align: center;
            padding: 50px;
            color: #fff;
        }
        h1 {
            font-size: 3em;
            color: #4CAF50;
            text-shadow: 2px 2px #000;
        }
        h2 {
            margin-bottom: 20px;
            color: #333;
            text-shadow: 1px 1px #fff;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 10px;
            margin: 10px;
            cursor: pointer;
            font-size: 18px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        button:hover {
            background-color: #45a049;
            transform: scale(1.1);
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
        }
        .unit-buttons button {
            background: linear-gradient(145deg, #6dd5ed, #2193b0);
        }
        .unit-buttons button:hover {
            background: linear-gradient(145deg, #f6d365, #fda085);
        }
        img {
            width: 200px;
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            margin-bottom: 20px;
    phâ    }
        #start-btn i {
            margin-right: 8px;
        }
    </style>
</head>
<body>
    <h1>Welcome to English Learning!</h1>
    <p>Let’s learn English together with Global Success Grade 7!</p>
    <img src="https://cdn.pixabay.com/photo/2016/03/31/19/58/learn-1290631_1280.png" alt="Learning Image">
    <br>
    <button id="start-btn"><i class="fas fa-play"></i> Start Learning</button>
    <h2>Select a Unit</h2>
    <div class="unit-buttons">
        <button>Unit 7</button>
        <button>Unit 8</button>
        <button>Unit 9</button>
        <button>Unit 10</button>
    </div>
    <h2>Unit Quiz</h2>
    <script>
        document.getElementById('start-btn').addEventListener('click', () => {
            alert('Let’s start learning!');
        });

        const buttons = document.querySelectorAll('.unit-buttons button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                alert(`Starting ${button.textContent}!`);
            });
        });
    </script>
</body>
</html>
