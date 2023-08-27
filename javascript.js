/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        .box{
            display: flex;
            justify-content: center;
        }
        .slider-container {
            position: relative;
            width: 320px;
            overflow: hidden;
            text-align: center;
        }
        #slider-image {
            max-width: 500px;
            height: 300px;
        }
        .prev-button,
        .next-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            cursor: pointer;
            font-size: 20px;
            transition: .4s;
        }
        .prev-button:hover, .next-button:hover{
            transition: .4s;
            background-color:  rgba(58, 57, 57, 0.5);
        }
        .prev-button {
            left: 0;
        }
        .next-button {
            right:0;
        }
        #slider-image {
            width: 250px; 
            height: auto;
        }   
    </style>
</head>
<body>
<div class="box">
    <div class="slider-container">
        <img id="slider-image" src="./imgs/1.jpg" alt="Imagen 1">
        <button class="prev-button"> < </button>
        <button class="next-button"> > </button>
</div> 
    </div>
    <script>
        $(document).ready(function() {
            var currentIndex = 0;
            var images = [
                "./imgs/1.jpg",
                "./imgs/re-kasaneru.jpg",
                "./imgs/1.jpg",
                "./imgs/re-kasaneru.jpg"
            ];

            $('.next-button').click(function() {
                currentIndex = (currentIndex + 1) % images.length;
                updateSlider();
            });

            $('.prev-button').click(function() {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateSlider();
            });

            function updateSlider() {
                var imageUrl = images[currentIndex];
                $('#slider-image').attr('src', imageUrl);
            }
        });
    </script>
</body>
</html>

*/