## Application for running Diversity 2

This application (under construction) will be used to run study examining children's diversity-based reasoning.  

### Running the app for the first time: 
1) Download and install node.js onto your computer: https://nodejs.org/en/download/  
Either the Windows 64-bit Installer or the macOS installer, depending on your computer.
2) Download application onto your computer (or clone it onto your computer using `git clone`). In this example, I am assuming you save the folder to the Desktop.
3) Open the command prompt. Using the command prompt, get into the application folder by typing: `cd Desktop/diversity2-master` (or `cd Desktop/diversity2` if you cloned the application directly to your computer). 
4) Once inside the folder, enter these commands into the terminal one at a time:  

Windows:
```
npm install -g @angular/cli
npm install typescript@3.2.4
npm install
```
macOS:
```
sudo npm install -g @angular/cli     (you will be asked to enter your password in)
npm install typescript@3.2.4
npm install
```

When done with these steps, move to Step 2 of the following set of instructions.

### Running the app every time after: 
1) Open the command prompt. Using the command prompt, get into the application folder by typing: `cd Desktop/diversity2-master` (or `cd Desktop/diversity` if you cloned it directly to your computer).
2) Next, in the command prompt, type: `ng serve --prod --aot` 
3) Open Google Chrome. 
4) In Chrome, type: `localhost:4200`
5) Put Chrome into full screen mode (Fn + F11)
6) If using the surface gos, detach keyboard. Now kids are ready to play!! 


To restart the game (e.g., if kid walks away), double click “Start over” button on the bottom right of the screen. To export the data, double click “Export CSV” button on bottom left of screen. This file will need to be cleaned up a tad in R.
