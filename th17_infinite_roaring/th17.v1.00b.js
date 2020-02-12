{
	"binhacks": {
		"Main/Roaring/Freeze Timer#1-1": {
			"addr": "0x40EE79",
			"code": "E9 4EB00800"
		},
		"Main/Roaring/Freeze Timer#1-2": {
			"addr": "0x499ECC",
			"code": "A3 08594B00",
			"comment": "Save current status."
		},		
		"Main/Roaring/Freeze Timer#1-3": {
			"addr": "0x499ED1",
			"code": "A1 4CEA4A00"
		},
		"Main/Roaring/Freeze Timer#1-4": {
			"addr": "0x499ED6",
			"code": "E9 A34FF7FF"
		},
		"Main/Roaring/Freeze Timer#2-1": {
			"addr": "0x40EF1D",
			"code": "E9 B9AF0800 9090909090"
		},
		"Main/Roaring/Freeze Timer#2-2": {
			"addr": "0x499EDB",
			"code": "803D 08594B00 06",
			"comment": "Check saved status.(0x2: normal, 0x6: Press X, 0xE: Hit by bullet)"
		},
		"Main/Roaring/Freeze Timer#2-3": {
			"addr": "0x499EE2",
			"code": "74 09"
		},
		"Main/Roaring/Freeze Timer#2-4": {
			"addr": "0x499EE4",
			"code": "803D 08594B00 0E"
		},
		"Main/Roaring/Freeze Timer#2-5": {
			"addr": "0x499EEB",
			"code": "75 04"
		},
		"Main/Roaring/Freeze Timer#2-6": {
			"addr": "0x499EED",
			"code": "66 0FEFC0"
		},
		"Main/Roaring/Freeze Timer#2-7": {
			"addr": "0x499EF1",
			"code": "8B35 D0774B00"
		},
		"Main/Roaring/Freeze Timer#2-8": {
			"addr": "0x499EF7",
			"code": "E9 2B50F7FF"
		},
		"Main/Roaring/Doesn't decrease on shooting#1": {
			"addr": "0x411267",
			"code": "E9 4E8C0800"
		},
		"Main/Roaring/Doesn't decrease on shooting#2": {
			"addr": "0x499EBA",
			"code": "81F9 A45A4B00",
			"comment": "At roaring mode, ECX is 0x4B5AA4."
		},
		"Main/Roaring/Doesn't decrease on shooting#3": {
			"addr": "0x499EC0",
			"code": "74 05"
		},
		"Main/Roaring/Doesn't decrease on shooting#4": {
			"addr": "0x499EC2",
			"code": "F3 0F1149 08"
		},
		"Main/Roaring/Doesn't decrease on shooting#5": {
			"addr": "0x499EC7",
			"code": "E9 A073F7FF"
		}
	}
}
