@echo off

copy /y "%UserProfile%\Documents\VLSG\Packs\*.*" "C:\Riot Games\VALORANT\live\ShooterGame\Content\Paks"

start "" "C:\Riot Games\Riot Client\RiotClientServices.exe" --launch-product=valorant --launch-patchline=live"