{
	"binhacks": {
		"hack1": {
			"addr": "0x0043DF06",
			"code": "E9 CFCD0400",
			"expected": "89 04 B5 38 58 4A 00",
			"title": "Jump to empty space."
		},
		"NOP": {
			"addr": "0x0043DF0B",
			"code": "90 90"
		},
		"hack2": {
			"addr": "0x0048ACDA",
			"code": "C704B5 38584A00 00000000",
			"title": "Move 0 instead of EAX to dword ptr ds:[esi*4+0x4A5838]"
		},
		"hack3": {
			"addr": "0x0048ACE5",
			"code": "E9 2332FBFF",
			"title": "Jump to the original code."
		}
	},
	"title": "th16_infinite_season"
}