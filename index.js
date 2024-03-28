function play()
            {
                document.getElementById("first_page").style.display = "none";
                document.getElementById("second_page").style.display = "flex";
            }
            function playGame(playerChoice) {
                const computerChoice = generateComputerChoice();

                document.getElementById("result").innerHTML = "";

                document.querySelector("#myButton1").setAttribute("disabled", "disabled");
                document.querySelector("#myButton2").setAttribute("disabled", "disabled");
                document.querySelector("#myButton3").setAttribute("disabled", "disabled");
                
                document.getElementById("player_pic").style.animationName = "randomizer";
                document.getElementById("computer_pic").style.animationName = "randomizer";
            
                const result = determineWinner(playerChoice, computerChoice);

                //this is responsible for the picture you see when everytime you click the any button
                if(playerChoice === 'rock') document.getElementById("player_pic").style.backgroundImage = "url('rock.jpg')";
                else if(playerChoice === 'paper') document.getElementById("player_pic").style.backgroundImage = "url('paper.jpg')";
                else if(playerChoice === 'scissors')document.getElementById("player_pic").style.backgroundImage = "url('scissor.jpg')";

                if(computerChoice == 'rock') document.getElementById("computer_pic").style.backgroundImage = "url('computer_rock.jpg')";
                else if(computerChoice == 'paper') document.getElementById("computer_pic").style.backgroundImage = "url('computer_paper.jpg')";
                else if(computerChoice == 'scissors')document.getElementById("computer_pic").style.backgroundImage = "url('computer_scissor.jpg')";
            

                setTimeout(function() {
                document.getElementById("player_pic").style.animationName = "off";
                document.getElementById("computer_pic").style.animationName = "off";
                document.querySelector("#myButton1").removeAttribute("disabled");
                document.querySelector("#myButton2").removeAttribute("disabled");
                document.querySelector("#myButton3").removeAttribute("disabled");
                displayResult(result, playerChoice, computerChoice);
                }, 1000);
            }
            
            
                
            

            function getRandomIntInclusive(min, max) {
                const minCeiled = Math.ceil(min);
                const maxFloored = Math.floor(max);
                return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
            }

            function generateComputerChoice() {
                //this is array

                //the value of the variable choices[0] is 'rock'
                //the value of the variable choices[1] is 'paper'
                //the value of the variable choices[2] is 'scissors'
                //                 0        1         2
                const choices = ['rock', 'paper', 'scissors'];
                const randomIndex = Math.floor(Math.random() * choices.length);
                return choices[randomIndex];
            }
            
            function determineWinner(playerChoice, computerChoice) {
                if (playerChoice === computerChoice) {
                    return "It's a tie!";
                } else if (
                    (playerChoice === 'rock' && computerChoice === 'scissors') ||
                    (playerChoice === 'paper' && computerChoice === 'rock') ||
                    (playerChoice === 'scissors' && computerChoice === 'paper')
                ) {
                    return "You win!";
                } else {
                    return "Computer wins!";
                }
            }
            
            function displayResult(result, playerChoice, computerChoice) {
                const resultElement = document.getElementById("result");
                resultElement.innerHTML = result;
            }