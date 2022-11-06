+++
title = "Frequently Asked Questions"
date = "2021-06-03"
type = "about"
+++


&nbsp;

&nbsp;

&nbsp;

# Frequently Asked Questions

### Q: What version of RimWorld does the mod work with?
The latest steam workshop, discord and github downloads are compatible with the latest 1.3 and 1.4 versions.

### Q: Which RimWorld version should I be using?
You should always be using the latest version of rimworld as we do not check if newer updates of the mod works for older versions of rimworld.

### Q: Do we both need to have the DLC in order to use it?
Yes, EVERYTHING needs to be the same for it to work in multiplayer. So if you want to use the DLC you both need to have it enabled.

### Q: How can I contribute?

Check out our [Contributing Guidelines](https://github.com/rwmt/Multiplayer/blob/master/CONTRIBUTORS.md) and then check our documentation for more developer focused information on the mod. The best way to get in contact with fellow developers is on the #modders channel on our discord.

### Q: Where can I find documentation on the mod?

A: Detailed Documentation can be found on our [HackMD Wiki](https://hackmd.io/@rimworldmultiplayer/docs/).

### Q: Can I make a dedicated server?

A: No.

### Q: How do players connect?
Players can connect through Steam, LAN, or Direct. To use direct connect, portforward 30502 through UDP or use a vpn like Hamachi. If you do not know how to portforward, then there is a tutorial down below.

### Q: Is there PVP? Can I make a seperate faction?
Currently everyone is cooperatively playing exactly the same game, with same maps, in the same faction. You can however still create multiple colonies like in singleplayer.

### Q: Can mods be used in Multiplayer?
Yes, but not all mods will work in multiplayer. Check out the complete spreadsheet list [here](https://docs.google.com/spreadsheets/d/1jaDxV8F7bcz4E9zeIRmZGKuaX7d0kvWWq28aKckISaY/edit#gid=1144921800) or use the #mod-check channel in our [Discord](https://discord.gg/vsD6VbZhtu) to find compatible mods. Enabled mods and their settings/configs also need to be identical, this is done automatically in 1.1 but for 1.0 you manually need to do it. In the "Sharing config files" tab, paths to the config folder can be found along with a guide.

### Q: What do the numbers on the mod spreadsheet/website mean?
0 means untested, 1 means unplayable, 2 is major issues, 3 is minor issues, and 4 is no problems. You shold always aim to use mods marked as 4, the only exception to that are mods marked with 3 that have patched for them, which should be stated in the comments for it.

### Q: Can I change my ingame username?
Yes, your name can be changed under options -> mod settings -> Multiplayer - Show Settings.

### Q: Can I play singleplayer with the mod enabled?
Yes, this should not cause any problems even with a lot of other mods enabled, even if they are marked as incompatible. If you do encounter any please report them to us so it can be fixed.

### Q: What is the maximum amount of players that can be online?
There is no limit, but using a lot of seperate colonies will cripple your game in the long run due to performance issues.

### Q: What is a save replay?

A: A multiplayer save game. (These can not be loaded in singleplayer unless you convert them.

### Q: Why does simulating take so long?
Simulations takes place from the last autosave made, you can avoid simulation time completely by checking "Full Save" when you hit ESC and "Save Replay". The same applies to resyncing, so if the host forces an autosave before someone resyncs it will also speed up their simulation time.

### Q: What is the maximum amount of players that can be in a game?

A: We recommend 8 players max, but there is no hardcoded limit.

### Q: Can I donate or support the project in any way?
If you want to support contributors to the project there are links [on the about page](https://rimworldmultiplayer.com/about/).

### Q: How do I convert a Multiplayer game back to Singleplayer?
You can convert it back to singleplayer by pressing ESC and then the convert button. If you are using async-time it will sync all time up to the colony furthest in time. Currently converting your save can cause issues resulting in it breaking, so you should  currently avoid doing so.

### Q: How do I clean a dirty/corrupt core or game folder?
Sometimes by chance you just have weird or corrupt game files. This can cause you to not be able to connect or randomly desync. The best way to fix this is pretty much just reinstalling the game, this will not delete saves as they are stored in another place.
​
# Troubleshooting

### Q: Stuck on "Downloading"
If you get stuck on the downloading message it's usually due to the firewall blocking the connection. The best way to see if this is the case is to disable the firewall for both the hosting and connecting player. If this helps then re-enable the firewall and add rimworld as a exception ot the firewall. If you are using steam to conenct with you may also need to add steam/steam api as a exception to the firewall.

### Q: Game freezes
Try and disable pausing when it autosaves to see if that helps.

### Q: The connecting player is desyncing but the host is not
This is usually caused a bad connection between the host and player though it can also be caused having unsynced config files, different mod files or game files.

### Q: The host is desyncing, but the connecting player is not
This can be caused by a variety of reasons like the hosts game files being semi-corrupt, changing configs settings mid-game, ram or cpu usage running close to or hitting 100% or the fps going under the servers tick rate.

### Q: Both the host and the connecting player is desyncing
This is either due to performance issues on both players side or the use of incompatible mods.

### Q: Friend doesn't show up in the LAN tab
Unless you are actually connected the same router you will not be able to see someone under this tab. Hamachi is not LAN, it's a VPN.
​
### Q: Random or inconsistent Desyncs
Some desyncs can be fixed by converting the game back to SP and rehosting it again. This will not help with RNG related desyncs as these desyncs mean you are using a mod with unsynced RNG. Currently converting your save can cause it to break so it's not something you should be doing currently.

### Q: Desync Message
The desync messages pretty much just states that you desynced and not much else.

### Q: The host or player keeps getting way behind in ms
This is usually either due to using g-sync or free-sync or having lower fps than the server.
​
​​### Q: Random weird issues
If the issue is not on the #known-issues list then the best thing to do is either reinstall the game for all players or delete the folder named "data" in the games directory (again for all players) and verify the games integrity afterwards. If you are running mods disable them to see if that fixes the issue, but if you aren't or the issue persists then report it to us.



&nbsp;

&nbsp;

&nbsp;
