@echo off
echo Do you want to continue?
pause
xcopy /s /y "files/VLSG" "%UserProfile%\Documents\VLSG\"
xcopy /s /y "files/Label" "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\VLSG\"