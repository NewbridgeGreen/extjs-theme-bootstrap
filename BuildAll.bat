@echo You must run "Start Command Prompt with Ruby" before you can run this .bat file
pause

cd shared
sencha app build

cd ..\app1
sencha app build

cd ..\app2
sencha app build

cd ..\app3
sencha app build

cd ..
pause