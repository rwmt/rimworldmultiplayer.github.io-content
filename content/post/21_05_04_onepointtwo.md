+++
title = "Update 0.5.3.0 | Patch for Rimworld 1.2"
author = "Swept"
date = 2020-05-04
categories = [
	"Update"
]
reddit = ""
+++

Hello again! Sorry AGAIN for the almost year of radio silence. We haven't been slacking! I've just not found the need to update the website. Our releases and patch notes are on [Discord](https://discord.gg/8tsuYXjCfs), and they're mostly filled with bland fixes. Regardless i'm gonna list our entire 1.2 patch history here.

<!--more-->

Thanks to NotFood, Nebual, Sokyran, Mang, Zoey and all our testers for making this release possible!

## Patchnotes

- New: Optimization to SyncCalls, should speed up everything significantly
- New: Optimization to Thing Lister, caching is speed
- New: In Memory Saveload, more speedy autosaves
- New: Accurate FrameCount tracking, desyncing faster
- New: Chat remembers its shape
- New: /netinfo command for debugging network issues
- New: Data dumps in debug menu, for figuring out what does xxx Hash_Diff Count_Diff mean.
- New: Pause and autosave on desync, smooths out reconnecting
- New: TargetInfo and GlobalTargetInfo dictionary entries. for modders
- New: Dialog_NodeTree API
- New: Update to Harmony 2.0.0.4
- New: More Debug info on the top right corner.
- Fix: Travel supplies should show in Split Caravan
- Fix: Ukrainian and SimplifiedChinese languages are no longer misnamed
- Fix: Show warning when server is full
- Fix: Reloading equippables
- Fix: Ghost objects appearing on deconstruction or cancel, no more
- Fix: Abilities/Psycast method for triggering syncs, no more ability targeting triggering for everyone.
- Fix: Royal permit with no cooldown
- Fix: Portraits bugging out on saveload
- Fix: Dirty caches bugging out saves
- Fix: Cross OS issue (VFCore)
- Fix: Colors for the colorblind
- Fix: Update German and French translations
- Fix: Bestowing Ceremony
- Fix: God Mode toggle
- Fix: Smokepop pack and broad shield no longer desyncs
- Fix: SituationalThoughts throwing null sometimes
- Fix: Most debug tools that don't alter the map
- Fix: Less Debug info on the map, nobody understands those numbers, not even me.
- Change: Arbiter is only available for debug builds, desync tracking is good enough already
- Change: 'Save replay' to 'Save'
- Change: 'Convert to Singleplayer' lower in menu order; it now triggers a MP save first.
- Change: Save now defaults to 'Full' (slower save, faster/safer load), may as well for explicit saves
- Change: Support relative -savedatapath, handle Linux/Windows line endings, skip some additional client-only configs

The protocol version is now 19.

## Other notes

NotFood's [Multiplayer Compatibility](https://steamcommunity.com/sharedfiles/filedetails/?id=1629973374&searchtext=Multiplayer) mod, which provides patches for mods that don't have native Multiplayer support has been moved from NotFood's GitHub to the rwmt organization GitHub [here](https://github.com/rwmt/Multiplayer-Compatibility).

I've also been considering adding some small ads to this website to keep the lights on. I'm aware 99% of people have ad-blockers but I believe the tiny bit of generated revenue would pay for the domain renewals each year, since i've mostly been paying for them out of pocket.

This post is dated 05/04/21 but was written 07/26/21.

Cheers.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
