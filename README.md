# dive-book

modern dive log book, this website designed for divers, 
in this website you will can write details about your dives, details like : 
* location
* data
* temperature
* time
* water
* the type of gas 
* and more

** Build
strps to build a Docker image
  1. Clone this repo
     > git clone URL https://github.com/Eliorbasli/dive-book.git 
  2. open 2 terminals.
    from first move to backend directory 
     > cd ./backend 
    from secend move to forntnd directory
     > cd ./fronted  
    3. build in back folder with command : 
        > docker build -t my-express-app .  
       build in frontend folder with command: 
        > docker build -t react-image .
        
    4. run this command in backend folder: 
        > docker run --name express-container --rm -p 5000:5000 my-express-app
       run this command in fronted folder
        > docker run --name express-container --rm -p 3000:3000 my-express-app
    5. Once everythong has started, you should be able to access the webapp via http://localhost:3000 on your host machine
        

dive log book website available from any where

main page: 
![Capture11](https://user-images.githubusercontent.com/45131527/197389769-6a1b3077-72d3-4b99-9d1b-b88c78a01d29.PNG)


login page:
![Capture13](https://user-images.githubusercontent.com/45131527/197389748-6fb8c1d6-c1b1-4839-a619-d272745b827c.PNG)


register page :
![Capture12](https://user-images.githubusercontent.com/45131527/197389754-52ddf41b-49f1-4016-a0c6-3ddf9e26eb36.PNG)



