---
title: Tic Tac Toe in Assembly
description: A deep dive into building a Tic Tac Toe game using 8086 Assembly Language, showcasing the elegance of low-level programming.

tags:
  - tic-tac-toe
  - assembly
  - emu8086

createdAt: 2025-01-05

related:
  - abrar ahmed
---


Tic Tac Toe is a timeless classic, and what better way to explore low-level programming than by implementing it in 8086 Assembly Language? In this blog post, we'll walk through the process of building a fully functional 3x3 Tic Tac Toe game.

🎮 Features

Interactive 3x3 Game BoardThe board dynamically updates with each move.

Seamless Player InteractionPlayers input positions (1-9) to mark their moves.

Smooth Alternating TurnsTurns switch between players automatically.

Real-Time UpdatesThe board is refreshed instantly after every move.

Victory & Draw Detection 🏆🤝The game identifies winners based on aligned marks and handles draws.

Input Validation 🚫Ensures players don't overwrite previous moves.

📝 How to Play

Start the Game: Run the assembly code in an 8086-compatible emulator like DOSBox or TASM.

Choose Your Move: Enter a number (1-9) to place your mark.

Alternate Turns: Watch the board update dynamically.

Win or Draw: The game detects a winner or a draw and displays a message accordingly.

💡 Tech Stack

Language: 8086 Assembly Language

Tools: DOSBox, TASM, or any compatible emulator

Example Execution

The game starts with an empty 3x3 board. Players take turns selecting a position, and the board updates in real-time.

Once a player wins or the board is full, the game announces the result.

Start coding your own Tic Tac Toe in Assembly today and explore the magic of low-level programming! 🚀

👉 <a href="https://github.com/abrarahmd/TicTacToe-Assembly_Language" style="color:blue;">GitHub Repository</a>