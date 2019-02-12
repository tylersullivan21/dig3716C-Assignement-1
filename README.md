# dig3716C-Assignement-1
Assignment 1 for dig 3716C


Write a simple program that contains three parts. 

1)Ask the user to input a String;
2)Convert the String to “ROBOT Language”;
3)Write the String to the console window. 
The program will repeat until the user indicates that they want to exit.

Specifications:
Implementation:
General
The code should be indented to show parent/child relationships.
The server path for this assignment should be ~/public_html/dig3716c/assignment1
Your HTML page should be located in the root directory for this assignment and should be named page_index.html
The <title> of page_index.html should be “Assignment 1 – first_name last_name”.
All directories and filenames should contain no spaces or uppercase letters.
JavaScript
Your JavaScript should be written internal and loaded in the <head> of page_index.html, appearing between <script type=”text/javascript”></script> tags.
Functional Spec:
General
Global variables may be used in this assignment but use them only when necessary.
All user interaction with the script should happen through prompt() and the Firebug console window.
The program should run continuously until the user types “Exit” in “Program Main Menu”.
Program Main Menu
The program should start with the page displaying a message that prompt()s the user to enter either 1, 2, 3, or “Exit”.
The following steps dictate what will happen when the user enters a number in the prompt() described above
Program 1 – (User enters 1 in the Main Menu to get here)
The program should prompt() the user to enter a String.
If the user doesn’t enter anything, the program should write “You need to enter something” into the console window and should prompt() them again to enter a String.
If the user enters a String, the program should return to “Program – Main Menu”.
Program 2 – (User enters 2 in the Main Menu to get here)
If the user has already entered a String in step “Program 1”, the program should convert the String into “ROBOT Language”, write “String converted” to the Firebug console window, and return to “Program – Main Menu”.
If the user hasn’t already entered a String in step “Program 1”, the program should write “You need to first enter a String” to the Firebug console window and return to “Program – Main Menu”.
Program 3 – (User enters 3 in the Main Menu to get here)
If a String has already been converted in step “Program 2”, the “ROBOT Language” version of the String should be written to the Firebug console window and the program should clear all Strings and return to “Program – Main Menu”.
If a String hasn’t already been converted in step “Program 2”, the program should write “You need to first convert your String” to the Firebug console window and return to “Program – Main Menu”.
Program Exit – (User enters “Exit” in the Main Menu to get here)
If the user enters “Exit” in the Main Menu, the program should write, “Thanks for using the ROBOT Language Converter!” to the Firebug console window and stop executing.
ROBOT Language Spec
ROBOT Language is a pattern based language as follows:
If a word is five or more letters long, add “-bork” to the end of the word
If a word is less than five letters long, add “-boink” to the end of the word
For example: “The quick brown fox” becomes “The-boink quick-bork brown-bork fox-boink"
Presentation
There are no presentation requirements for this assignment because all interaction will happen through prompt() and the Firebug console window.
Content
The <body> of the HTML page shouldn’t contain anything.
Delivery Method
Make sure your assignment root folder is located and accessible at:
