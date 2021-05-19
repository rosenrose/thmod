{
	"binhacks": {
		"Main/Roaring/Freeze Timer#1": {
			"addr": "0x40EE79",
			"code": "E9 4EB00800"
		},
		"Main/Roaring/Freeze Timer#2": {
			"addr": "0x499ECC",
			"code": "A3 08594B00 A1 4CEA4A00 E9 A34FF7FF",
			"comment": "Save current status."
		},		
		"Main/Roaring/Freeze Timer#3": {
			"addr": "0x40EF1D",
			"code": "E9 B9AF0800 9090909090"
		},
		"Main/Roaring/Freeze Timer#4": {
			"addr": "0x499EDB",
			"code": "803D 08594B00 06 74 09 803D 08594B00 0E 75 04 66 0FEFC0 8B35 D0774B00 E9 2B50F7FF",
			"comment": "Check saved status.(0x2: normal, 0x6: Press X, 0xE: Hit by bullet)"
		},
		"Main/Roaring/Doesn't decrease on shooting#1": {
			"addr": "0x411267",
			"code": "E9 4E8C0800"
		},
		"Main/Roaring/Doesn't decrease on shooting#2": {
			"addr": "0x499EBA",
			"code": "81F9 A45A4B00 74 05 F3 0F1149 08 E9 A073F7FF",
			"comment": "At roaring mode, ECX is 0x4B5AA4."
		}
	}
}
